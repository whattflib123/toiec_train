// ── Auth ───────────────────────────────────────────────────────────────────
const USERS = {
  'pyc':   'pyc0321',
  'felix': 'felix'
};

function getCurrentUser() {
  return sessionStorage.getItem('toeic_user');
}

function doLogin(username, password) {
  if (USERS[username] && USERS[username] === password) {
    sessionStorage.setItem('toeic_user', username);
    return true;
  }
  return false;
}

function doLogout() {
  sessionStorage.removeItem('toeic_user');
  stopTimer();
  state.view = 'login';
  state.stats = {};
  state.history = [];
  state.correct = new Set();
  render();
}

// ── Storage (user-namespaced) ──────────────────────────────────────────────
function loadStats() {
  const u = getCurrentUser(); if (!u) return {};
  try { return JSON.parse(localStorage.getItem(`toeic_stats_${u}`) || '{}'); } catch { return {}; }
}

function saveStats() {
  const u = getCurrentUser(); if (!u) return;
  localStorage.setItem(`toeic_stats_${u}`, JSON.stringify(state.stats));
}

function loadHistory() {
  const u = getCurrentUser(); if (!u) return [];
  try { return JSON.parse(localStorage.getItem(`toeic_history_${u}`) || '[]'); } catch { return []; }
}

function saveHistory() {
  const u = getCurrentUser(); if (!u) return;
  localStorage.setItem(`toeic_history_${u}`, JSON.stringify(state.history));
}

function loadCorrect() {
  const u = getCurrentUser(); if (!u) return new Set();
  try { return new Set(JSON.parse(localStorage.getItem(`toeic_correct_${u}`) || '[]')); } catch { return new Set(); }
}

function saveCorrect() {
  const u = getCurrentUser(); if (!u) return;
  localStorage.setItem(`toeic_correct_${u}`, JSON.stringify([...state.correct]));
}

// ── Shuffle ────────────────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prioritize(questions) {
  const unseen  = shuffle(questions.filter(q => !state.correct.has(q.id)));
  const mastered = shuffle(questions.filter(q => state.correct.has(q.id)));
  return [...unseen, ...mastered];
}

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  view: 'login',
  selectedPart: null,
  selectedDifficulty: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  startTime: null,
  timeLimit: 0,
  timerInterval: null,
  timeRemaining: 0,
  mode: 'practice',
  reviewPassageId: null,
  stats: {},
  history: [],
  correct: new Set()
};

// ── Question Builder ───────────────────────────────────────────────────────
function buildQuestions(part, difficulty) {
  if (part === 'all') {
    return ['part5', 'part6', 'part7'].flatMap(p => buildQuestions(p, difficulty));
  }
  const bank = QUESTION_BANK[part] && QUESTION_BANK[part][difficulty];
  if (!bank) return [];

  if (part === 'part5') {
    return bank.map(q => ({ ...q, part, difficulty, passageId: null }));
  }

  if (part === 'part6') {
    const questions = [];
    bank.forEach(passage => {
      passage.questions.forEach(q => {
        questions.push({ ...q, part, difficulty, passageId: passage.id, passage: passage.passage });
      });
    });
    return questions;
  }

  if (part === 'part7') {
    const questions = [];
    bank.forEach(passage => {
      passage.questions.forEach(q => {
        questions.push({ ...q, part, difficulty, passageId: passage.id, passageData: passage });
      });
    });
    return questions;
  }
  return [];
}

