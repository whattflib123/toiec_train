'use strict';

// ── Constants ──────────────────────────────────────────────────────────────
const USERS = { 'pyc': 'pyc0321', 'felix': 'felix' };

// PART_LABELS and DIFFICULTY_LABELS are defined in questions.js

// ── Auth ───────────────────────────────────────────────────────────────────
function getCurrentUser() { return sessionStorage.getItem('toeic_user'); }

function doLogin(u, p) {
  if (USERS[u] && USERS[u] === p) { sessionStorage.setItem('toeic_user', u); return true; }
  return false;
}

function doLogout() {
  sessionStorage.removeItem('toeic_user');
  Object.assign(state, { view:'login', stats:{}, history:[], correct:new Set(), wrong:new Set() });
  render();
}

// ── Storage ────────────────────────────────────────────────────────────────
const _g = (k, fb) => { try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : fb; } catch { return fb; } };
const _s = (k, v) => localStorage.setItem(k, JSON.stringify(v));

function loadStats()   { const u=getCurrentUser(); return u?_g(`toeic_stats_${u}`,{}):{}; }
function saveStats()   { const u=getCurrentUser(); if(u) _s(`toeic_stats_${u}`,state.stats); }
function loadHistory() { const u=getCurrentUser(); return u?_g(`toeic_history_${u}`,[]):[]; }
function saveHistory() { const u=getCurrentUser(); if(u) _s(`toeic_history_${u}`,state.history); }
function loadCorrect() { const u=getCurrentUser(); return u?new Set(_g(`toeic_correct_${u}`,[])):new Set(); }
function saveCorrect() { const u=getCurrentUser(); if(u) _s(`toeic_correct_${u}`,[...state.correct]); }
function loadWrong()   { const u=getCurrentUser(); return u?new Set(_g(`toeic_wrong_${u}`,[])):new Set(); }
function saveWrong()   { const u=getCurrentUser(); if(u) _s(`toeic_wrong_${u}`,[...state.wrong]); }

function loadPracticeSession() { const u=getCurrentUser(); return u?_g(`toeic_practice_${u}`,null):null; }
function savePracticeSession() {
  const u=getCurrentUser(); if(!u) return;
  _s(`toeic_practice_${u}`,{ questionIds:state.questions.map(q=>q.id), currentIndex:state.currentIndex, savedAt:new Date().toISOString() });
}
function clearPracticeSession() { const u=getCurrentUser(); if(u) localStorage.removeItem(`toeic_practice_${u}`); }

function loadExamSession()  { const u=getCurrentUser(); return u?_g(`toeic_exam_${u}`,null):null; }
function saveExamSession()  {
  const u=getCurrentUser(); if(!u) return;
  _s(`toeic_exam_${u}`,{ questionIds:state.questions.map(q=>q.id), answers:state.answers, currentIndex:state.currentIndex, savedAt:new Date().toISOString() });
}
function clearExamSession() { const u=getCurrentUser(); if(u) localStorage.removeItem(`toeic_exam_${u}`); }

function getAnyUserSnapshot(username) {
  try {
    const stats   = _g(`toeic_stats_${username}`,{});
    const history = _g(`toeic_history_${username}`,[]);
    const correct = _g(`toeic_correct_${username}`,[]);
    const wrong   = _g(`toeic_wrong_${username}`,[]);
    const attempts = Object.values(stats).reduce((s,v)=>s+(v.attempts||0),0);
    return { stats, history, masteredCount:correct.length, wrongCount:wrong.length, attempts };
  } catch { return { stats:{}, history:[], masteredCount:0, wrongCount:0, attempts:0 }; }
}

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  view: 'login',
  questions: [],
  currentIndex: 0,
  answers: {},
  showResult: false,
  stats: {},
  history: [],
  correct: new Set(),
  wrong: new Set(),
};

// ── Shuffle & Priority ─────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i=arr.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}
function prioritize(qs) {
  return [...shuffle(qs.filter(q=>!state.correct.has(q.id))), ...shuffle(qs.filter(q=>state.correct.has(q.id)))];
}

