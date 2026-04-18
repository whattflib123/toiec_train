// Part 6 expansion — q_p6b.js
// PART6B_EASY: 6 additional passages (24 questions)
// PART6B_MEDIUM: 6 additional passages (24 questions)
// PART6B_HARD: 6 additional passages (24 questions)

const PART6B_EASY = [
  {
    id: "p6b_easy_1",
    passage: `To: All Staff
From: HR Department
Subject: Office Supplies Request

Dear Employees,

Please be ___1___ that the office supply order will be placed on Friday. If you need any items, submit your requests to HR by Thursday noon. We ___2___ pens, paper, and printer cartridges every month. Additional items such as staplers and scissors are ordered ___3___. Please check your department's inventory before submitting a request. Approved orders will be ___4___ to your department by the following Monday.`,
    questions: [
      {
        id: "p6b_easy_1_q1", number: 1,
        text: "___1___",
        options: ["A) aware", "B) awake", "C) careful", "D) sure"],
        answer: "A",
        explanation: "'Aware' 正確，因為 'please be aware that' 是正式備忘錄中的標準慣用語，意指「請注意以下資訊」，且固定與連接詞 'that' 搭配，用來引介陳述性事實。'Awake' 錯誤，因為 'be awake that' 並非標準英文表達方式；'awake' 指的是清醒的意識狀態，不與 'that' 子句搭配使用。'Careful' 錯誤，因為 'be careful that' 暗示對潛在危險或錯誤的警告，與本備忘錄中性的資訊傳達語氣不符。'Sure' 錯誤，因為 'be sure that' 通常要求對方自行確認或核實某事，而非單純接收一則資訊。"
      },
      {
        id: "p6b_easy_1_q2", number: 2,
        text: "___2___",
        options: ["A) order", "B) orders", "C) ordered", "D) ordering"],
        answer: "A",
        explanation: "'Order' 正確，因為主詞為第一人稱複數 'We'，在現在式中須使用動詞原形，'we order' 在語法上完全正確。'Orders' 錯誤，因為第三人稱單數的 '-s' 字尾僅用於 'he'、'she' 或 'it' 等主詞，與第一人稱複數主詞 'we' 不一致。'Ordered' 錯誤，因為過去式表示動作已在過去發生且不再持續，但本句描述的是每月定期重複執行的慣常事項。'Ordering' 錯誤，因為現在分詞單獨存在時，無法作為子句的主要動詞，必須搭配 'are' 或 'were' 等助動詞。"
      },
      {
        id: "p6b_easy_1_q3", number: 3,
        text: "___3___",
        options: ["A) quarterly", "B) daily", "C) hourly", "D) secondly"],
        answer: "A",
        explanation: "'Quarterly' 正確，因為釘書機和剪刀是耐用的辦公用品，使用壽命長，補充頻率理應遠低於筆、紙等消耗品；每三個月訂購一次是合理且實際的間隔。'Daily' 錯誤，因為釘書機和剪刀等耐用品的消耗速度不足以每天訂購，這個頻率在上下文中既不切實際也不合邏輯。'Hourly' 錯誤，因為它描述的是極高的頻率，用於訂購實體辦公用品毫無道理，業務上完全沒有每小時補充的需求。'Secondly' 錯誤，因為它是表示列舉順序的副詞，意為「其次」，並非描述頻率的時間副詞，不能說明某件事多久訂購一次。"
      },
      {
        id: "p6b_easy_1_q4", number: 4,
        text: "___4___",
        options: ["A) delivered", "B) delivering", "C) deliver", "D) delivery"],
        answer: "A",
        explanation: "'Delivered' 正確，因為被動語態 'will be delivered' 需要過去分詞，表示已核准的訂單承受「被送達各部門」這個動作。'Delivering' 錯誤，因為現在分詞會構成 'will be delivering'，即未來進行式，意指訂單正主動配送某物給某人，這對無生命物體而言在邏輯上說不通。'Deliver' 錯誤，因為動詞原形無法在被動語態中充當過去分詞；'will be deliver' 在語法上不正確。'Delivery' 錯誤，因為它是名詞，無法在被動動詞片語中充當過去分詞。"
      }
    ]
  },
  {
    id: "p6b_easy_2",
    passage: `Notice: Library Hours Update

The city library will be ___1___ its hours starting next month. The new schedule will allow residents to visit on Sundays from 10 a.m. to 4 p.m. The library ___2___ closed on Sundays for the past two years due to budget cuts. The expansion was made ___3___ after a petition signed by more than 500 residents. Members can ___4___ books online or by calling the main desk.`,
    questions: [
      {
        id: "p6b_easy_2_q1", number: 1,
        text: "___1___",
        options: ["A) extending", "B) extended", "C) extends", "D) extend"],
        answer: "A",
        explanation: "'Extending' 正確，因為 'will be extending' 是未來進行式，用來描述未來將持續進行的計畫動作，與時間片語 'starting next month' 自然搭配。'Extended' 錯誤，因為過去分詞會構成 'will be extended'，即未來被動式，暗示開放時間是由外部施動者延長，但本句的主詞（圖書館）是自行執行此動作。'Extends' 錯誤，因為第三人稱單數現在式主動語態描述的是當前事實，而非下個月才開始的未來計畫。'Extend' 錯誤，因為動詞原形不能直接接在 'will be' 之後；正確形式應為 'will extend'（去掉 'be'）或 'will be extending'（加上 '-ing'）。"
      },
      {
        id: "p6b_easy_2_q2", number: 2,
        text: "___2___",
        options: ["A) has been", "B) had been", "C) was", "D) is"],
        answer: "A",
        explanation: "'Has been' 正確，因為現在完成式 'has been closed' 與表示持續時間的片語 'for the past two years' 搭配使用，表示某情況從過去開始並延續至今；圖書館目前週日仍然關閉，而公告正宣布這一情況即將改變。'Had been' 錯誤，因為過去完成式描述的是在某一特定過去時間點之前就存在的狀態，但句中並未建立這樣的過去參考點；'had been closed for the past two years' 需要一個先前的過去事件作為錨點，而這裡並不存在。'Was' 錯誤，因為過去式描述的是已結束的過去狀態，未表達持續至今的時間跨度；'was closed for the past two years' 暗示關閉狀態在某個不明確的過去時間點便已結束，而非持續至今。'Is' 錯誤，因為現在式 'is closed' 描述的是當前的永久事實，無法傳達 'for the past two years' 所表示的持續時間，且與公告宣布新增週日開放時段的內容相矛盾。"
      },
      {
        id: "p6b_easy_2_q3", number: 3,
        text: "___3___",
        options: ["A) possible", "B) possibly", "C) possibility", "D) possibles"],
        answer: "A",
        explanation: "'Possible' 正確，因為 'made possible' 是固定的形容詞片語，意為「使成為可能」或「促成」，其中形容詞 'possible' 在「make + 受詞 + 形容詞」的句型中充當受詞補語。'Possibly' 錯誤，因為副詞不能在「make + 受詞 + 形容詞」的結構中充當受詞補語；'made possibly' 在英文中並不合乎語法。'Possibility' 錯誤，因為名詞不能直接在此句型中充當形容詞補語；'made a possibility' 需要加上冠詞 'a' 並改變句子結構。'Possibles' 錯誤，因為 'possible' 在標準英文中沒有複數名詞形式，'possibles' 在此語境中並非有效的詞彙。"
      },
      {
        id: "p6b_easy_2_q4", number: 4,
        text: "___4___",
        options: ["A) renew", "B) remove", "C) replace", "D) recall"],
        answer: "A",
        explanation: "'Renew' 正確，因為 'renew books' 是圖書館的標準術語，意指延長已借出書籍的借閱期限，這是可透過網路或電話辦理的核心服務。'Remove' 錯誤，因為 'remove books' 意為將書籍從某處移走，這並非會員透過服務台或網站辦理的服務項目。'Replace' 錯誤，因為 'replace books' 意為以另一本書替換，這並非標準的圖書館會員服務；會員不會替換館藏書籍。'Recall' 錯誤，因為在圖書館語境中，'recall' 指的是圖書館要求借閱者歸還書籍，而非會員在自己帳戶中自行操作的動作。"
      }
    ]
  },
  {
    id: "p6b_easy_3",
    passage: `Job Posting: Customer Service Representative

ABC Electronics is looking for a friendly and ___1___ individual to join our customer service team. The successful candidate will handle customer inquiries, process returns, and ___2___ product information. Previous experience in retail is preferred but not ___3___. We offer competitive pay, health benefits, and opportunities for ___4___. To apply, send your resume to jobs@abcelectronics.com.`,
    questions: [
      {
        id: "p6b_easy_3_q1", number: 1,
        text: "___1___",
        options: ["A) responsible", "B) responsibility", "C) responsibly", "D) respond"],
        answer: "A",
        explanation: "'Responsible' 正確，因為空格位於 'friendly and' 之後，需要一個形容詞來描述所求的人選；'responsible' 是適當的形容詞形式，意指可靠且負責任。'Responsibility' 錯誤，因為它是名詞，而 'friendly and [形容詞]' 的並列結構需要另一個形容詞，而非名詞。'Responsibly' 錯誤，因為它是修飾動詞或形容詞的副詞，在此結構中不能作為並列形容詞描述一個人的特質。'Respond' 錯誤，因為它是動詞，無法充當修飾 'individual' 的描述性形容詞。"
      },
      {
        id: "p6b_easy_3_q2", number: 2,
        text: "___2___",
        options: ["A) provide", "B) provision", "C) provided", "D) providing"],
        answer: "A",
        explanation: "'Provide' 正確，因為並列結構要求列表中所有動詞採用相同的動詞原形：'handle customer inquiries, process returns, and provide product information'。'Provision' 錯誤，因為它是名詞，破壞了職責列表中並列動詞的結構。'Provided' 錯誤，因為過去分詞會打破並列結構；列表中的項目需要動詞原形，而非過去分詞。'Providing' 錯誤，因為現在分詞同樣會破壞並列結構，該列表要求所有項目採用相同的不定詞形式。"
      },
      {
        id: "p6b_easy_3_q3", number: 3,
        text: "___3___",
        options: ["A) required", "B) requiring", "C) requires", "D) requirement"],
        answer: "A",
        explanation: "'Required' 正確，因為 'preferred but not required' 以過去分詞作為述語形容詞，構成標準的對比片語，意指該資格雖受青睞但非強制要求。'Requiring' 錯誤，因為現在分詞會形成一個子句結構，暗示經驗本身在要求某事，顛倒了原意且在語法上十分彆扭。'Requires' 錯誤，因為第三人稱單數主動語態動詞暗示經驗正在主動要求某事，與預期的被動語態含意不符。'Requirement' 錯誤，因為它是名詞，而 'preferred but not ___' 的並列結構需要形容詞或過去分詞，而非名詞。"
      },
      {
        id: "p6b_easy_3_q4", number: 4,
        text: "___4___",
        options: ["A) advancement", "B) advanced", "C) advance", "D) advancing"],
        answer: "A",
        explanation: "'Advancement' 正確，因為 'opportunities for advancement' 是職缺招聘中的標準名詞片語，其中 'advancement' 作為名詞，意指職涯晉升或升遷。'Advanced' 錯誤，因為它是形容詞，意為程度高超，不能作為名詞受詞接在介系詞 'for' 之後。'Advance' 錯誤，因為雖然它在某些語境中可作名詞（如 'in advance'），但 'opportunities for advance' 並非職場招聘中的標準搭配片語。'Advancing' 錯誤，因為動名詞雖然語法上可接在 'for' 之後，但並非慣用的固定片語；'opportunities for advancement' 才是標準的專業固定表達。"
      }
    ]
  },
  {
    id: "p6b_easy_4",
    passage: `Dear Mr. Chen,

Thank you for your ___1___ at our store last Saturday. We hope you enjoyed your shopping experience. As a valued customer, you are ___2___ to a 10% discount on your next purchase. Simply show this email at the checkout counter. This offer is ___3___ until December 31. We look forward to ___4___ you again soon.

Sincerely,
GreenMart Customer Care`,
    questions: [
      {
        id: "p6b_easy_4_q1", number: 1,
        text: "___1___",
        options: ["A) visit", "B) visitor", "C) visiting", "D) visited"],
        answer: "A",
        explanation: "'Visit' 正確，因為本句需要一個名詞作為所有格 'your ___' 的受詞，'visit' 作為名詞意指前往某地的行為，用於 'thank you for your visit' 中十分自然。'Visitor' 錯誤，因為它是名詞，意指前來拜訪的人，而非拜訪的行為本身；'thank you for your visitor' 在語意上完全不通。'Visiting' 錯誤，因為雖然動名詞在某些結構中可接在 'your' 之後（如 'thank you for visiting'），但選項中區分了名詞與動名詞形式，且 'visit' 在這個固定的客服慣用語中更為簡潔自然。'Visited' 錯誤，因為過去分詞無法在此結構中充當接在 'your' 之後的名詞受詞。"
      },
      {
        id: "p6b_easy_4_q2", number: 2,
        text: "___2___",
        options: ["A) entitled", "B) entitling", "C) entitle", "D) entitlement"],
        answer: "A",
        explanation: "'Entitled' 正確，因為 'are entitled to' 是被動形容詞片語，意為「有權獲得」，是傳達顧客福利的標準固定表達方式。'Entitling' 錯誤，因為現在分詞會構成進行式（'are entitling'），暗示顧客正主動賦予某人某種權利，完全顛倒了原意。'Entitle' 錯誤，因為動詞原形不能在此被動語態結構中接在 'are' 之後充當形容詞；'are entitle' 在語法上不正確。'Entitlement' 錯誤，因為它是名詞，無法在 'you are ___ to a discount' 的句型中充當述語形容詞。"
      },
      {
        id: "p6b_easy_4_q3", number: 3,
        text: "___3___",
        options: ["A) valid", "B) validity", "C) validate", "D) validly"],
        answer: "A",
        explanation: "'Valid' 正確，因為 'this offer is valid until' 需要一個述語形容詞來描述優惠的狀態，'valid' 意為「有效的」或「可接受的」，是描述優惠、折價券及促銷活動生效狀態的標準詞彙。'Validity' 錯誤，因為它是名詞，無法在「主詞 + 連綴動詞 + 形容詞」的句型中充當述語形容詞。'Validate' 錯誤，因為它是動詞，意為確認或驗證，動詞無法在此結構中作為連綴動詞 'is' 的形容詞補語。'Validly' 錯誤，因為它是修飾動詞或形容詞的副詞，無法充當描述優惠狀態的述語形容詞。"
      },
      {
        id: "p6b_easy_4_q4", number: 4,
        text: "___4___",
        options: ["A) seeing", "B) see", "C) seen", "D) sees"],
        answer: "A",
        explanation: "'Seeing' 正確，因為固定片語動詞 'look forward to' 需要以動名詞（動詞 -ing 形式）作為受詞，因為此處的 'to' 是介系詞，而非不定詞標記。'See' 錯誤，因為動詞原形用於不定詞結構中 'to' 之後，但在 'look forward to' 中，'to' 是介系詞，其後必須接動名詞，而非動詞原形。'Seen' 錯誤，因為過去分詞無法在此結構中作為介系詞的受詞；接在介系詞之後的應是動名詞，而非過去分詞。'Sees' 錯誤，因為第三人稱單數現在式動詞形式無法充當此片語中介系詞 'to' 的名詞性受詞。"
      }
    ]
  },
  {
    id: "p6b_easy_5",
    passage: `Monthly Newsletter — Green Valley Community Center

This month's highlight is our new fitness class schedule. ___1___ Monday, we now offer yoga, aerobics, and swimming. Classes are open to all residents ___2___ 16 and older. Registration can be done ___3___ at the front desk or through our website. Participants are ___4___ to bring their own towels and water bottles. Space is limited, so sign up early!`,
    questions: [
      {
        id: "p6b_easy_5_q1", number: 1,
        text: "___1___",
        options: ["A) Starting", "B) Started", "C) Starts", "D) Start"],
        answer: "A",
        explanation: "'Starting' 正確，因為 'starting Monday' 以現在分詞構成介系詞片語，意為「從週一開始」，是表示新時程表何時生效的自然且慣用說法。'Started' 錯誤，因為過去分詞暗示時程表已在過去開始實施，但電子報正在宣布一個從特定即將到來的日期才開始的新措施。'Starts' 錯誤，因為第三人稱單數現在式主動動詞需要一個主詞（'the schedule starts Monday'），而此空格引出的是獨立分詞片語，而非獨立子句。'Start' 錯誤，因為動詞原形無法在句子中這個位置引介時間片語或獨立分詞結構。"
      },
      {
        id: "p6b_easy_5_q2", number: 2,
        text: "___2___",
        options: ["A) aged", "B) age", "C) aging", "D) ages"],
        answer: "A",
        explanation: "'Aged' 正確，因為 'residents aged 16 and older' 以過去分詞作為後置修飾語，相當於縮減關係子句（'residents who are aged 16 and older'），這是指定年齡要求的標準語法結構。'Age' 錯誤，因為名詞單獨存在時無法直接後置修飾 'residents'；若要使用名詞，需改寫為 'residents of age 16 and older'。'Aging' 錯誤，因為現在分詞 'aging' 意指老化的過程，會產生 'residents who are aging 16 and older' 這種毫無意義的讀法。'Ages' 錯誤，因為第三人稱複數動詞形式無法後置修飾名詞片語；此處需要的是後置修飾分詞，而非動詞。"
      },
      {
        id: "p6b_easy_5_q3", number: 3,
        text: "___3___",
        options: ["A) either", "B) neither", "C) both", "D) each"],
        answer: "A",
        explanation: "'Either' 正確，因為本句呈現兩種以 'or' 連接的替代報名方式，對等連接詞 'either ... or' 是表示二選一的正確結構。'Neither' 錯誤，因為 'neither ... nor' 呈現兩個否定選項，但本句提供的是兩個正面的替代選項，使用否定結構在語意上不恰當。'Both' 錯誤，因為 'both ... and' 表示兩件事同時成立，而非從兩個選項中擇一；使用 'both' 將意味著報名必須同時在服務台及網路上進行。'Each' 錯誤，因為 'each' 指的是群體中逐一考量的個別成員，不用於呈現替代選項，也不與 'or' 搭配構成對等連接詞。"
      },
      {
        id: "p6b_easy_5_q4", number: 4,
        text: "___4___",
        options: ["A) encouraged", "B) encourage", "C) encouraging", "D) encouragement"],
        answer: "A",
        explanation: "'Encouraged' 正確，因為 'are encouraged to bring' 是以過去分詞作為述語形容詞的被動結構，表達對參與者的溫和建議或推薦。'Encourage' 錯誤，因為動詞原形無法在 'are' 之後充當述語形容詞；'are encourage' 在語法上不正確。'Encouraging' 錯誤，因為現在分詞會構成進行式（'are encouraging'），暗示參與者正主動鼓勵某事，完全顛倒了預期的被動語態含意。'Encouragement' 錯誤，因為它是名詞，無法在此被動結構中充當過去分詞。"
      }
    ]
  },
  {
    id: "p6b_easy_6",
    passage: `Product Review Response

Dear Ms. Park,

Thank you for taking the time to leave a review for our BlueBreeze Air Purifier. We are ___1___ to hear that you are satisfied with its performance. Your feedback ___2___ us improve our products. Regarding your concern about the filter replacement, we recommend changing it every six months for ___3___ performance. If you have any ___4___ questions, please contact our support team at 1-800-555-0199.

Best regards,
BlueBreeze Product Team`,
    questions: [
      {
        id: "p6b_easy_6_q1", number: 1,
        text: "___1___",
        options: ["A) pleased", "B) pleasing", "C) pleasure", "D) please"],
        answer: "A",
        explanation: "'Pleased' 正確，因為 'we are pleased to hear' 以過去分詞作為述語形容詞，表達公司正面的情感回應，是正式顧客通信中的標準固定語句。'Pleasing' 錯誤，因為由現在分詞衍生的形容詞描述的是令他人感到愉悅的事物（如 'a pleasing result'），而非主詞自身的感受；'we are pleasing' 會是進行式，意指公司目前正使某人感到滿意。'Pleasure' 錯誤，因為它是名詞，無法在「主詞 + 連綴動詞 + 形容詞」的句型中充當述語形容詞。'Please' 錯誤，因為它是動詞或禮貌用語，無法充當描述公司情感狀態的述語形容詞。"
      },
      {
        id: "p6b_easy_6_q2", number: 2,
        text: "___2___",
        options: ["A) helps", "B) help", "C) helping", "D) helped"],
        answer: "A",
        explanation: "'Helps' 正確，因為主詞 'feedback' 是單數不可數名詞，在現在式中須使用第三人稱單數動詞形式 'helps'，描述顧客意見持續發揮的功能。'Help' 錯誤，因為不加 '-s' 的原形動詞用於複數主詞或第一、二人稱，但與單數不可數名詞 'feedback' 不一致。'Helping' 錯誤，因為現在分詞單獨存在時，若無 'is' 等助動詞，無法構成子句的主要動詞。'Helped' 錯誤，因為過去式暗示意見回饋只在某一已完成的過去情況中幫助了公司，而本句描述的是意見回饋持續且普遍的價值。"
      },
      {
        id: "p6b_easy_6_q3", number: 3,
        text: "___3___",
        options: ["A) optimal", "B) optima", "C) optimally", "D) optimism"],
        answer: "A",
        explanation: "'Optimal' 正確，因為 'for optimal performance' 需要一個形容詞來修飾名詞 'performance'，'optimal' 意為「最佳的」，是產品保養說明中的標準技術性形容詞。'Optima' 錯誤，因為它是 'optimum' 的複數名詞形式，無法充當修飾 'performance' 的形容詞。'Optimally' 錯誤，因為它是修飾動詞或形容詞的副詞，而非名詞；'for optimally performance' 在語法上不正確。'Optimism' 錯誤，因為它是完全不同的詞彙，意指樂觀的態度或正面的觀點，與產品效能在語意上毫無關聯。"
      },
      {
        id: "p6b_easy_6_q4", number: 4,
        text: "___4___",
        options: ["A) further", "B) farther", "C) furthest", "D) far"],
        answer: "A",
        explanation: "'Further' 正確，因為在 'any further questions' 的語境中，'further' 意為「額外的」或「更多的」，是客服通信中用於指稱除已處理問題之外的其他問題的標準詞彙。'Farther' 錯誤，因為 'farther' 專指實體距離，在正式書面通信中不用於「額外的」這一引申義。'Furthest' 錯誤，因為它是最高級形式，意為「到最大程度」，無法傳達此片語所需的「額外的」含意。'Far' 錯誤，因為它是描述距離的形容詞或副詞，不具備 'any further questions' 所需的「額外的」含意。"
      }
    ]
  }
];