// ── Timer ──────────────────────────────────────────────────────────────────
function startTimer(seconds) {
  state.timeRemaining = seconds;
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();
    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timer-display');
  if (!el) return;
  const m = Math.floor(state.timeRemaining / 60).toString().padStart(2, '0');
  const s = (state.timeRemaining % 60).toString().padStart(2, '0');
  el.textContent = `${m}:${s}`;
  el.classList.toggle('timer-warning', state.timeRemaining <= 60);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

// ── Scoring ────────────────────────────────────────────────────────────────
function calculateScore() {
  let correct = 0;
  state.questions.forEach(q => {
    if (state.answers[q.id] === q.answer) correct++;
  });
  return { correct, total: state.questions.length, pct: Math.round((correct / state.questions.length) * 100) };
}

function estimateToeicScore(pct, difficulty) {
  const base = { easy: 400, medium: 600, hard: 750 }[difficulty] || 500;
  const range = { easy: 200, medium: 150, hard: 150 }[difficulty] || 150;
  return Math.min(990, Math.round(base + (pct / 100) * range));
}

// ── Render Views ───────────────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  switch (state.view) {
    case 'login':    app.innerHTML = renderLogin();    break;
    case 'home':     app.innerHTML = renderHome();     break;
    case 'select':   app.innerHTML = renderSelect();   break;
    case 'quiz':     app.innerHTML = renderQuiz();     break;
    case 'results':  app.innerHTML = renderResults();  break;
    case 'progress': app.innerHTML = renderProgress(); break;
  }
  attachEvents();
}

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

function renderHome() {
  const user = getCurrentUser();
  const totalAttempts = Object.values(state.stats).reduce((s, v) => s + (v.attempts || 0), 0);
  const bestScores = Object.entries(state.stats).map(([k, v]) => `<span class="badge">${k}: ${v.best || 0}%</span>`).join('');
  const totalQ = ['part5','part6','part7'].reduce((t,p) =>
    t + ['easy','medium','hard'].reduce((s,d) => {
      const b = QUESTION_BANK[p][d];
      return s + (p === 'part5' ? b.length : b.reduce((x,g) => x + g.questions.length, 0));
    }, 0), 0);

  return `
  <div class="home-view">
    <div class="user-bar">
      <span class="user-greeting">👤 ${user}</span>
      <button class="btn-logout" data-action="logout">登出</button>
    </div>

    <div class="hero">
      <div class="hero-icon">🎯</div>
      <h1>TOEIC 閱讀練習平台</h1>
      <p class="hero-sub">針對科技業頂尖英文要求設計 · 目標 750+ 分</p>
      <div class="score-target-badges">
        <span class="target-badge easy">初級 400–600</span>
        <span class="target-badge medium">中級 600–750</span>
        <span class="target-badge hard">高級 750–900+</span>
      </div>
    </div>

    <div class="stats-bar">
      <div class="stat-item">
        <span class="stat-num">${totalAttempts}</span>
        <span class="stat-label">練習次數</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">${totalQ}+</span>
        <span class="stat-label">題目數量</span>
      </div>
      <div class="stat-item">
        <span class="stat-num">3</span>
        <span class="stat-label">難度等級</span>
      </div>
    </div>

    ${totalAttempts > 0 ? `<div class="best-scores">${bestScores}</div>` : ''}

    <div class="part-grid">
      ${Object.entries(PART_LABELS).map(([key, p]) => `
        <div class="part-card" data-action="goto-select" data-part="${key}">
          <div class="part-icon">${p.icon}</div>
          <div class="part-info">
            <div class="part-label">${p.label}</div>
            <div class="part-name">${p.name}</div>
            <div class="part-desc">${p.description}</div>
          </div>
          <div class="part-arrow">→</div>
        </div>
      `).join('')}
    </div>

    <div class="full-test-btn-wrap">
      <button class="btn-full-test" data-action="goto-select" data-part="all">
        📋 完整閱讀模擬測驗 (Part 5 + 6 + 7)
      </button>
    </div>

    <div class="toeic-info">
      <h3>📌 TOEIC 考試結構說明</h3>
      <div class="info-grid">
        <div class="info-card">
          <strong>Part 5</strong>
          <span>文法選填 30題</span>
          <span>單句填空測驗文法與詞彙</span>
        </div>
        <div class="info-card">
          <strong>Part 6</strong>
          <span>段落選填 16題</span>
          <span>4篇短文，每篇4個填空</span>
        </div>
        <div class="info-card">
          <strong>Part 7</strong>
          <span>閱讀理解 54題</span>
          <span>單篇、雙篇、三篇閱讀</span>
        </div>
      </div>
    </div>

    <button class="btn-secondary" data-action="goto-progress">📊 我的學習進度</button>
  </div>`;
}