// ── Question Builder ───────────────────────────────────────────────────────
let _qCache = null;
function buildAllQuestions() {
  if (_qCache) return _qCache;
  const all = [];
  ['part5','part6','part7'].forEach(part => {
    ['easy','medium','hard'].forEach(difficulty => {
      const bank = QUESTION_BANK[part]?.[difficulty];
      if (!bank) return;
      if (part==='part5') {
        bank.forEach(q => all.push({...q, part, difficulty}));
      } else if (part==='part6') {
        bank.forEach(passage => passage.questions.forEach(q =>
          all.push({...q, part, difficulty, passageId:passage.id, passage:passage.passage})));
      } else if (part==='part7') {
        bank.forEach(passage => passage.questions.forEach(q =>
          all.push({...q, part, difficulty, passageId:passage.id, passageData:passage})));
      }
    });
  });
  _qCache = all;
  return all;
}
function totalQ() { return buildAllQuestions().length; }

// ── Passage HTML helper ────────────────────────────────────────────────────
function passageHtml(q) {
  if (q.part==='part6' && q.passage) {
    return `<div class="passage-box"><div class="passage-label">📄 段落文章</div><pre class="passage-text">${q.passage}</pre></div>`;
  }
  if (q.part==='part7' && q.passageData) {
    const pd = q.passageData;
    if (pd.type==='single') return `<div class="passage-box"><div class="passage-label">📄 ${pd.title}</div><pre class="passage-text">${pd.passage}</pre></div>`;
    return `<div class="passage-box"><div class="passage-label">📄 ${pd.title} (多篇閱讀)</div>${pd.passages.map(p=>`<div class="sub-passage"><div class="sub-label">${p.label}</div><pre class="passage-text">${p.content}</pre></div>`).join('')}</div>`;
  }
  return '';
}

// ── Render Dispatcher ──────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'login':        app.innerHTML = renderLogin();       break;
    case 'home':         app.innerHTML = renderHome();        break;
    case 'practice':     app.innerHTML = renderPractice();    break;
    case 'exam':         app.innerHTML = renderExam();        break;
    case 'exam-results': app.innerHTML = renderExamResults(); break;
    case 'wrong-review': app.innerHTML = renderWrongReview(); break;
    case 'progress':     app.innerHTML = renderProgress();    break;
  }
  attachEvents();
}

// ── renderLogin ────────────────────────────────────────────────────────────
function renderLogin() {
  return `
  <div class="login-view">
    <div class="login-card">
      <div class="login-logo">🎯</div>
      <h1>TOEIC 閱讀練習平台</h1>
      <p class="login-sub">請登入以記錄你的學習進度</p>
      <div id="login-error" class="login-error" style="display:none">帳號或密碼錯誤，請再試一次</div>
      <div class="login-form">
        <div class="input-group">
          <label>帳號</label>
          <input type="text" id="login-username" placeholder="輸入帳號" autocomplete="username" />
        </div>
        <div class="input-group">
          <label>密碼</label>
          <input type="password" id="login-password" placeholder="輸入密碼" autocomplete="current-password" />
        </div>
        <button class="btn-login" data-action="do-login">登入</button>
      </div>
    </div>
  </div>`;
}