const PART6B_MEDIUM = [
  {
    id: "p6b_med_1",
    passage: `Internal Memo — Project Phoenix Update

To: Development Team
From: Director of Engineering

As of last week, Project Phoenix has entered its final testing phase. The team ___1___ remarkable progress since the project's inception, completing all core modules ahead of schedule. We must now focus on resolving the remaining bugs ___2___ in the QA report dated November 3rd. Each team lead is ___3___ for ensuring their section passes all regression tests by Friday. Failure to meet this deadline will ___4___ the launch timeline and affect our Q1 commitments.`,
    questions: [
      {
        id: "p6b_med_1_q1", number: 1,
        text: "___1___",
        options: ["A) has made", "B) made", "C) makes", "D) had made"],
        answer: "A",
        explanation: "'Has made' 正確，因為現在完成式描述從專案啟動時開始、至今仍與當前情況相關的進展（「as of last week, ... has entered its final testing phase」），將過去的努力與當前狀態連結起來。'Made' 錯誤，因為過去式將進展描述為已完成的孤立過去事件，與現在無關，但本備忘錄使用 'has entered' 的現在完成式脈絡，將過去行動與當前階段連結。'Makes' 錯誤，因為現在式描述的是一般事實或習慣性動作，而非從過去某起點衡量至今的持續進展。'Had made' 錯誤，因為過去完成式描述在另一個過去事件之前已完成的動作，但此處描述的進展連結的是當前時刻，而非更早的過去時間點。"
      },
      {
        id: "p6b_med_1_q2", number: 2,
        text: "___2___",
        options: ["A) identified", "B) identifying", "C) identify", "D) identification"],
        answer: "A",
        explanation: "'Identified' 正確，因為過去分詞作為 'bugs' 的後置修飾語，相當於縮減關係子句 'bugs that were identified in the QA report'，指明需要解決的是哪些錯誤。'Identifying' 錯誤，因為現在分詞作後置修飾語將意為「正在識別某事的錯誤」，暗示錯誤本身在執行識別的動作，這在邏輯上說不通。'Identify' 錯誤，因為動詞原形無法直接後置修飾名詞；此類縮減關係子句結構需要使用分詞。'Identification' 錯誤，因為它是名詞，無法充當名詞 'bugs' 的分詞後置修飾語。"
      },
      {
        id: "p6b_med_1_q3", number: 3,
        text: "___3___",
        options: ["A) accountable", "B) accounting", "C) accounted", "D) accountably"],
        answer: "A",
        explanation: "'Accountable' 正確，因為 'accountable for' 是專業及組織環境中的標準形容詞片語，意為「對特定職責負責且須說明交代」，恰好符合團隊負責人的義務。'Accounting' 錯誤，因為它要麼是構成進行式的現在分詞，要麼是指會計專業的動名詞，兩者皆無法在此構成語法正確且有意義的述語形容詞片語。'Accounted' 錯誤，因為雖然 'accounted for' 作為片語動詞意為「解釋」或「佔據」，但 'each team lead is accounted for' 並不能傳達承擔責任的預期含意。'Accountably' 錯誤，因為它是副詞，無法在連綴動詞 'is' 之後充當述語形容詞。"
      },
      {
        id: "p6b_med_1_q4", number: 4,
        text: "___4___",
        options: ["A) jeopardize", "B) jeopardizing", "C) jeopardized", "D) jeopardy"],
        answer: "A",
        explanation: "'Jeopardize' 正確，因為情態動詞 'will' 之後必須接動詞原形，'will jeopardize' 正確表達未能在截止日前完成將使發布時程面臨風險。'Jeopardizing' 錯誤，因為現在分詞無法直接接在情態動詞 'will' 之後作為主要動詞；需加助動詞才能構成進行式（'will be jeopardizing'）。'Jeopardized' 錯誤，因為 'will' 之後的過去分詞會構成被動語態（'will be jeopardized'），但此選項缺少 'be'，使得 'will jeopardized' 在語法上不正確。'Jeopardy' 錯誤，因為它是名詞，意為危險狀態，無法在情態動詞 'will' 之後充當子句的主要動詞。"
      }
    ]
  },
  {
    id: "p6b_med_2",
    passage: `Press Release: Expansion into Southeast Asian Markets

NovaTech Solutions announced today its strategic ___1___ to expand operations into Vietnam, Thailand, and Indonesia. The decision follows a thorough analysis of market conditions and consumer demand in the region. NovaTech ___2___ partnerships with three local distributors, which will enable faster market penetration. The company expects revenues from the Southeast Asian division to ___3___ $50 million by the end of the fiscal year. "This expansion ___4___ our global vision and represents a significant milestone for the company," said CEO Linda Wu.`,
    questions: [
      {
        id: "p6b_med_2_q1", number: 1,
        text: "___1___",
        options: ["A) decision", "B) decide", "C) decisive", "D) decidedly"],
        answer: "A",
        explanation: "'Decision' 正確，因為本句需要一個名詞作為 'its strategic ___' 的受詞，'decision to expand' 是新聞稿中的標準名詞片語模式，名詞之後接不定詞說明所決定的事項。'Decide' 錯誤，因為它是動詞，無法作為所有格 'its' 的受詞，也無法被形容詞 'strategic' 修飾。'Decisive' 錯誤，因為它是形容詞，意為「決定性的」或「表現出決斷力的」，雖然可以修飾名詞，但其自身不能充當 'its strategic ___' 的名詞受詞。'Decidedly' 錯誤，因為它是副詞，無法在此句型結構中充當名詞受詞。"
      },
      {
        id: "p6b_med_2_q2", number: 2,
        text: "___2___",
        options: ["A) has secured", "B) secures", "C) securing", "D) will secure"],
        answer: "A",
        explanation: "'Has secured' 正確，因為現在完成式報告了一項剛完成且直接關聯當前公告的行動（建立合作夥伴關係），這是新聞稿中報告既成事實的標準時態。'Secures' 錯誤，因為現在式描述的是一般或習慣性動作，而非特定的近期成就；報告已完成交易的新聞稿需要完成式或過去式。'Securing' 錯誤，因為現在分詞單獨存在時，若無助動詞，無法成為子句的主要動詞；'NovaTech securing partnerships' 並非語法完整的句子。'Will secure' 錯誤，因為未來式暗示合作夥伴關係尚未建立，與將合作夥伴關係呈現為促成擴張的既成事實的語境相矛盾。"
      },
      {
        id: "p6b_med_2_q3", number: 3,
        text: "___3___",
        options: ["A) exceed", "B) exceeded", "C) exceeds", "D) exceeding"],
        answer: "A",
        explanation: "'Exceed' 正確，因為 'expects revenues to ___' 的結構在不定詞標記 'to' 之後需要動詞原形，'exceed' 正確表達了預期收入將超過五千萬美元的期望。'Exceeded' 錯誤，因為過去分詞無法在此結構中作為不定詞接在 'to' 之後；'expects revenues to exceeded' 在語法上不正確。'Exceeds' 錯誤，因為第三人稱單數現在式主動形式無法接在不定詞標記 'to' 之後；'to exceeds' 在語法上不正確。'Exceeding' 錯誤，因為動名詞或現在分詞不能接在作為不定詞標記的 'to' 之後；在 'expects revenues to' 中，需要介系詞而非不定詞標記 'to' 才能接動名詞。"
      },
      {
        id: "p6b_med_2_q4", number: 4,
        text: "___4___",
        options: ["A) reflects", "B) reflection", "C) reflected", "D) reflecting"],
        answer: "A",
        explanation: "'Reflects' 正確，因為主詞 'this expansion' 是第三人稱單數，需要現在式的 'reflects' 來陳述關於公司策略的當前持續事實，這是執行長直接引言中談及公司願景時的適當時態。'Reflection' 錯誤，因為它是名詞，無法在以 'this expansion' 為主詞的子句中充當主要動詞。'Reflected' 錯誤，因為過去式暗示擴張計畫曾反映公司願景但現在已不再如此，這與公告的現在式語境相矛盾。'Reflecting' 錯誤，因為現在分詞單獨存在時無法成為完整子句的主要動詞；需要助動詞（'is reflecting'）才能在語法上正確。"
      }
    ]
  },
  {
    id: "p6b_med_3",
    passage: `Employee Performance Review Guidelines

Managers are ___1___ to complete annual performance reviews for all direct reports by December 15. The review process involves three components: self-evaluation, peer feedback, and a one-on-one meeting. Employees should be given ___2___ notice prior to their scheduled review. When assessing performance, managers must use the standardized rubric ___3___ in the HR portal. Any disagreements regarding ratings should be ___4___ to HR within five business days of the review meeting.`,
    questions: [
      {
        id: "p6b_med_3_q1", number: 1,
        text: "___1___",
        options: ["A) required", "B) requiring", "C) require", "D) requirement"],
        answer: "A",
        explanation: "'Required' 正確，因為 'are required to complete' 是以過去分詞 'required' 作為述語形容詞的被動情態結構，表達組織對主管施加的強制性義務。'Requiring' 錯誤，因為現在分詞會構成進行式（'are requiring'），意味著主管正主動對某事提出要求，完全顛倒了預期的被動語態含意。'Require' 錯誤，因為動詞原形無法在被動結構中接在 'are' 之後充當述語形容詞或過去分詞；'are require' 在語法上不正確。'Requirement' 錯誤，因為它是名詞，無法在此被動結構中充當過去分詞。"
      },
      {
        id: "p6b_med_3_q2", number: 2,
        text: "___2___",
        options: ["A) adequate", "B) adequacy", "C) adequately", "D) adequateness"],
        answer: "A",
        explanation: "'Adequate' 正確，因為空格需要一個形容詞來修飾名詞 'notice'，'adequate notice' 意為「足夠的事先通知」，是正式人資指導方針中指定通知要求的標準片語。'Adequacy' 錯誤，因為它是名詞，意指充足的狀態，名詞不能在定語位置直接修飾另一個名詞充當形容詞。'Adequately' 錯誤，因為它是修飾動詞或形容詞的副詞，而非名詞；'adequately notice' 需要 'notice' 是動詞而非名詞。'Adequateness' 錯誤，因為它是罕見且極少使用的名詞形式，無法充當修飾 'notice' 的形容詞。"
      },
      {
        id: "p6b_med_3_q3", number: 3,
        text: "___3___",
        options: ["A) provided", "B) providing", "C) provision", "D) provide"],
        answer: "A",
        explanation: "'Provided' 正確，因為過去分詞作為 'rubric' 的後置修飾語，相當於縮減關係子句 'the rubric that is provided in the HR portal'，指明主管必須使用的是哪一份評分標準。'Providing' 錯誤，因為現在分詞作後置修飾語將意為「正在提供某物的評分標準」，暗示評分標準本身在執行提供的動作，這在邏輯上十分彆扭。'Provision' 錯誤，因為它是名詞，意為供給或規定，無法充當名詞 'rubric' 的分詞後置修飾語。'Provide' 錯誤，因為動詞原形無法在縮減關係子句結構中直接後置修飾名詞。"
      },
      {
        id: "p6b_med_3_q4", number: 4,
        text: "___4___",
        options: ["A) escalated", "B) escalating", "C) escalate", "D) escalation"],
        answer: "A",
        explanation: "'Escalated' 正確，因為 'should be escalated to HR' 是被動結構，其中過去分詞 'escalated' 意為正式提報或呈報至更高層級，這是所描述的正式爭議解決程序的精確術語。'Escalating' 錯誤，因為現在分詞會構成進行式（'should be escalating'），暗示歧見正主動地升級某事，完全顛倒了預期的被動語態含意。'Escalate' 錯誤，因為動詞原形無法在被動結構中充當過去分詞；'should be escalate' 在語法上不正確。'Escalation' 錯誤，因為它是名詞，意指升級或提報的行為，無法在此被動動詞片語中充當過去分詞。"
      }
    ]
  },
  {
    id: "p6b_med_4",
    passage: `Customer Notification: Scheduled Maintenance

Dear Valued Customer,

Please be informed that GlobalBank's online services will undergo ___1___ maintenance on Saturday, March 8, from 2:00 a.m. to 6:00 a.m. During this window, access to online banking, mobile apps, and ATMs ___2___ temporarily unavailable. We apologize for any ___3___ this may cause and assure you that we are working diligently to enhance your banking experience. Transactions ___4___ during the maintenance period will be processed once services are restored.

GlobalBank Operations`,
    questions: [
      {
        id: "p6b_med_4_q1", number: 1,
        text: "___1___",
        options: ["A) scheduled", "B) scheduling", "C) schedule", "D) schedules"],
        answer: "A",
        explanation: "'Scheduled' 正確，因為 'scheduled maintenance' 以過去分詞作為複合形容詞修飾 'maintenance'，意指維護作業已事先規劃安排，這是計畫性服務中斷的標準技術術語。'Scheduling' 錯誤，因為現在分詞作修飾語將意為「正在安排某事的維護作業」，暗示維護本身在規劃事件，這在邏輯上說不通。'Schedule' 錯誤，因為名詞或動詞原形無法在定語位置直接修飾另一個名詞充當複合形容詞。'Schedules' 錯誤，因為第三人稱單數動詞形式無法在名詞片語中充當形容詞修飾語。"
      },
      {
        id: "p6b_med_4_q2", number: 2,
        text: "___2___",
        options: ["A) will be", "B) would be", "C) has been", "D) was"],
        answer: "A",
        explanation: "'Will be' 正確，因為維護作業是未來已排定的事件，'will be temporarily unavailable' 正確描述了維護期間服務預期的未來狀態。'Would be' 錯誤，因為條件式 'would be' 暗示假設情況或間接引語，但本通知是關於已確認的未來服務中斷的直接告知。'Has been' 錯誤，因為現在完成式描述與當前相關的過去動作，但在發出通知時維護作業尚未發生。'Was' 錯誤，因為過去式將描述已在過去發生的服務停用，與顧客通知面向未來的目的相矛盾。"
      },
      {
        id: "p6b_med_4_q3", number: 3,
        text: "___3___",
        options: ["A) inconvenience", "B) inconvenient", "C) inconveniently", "D) inconvenienced"],
        answer: "A",
        explanation: "'Inconvenience' 正確，因為本句需要一個名詞作為動詞 'cause' 的受詞，'apologize for any inconvenience this may cause' 是使用名詞形式的標準固定客服表達方式。'Inconvenient' 錯誤，因為它是形容詞，無法作為動詞 'cause' 的受詞；'cause an inconvenient' 在英文中並不成立。'Inconveniently' 錯誤，因為它是副詞，無法充當動詞 'cause' 的名詞受詞。'Inconvenienced' 錯誤，因為它是過去分詞或形容詞，描述的是感到不便的人，而非可以作為 'cause' 的受詞的名詞。"
      },
      {
        id: "p6b_med_4_q4", number: 4,
        text: "___4___",
        options: ["A) initiated", "B) initiating", "C) initiate", "D) initiative"],
        answer: "A",
        explanation: "'Initiated' 正確，因為過去分詞作為 'transactions' 的後置修飾語，相當於縮減關係子句 'transactions that were initiated during the maintenance period'，指明哪些交易將在服務恢復後被處理。'Initiating' 錯誤，因為現在分詞作後置修飾語將意為「正在發起某事的交易」，暗示交易正主動啟動其他事情，這在邏輯上說不通。'Initiate' 錯誤，因為動詞原形無法在縮減關係子句中直接後置修飾名詞；此功能需要使用分詞。'Initiative' 錯誤，因為它是名詞，意指新計畫或新行動，無法充當名詞 'transactions' 的分詞後置修飾語。"
      }
    ]
  },
  {
    id: "p6b_med_5",
    passage: `Training Announcement: Leadership Development Program

We are pleased to announce the launch of our ___1___ Leadership Development Program (LDP) for mid-level managers. The program is ___2___ to equip participants with strategic thinking, communication, and team management skills. Sessions will be held biweekly, with each session ___3___ approximately three hours. Participants who successfully complete all modules will receive a certificate ___4___ by the Institute of Management Excellence.`,
    questions: [
      {
        id: "p6b_med_5_q1", number: 1,
        text: "___1___",
        options: ["A) inaugural", "B) inaugurate", "C) inauguration", "D) inaugurated"],
        answer: "A",
        explanation: "'Inaugural' 正確，因為空格需要一個形容詞來修飾 'Leadership Development Program'，'inaugural' 意為「首次的」或「標誌著開始的」，是首次推出之計畫的精確術語。'Inaugurate' 錯誤，因為它是動詞，意為正式啟動某事，動詞無法在名詞片語中直接作為定語形容詞修飾名詞。'Inauguration' 錯誤，因為它是名詞，意指正式的開幕典禮，名詞無法在定語位置充當形容詞修飾語。'Inaugurated' 錯誤，因為雖然過去分詞有時可以修飾名詞，但 'inaugurated Leadership Development Program' 意為已正式揭幕的計畫，與本身即為首次發布的公告在時態上形成矛盾。"
      },
      {
        id: "p6b_med_5_q2", number: 2,
        text: "___2___",
        options: ["A) designed", "B) designing", "C) design", "D) designer"],
        answer: "A",
        explanation: "'Designed' 正確，因為 'is designed to equip' 是被動形容詞片語，'designed' 表達了計畫的預期目標，'designed to + 不定詞' 是陳述培訓計畫宗旨的標準結構。'Designing' 錯誤，因為現在分詞會構成進行式（'is designing'），暗示計畫正主動設計某事，完全顛倒了預期的被動語態含意。'Design' 錯誤，因為動詞原形或名詞無法在此結構中接在 'is' 之後充當被動形容詞；'is design' 在語法上不正確。'Designer' 錯誤，因為它是名詞，指設計某物的人或物，無法在此被動結構中充當述語形容詞。"
      },
      {
        id: "p6b_med_5_q3", number: 3,
        text: "___3___",
        options: ["A) lasting", "B) lasted", "C) lasts", "D) last"],
        answer: "A",
        explanation: "'Lasting' 正確，因為 'with each session lasting approximately three hours' 的結構是以現在分詞 'lasting' 描述同時發生情況的獨立分詞片語，遵循「with + 名詞片語 + 分詞」的格式來表示每次課程的持續時間。'Lasted' 錯誤，因為過去分詞在此結構中將暗示課程已完成，而公告描述的是正在說明時長的未來課程。'Lasts' 錯誤，因為第三人稱單數限定動詞形式無法在獨立分詞片語中充當分詞；此處需要非限定形式。'Last' 錯誤，因為動詞原形無法在「with + 名詞 + 分詞」的獨立分詞片語結構中充當分詞。"
      },
      {
        id: "p6b_med_5_q4", number: 4,
        text: "___4___",
        options: ["A) accredited", "B) accrediting", "C) accredit", "D) accreditation"],
        answer: "A",
        explanation: "'Accredited' 正確，因為過去分詞作為 'certificate' 的後置修飾語，相當於縮減關係子句 'a certificate that is accredited by the Institute of Management Excellence'，意指該證書獲得該機構的官方認可。'Accrediting' 錯誤，因為現在分詞作後置修飾語將意為「正在授予管理卓越學院認可的證書」，暗示是由證書向學院授予認可，顛倒了原意。'Accredit' 錯誤，因為動詞原形無法在縮減關係子句中直接後置修飾名詞；此語法功能需要使用分詞。'Accreditation' 錯誤，因為它是名詞，意指獲得官方認可的過程，無法充當 'certificate' 的分詞後置修飾語。"
      }
    ]
  },
  {
    id: "p6b_med_6",
    passage: `Quarterly Report Summary — Q3 Highlights

During the third quarter, the company ___1___ total revenue of $3.2 billion, a 12% increase compared to the same period last year. This growth was primarily ___2___ to strong performance in our cloud services division. Operating expenses increased by 5%, ___3___ largely to higher staffing costs associated with our ongoing expansion. Net income ___4___ $480 million, surpassing analyst expectations by a margin of 8%.`,
    questions: [
      {
        id: "p6b_med_6_q1", number: 1,
        text: "___1___",
        options: ["A) reported", "B) reporting", "C) reports", "D) report"],
        answer: "A",
        explanation: "'Reported' 正確，因為過去式描述第三季度一項已完成的財務成果，這是季度報告摘要中陳述歷史財務數字的適當時態。'Reporting' 錯誤，因為現在分詞單獨存在時無法充當子句的主要動詞；需要助動詞（'was reporting'）才能在語法上完整。'Reports' 錯誤，因為現在式暗示的是當前或習慣性動作，而非過去報告期間特定已完成的事件。'Report' 錯誤，因為沒有時態標記的原形動詞無法作為已完成過去事件的主要動詞；需要過去式的 '-ed' 字尾。"
      },
      {
        id: "p6b_med_6_q2", number: 2,
        text: "___2___",
        options: ["A) attributable", "B) attribute", "C) attributing", "D) attribution"],
        answer: "A",
        explanation: "'Attributable' 正確，因為 'primarily attributable to' 是財務報告中的標準形容詞片語，意為「由...所致」或「歸因於」，'attributable to' 是解釋財務成果來源的既定搭配片語。'Attribute' 錯誤，因為它是動詞或名詞，無法在此結構中接在 'was primarily' 之後充當述語形容詞；'was primarily attribute' 在語法上不正確。'Attributing' 錯誤，因為現在分詞會構成進行式（'was attributing'），意味著成長正主動將某事歸因於某物，完全顛倒了預期的被動語態含意。'Attribution' 錯誤，因為它是名詞，意指歸因的行為，無法在 'was primarily' 之後充當述語形容詞。"
      },
      {
        id: "p6b_med_6_q3", number: 3,
        text: "___3___",
        options: ["A) due", "B) owed", "C) caused", "D) resulted"],
        answer: "A",
        explanation: "'Due' 正確，因為 'due largely to higher staffing costs' 使用固定介系詞片語 'due to'，意為「由於」，是商業報告中解釋財務變動原因的標準表達方式。'Owed' 錯誤，因為 'owed to' 意為對某人負有債務，帶有財務義務的涵義，用來解釋費用增加的原因並不恰當。'Caused' 錯誤，因為 'caused to higher staffing costs' 並非標準介系詞片語；'caused by' 語法上雖可接受，但 'caused to' 在此語境中並不慣用。'Resulted' 錯誤，因為 'resulted to' 並非標準英文；正確的介系詞片語是 'resulted from'，而這並不在選項之中，使得 'due to' 成為唯一語法和慣用法上正確的選擇。"
      },
      {
        id: "p6b_med_6_q4", number: 4,
        text: "___4___",
        options: ["A) reached", "B) reaching", "C) reaches", "D) had reached"],
        answer: "A",
        explanation: "'Reached' 正確，因為過去式描述第三季度報告期間一項具體且已完成的財務成果，與整份季度報告摘要中始終使用的過去式一致。'Reaching' 錯誤，因為現在分詞單獨存在時無法充當子句的主要動詞；需要助動詞（'was reaching'）才能作為語法完整的限定動詞。'Reaches' 錯誤，因為現在式描述的是當前或習慣性動作，而非已完成季度中特定的過去財務成果。'Had reached' 錯誤，因為過去完成式描述在另一個過去事件之前已完成的動作，但本句描述的是與其他過去式陳述同一報告期間內的成果。"
      }
    ]
  }
];