function renderSelect() {
  return `
  <div class="select-view">
    <button class="btn-back" data-action="goto-home">← 返回首頁</button>
    <h2>${state.selectedPart === 'all' ? '📋 完整閱讀模擬測驗 — 選擇難度' : state.selectedPart ? `${PART_LABELS[state.selectedPart]?.icon} ${PART_LABELS[state.selectedPart]?.label} — 選擇難度` : '選擇練習部分與難度'}</h2>

    ${(!state.selectedPart) ? `
    <div class="select-section">
      <p class="select-hint">選擇練習部分：</p>
      <div class="difficulty-grid">
        ${Object.entries(PART_LABELS).map(([key, p]) => `
          <button class="diff-card" data-action="select-part" data-value="${key}">
            <span class="diff-icon">${p.icon}</span>
            <span class="diff-label">${p.label}</span>
            <span class="diff-desc">${p.name}</span>
          </button>
        `).join('')}
      </div>
    </div>
    ` : ''}

    ${(state.selectedPart) ? `
    <div class="select-section">
      <p class="select-hint">選擇難度等級：</p>
      <div class="difficulty-grid">
        ${Object.entries(DIFFICULTY_LABELS).map(([key, d]) => `
          <button class="diff-card" data-action="select-difficulty" data-value="${key}" style="border-color: ${d.color}">
            <span class="diff-score" style="color:${d.color}">${d.targetScore}</span>
            <span class="diff-label" style="color:${d.color}">${d.label}</span>
            <span class="diff-desc">${d.description}</span>
            ${state.stats[`${state.selectedPart}_${key}`] ? `<span class="diff-best">最佳: ${state.stats[`${state.selectedPart}_${key}`].best}%</span>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
    ` : ''}
  </div>`;
}

function renderQuiz() {
  const q = state.questions[state.currentIndex];
  if (!q) return '<div>No questions</div>';

  const progress = ((state.currentIndex) / state.questions.length) * 100;

  let passageHtml = '';

  if (q.part === 'part6' && q.passage) {
    passageHtml = `<div class="passage-box">
      <div class="passage-label">📄 段落文章</div>
      <pre class="passage-text">${q.passage}</pre>
    </div>`;
  }

  if (q.part === 'part7' && q.passageData) {
    const pd = q.passageData;
    if (pd.type === 'single') {
      passageHtml = `<div class="passage-box">
        <div class="passage-label">📄 ${pd.title}</div>
        <pre class="passage-text">${pd.passage}</pre>
      </div>`;
    } else if (pd.type === 'double' || pd.type === 'triple') {
      passageHtml = `<div class="passage-box">
        <div class="passage-label">📄 ${pd.title} (多篇閱讀)</div>
        ${pd.passages.map(p => `
          <div class="sub-passage">
            <div class="sub-label">${p.label}</div>
            <pre class="passage-text">${p.content}</pre>
          </div>
        `).join('')}
      </div>`;
    }
  }

  const userAnswer = state.answers[q.id];

  return `
  <div class="quiz-view">
    <div class="quiz-header">
      <div class="quiz-meta">
        <span class="quiz-part">${PART_LABELS[q.part]?.label}</span>
        <span class="difficulty-tag ${q.difficulty}">${DIFFICULTY_LABELS[q.difficulty]?.label}</span>
      </div>
      <div id="timer-display" class="timer-display">--:--</div>
      <button class="btn-finish-early" data-action="finish-quiz">提交作答</button>
    </div>

    <div class="progress-bar-wrap">
      <div class="progress-bar" style="width:${progress}%"></div>
      <span class="progress-text">${state.currentIndex + 1} / ${state.questions.length} 題</span>
    </div>

    <div class="quiz-body">
      ${passageHtml}
      <div class="question-area">
        <div class="q-number">Question ${state.currentIndex + 1}</div>
        <div class="q-text">${q.text || q.question}</div>
        <div class="options-list">
          ${q.options.map(opt => {
            const letter = opt.charAt(0);
            const isSelected = userAnswer === letter;
            return `<button class="option-btn ${isSelected ? 'selected' : ''}"
              data-action="select-answer" data-value="${letter}" data-qid="${q.id}">
              ${opt}
            </button>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="quiz-footer">
      <button class="btn-nav" data-action="prev-question" ${state.currentIndex === 0 ? 'disabled' : ''}>← 上一題</button>
      <div class="question-dots">
        ${state.questions.map((_, i) => {
          const ans = state.answers[state.questions[i].id];
          const cls = i === state.currentIndex ? 'dot-current' : (ans ? 'dot-answered' : 'dot-empty');
          return `<span class="q-dot ${cls}" data-action="jump-question" data-index="${i}"></span>`;
        }).join('')}
      </div>
      <button class="btn-nav btn-next" data-action="next-question">
        ${state.currentIndex === state.questions.length - 1 ? '完成 ✓' : '下一題 →'}
      </button>
    </div>
  </div>`;
}

function renderResults() {
  const { correct, total, pct } = calculateScore();
  const diff = state.selectedDifficulty;
  const estimatedScore = estimateToeicScore(pct, diff);
  const passed = pct >= 70;

  let grade, gradeClass;
  if (pct >= 90) { grade = 'S'; gradeClass = 'grade-s'; }
  else if (pct >= 80) { grade = 'A'; gradeClass = 'grade-a'; }
  else if (pct >= 70) { grade = 'B'; gradeClass = 'grade-b'; }
  else if (pct >= 60) { grade = 'C'; gradeClass = 'grade-c'; }
  else { grade = 'F'; gradeClass = 'grade-f'; }

  const techTargets = [
    { company: 'Google / Meta / Amazon', score: '800+', pass: estimatedScore >= 800 },
    { company: 'Microsoft / Apple', score: '750+', pass: estimatedScore >= 750 },
    { company: '台灣科技大廠 (TSMC/MediaTek)', score: '700+', pass: estimatedScore >= 700 },
    { company: '一般科技公司', score: '600+', pass: estimatedScore >= 600 },
  ];

  const reviewHtml = state.questions.map((q, i) => {
    const userAns = state.answers[q.id] || '未作答';
    const isCorrect = userAns === q.answer;
    return `
    <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
      <div class="review-header">
        <span class="review-num">Q${i + 1}</span>
        <span class="review-result">${isCorrect ? '✓ 正確' : '✗ 錯誤'}</span>
      </div>
      <div class="review-question">${q.text || q.question}</div>
      <div class="review-answers">
        ${q.options.map(opt => {
          const letter = opt.charAt(0);
          const isUser = userAns === letter;
          const isCorrectOpt = q.answer === letter;
          let cls = '';
          if (isCorrectOpt) cls = 'opt-correct';
          else if (isUser && !isCorrect) cls = 'opt-wrong';
          return `<div class="review-opt ${cls}">${isUser ? '▶ ' : ''}${opt}</div>`;
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
      <div class="estimated-score">
        預估 TOEIC 分數：<strong>${estimatedScore}</strong> / 990
      </div>
    </div>

    <div class="tech-targets">
      <h3>🏢 科技大廠標準對照</h3>
      ${techTargets.map(t => `
        <div class="target-row ${t.pass ? 'pass' : 'fail'}">
          <span class="target-company">${t.company}</span>
          <span class="target-score">${t.score}</span>
          <span class="target-result">${t.pass ? '✓ 達標' : '✗ 未達'}</span>
        </div>
      `).join('')}
    </div>

    <div class="results-actions">
      <button class="btn-primary" data-action="retry-quiz">🔄 重新練習</button>
      <button class="btn-secondary" data-action="goto-home">🏠 回首頁</button>
      <button class="btn-secondary" data-action="goto-progress">📊 查看進度</button>
    </div>

    <div class="review-section">
      <h3>📋 詳細解析</h3>
      ${reviewHtml}
    </div>
  </div>`;
}

function renderProgress() {
  const entries = Object.entries(state.stats);

  const historyHtml = state.history.length === 0
    ? '<p class="no-data">尚無練習記錄，快去開始練習吧！</p>'
    : `<div class="history-list">
        ${state.history.map(h => {
          const d = new Date(h.date);
          const dateStr = `${d.getMonth()+1}/${d.getDate()} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
          const partLabel = h.part === 'all' ? '完整測驗' : (PART_LABELS[h.part]?.label || h.part);
          const diffLabel = DIFFICULTY_LABELS[h.difficulty]?.label || h.difficulty;
          const color = h.pct >= 80 ? 'var(--green)' : h.pct >= 60 ? 'var(--orange)' : 'var(--red)';
          return `<div class="history-item">
            <span class="history-date">${dateStr}</span>
            <span class="history-part">${partLabel} · ${diffLabel}</span>
            <span class="history-score" style="color:${color}">${h.pct}%</span>
            <span class="history-toeic">~${h.estimatedToeic}分</span>
          </div>`;
        }).join('')}
      </div>`;

  return `
  <div class="progress-view">
    <button class="btn-back" data-action="goto-home">← 返回首頁</button>
    <h2>📊 ${getCurrentUser()} 的學習進度</h2>
    <div class="mastery-bar">
      <span class="mastery-label">已掌握題數</span>
      <span class="mastery-count">${state.correct.size} 題</span>
      <span class="mastery-note">（答對即記錄，答錯即移除）</span>
    </div>

    <div class="progress-section">
      <h3 class="section-title">📅 練習歷史紀錄</h3>
      ${historyHtml}
    </div>

    ${entries.length > 0 ? `
    <div class="progress-section">
      <h3 class="section-title">🏆 各題型最佳成績</h3>
      <div class="progress-table">
        <div class="table-header">
          <span>題型 / 難度</span>
          <span>練習次數</span>
          <span>最佳成績</span>
          <span>最近成績</span>
        </div>
        ${entries.map(([key, v]) => {
          const [part, diff] = key.split('_');
          const pLabel = PART_LABELS[part]?.label || part;
          const dLabel = DIFFICULTY_LABELS[diff]?.label || diff;
          return `<div class="table-row">
            <span>${pLabel} ${dLabel}</span>
            <span>${v.attempts || 0} 次</span>
            <span class="score-cell">${v.best || 0}%</span>
            <span class="score-cell">${v.last || 0}%</span>
          </div>`;
        }).join('')}
      </div>
    </div>
    ` : ''}

    <div class="progress-tips">
      <h3>📚 學習建議</h3>
      <div class="tips-grid">
        <div class="tip-card">
          <strong>Part 5 技巧</strong>
          <p>先掌握詞性判斷：看空格前後，判斷需要名詞/動詞/形容詞/副詞，再從選項中篩選。</p>
        </div>
        <div class="tip-card">
          <strong>Part 6 技巧</strong>
          <p>先讀完整段落再填空，注意上下文語氣和時態是否一致。</p>
        </div>
        <div class="tip-card">
          <strong>Part 7 技巧</strong>
          <p>先看題目再讀文章，用「關鍵字定位法」找到相關段落，不需逐字閱讀。</p>
        </div>
        <div class="tip-card">
          <strong>時間管理</strong>
          <p>Part 5: 每題 30 秒 · Part 6: 每題 45 秒 · Part 7: 每題 60-75 秒</p>
        </div>
      </div>
    </div>

    <button class="btn-danger" data-action="clear-stats">🗑️ 清除所有記錄</button>
  </div>`;
}

// ── Event Handling ─────────────────────────────────────────────────────────
function attachEvents() {
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', handleAction);
  });

  // Enter key on login password field
  const pwdInput = document.getElementById('login-password');
  if (pwdInput) {
    pwdInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitLogin();
    });
    pwdInput.focus();
  }
  const userInput = document.getElementById('login-username');
  if (userInput) {
    userInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('login-password')?.focus();
    });
  }
}

function submitLogin() {
  const username = document.getElementById('login-username')?.value.trim() || '';
  const password = document.getElementById('login-password')?.value || '';
  if (doLogin(username, password)) {
    state.stats = loadStats();
    state.history = loadHistory();
    state.correct = loadCorrect();
    state.view = 'home';
    render();
  } else {
    const err = document.getElementById('login-error');
    if (err) err.style.display = 'block';
  }
}

function handleAction(e) {
  const { action, value, part, index, qid } = e.currentTarget.dataset;

  switch (action) {
    case 'do-login':
      submitLogin();
      break;

    case 'logout':
      if (confirm('確定要登出嗎？')) doLogout();
      break;

    case 'goto-home':
      stopTimer();
      state.view = 'home';
      render();
      break;

    case 'goto-select':
      state.selectedPart = part || null;
      state.selectedDifficulty = null;
      state.view = 'select';
      render();
      break;

    case 'goto-progress':
      state.view = 'progress';
      render();
      break;

    case 'select-part':
      state.selectedPart = value;
      render();
      break;

    case 'select-difficulty':
      state.selectedDifficulty = value;
      startQuiz();
      break;

    case 'select-answer':
      state.answers[qid] = value;
      render();
      if (state.currentIndex < state.questions.length - 1) {
        setTimeout(() => {
          state.currentIndex++;
          render();
        }, 350);
      }
      break;

    case 'prev-question':
      if (state.currentIndex > 0) { state.currentIndex--; render(); }
      break;

    case 'next-question':
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        render();
      } else {
        finishQuiz();
      }
      break;

    case 'jump-question':
      state.currentIndex = parseInt(index);
      render();
      break;

    case 'finish-quiz':
      finishQuiz();
      break;

    case 'retry-quiz':
      startQuiz();
      break;

    case 'clear-stats':
      if (confirm('確定要清除所有練習記錄嗎？')) {
        state.stats = {};
        state.history = [];
        state.correct = new Set();
        saveStats();
        saveHistory();
        saveCorrect();
        render();
      }
      break;
  }
}

function startQuiz() {
  const part = state.selectedPart;
  const diff = state.selectedDifficulty;
  state.questions = prioritize(buildQuestions(part, diff));
  state.currentIndex = 0;
  state.answers = {};
  state.startTime = Date.now();

  const timeLimits = { part5: 15, part6: 12, part7: 20, all: 18 };
  const timePerQ = timeLimits[part] || 15;
  const totalTime = state.questions.length * timePerQ;

  stopTimer();
  state.view = 'quiz';
  render();
  startTimer(totalTime);
}

function finishQuiz() {
  stopTimer();
  const { correct, total, pct } = calculateScore();
  const key = `${state.selectedPart || 'all'}_${state.selectedDifficulty}`;
  const estimatedToeic = estimateToeicScore(pct, state.selectedDifficulty);

  // Update summary stats
  if (!state.stats[key]) state.stats[key] = { attempts: 0, best: 0, last: 0 };
  state.stats[key].attempts++;
  state.stats[key].last = pct;
  if (pct > state.stats[key].best) state.stats[key].best = pct;
  saveStats();

  // Save to history (newest first, cap at 200 entries)
  state.history.unshift({
    date: new Date().toISOString(),
    part: state.selectedPart || 'all',
    difficulty: state.selectedDifficulty,
    correct,
    total,
    pct,
    estimatedToeic
  });
  if (state.history.length > 200) state.history.pop();
  saveHistory();

  // 更新已掌握題目：答對加入、答錯移除
  state.questions.forEach(q => {
    if (state.answers[q.id] === q.answer) state.correct.add(q.id);
    else state.correct.delete(q.id);
  });
  saveCorrect();

  state.view = 'results';
  render();
  window.scrollTo(0, 0);
}

// ── Boot ───────────────────────────────────────────────────────────────────
const bootUser = getCurrentUser();
if (bootUser) {
  state.stats = loadStats();
  state.history = loadHistory();
  state.correct = loadCorrect();
  state.view = 'home';
}
render();