// ── renderHome ─────────────────────────────────────────────────────────────
function renderHome() {
  const user = getCurrentUser();
  const practiceSession = loadPracticeSession();
  const examSession = loadExamSession();

  let banners = '';
  if (practiceSession) {
    const idx = practiceSession.currentIndex || 0;
    const tot = (practiceSession.questionIds||[]).length;
    const d = new Date(practiceSession.savedAt);
    const ds = `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    banners += `<div class="resume-banner">
      <div class="resume-info">
        <div class="resume-title">📌 未完成的練習</div>
        <div class="resume-detail">已完成 ${idx} / ${tot} 題 · 儲存於 ${ds}</div>
      </div>
      <div class="resume-actions">
        <button class="btn-resume" data-action="resume-practice">繼續</button>
        <button class="btn-discard" data-action="discard-practice">放棄</button>
      </div>
    </div>`;
  }
  if (examSession) {
    const answered = Object.keys(examSession.answers||{}).length;
    const tot = (examSession.questionIds||[]).length;
    const d = new Date(examSession.savedAt);
    const ds = `${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    banners += `<div class="resume-banner resume-exam">
      <div class="resume-info">
        <div class="resume-title">📋 未完成的完整測驗</div>
        <div class="resume-detail">已作答 ${answered} / ${tot} 題 · 儲存於 ${ds}</div>
      </div>
      <div class="resume-actions">
        <button class="btn-resume" data-action="resume-exam">繼續</button>
        <button class="btn-discard" data-action="discard-exam">放棄</button>
      </div>
    </div>`;
  }

  const tq = totalQ();
  const mastered = state.correct.size;
  const wrongCnt = state.wrong.size;

  return `
  <div class="home-view">
    <div class="user-bar">
      <span class="user-greeting">👤 ${user}</span>
      <button class="btn-logout" data-action="logout">登出</button>
    </div>

    ${renderVersus()}

    ${banners}

    <div class="home-actions">
      <button class="btn-action btn-action-practice" data-action="start-practice">
        <span class="action-icon">📖</span>
        <span class="action-body">
          <span class="action-title">開始練習</span>
          <span class="action-desc">每題作答後立即看解釋，隨時可暫停繼續</span>
        </span>
        <span class="action-arrow">›</span>
      </button>
      <button class="btn-action btn-action-exam" data-action="start-exam">
        <span class="action-icon">📋</span>
        <span class="action-body">
          <span class="action-title">完整測驗</span>
          <span class="action-desc">混合所有題目，提交後才看答案與解釋</span>
        </span>
        <span class="action-arrow">›</span>
      </button>
      ${wrongCnt > 0 ? `
      <button class="btn-action btn-action-wrong" data-action="goto-wrong-review">
        <span class="action-icon">❌</span>
        <span class="action-body">
          <span class="action-title">我的錯題</span>
          <span class="action-desc">${wrongCnt} 題需要複習</span>
        </span>
        <span class="action-arrow">›</span>
      </button>` : ''}
    </div>

    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-num">${tq}</span>
        <span class="stat-label">題目總數</span>
      </div>
      <div class="stat-item">
        <span class="stat-num" style="color:var(--green)">${mastered}</span>
        <span class="stat-label">已掌握</span>
      </div>
      <div class="stat-item">
        <span class="stat-num" style="color:var(--red)">${wrongCnt}</span>
        <span class="stat-label">需複習</span>
      </div>
    </div>

    <div class="site-intro">
      <h3>關於這個平台</h3>
      <p>涵蓋 Part 5、Part 6、Part 7，共 <strong>${tq} 題</strong>，分初中高三個難度。智慧出題系統會將做對的題目排到後面，幫你集中練習弱點，目標 750+ 分。</p>
      <div class="intro-grid">
        <div class="intro-item"><div class="intro-icon">✏️</div><div><strong>Part 5 文法選填</strong><span>${['easy','medium','hard'].reduce((s,d)=>s+QUESTION_BANK.part5[d].length,0)} 題</span></div></div>
        <div class="intro-item"><div class="intro-icon">📝</div><div><strong>Part 6 段落選填</strong><span>${['easy','medium','hard'].reduce((s,d)=>s+QUESTION_BANK.part6[d].reduce((x,g)=>x+g.questions.length,0),0)} 題</span></div></div>
        <div class="intro-item"><div class="intro-icon">📖</div><div><strong>Part 7 閱讀理解</strong><span>${['easy','medium','hard'].reduce((s,d)=>s+QUESTION_BANK.part7[d].reduce((x,g)=>x+g.questions.length,0),0)} 題</span></div></div>
      </div>
    </div>

    <button class="btn-secondary" data-action="goto-progress" style="width:100%;margin-top:4px">📊 學習進度與歷史記錄</button>
  </div>`;
}

// ── renderVersus ───────────────────────────────────────────────────────────
function renderVersus() {
  const me = getCurrentUser();
  const others = Object.keys(USERS).filter(u=>u!==me);
  if (!others.length) return '';

  const mySnap = {
    masteredCount: state.correct.size,
    wrongCount: state.wrong.size,
    attempts: Object.values(state.stats).reduce((s,v)=>s+(v.attempts||0),0),
    history: state.history
  };

  return others.map(rival => {
    const rv = getAnyUserSnapshot(rival);
    const myLead = mySnap.masteredCount > rv.masteredCount;
    const rvLead = rv.masteredCount > mySnap.masteredCount;

    const row = (label, mv, rv2, hi=true) => {
      const mw = hi ? mv>rv2 : mv<rv2;
      const rw = hi ? rv2>mv : rv2<mv;
      return `<div class="vs-row">
        <span class="vs-val ${mw?'win':rw?'lose':''}">${mv}</span>
        <span class="vs-lbl">${label}</span>
        <span class="vs-val ${rw?'win':mw?'lose':''}">${rv2}</span>
      </div>`;
    };

    const recentHtml = (hist) => {
      if (!hist.length) return `<div class="vs-recent-item" style="color:var(--text-muted)">尚無記錄</div>`;
      return hist.slice(0,3).map(h => {
        const label = h.type==='exam'?'測驗':h.type==='practice'?'練習':(PART_LABELS[h.part]?.label||'練習');
        const c = h.pct>=80?'#27ae60':h.pct>=60?'#f39c12':'#e74c3c';
        return `<div class="vs-recent-item"><span>${label}</span><span style="color:${c};font-weight:700">${h.pct}%</span></div>`;
      }).join('');
    };

    return `<div class="versus-card">
      <div class="versus-head">
        <div class="vs-player ${myLead?'leading':''}">
          <div class="vs-name">👤 ${me}</div>
          <div class="vs-status">${myLead?'領先':rvLead?'落後':'平手'}</div>
        </div>
        <div class="vs-vs">VS</div>
        <div class="vs-player ${rvLead?'leading':''}">
          <div class="vs-name">👤 ${rival}</div>
          <div class="vs-status">${rvLead?'領先':myLead?'落後':'平手'}</div>
        </div>
      </div>
      <div class="vs-stats">
        ${row('已掌握題數', mySnap.masteredCount, rv.masteredCount)}
        ${row('需複習題數', mySnap.wrongCount, rv.wrongCount, false)}
        ${row('練習總次數', mySnap.attempts, rv.attempts)}
      </div>
      <div class="vs-recent">
        <div class="vs-recent-col">${recentHtml(mySnap.history)}</div>
        <div class="vs-divider"></div>
        <div class="vs-recent-col">${recentHtml(rv.history)}</div>
      </div>
    </div>`;
  }).join('');
}

// ── renderPractice ─────────────────────────────────────────────────────────
function renderPractice() {
  const q = state.questions[state.currentIndex];
  if (!q) {
    return `<div class="practice-view"><div class="practice-header">
      <button class="btn-back-sm" data-action="goto-home">← 回首頁</button>
    </div><div class="empty-state">🎉 所有題目已完成！繼續保持！</div></div>`;
  }

  const isLast = state.currentIndex >= state.questions.length - 1;
  const progress = Math.round((state.currentIndex / state.questions.length) * 100);
  const userAnswer = state.answers[q.id];
  const isCorrect = userAnswer === q.answer;

  const optionsHtml = q.options.map(opt => {
    const letter = opt.charAt(0);
    let cls = 'option-btn';
    if (state.showResult) {
      if (letter === q.answer) cls += ' opt-correct-show';
      else if (letter === userAnswer) cls += ' opt-wrong-show';
      else cls += ' opt-dim';
    } else {
      if (letter === userAnswer) cls += ' selected';
    }
    const attrs = state.showResult
      ? 'disabled'
      : `data-action="practice-answer" data-value="${letter}" data-qid="${q.id}"`;
    return `<button class="${cls}" ${attrs}>${opt}</button>`;
  }).join('');

  const resultHtml = state.showResult ? `
    <div class="practice-result ${isCorrect?'result-correct':'result-wrong'}">
      <div class="result-badge">${isCorrect?'✓ 正確！':'✗ 答錯了'}</div>
      ${!isCorrect ? `<div class="result-correct-ans">正確答案：${q.options.find(o=>o.charAt(0)===q.answer)||q.answer}</div>` : ''}
      <div class="result-explain">💡 ${q.explanation}</div>
      <button class="btn-next-q" data-action="practice-next">
        ${isLast ? '完成練習 ✓' : '下一題 →'}
      </button>
    </div>` : '';

  return `
  <div class="practice-view">
    <div class="practice-header">
      <button class="btn-back-sm" data-action="practice-exit">← 回首頁</button>
      <div class="practice-meta">
        <span class="part-tag">${PART_LABELS[q.part]?.label}</span>
        <span class="diff-tag ${q.difficulty}">${DIFFICULTY_LABELS[q.difficulty]?.label}</span>
      </div>
      <span class="practice-counter">${state.currentIndex+1}/${state.questions.length}</span>
    </div>

    <div class="progress-bar-wrap" style="margin-bottom:16px">
      <div class="progress-bar" style="width:${progress}%"></div>
    </div>

    <div class="practice-body">
      ${passageHtml(q)}
      <div class="question-area">
        <div class="q-number">Question ${state.currentIndex+1}</div>
        <div class="q-text">${q.text||q.question}</div>
        <div class="options-list">${optionsHtml}</div>
      </div>
      ${resultHtml}
    </div>
  </div>`;
}

// ── renderExam ─────────────────────────────────────────────────────────────
function renderExam() {
  const q = state.questions[state.currentIndex];
  if (!q) return '<div>載入中...</div>';

  const progress = Math.round((state.currentIndex / state.questions.length) * 100);
  const userAnswer = state.answers[q.id];
  const answeredCount = Object.keys(state.answers).length;

  return `
  <div class="quiz-view">
    <div class="quiz-header">
      <div class="quiz-meta">
        <span class="part-tag">${PART_LABELS[q.part]?.label}</span>
        <span class="diff-tag ${q.difficulty}">${DIFFICULTY_LABELS[q.difficulty]?.label}</span>
      </div>
      <button class="btn-save-exit" data-action="exam-exit">💾 暫存</button>
      <button class="btn-finish-early" data-action="finish-exam">提交 (${answeredCount}/${state.questions.length})</button>
    </div>

    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width:${progress}%"></div>
      <span class="progress-text">${state.currentIndex+1} / ${state.questions.length}</span>
    </div>

    <div class="quiz-body">
      ${passageHtml(q)}
      <div class="question-area">
        <div class="q-number">Question ${state.currentIndex+1}</div>
        <div class="q-text">${q.text||q.question}</div>
        <div class="options-list">
          ${q.options.map(opt => {
            const letter = opt.charAt(0);
            return `<button class="option-btn ${userAnswer===letter?'selected':''}"
              data-action="exam-answer" data-value="${letter}" data-qid="${q.id}">${opt}</button>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="quiz-footer">
      <button class="btn-nav" data-action="exam-prev" ${state.currentIndex===0?'disabled':''}>← 上一題</button>
      <div class="question-dots">
        ${state.questions.slice(0,80).map((_,i) => {
          const ans = state.answers[state.questions[i].id];
          const cls = i===state.currentIndex?'dot-current':ans?'dot-answered':'dot-empty';
          return `<span class="q-dot ${cls}" data-action="exam-jump" data-index="${i}"></span>`;
        }).join('')}
        ${state.questions.length>80?`<span class="dots-more">+${state.questions.length-80}</span>`:''}
      </div>
      <button class="btn-nav btn-next" data-action="exam-next">
        ${state.currentIndex===state.questions.length-1?'完成 ✓':'下一題 →'}
      </button>
    </div>
  </div>`;
}

// ── renderExamResults ──────────────────────────────────────────────────────
function renderExamResults() {
  let correct = 0;
  state.questions.forEach(q => { if (state.answers[q.id]===q.answer) correct++; });
  const total = state.questions.length;
  const pct = total>0 ? Math.round((correct/total)*100) : 0;

  let grade, gradeClass;
  if (pct>=90){grade='S';gradeClass='grade-s';}
  else if(pct>=80){grade='A';gradeClass='grade-a';}
  else if(pct>=70){grade='B';gradeClass='grade-b';}
  else if(pct>=60){grade='C';gradeClass='grade-c';}
  else{grade='F';gradeClass='grade-f';}

  const reviewHtml = state.questions.map((q,i) => {
    const ua = state.answers[q.id]||'未作答';
    const ok = ua===q.answer;
    return `<div class="review-item ${ok?'correct':'wrong'}">
      <div class="review-header">
        <span class="review-num">Q${i+1}</span>
        <span class="part-tag" style="font-size:11px">${PART_LABELS[q.part]?.label}</span>
        <span class="diff-tag ${q.difficulty}" style="font-size:11px">${DIFFICULTY_LABELS[q.difficulty]?.label}</span>
        <span class="review-result">${ok?'✓ 正確':'✗ 錯誤'}</span>
      </div>
      <div class="review-question">${q.text||q.question}</div>
      <div class="review-answers">
        ${q.options.map(opt=>{
          const l=opt.charAt(0);
          let cls='';
          if(l===q.answer) cls='opt-correct';
          else if(l===ua&&!ok) cls='opt-wrong';
          return `<div class="review-opt ${cls}">${l===ua?'▶ ':''}${opt}</div>`;
        }).join('')}
      </div>
      <div class="review-explain">💡 ${q.explanation}</div>
    </div>`;
  }).join('');

  return `
  <div class="results-view">
    <div class="results-hero">
      <div class="grade-circle ${gradeClass}">${grade}</div>
      <div class="score-big">${correct} / ${total}</div>
      <div class="pct-big">${pct}%</div>
    </div>
    <div class="results-actions">
      <button class="btn-primary" data-action="start-exam">🔄 重新測驗</button>
      <button class="btn-secondary" data-action="goto-home">🏠 回首頁</button>
    </div>
    <div class="review-section">
      <h3>📋 詳細解析</h3>
      ${reviewHtml}
    </div>
  </div>`;
}

// ── renderWrongReview ──────────────────────────────────────────────────────
function renderWrongReview() {
  const allQ = buildAllQuestions();
  const wrongQs = [...state.wrong].map(id=>allQ.find(q=>q.id===id)).filter(Boolean);

  if (!wrongQs.length) {
    return `<div class="wrong-review-view">
      <button class="btn-back" data-action="goto-home">← 返回首頁</button>
      <div class="empty-state">🎉 目前沒有錯題記錄！</div>
    </div>`;
  }

  const items = wrongQs.map((q,i) => {
    const qText = (q.text||q.question);
    const preview = qText.length>60 ? qText.substring(0,60)+'…' : qText;
    const psg = passageHtml(q);
    return `<div class="wrong-item">
      <div class="wrong-item-head" data-action="toggle-wrong" data-idx="${i}">
        <div class="wrong-item-meta">
          <span class="part-tag">${PART_LABELS[q.part]?.label}</span>
          <span class="diff-tag ${q.difficulty}">${DIFFICULTY_LABELS[q.difficulty]?.label}</span>
        </div>
        <div class="wrong-item-preview">${preview}</div>
        <span class="wrong-toggle" id="wtoggle-${i}">▼</span>
      </div>
      <div class="wrong-item-body" id="wbody-${i}" style="display:none">
        ${psg ? `<div style="margin-bottom:12px">${psg}</div>` : ''}
        <div class="wrong-full-q">${qText}</div>
        <div class="wrong-options">
          ${q.options.map(opt=>{
            const isCorr = opt.charAt(0)===q.answer;
            return `<div class="wrong-opt ${isCorr?'opt-correct':''}">${isCorr?'✓ ':''}${opt}</div>`;
          }).join('')}
        </div>
        <div class="review-explain">💡 ${q.explanation}</div>
      </div>
    </div>`;
  }).join('');

  return `
  <div class="wrong-review-view">
    <button class="btn-back" data-action="goto-home">← 返回首頁</button>
    <h2>❌ 我的錯題 (${wrongQs.length} 題)</h2>
    <p class="wrong-hint">點擊題目展開查看正確答案與解釋</p>
    <div class="wrong-list">${items}</div>
  </div>`;
}

// ── renderProgress ─────────────────────────────────────────────────────────
function renderProgress() {
  const histHtml = state.history.length===0
    ? '<p class="no-data">尚無練習記錄</p>'
    : `<div class="history-list">${state.history.map(h=>{
        const d=new Date(h.date);
        const ds=`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
        const c=h.pct>=80?'var(--green)':h.pct>=60?'var(--orange)':'var(--red)';
        const label=h.type==='exam'?'完整測驗':h.type==='practice'?'練習模式':(PART_LABELS[h.part]?.label||'練習');
        return `<div class="history-item">
          <span class="history-date">${ds}</span>
          <span class="history-part">${label} · ${h.correct||0}/${h.total||0}</span>
          <span class="history-score" style="color:${c}">${h.pct}%</span>
        </div>`;
      }).join('')}</div>`;

  return `
  <div class="progress-view">
    <button class="btn-back" data-action="goto-home">← 返回首頁</button>
    <h2>📊 ${getCurrentUser()} 的學習進度</h2>

    <div class="mastery-row">
      <div class="mastery-card" style="border-color:var(--green)">
        <span class="mastery-num" style="color:var(--green)">${state.correct.size}</span>
        <span class="mastery-lbl">已掌握</span>
      </div>
      <div class="mastery-card" style="border-color:var(--red)">
        <span class="mastery-num" style="color:var(--red)">${state.wrong.size}</span>
        <span class="mastery-lbl">需複習</span>
      </div>
      <div class="mastery-card" style="border-color:var(--navy)">
        <span class="mastery-num">${Object.values(state.stats).reduce((s,v)=>s+(v.attempts||0),0)}</span>
        <span class="mastery-lbl">總練習次數</span>
      </div>
    </div>

    <div class="progress-section">
      <h3 class="section-title">📅 練習歷史</h3>
      ${histHtml}
    </div>

    <div class="progress-tips">
      <h3>📚 學習建議</h3>
      <div class="tips-grid">
        <div class="tip-card"><strong>Part 5</strong><p>先判斷詞性，再看時態與語態，最後排除干擾選項。</p></div>
        <div class="tip-card"><strong>Part 6</strong><p>先讀完整段落，掌握語氣與時態後再填空。</p></div>
        <div class="tip-card"><strong>Part 7</strong><p>先看題目，再用關鍵字定位文章段落，不必逐字讀。</p></div>
      </div>
    </div>

    <button class="btn-danger" data-action="clear-stats">🗑️ 清除所有記錄</button>
  </div>`;
}

// ── Events ─────────────────────────────────────────────────────────────────
function attachEvents() {
  document.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', handleAction));
  const pwd = document.getElementById('login-password');
  if (pwd) { pwd.addEventListener('keydown', e=>{ if(e.key==='Enter') submitLogin(); }); pwd.focus(); }
  const usr = document.getElementById('login-username');
  if (usr) usr.addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('login-password')?.focus(); });
}

function submitLogin() {
  const u = document.getElementById('login-username')?.value.trim()||'';
  const p = document.getElementById('login-password')?.value||'';
  if (doLogin(u,p)) {
    state.stats=loadStats(); state.history=loadHistory(); state.correct=loadCorrect(); state.wrong=loadWrong();
    state.view='home'; render();
  } else {
    const err=document.getElementById('login-error'); if(err) err.style.display='block';
  }
}

function handleAction(e) {
  const el = e.currentTarget;
  const { action, value, qid, index, idx } = el.dataset;

  switch (action) {
    case 'do-login': submitLogin(); break;
    case 'logout': if(confirm('確定要登出嗎？')) doLogout(); break;
    case 'goto-home': state.view='home'; render(); break;
    case 'goto-progress': state.view='progress'; render(); break;
    case 'goto-wrong-review': state.view='wrong-review'; render(); break;

    case 'start-practice': startPractice(false); break;
    case 'resume-practice': startPractice(true); break;
    case 'discard-practice':
      if(confirm('確定放棄未完成的練習？')) { clearPracticeSession(); render(); }
      break;

    case 'start-exam': startExam(false); break;
    case 'resume-exam': startExam(true); break;
    case 'discard-exam':
      if(confirm('確定放棄未完成的測驗？')) { clearExamSession(); render(); }
      break;

    case 'practice-answer': {
      if (state.showResult) break;
      const q = state.questions[state.currentIndex];
      state.answers[qid] = value;
      if (value===q.answer) { state.correct.add(q.id); state.wrong.delete(q.id); }
      else { state.wrong.add(q.id); state.correct.delete(q.id); }
      saveCorrect(); saveWrong();
      state.showResult = true;
      render();
      break;
    }

    case 'practice-next': {
      const isLast = state.currentIndex >= state.questions.length-1;
      if (isLast) { finishPractice(); }
      else { state.currentIndex++; state.showResult=false; savePracticeSession(); render(); window.scrollTo(0,0); }
      break;
    }

    case 'practice-exit':
      savePracticeSession(); state.view='home'; render();
      break;

    case 'exam-answer':
      state.answers[qid]=value; saveExamSession(); render();
      break;

    case 'exam-prev':
      if(state.currentIndex>0){state.currentIndex--;render();window.scrollTo(0,0);}
      break;

    case 'exam-next':
      if(state.currentIndex<state.questions.length-1){state.currentIndex++;render();window.scrollTo(0,0);}
      else finishExam();
      break;

    case 'exam-jump':
      state.currentIndex=parseInt(index);render();window.scrollTo(0,0);
      break;

    case 'exam-exit':
      saveExamSession(); state.view='home'; render();
      break;

    case 'finish-exam': {
      const ans = Object.keys(state.answers).length;
      if(confirm(`已作答 ${ans}/${state.questions.length} 題，確定提交？`)) finishExam();
      break;
    }

    case 'toggle-wrong': {
      const body = document.getElementById(`wbody-${idx}`);
      const tog  = document.getElementById(`wtoggle-${idx}`);
      if (body) { const open=body.style.display!=='none'; body.style.display=open?'none':'block'; if(tog) tog.textContent=open?'▼':'▲'; }
      break;
    }

    case 'clear-stats':
      if(confirm('確定清除所有記錄？此操作無法復原。')) {
        state.stats={}; state.history=[]; state.correct=new Set(); state.wrong=new Set();
        saveStats(); saveHistory(); saveCorrect(); saveWrong();
        clearPracticeSession(); clearExamSession();
        render();
      }
      break;
  }
}

// ── Game Logic ─────────────────────────────────────────────────────────────
function startPractice(resume) {
  state.showResult = false;
  state.answers = {};
  if (resume) {
    const sess = loadPracticeSession();
    if (sess) {
      const qMap = Object.fromEntries(buildAllQuestions().map(q=>[q.id,q]));
      state.questions = (sess.questionIds||[]).map(id=>qMap[id]).filter(Boolean);
      state.currentIndex = Math.min(sess.currentIndex||0, state.questions.length-1);
      state.view='practice'; render(); return;
    }
  }
  state.questions = prioritize(buildAllQuestions());
  state.currentIndex = 0;
  savePracticeSession();
  state.view='practice'; render(); window.scrollTo(0,0);
}

function finishPractice() {
  clearPracticeSession();
  let correct=0, total=0;
  Object.entries(state.answers).forEach(([id,ans]) => {
    const q = state.questions.find(q=>q.id===id);
    if (q) { total++; if(ans===q.answer) correct++; }
  });
  const pct = total>0 ? Math.round((correct/total)*100) : 0;
  state.history.unshift({ date:new Date().toISOString(), type:'practice', correct, total, pct });
  if (state.history.length>200) state.history.pop();
  saveHistory();
  state.view='home'; render(); window.scrollTo(0,0);
}

function startExam(resume) {
  state.answers = {};
  if (resume) {
    const sess = loadExamSession();
    if (sess) {
      const qMap = Object.fromEntries(buildAllQuestions().map(q=>[q.id,q]));
      state.questions = (sess.questionIds||[]).map(id=>qMap[id]).filter(Boolean);
      state.answers = sess.answers||{};
      state.currentIndex = Math.min(sess.currentIndex||0, state.questions.length-1);
      state.view='exam'; render(); return;
    }
  }
  state.questions = prioritize(buildAllQuestions());
  state.currentIndex = 0;
  saveExamSession();
  state.view='exam'; render(); window.scrollTo(0,0);
}

function finishExam() {
  clearExamSession();
  let correct=0;
  state.questions.forEach(q => {
    const ua = state.answers[q.id];
    if (ua===q.answer){ correct++; state.correct.add(q.id); state.wrong.delete(q.id); }
    else if (ua){ state.wrong.add(q.id); state.correct.delete(q.id); }
  });
  saveCorrect(); saveWrong();
  const total=state.questions.length, pct=total>0?Math.round((correct/total)*100):0;
  state.history.unshift({ date:new Date().toISOString(), type:'exam', correct, total, pct });
  if(state.history.length>200) state.history.pop();
  saveHistory();
  if(!state.stats['exam']) state.stats['exam']={attempts:0,best:0,last:0};
  state.stats['exam'].attempts++; state.stats['exam'].last=pct;
  if(pct>state.stats['exam'].best) state.stats['exam'].best=pct;
  saveStats();
  state.view='exam-results'; render(); window.scrollTo(0,0);
}

// ── Version Check ──────────────────────────────────────────────────────────
function checkVersion() {
  fetch('version.json?t='+Date.now())
    .then(r=>r.json())
    .then(({v})=>{
      const stored=localStorage.getItem('toeic_app_version');
      if(stored&&stored!==v){
        const b=document.createElement('div');
        b.className='update-banner';
        b.innerHTML=`🆕 網站有新版本，建議更新以取得最新題目。<button onclick="localStorage.setItem('toeic_app_version','${v}');location.reload(true)">立即更新</button>`;
        document.body.prepend(b);
      }
      localStorage.setItem('toeic_app_version',v);
    }).catch(()=>{});
}

// ── Boot ───────────────────────────────────────────────────────────────────
const bootUser = getCurrentUser();
if (bootUser) {
  state.stats=loadStats(); state.history=loadHistory();
  state.correct=loadCorrect(); state.wrong=loadWrong();
  state.view='home';
}
render();
checkVersion();