const PART6B_HARD = [
  {
    id: "p6b_hard_1",
    passage: `Risk Disclosure Statement — Structured Products

Investors should be aware that structured products, including equity-linked notes and credit-linked notes, involve a high degree of risk and are ___1___ only for sophisticated investors who are capable of understanding and bearing the associated risks. Returns are not guaranteed and may ___2___ significantly from those projected. In the event of issuer insolvency, investors rank as unsecured creditors and may ___3___ part or all of their principal investment. These products are not covered by any statutory compensation scheme. Prospective investors are strongly ___4___ to seek independent financial and legal advice before investing.`,
    questions: [
      {
        id: "p6b_hard_1_q1", number: 1,
        text: "___1___",
        options: ["A) suitable", "B) suitability", "C) suitably", "D) suited"],
        answer: "A",
        explanation: "'Suitable' 正確，因為 'are suitable only for sophisticated investors' 以述語形容詞 'suitable' 搭配介系詞 'for'，這是金融風險揭露語言中指定適合投資人類別的標準固定搭配。'Suitability' 錯誤，因為它是名詞，意指適合的特質，無法在連綴動詞 'are' 之後充當述語形容詞。'Suitably' 錯誤，因為它是副詞，無法充當述語形容詞；'are suitably only for' 在語法上不正確。'Suited' 錯誤，因為雖然 'suited to' 或 'suited for' 可用於類似語境，但 'suited' 作為述語形容詞在固定法律片語 'suitable for sophisticated investors' 中不如 'suitable' 常見且精確。"
      },
      {
        id: "p6b_hard_1_q2", number: 2,
        text: "___2___",
        options: ["A) deviate", "B) deviation", "C) deviating", "D) deviated"],
        answer: "A",
        explanation: "'Deviate' 正確，因為 'may deviate significantly from' 在情態動詞 'may' 之後需要動詞原形，'deviate from' 是正確的不及物片語動詞，意為偏離標準或預估基準。'Deviation' 錯誤，因為它是名詞，無法在情態動詞 'may' 之後充當子句的主要動詞；'may deviation' 在語法上不正確。'Deviating' 錯誤，因為現在分詞無法直接在情態動詞之後充當主要動詞；需要助動詞（'may be deviating'）才能在語法上正確。'Deviated' 錯誤，因為過去分詞若無助動詞（'may have deviated'）則無法直接接在情態動詞之後，且語境描述的是未來的可能性，而非已完成的過去動作。"
      },
      {
        id: "p6b_hard_1_q3", number: 3,
        text: "___3___",
        options: ["A) forfeit", "B) forfeiture", "C) forfeiting", "D) forfeited"],
        answer: "A",
        explanation: "'Forfeit' 正確，因為 'may forfeit part or all of their principal' 在情態動詞 'may' 之後需要動詞原形，'forfeit' 意為因違約或破產而喪失某物，是此風險揭露語境中描述投資損失的精確法律術語。'Forfeiture' 錯誤，因為它是名詞，意指沒收的行為或權利，無法在情態動詞 'may' 之後充當子句的主要動詞。'Forfeiting' 錯誤，因為現在分詞若無助動詞（'may be forfeiting'），無法直接在情態動詞之後充當主要動詞，且加上助動詞後意思會改為持續進行中的動作，而非潛在的後果。'Forfeited' 錯誤，因為過去分詞若無助動詞（'may have forfeited'），無法直接接在情態動詞之後，且揭露文件描述的是潛在的未來風險，而非已完成的過去損失。"
      },
      {
        id: "p6b_hard_1_q4", number: 4,
        text: "___4___",
        options: ["A) advised", "B) advising", "C) advisory", "D) advisable"],
        answer: "A",
        explanation: "'Advised' 正確，因為 'are strongly advised to seek' 是被動結構，其中過去分詞 'advised' 表達對潛在投資人的強烈建議，這是法律及金融風險揭露中的標準正式措辭。'Advising' 錯誤，因為現在分詞會構成進行式（'are advising'），意味著投資人正主動向他人提供建議，完全顛倒了預期的被動語態含意。'Advisory' 錯誤，因為它是名詞或形容詞，意指與建議相關，無法在 'are strongly' 之後充當被動結構中的過去分詞。'Advisable' 錯誤，因為雖然它是形容詞，意為「值得建議的」，但 'are strongly advisable to seek' 並非標準英文；正確的被動結構需要過去分詞 'advised'，而非形容詞 'advisable'。"
      }
    ]
  },
  {
    id: "p6b_hard_2",
    passage: `Board Resolution — Share Buyback Program

WHEREAS the Board of Directors of Meridian Holdings (the "Company") has determined that the repurchase of the Company's common shares is in the best interests of shareholders; and

WHEREAS the Company has sufficient capital reserves to ___1___ the repurchase without impairing its liquidity position;

NOW THEREFORE BE IT RESOLVED that the Company is ___2___ to repurchase up to 5% of its outstanding shares during the next twelve months at prices not ___3___ the prevailing market rate by more than 10%. The CFO is ___4___ authority to execute transactions under this program subject to applicable securities regulations.`,
    questions: [
      {
        id: "p6b_hard_2_q1", number: 1,
        text: "___1___",
        options: ["A) fund", "B) funding", "C) funded", "D) funds"],
        answer: "A",
        explanation: "'Fund' 正確，因為 'sufficient capital reserves to fund the repurchase' 的結構在 'sufficient ... to' 之後需要動詞原形，這是標準的目的不定詞模式，表達準備金足以用於何種用途。'Funding' 錯誤，因為動名詞或現在分詞需要介系詞 'for' 而非不定詞 'to'；'sufficient capital reserves for funding' 語法上可行，但空格前的 'to' 需要接不定詞。'Funded' 錯誤，因為過去分詞無法在此結構中接在不定詞標記 'to' 之後；'sufficient to funded' 在語法上不正確。'Funds' 錯誤，因為第三人稱單數動詞形式無法接在不定詞標記 'to' 之後；'to + 動詞原形' 的結構需要未屈折的原形動詞。"
      },
      {
        id: "p6b_hard_2_q2", number: 2,
        text: "___2___",
        options: ["A) authorized", "B) authorizing", "C) authorize", "D) authoritative"],
        answer: "A",
        explanation: "'Authorized' 正確，因為 'the Company is authorized to repurchase' 是公司決議語言中的被動形容詞結構，過去分詞 'authorized' 意為公司已獲得官方授予的許可，這是董事會決議中授予公司權力的標準措辭。'Authorizing' 錯誤，因為現在分詞會構成進行式（'is authorizing'），暗示公司正主動授權某事，完全顛倒了預期的被動語態含意。'Authorize' 錯誤，因為動詞原形無法在此被動結構中接在 'is' 之後充當述語形容詞；'is authorize' 在語法上不正確。'Authoritative' 錯誤，因為它是形容詞，意為權威且可靠，而非已獲得官方許可的術語；'the Company is authoritative to repurchase' 在語意上不正確。"
      },
      {
        id: "p6b_hard_2_q3", number: 3,
        text: "___3___",
        options: ["A) exceeding", "B) exceeded", "C) exceed", "D) excess"],
        answer: "A",
        explanation: "'Exceeding' 正確，因為 'at prices not exceeding the prevailing market rate' 以帶有否定詞的現在分詞作後置修飾語，相當於縮減關係子句 'at prices that do not exceed the prevailing market rate'，這是公司決議中規定價格上限的標準法律措辭。'Exceeded' 錯誤，因為過去分詞作後置修飾語將意為「被超越的價格」，暗示價格在過去已被超越，無法正確描述面向未來的價格限制。'Exceed' 錯誤，因為動詞原形無法在分詞片語中直接後置修飾名詞；此語法功能需要現在分詞或過去分詞。'Excess' 錯誤，因為它是名詞或形容詞，意指超出允許範圍的數量，無法在此結構中充當分詞後置修飾語。"
      },
      {
        id: "p6b_hard_2_q4", number: 4,
        text: "___4___",
        options: ["A) delegated", "B) delegating", "C) delegate", "D) delegation"],
        answer: "A",
        explanation: "'Delegated' 正確，因為 'the CFO is delegated authority' 在正式公司決議中使用被動過去分詞，意為財務長已被正式賦予行動的權力，'delegate authority to' 是轉移決策權力的標準片語。'Delegating' 錯誤，因為現在分詞會構成進行式（'is delegating'），暗示財務長正主動將權力授予其他人，完全顛倒了預期的被動語態含意。'Delegate' 錯誤，因為動詞原形無法在此被動結構中接在 'is' 之後充當述語形容詞或過去分詞；'is delegate authority' 在語法上不正確。'Delegation' 錯誤，因為它是名詞，意指授權的行為或代表團，無法在此被動結構中充當過去分詞。"
      }
    ]
  },
  {
    id: "p6b_hard_3",
    passage: `Merger Integration Memorandum

Following the successful completion of the acquisition of Vertex Technologies, the integration steering committee has ___1___ a phased integration plan spanning eighteen months. During Phase One (Months 1–6), priority will be given to ___2___ redundant systems and harmonizing financial reporting standards. Phase Two will address workforce restructuring, with particular attention to ___3___ duplication in senior management roles. It is imperative that all affected employees be notified in accordance with applicable labor laws. The committee strongly recommends that no unilateral decisions regarding headcount be ___4___ without prior HR review.`,
    questions: [
      {
        id: "p6b_hard_3_q1", number: 1,
        text: "___1___",
        options: ["A) ratified", "B) ratify", "C) ratifying", "D) ratification"],
        answer: "A",
        explanation: "'Ratified' 正確，因為 'has ratified a phased integration plan' 是需要過去分詞 'ratified' 的現在完成式結構，'ratify' 意為透過正式程序批准計畫，對指導委員會的行動而言用詞精確。'Ratify' 錯誤，因為動詞原形無法在現在完成式結構中充當過去分詞；'has ratify' 在語法上不正確。'Ratifying' 錯誤，因為現在分詞會構成進行式（'has been ratifying'），暗示批准的過程仍在進行中，而非已完成的正式決定。'Ratification' 錯誤，因為它是名詞，意指正式批准的行為，無法在現在完成式動詞片語中充當過去分詞。"
      },
      {
        id: "p6b_hard_3_q2", number: 2,
        text: "___2___",
        options: ["A) consolidating", "B) consolidated", "C) consolidate", "D) consolidation"],
        answer: "A",
        explanation: "'Consolidating' 正確，因為 'priority will be given to consolidating redundant systems' 在介系詞 'to' 之後需要動名詞，'given to' 作為片語結構以動名詞作受詞，與 'harmonizing financial reporting standards' 形成並列結構。'Consolidated' 錯誤，因為過去分詞無法在此結構中作為動名詞受詞接在介系詞 'to' 之後；'given to consolidated' 在語法上不正確。'Consolidate' 錯誤，因為動詞原形無法接在介系詞之後；此處的 'to' 是真正的介系詞，而非不定詞標記，需要接動名詞。'Consolidation' 錯誤，因為雖然名詞語法上可接在介系詞之後，但本句的並列結構使用動名詞（'consolidating ... and harmonizing'），需要動名詞而非名詞。"
      },
      {
        id: "p6b_hard_3_q3", number: 3,
        text: "___3___",
        options: ["A) eliminating", "B) eliminated", "C) eliminate", "D) elimination"],
        answer: "A",
        explanation: "'Eliminating' 正確，因為 'attention to eliminating duplication' 在介系詞 'to' 之後需要動名詞，'attention to' 是以動名詞作受詞的固定片語，遵循本備忘錄通篇使用的介系詞加動名詞模式。'Eliminated' 錯誤，因為過去分詞無法在此結構中作為動名詞接在介系詞 'to' 之後；'attention to eliminated' 在語法上不正確。'Eliminate' 錯誤，因為當 'to' 作為介系詞而非不定詞標記時，動詞原形無法接在其後；此處需要動名詞。'Elimination' 錯誤，因為雖然名詞 'elimination' 在語法上可接在 'to' 之後，但本句的並列結構使用動名詞（'-ing 形式'），且在正式公司備忘錄中，名詞 'elimination' 與動名詞在語域和精確度上有所差異。"
      },
      {
        id: "p6b_hard_3_q4", number: 4,
        text: "___4___",
        options: ["A) implemented", "B) implementing", "C) implement", "D) implementation"],
        answer: "A",
        explanation: "'Implemented' 正確，因為 'recommends that no decisions be implemented without prior HR review' 在 that 子句中使用被動虛擬語氣結構，'be implemented' 需要過去分詞 'implemented' 才能在 'recommends that ... be' 之後構成虛擬語氣的被動語態。'Implementing' 錯誤，因為現在分詞無法在被動虛擬語氣結構中充當過去分詞；'be implementing' 會構成進行式，而非被動語態。'Implement' 錯誤，因為此位置的動詞原形會構成主動虛擬語氣（'that decisions implement'），顛倒了所需的被動語態含意，因為決定是被執行的受體，而非執行者。'Implementation' 錯誤，因為它是名詞，無法在被動虛擬語氣結構中充當過去分詞。"
      }
    ]
  },
  {
    id: "p6b_hard_4",
    passage: `Patent License Agreement — Key Provisions

This Agreement grants Licensee a non-exclusive, non-transferable license to use the Licensed Patents solely for the purposes ___1___ in Schedule A. Any sublicensing of the Licensed Patents is expressly prohibited unless Licensor provides prior written ___2___. The Licensee shall maintain accurate records of all products manufactured under this license and shall make such records ___3___ to Licensor for audit purposes upon fourteen days' notice. In the event of a material breach by Licensee, Licensor reserves the right to ___4___ this Agreement with immediate effect.`,
    questions: [
      {
        id: "p6b_hard_4_q1", number: 1,
        text: "___1___",
        options: ["A) specified", "B) specifying", "C) specify", "D) specification"],
        answer: "A",
        explanation: "'Specified' 正確，因為 'for the purposes specified in Schedule A' 以過去分詞作後置修飾語，相當於縮減關係子句 'purposes that are specified in Schedule A'，這是合約起草中交叉引用附表的標準模式。'Specifying' 錯誤，因為現在分詞作後置修飾語將意為「正在指定某事的目的」，暗示目的本身在執行指定的動作，這在邏輯上說不通。'Specify' 錯誤，因為動詞原形無法在分詞片語中直接後置修飾名詞；此功能需要使用過去分詞或現在分詞。'Specification' 錯誤，因為它是名詞，意指詳細說明，無法充當名詞 'purposes' 的分詞後置修飾語。"
      },
      {
        id: "p6b_hard_4_q2", number: 2,
        text: "___2___",
        options: ["A) consent", "B) consenting", "C) consented", "D) consensual"],
        answer: "A",
        explanation: "'Consent' 正確，因為 'prior written consent' 是合約語言中的固定法律名詞片語，'consent' 是名詞，意為正式同意，'prior written consent' 是授權合約中描述所需授權的既定標準表達。'Consenting' 錯誤，因為現在分詞作形容詞使用，意為「自願同意的」（如 'consenting adults'），而非可被 'written' 修飾的名詞，在此法律語境中不適用。'Consented' 錯誤，因為過去分詞描述的是已完成的同意行為，無法充當在此合約條款中被 'prior written' 修飾的名詞受詞。'Consensual' 錯誤，因為它是形容詞，意為「雙方同意的」，無法在固定法律片語 'prior written ___' 中充當名詞；此處需要名詞。"
      },
      {
        id: "p6b_hard_4_q3", number: 3,
        text: "___3___",
        options: ["A) available", "B) availability", "C) avail", "D) availably"],
        answer: "A",
        explanation: "'Available' 正確，因為 'make such records available to Licensor' 使用「make + 受詞 + 形容詞」的句型，形容詞 'available' 作為受詞補語，描述紀錄被置於可取用的狀態；這是審計查閱條款中的標準法律措辭。'Availability' 錯誤，因為它是名詞，意指可取用的狀態，名詞無法在「make + 受詞 + 形容詞」的結構中充當形容詞受詞補語。'Avail' 錯誤，因為它是動詞或名詞（如 'to no avail'），無法充當形容詞補語；'make records avail' 並非標準英文。'Availably' 錯誤，因為它是罕見的副詞形式，無法充當形容詞受詞補語；「make + 受詞 + 形容詞」的句型需要形容詞，而非副詞。"
      },
      {
        id: "p6b_hard_4_q4", number: 4,
        text: "___4___",
        options: ["A) terminate", "B) termination", "C) terminated", "D) terminating"],
        answer: "A",
        explanation: "'Terminate' 正確，因為 'reserves the right to terminate this Agreement' 在不定詞標記 'to' 之後需要動詞原形，'terminate' 是立即終止合約的標準法律動詞。'Termination' 錯誤，因為它是名詞，意指終止的行為，無法在不定詞標記 'to' 之後作為動詞；'the right to termination' 需要將片語改寫為名詞片語結構。'Terminated' 錯誤，因為過去分詞無法接在不定詞標記 'to' 之後；'the right to terminated' 在語法上不正確。'Terminating' 錯誤，因為當 'to' 作為不定詞標記時，動名詞無法接在其後；雖然動名詞可接在作為介系詞的 'to' 之後（如 'committed to terminating'），但在合約語言中，'the right to + 動名詞' 不如 'the right to + 不定詞' 標準。"
      }
    ]
  },
  {
    id: "p6b_hard_5",
    passage: `Due Diligence Report Summary — Environmental Liabilities

Our review of Greenfield Manufacturing's environmental compliance record revealed several areas of concern. The company has been subject to two regulatory enforcement actions in the past five years, ___1___ from violations of the Clean Air Act. Additionally, three sites have been identified as potentially contaminated, and remediation costs are ___2___ to range between $8 million and $14 million. These contingent liabilities have not been ___3___ on the company's balance sheet, which represents a material ___4___ in accordance with GAAP disclosure requirements.`,
    questions: [
      {
        id: "p6b_hard_5_q1", number: 1,
        text: "___1___",
        options: ["A) stemming", "B) stemmed", "C) stems", "D) stem"],
        answer: "A",
        explanation: "'Stemming' 正確，因為 'enforcement actions stemming from violations' 以現在分詞作後置修飾語，意為「源自」或「起因於」，這是法律及審計報告中指明監管行動來源的標準分詞片語。'Stemmed' 錯誤，原因在於語法上：在後置修飾名詞的縮減關係子句中，主動不及物動詞使用現在分詞（-ing 形式），而非過去分詞；過去分詞保留給被動語態的後置修飾（即對名詞施加動作），但 'stem from' 是主動不及物片語動詞，因此正確的後置修飾語是現在分詞 'stemming'，而非過去分詞 'stemmed'。'Stems' 錯誤，因為第三人稱單數現在式動詞形式無法充當分詞後置修飾語；縮減關係子句中需要的是非限定分詞，而非限定動詞。'Stem' 錯誤，因為動詞原形無法在分詞片語中直接後置修飾名詞；此類縮減關係子句需要使用現在分詞。"
      },
      {
        id: "p6b_hard_5_q2", number: 2,
        text: "___2___",
        options: ["A) estimated", "B) estimating", "C) estimate", "D) estimation"],
        answer: "A",
        explanation: "'Estimated' 正確，因為 'remediation costs are estimated to range' 是被動不定詞結構，過去分詞 'estimated' 意為費用已由專家估算落在某一範圍內，'estimated to + 不定詞' 是財務及審計報告中陳述預估數字的標準措辭。'Estimating' 錯誤，因為現在分詞會構成進行式（'are estimating'），意味著費用正主動執行估算，這對無生命的財務數字而言在邏輯上說不通。'Estimate' 錯誤，因為動詞原形無法在此被動結構中接在 'are' 之後充當述語過去分詞；'are estimate' 在語法上不正確。'Estimation' 錯誤，因為它是名詞，意指估算的行為，無法在 'are' 之後充當被動結構中的述語過去分詞。"
      },
      {
        id: "p6b_hard_5_q3", number: 3,
        text: "___3___",
        options: ["A) disclosed", "B) disclosing", "C) disclose", "D) disclosure"],
        answer: "A",
        explanation: "'Disclosed' 正確，因為 'have not been disclosed on the balance sheet' 是需要過去分詞 'disclosed' 的現在完成式被動結構，'disclose' 是在財務報表中申報負債的精確會計及審計術語。'Disclosing' 錯誤，因為現在分詞會構成進行式（'have been disclosing'），意味著負債正主動揭露某事，完全顛倒了預期的被動語態含意。'Disclose' 錯誤，因為動詞原形無法在現在完成式被動結構中充當過去分詞；'have not been disclose' 在語法上不正確。'Disclosure' 錯誤，因為它是名詞，意指揭露的行為，無法在被動動詞片語中充當過去分詞。"
      },
      {
        id: "p6b_hard_5_q4", number: 4,
        text: "___4___",
        options: ["A) omission", "B) omitting", "C) omit", "D) omitted"],
        answer: "A",
        explanation: "'Omission' 正確，因為 'a material omission in accordance with GAAP' 需要一個名詞作為 'represents a material ___' 的補語，'omission' 是財務報表中未能揭露所需資訊的精確會計及法律術語。'Omitting' 錯誤，因為動名詞形式雖在語法上可接在 'a material' 之後，但會意為「一個重大的遺漏行為」，在 GAAP 揭露語境中既顯得彆扭，也並非標準固定片語。'Omit' 錯誤，因為動詞原形無法在 'represents a material ___' 的片語中充當名詞補語；此位置需要名詞。'Omitted' 錯誤，因為過去分詞作形容詞使用，意為「已被遺漏的」，無法充當名詞補語；'represents a material omitted' 作為名詞片語在語法上不正確。"
      }
    ]
  },
  {
    id: "p6b_hard_6",
    passage: `Central Bank Policy Statement

The Monetary Policy Committee (MPC) voted unanimously to maintain the benchmark interest rate at 4.25%. This decision reflects the Committee's assessment that inflationary pressures, while ___1___, remain above the 2% target. The MPC notes that tightening credit conditions have begun to ___2___ aggregate demand, consistent with projections from the previous quarter. Should inflation fail to ___3___ toward the target within two quarters, the Committee stands ready to implement further ___4___ measures. The next policy review is scheduled for February 15.`,
    questions: [
      {
        id: "p6b_hard_6_q1", number: 1,
        text: "___1___",
        options: ["A) moderating", "B) moderated", "C) moderate", "D) moderation"],
        answer: "A",
        explanation: "'Moderating' 正確，因為 'inflationary pressures, while moderating, remain above the 2% target' 在讓步子句中使用現在分詞，'while + 現在分詞' 描述與主句同時發生的情況，傳達通膨壓力雖在緩和但仍高於目標的含意。'Moderated' 錯誤，因為過去分詞在此位置將意味著壓力已完全消退，這與主句表明壓力仍高於目標相矛盾。'Moderate' 錯誤，因為形容詞原形意為「中等程度的」，僅描述壓力的規模處於平均水準，而非傳達所需的「正在下降中」這一動態過程的細微含意。'Moderation' 錯誤，因為它是名詞，意指適度的狀態，無法在讓步子句 'while ___' 中充當分詞。"
      },
      {
        id: "p6b_hard_6_q2", number: 2,
        text: "___2___",
        options: ["A) dampen", "B) dampening", "C) dampened", "D) dampens"],
        answer: "A",
        explanation: "'Dampen' 正確，因為 'have begun to dampen aggregate demand' 在不定詞標記 'to' 之後需要動詞原形，'dampen' 是描述金融緊縮條件抑制消費與投資需求的標準總體經濟學動詞。'Dampening' 錯誤，因為動名詞或現在分詞不能接在作為不定詞標記的 'to' 之後；'begin to dampening' 在語法上不正確，需要重新改寫句子結構。'Dampened' 錯誤，因為過去分詞無法接在不定詞標記 'to' 之後；'begun to dampened' 在語法上不正確。'Dampens' 錯誤，因為第三人稱單數屈折動詞形式無法接在不定詞標記 'to' 之後；不定詞結構需要未屈折的原形動詞。"
      },
      {
        id: "p6b_hard_6_q3", number: 3,
        text: "___3___",
        options: ["A) converge", "B) convergence", "C) converging", "D) converged"],
        answer: "A",
        explanation: "'Converge' 正確，因為 'fail to converge toward the target' 在不定詞標記 'to' 之後需要動詞原形，'converge toward' 是描述通膨向央行目標利率靠攏並達成的標準貨幣政策術語。'Convergence' 錯誤，因為它是名詞，意指趨近的過程，無法在不定詞標記 'to' 之後充當動詞；'fail to convergence' 在語法上不正確。'Converging' 錯誤，因為動名詞或現在分詞不能接在作為不定詞標記的 'to' 之後；'fail to converging' 在語法上不正確。'Converged' 錯誤，因為過去分詞無法接在不定詞標記 'to' 之後；'fail to converged' 在語法上不正確，且語境描述的是可能發生的未來失敗，而非已完成的過去收斂。"
      },
      {
        id: "p6b_hard_6_q4", number: 4,
        text: "___4___",
        options: ["A) restrictive", "B) restriction", "C) restrict", "D) restrictively"],
        answer: "A",
        explanation: "'Restrictive' 正確，因為 'further restrictive measures' 需要一個形容詞來修飾名詞 'measures'，'restrictive' 意為「緊縮或限制性的」，是貨幣政策語言中描述縮減貨幣供給或信貸供應措施的精確技術性形容詞。'Restriction' 錯誤，因為它是名詞，不能在定語位置直接修飾另一個名詞充當形容詞；'restriction measures' 並非標準的複合名詞片語。'Restrict' 錯誤，因為它是動詞，無法在名詞片語中充當修飾 'measures' 的形容詞修飾語。'Restrictively' 錯誤，因為它是修飾動詞或形容詞的副詞，無法充當定語形容詞修飾名詞 'measures'。"
      }
    ]
  }
];
