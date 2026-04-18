const PART7_EASY = [
  {id:"p7e_p1",type:"single",title:"Shipping Confirmation Email",passage:`From: customer.service@shopmart.com
To: j.robinson@email.com
Subject: Your Order #ORD-78542 Has Shipped

Dear Ms. Robinson,

We are delighted to inform you that your order #ORD-78542 has been shipped and is on its way to you!

Order Details:
- Item: Wireless Bluetooth Headphones (Black)
- Quantity: 1
- Estimated Delivery: March 8-10

You can track your package using tracking number TRK9985432 at our website or on the carrier's site.

If you have any questions about your order, please reply to this email or call our customer service line at 1-800-555-0199, available Monday–Friday, 9 AM to 6 PM.

Thank you for shopping with ShopMart!`,
    questions:[
      {id:"p7e1",text:"What is the purpose of this email?",options:["A) To confirm a payment","B) To notify the customer about a shipment","C) To request a product return","D) To offer a discount"],answer:"B",explanation:"「通知客戶關於出貨事宜」正確，因為電子郵件明確說明「您的訂單 #ORD-78542 已出貨，正在運送途中」，出貨通知是此郵件的明確目的。「確認付款」錯誤，因為郵件中完全未提及任何付款交易或費用。「請求退貨」錯誤，因為郵件描述的是成功送達，而非退貨流程。「提供折扣」錯誤，因為郵件中完全未出現任何折扣或促銷優惠。"},
      {id:"p7e2",text:"How can Ms. Robinson track her package?",options:["A) By calling the store","B) By visiting a ShopMart location","C) By using the tracking number on the website","D) By replying to the email"],answer:"C",explanation:"「使用追蹤號碼在網站上查詢」正確，因為郵件說明「您可使用追蹤號碼 TRK9985432 在我們的網站或承運商網站上追蹤您的包裹」。「致電商店」錯誤，因為打電話僅被提及用於詢問客服問題，而非追蹤包裹。「前往 ShopMart 門市」錯誤，因為文章完全未提及前往實體門市查詢包裹。「回覆電子郵件」錯誤，因為回覆郵件被列為提問的方式，而非追蹤貨物的途徑。"},
      {id:"p7e3",text:"When is customer service available?",options:["A) 7 days a week","B) Monday through Saturday","C) Monday through Friday","D) Weekends only"],answer:"C",explanation:"「週一至週五」正確，因為郵件明確說明客服專線「週一至週五上午9點至下午6點提供服務」。「每週七天」錯誤，因為文章明確規定五天的服務時段，不含週末。「週一至週六」錯誤，因為週六並未包含在所述的服務時間內。「僅限週末」錯誤，因為文章清楚說明只有工作日服務，完全未提及週末服務。"}
    ]
  },
  {id:"p7e_p2",type:"single",title:"Building Maintenance Notice",passage:`PARKVIEW OFFICE BUILDING — Maintenance Notice

Dear Tenants,

Scheduled maintenance work will be carried out on the building's elevator system on Friday, April 5th, from 8:00 AM to 4:00 PM. During this time, Elevator B will be out of service. Elevator A will remain operational.

We apologize for any inconvenience this may cause. Tenants requiring assistance with heavy items should contact the building management office at least 24 hours in advance.

Light refreshments will be provided in the lobby for all tenants affected during the maintenance window.

Thank you for your understanding.
Building Management, Parkview Office Complex`,
    questions:[
      {id:"p7e4",text:"What is the main subject of this notice?",options:["A) A building renovation project","B) A scheduled elevator maintenance","C) New office rental policies","D) Emergency evacuation procedures"],answer:"B",explanation:"「預定的電梯維護作業」正確，因為公告說明「將於4月5日（週五）對大樓電梯系統進行預定維護工程」。「大樓翻修工程」錯誤，因為公告僅涉及電梯維護，而非更大規模的翻修作業。「新的辦公室租賃政策」錯誤，因為公告中完全未提及任何租賃或出租政策。「緊急疏散程序」錯誤，因為此次維護為預先計劃，並非緊急狀況。"},
      {id:"p7e5",text:"What should tenants do if they need help moving heavy items?",options:["A) Use Elevator A","B) Wait until maintenance is complete","C) Contact building management at least 24 hours ahead","D) Call the elevator company directly"],answer:"C",explanation:"「至少提前24小時聯繫大樓管理處」正確，因為公告說明「需要協助搬運重物的租戶應至少提前24小時聯繫大樓管理辦公室」。「使用電梯A」錯誤，因為雖然電梯A仍可正常運行，但公告並未說明它能提供搬運重物的協助服務。「等待維護完成」錯誤，因為公告提供了預先通知的處理程序，而非指示租戶靜待。「直接聯繫電梯公司」錯誤，因為公告指引租戶聯繫大樓管理處，而非電梯公司。"},
      {id:"p7e6",text:"What will be offered to tenants during the maintenance period?",options:["A) Alternative parking","B) Light refreshments in the lobby","C) Temporary office space","D) Discounted rent"],answer:"B",explanation:"「在大廳提供輕點心」正確，因為公告明確說明「維護期間將在大廳為所有受影響的租戶提供輕點心」。「替代停車位」錯誤，因為公告中完全未提及維護期間的停車安排。「臨時辦公空間」錯誤，因為公告中完全未提及任何臨時工作場所。「租金折扣」錯誤，因為公告提供的是點心作為心意，而非任何財務補償。"}
    ]
  },
  {id:"p7e_p3",type:"single",title:"Job Advertisement",passage:`WANTED: EXPERIENCED ACCOUNTANT

DataFlow Technologies is seeking a full-time Senior Accountant to join our finance team.

RESPONSIBILITIES:
• Prepare monthly, quarterly, and annual financial reports
• Manage accounts payable and receivable
• Assist with budget planning and forecasting

REQUIREMENTS:
• Bachelor's degree in Accounting or Finance
• Minimum 5 years of accounting experience
• CPA certification preferred
• Proficiency in QuickBooks and Microsoft Excel

SALARY: $85,000–$105,000 annually, plus benefits

To apply, send your resume to careers@dataflow.com by April 20th.`,
    questions:[
      {id:"p7e7",text:"What type of position is being advertised?",options:["A) Part-time bookkeeper","B) Full-time senior accountant","C) Temporary finance consultant","D) Junior accounting assistant"],answer:"B",explanation:"「全職資深會計師」正確，因為廣告清楚說明 DataFlow Technologies 正在「尋找一位全職資深會計師加入我們的財務團隊」。「兼職記帳員」錯誤，因為該職位明確描述為全職，而非兼職。「臨時財務顧問」錯誤，因為此職位為永久全職職缺，而非顧問或臨時性工作。「初級會計助理」錯誤，因為廣告尋求的是至少具備五年經驗的資深專業人員。"},
      {id:"p7e8",text:"What is stated as preferred but not required?",options:["A) A bachelor's degree","B) Excel proficiency","C) CPA certification","D) 5 years of experience"],answer:"C",explanation:"「CPA證照」正確，因為廣告在條件欄中以「優先考量」作為修飾語列出此項，表示為期望但非強制要求。「學士學位」錯誤，因為文章將會計或財務學士學位列為硬性要求，並無「優先考量」的修飾語。「Excel熟練度」錯誤，因為熟練使用 QuickBooks 及 Microsoft Excel 被列為必要條件，而非僅作為優先考量。「5年工作經驗」錯誤，因為最少5年會計工作經驗被列為強制性要求。"}
    ]
  },
  {id:"p7e_p4",type:"single",title:"Company Memo",passage:`MEMORANDUM

TO: All Staff
FROM: HR Department
DATE: October 5th
SUBJECT: Updated Work-From-Home Policy

Effective November 1st, all employees will be eligible to work from home up to two days per week, subject to manager approval. The following guidelines apply:

1. Employees must be reachable by phone and email during core hours (9 AM – 3 PM).
2. All work-from-home days must be scheduled in advance using the HR portal.
3. Employees must ensure they have a suitable, distraction-free workspace at home.
4. Performance expectations remain the same regardless of work location.

For questions, please contact the HR department at hr@company.com.`,
    questions:[
      {id:"p7e9",text:"How many days per week can employees work from home?",options:["A) One day","B) Two days","C) Three days","D) Five days"],answer:"B",explanation:"「兩天」正確，因為備忘錄明確說明員工「每週最多可居家辦公兩天」。「一天」錯誤，因為備忘錄規定最多兩天，而非一天。「三天」錯誤，因為備忘錄所載明的上限為每週兩天。「五天」錯誤，因為此政策不允許完全遠端辦公的安排。"},
      {id:"p7e10",text:"What must employees do before working from home?",options:["A) Buy office equipment","B) Schedule days in advance via the HR portal","C) Work overtime to compensate","D) Get written approval from the CEO"],answer:"B",explanation:"「透過人資系統提前排定天數」正確，因為準則第2條說明「所有居家辦公日期均須透過人資系統提前排定」。「購買辦公設備」錯誤，因為備忘錄要求員工具備適合的工作場所，但並未指示購買設備。「加班補工」錯誤，因為準則第4條說明績效期望維持不變，並未提及補償性加班。「取得執行長書面核准」錯誤，因為備忘錄說明需要的是主管核准，而非執行長核准。"},
      {id:"p7e11",text:"According to the memo, what is true about performance expectations?",options:["A) They are lowered for remote workers","B) They are the same regardless of location","C) They are determined by the manager","D) They are reviewed quarterly"],answer:"B",explanation:"「不論工作地點均相同」正確，因為準則第4條明確說明「不論工作地點為何，績效期望維持不變」。「對遠端工作者有所降低」錯誤，因為備忘錄的說法恰恰相反——期望不因地點而改變。「由主管決定」錯誤，因為雖然主管負責核准排程，但備忘錄並未說明主管設定個人績效期望。「每季檢討一次」錯誤，因為備忘錄中完全未提及對績效期望進行季度審查。"}
    ]
  },
  {id:"p7e_p5",type:"single",title:"Event Invitation",passage:`You're Invited!

TechSpark Annual Innovation Summit
Date: Saturday, November 15th
Time: 9:00 AM – 6:00 PM
Venue: Grand Convention Center, Hall B

Join us for a day of inspiring talks, hands-on workshops, and networking opportunities with leaders from the tech industry.

HIGHLIGHTS:
• Keynote by industry pioneer Dr. Sarah Lin
• 15+ breakout sessions on AI, blockchain, and cloud computing
• Startup exhibition featuring 50 emerging companies
• Networking lunch provided

REGISTRATION: Free for TechSpark members | $75 for non-members
Register at techspark.com/summit before November 10th. Spaces are limited.`,
    questions:[
      {id:"p7e12",text:"How much does registration cost for TechSpark members?",options:["A) $75","B) $50","C) Free","D) $25"],answer:"C",explanation:"「免費」正確，因為報名費用欄明確說明「TechSpark 會員免費」。「75美元」錯誤，因為那是非會員的報名費，而非會員費用。「50美元」錯誤，因為邀請函中完全未提及50美元的價格。「25美元」錯誤，因為並未提及任何25美元的優惠價；會員完全免費參加。"},
      {id:"p7e13",text:"What is the registration deadline?",options:["A) November 10th","B) November 15th","C) November 1st","D) November 20th"],answer:"A",explanation:"「11月10日」正確，因為邀請函說明「請在11月10日前於 techspark.com/summit 完成報名」。「11月15日」錯誤，因為那是活動本身的日期，而非報名截止日期。「11月1日」錯誤，因為邀請函中並未提及11月1日的截止日期。「11月20日」錯誤，因為該日期在活動結束之後，且文章中並未提及。"},
      {id:"p7e14",text:"What is provided during the event?",options:["A) Transportation","B) Hotel accommodation","C) Networking lunch","D) Conference materials by mail"],answer:"C",explanation:"「交流午餐」正確，因為亮點欄目明確列出「提供交流午餐」為活動內容之一。「交通接送」錯誤，因為邀請函中完全未提及為出席者安排任何交通事宜。「住宿安排」錯誤，因為邀請函中並未提及任何住宿安排。「會議資料郵寄」錯誤，因為邀請函未提及在活動後寄送任何資料給出席者。"}
    ]
  },
  {id:"p7e_p6",type:"single",title:"Product Return Policy",passage:`RETURN & EXCHANGE POLICY — TechMart

We want you to be completely satisfied with your purchase. If for any reason you are not, here is our return policy:

• Items may be returned within 30 days of purchase for a full refund.
• Items must be in their original, unopened packaging.
• Proof of purchase (receipt or order confirmation) is required.
• Electronics opened for inspection may be returned within 15 days only.
• Custom orders and downloadable software are non-refundable.

To initiate a return, visit any TechMart store or go to returns.techmart.com. Refunds are processed within 5–7 business days.

For assistance, call 1-888-TECHMART Monday–Saturday, 8 AM to 8 PM.`,
    questions:[
      {id:"p7e15",text:"What is the general return window for items in original packaging?",options:["A) 15 days","B) 30 days","C) 60 days","D) 7 days"],answer:"B",explanation:"「30天」正確，因為政策說明「商品可於購買後30天內退貨並獲全額退款」。「15天」錯誤，因為較短的15天期限專門適用於已拆封檢查的電子產品，而非原包裝商品。「60天」錯誤，因為政策中完全未提及60天的退貨期限。「7天」錯誤，因為7天是退款的處理時間，而非退貨期限。"},
      {id:"p7e16",text:"Which items CANNOT be returned?",options:["A) Electronics","B) Opened packages","C) Custom orders and downloadable software","D) Items without a warranty"],answer:"C",explanation:"「客製化訂單及可下載軟體」正確，因為政策明確說明「客製化訂單及可下載軟體不予退款」。「電子產品」錯誤，因為電子產品若已拆封檢查，可於15天內退貨。「已拆封包裝」錯誤，因為雖然商品一般須保持原包裝，但政策確實允許已拆封電子產品在較短期限內退貨。「無保固商品」錯誤，因為保固狀態並未被提及為影響退貨資格的條件。"},
      {id:"p7e17",text:"How long does a refund take to process?",options:["A) 1–2 business days","B) 3–4 business days","C) 5–7 business days","D) 10 business days"],answer:"C",explanation:"「5至7個工作日」正確，因為政策明確說明「退款將在5至7個工作日內處理完畢」。「1至2個工作日」錯誤，因為政策規定的處理時間比一至兩天更長。「3至4個工作日」錯誤，因為退貨政策中完全未提及此時間範圍。「10個工作日」錯誤，因為政策規定的上限為7個工作日，而非10天。"}
    ]
  },
  {id:"p7e_p7",type:"single",title:"Newsletter Announcement",passage:`GREENFIELD QUARTERLY NEWSLETTER

Dear Clients and Partners,

We are thrilled to share that Greenfield Consulting has been recognized as one of the Top 50 Fastest-Growing Companies in North America by Business Today magazine. This recognition reflects the hard work of our entire team and the trust our clients place in us.

In other news, we are expanding our Digital Transformation practice with three new service areas: AI Integration, Cloud Migration, and Cybersecurity Advisory. These services are available to all existing clients at preferential rates.

Our annual Client Appreciation Dinner will be held on December 5th at the Grand Hotel. Invitations will be sent to all active clients next week.

Thank you for your continued partnership.`,
    questions:[
      {id:"p7e18",text:"What achievement is mentioned in the newsletter?",options:["A) Opening a new office","B) Being recognized as a top fast-growing company","C) Launching a new software product","D) Reaching one million customers"],answer:"B",explanation:"「獲評為頂尖高速成長企業」正確，因為電子報說明 Greenfield Consulting「已被《Business Today》雜誌評選為北美前50大高速成長企業之一」。「開設新辦公室」錯誤，因為電子報中並未提及任何新辦公室的開設。「推出新軟體產品」錯誤，因為電子報宣布的是新服務領域，而非軟體產品。「達到百萬客戶里程碑」錯誤，因為文章中並未提及任何客戶數量的里程碑。"},
      {id:"p7e19",text:"Which new service area is NOT mentioned?",options:["A) AI Integration","B) Cloud Migration","C) Data Analytics","D) Cybersecurity Advisory"],answer:"C",explanation:"「資料分析」是正確答案，因為電子報列出的三個新服務領域為：AI整合、雲端遷移及網路安全顧問，其中並未出現資料分析。「AI整合」錯誤，因為它被明確列為三個新服務領域之一。「雲端遷移」錯誤，因為它被明確列為第二個新服務領域。「網路安全顧問」錯誤，因為它被明確列為第三個新服務領域。"},
      {id:"p7e20",text:"When will invitations for the Client Appreciation Dinner be sent?",options:["A) Immediately","B) On December 5th","C) Next week","D) At the end of the year"],answer:"C",explanation:"「下週」正確，因為電子報說明「邀請函將於下週寄送給所有現有客戶」。「立即」錯誤，因為電子報明確說明邀請函將於下週發出，暗示會有短暫延遲。「12月5日」錯誤，因為那是晚宴本身的日期，而非寄送邀請函的日期。「年底時」錯誤，因為電子報中並未提及任何年底寄送邀請函的時間安排。"}
    ]
  },
  {id:"p7e_p8",type:"single",title:"Travel Booking Confirmation",passage:`BOOKING CONFIRMATION — SkyJet Airlines

Dear Mr. Park,

Your flight booking has been confirmed. Please find the details below:

Flight: SJ-1042
Route: Seoul (ICN) → Tokyo (NRT)
Departure: March 22nd at 07:30
Arrival: March 22nd at 09:45
Class: Economy
Seat: 24C (Window)

Booking Reference: SJ20244892
Ticket issued to: James Park

IMPORTANT:
• Please check in online 24 hours before departure.
• Baggage allowance: 1 piece (23 kg) checked, 1 carry-on (7 kg).
• Arrive at the airport at least 90 minutes before departure.

For changes or cancellations, visit skyjet.com or call +82-2-5555-1200.`,
    questions:[
      {id:"p7e21",text:"What class did Mr. Park book?",options:["A) Business","B) First Class","C) Economy","D) Premium Economy"],answer:"C",explanation:"「經濟艙」正確，因為訂票確認函在航班資訊欄中明確列出「艙等：經濟艙」。「商務艙」錯誤，因為確認函中完全未提及商務艙。「頭等艙」錯誤，因為訂票明確說明為經濟艙，而非頭等艙。「豪華經濟艙」錯誤，因為確認函顯示的是標準經濟艙訂票，並無任何升艙說明。"},
      {id:"p7e22",text:"When should Mr. Park arrive at the airport at the latest?",options:["A) 07:30","B) 06:00","C) 05:30","D) 08:00"],answer:"B",explanation:"「06:00」正確，因為確認函說明朴先生須「至少在起飛前90分鐘抵達機場」，而起飛時間為07:30，因此07:30減去90分鐘等於06:00。「07:30」錯誤，因為那是起飛時間本身——那時才抵達已經太遲。「05:30」錯誤，因為那相當於起飛前120分鐘，超出最低要求。「08:00」錯誤，因為那是起飛後30分鐘，屆時飛機早已離開。"},
      {id:"p7e23",text:"How can Mr. Park cancel his booking?",options:["A) By visiting a SkyJet office","B) By calling or visiting the website","C) By sending an email","D) Only at the airport"],answer:"B",explanation:"「致電或前往網站辦理」正確，因為確認函說明「如需變更或取消，請前往 skyjet.com 或致電 +82-2-5555-1200」。「前往 SkyJet 辦公室」錯誤，因為文章指引顧客至網站或電話，而非實體辦公室。「發送電子郵件」錯誤，因為確認函中並未提供取消訂票的電子郵件地址。「僅限在機場辦理」錯誤，因為確認函提供線上及電話選項，無需親赴機場。"}
    ]
  }
];

const PART7_MEDIUM = [
  {id:"p7m_p1",type:"single",title:"Business Proposal Letter",passage:`NovaTech Solutions
1200 Enterprise Avenue, Austin, TX 78701

March 15, 20XX

Ms. Diana Hoffmann
Procurement Manager, Stellar Manufacturing Inc.

Dear Ms. Hoffmann,

Thank you for considering NovaTech Solutions as a potential vendor for your ERP implementation project. Following our meeting last Tuesday, we are pleased to submit this formal proposal for your review.

NovaTech has over 12 years of experience implementing ERP solutions for mid-to-large manufacturing companies. Our platform, NovaPlan 4.0, is currently deployed at over 200 facilities worldwide, with an average implementation time of 14 weeks.

Our proposal includes:
• Full system deployment and customization: $180,000
• Staff training program (20 hours): $15,000
• One-year technical support and maintenance: $24,000
• Total project cost: $219,000

We are prepared to offer a 10% discount should you commit to a 3-year support contract. Payment terms are net 60 days from invoice date.

I will follow up with you by phone next Wednesday to address any questions.

Sincerely,
Robert Cheng, Director of Business Development`,
    questions:[
      {id:"p7m1",text:"Why is Robert Cheng writing to Ms. Hoffmann?",options:["A) To request a meeting","B) To submit a project proposal","C) To confirm a signed contract","D) To report a system error"],answer:"B",explanation:"「提交專案提案」正確，因為信件說明「我們很榮幸提交此正式提案供您審閱」，提交提案是此信件明確的目的。「請求安排會議」錯誤，因為上週二的會議已經舉行；此信件是後續跟進，而非會議邀請。「確認已簽署的合約」錯誤，因為提案仍在等待審閱，代表合約尚未簽署。「回報系統錯誤」錯誤，因為信件中完全未提及任何技術問題。"},
      {id:"p7m2",text:"How long does NovaTech typically take to implement its ERP system?",options:["A) 10 weeks","B) 12 weeks","C) 14 weeks","D) 20 weeks"],answer:"C",explanation:"「14週」正確，因為信件說明該平台的「平均導入時間為14週」。「10週」錯誤，因為提案中完全未提及10週的導入時程。「12週」錯誤，因為12指的是 NovaTech 的業界經驗年數，而非導入時間長度。「20週」錯誤，因為20指的是員工培訓計畫的小時數，而非導入時間。"},
      {id:"p7m3",text:"What condition must be met to receive the 10% discount?",options:["A) Payment within 30 days","B) Purchasing the full training package","C) Committing to a 3-year support contract","D) Ordering before the end of the fiscal year"],answer:"C",explanation:"「簽訂3年支援合約」正確，因為信件說明「若您承諾簽訂3年支援合約，我們願意提供10%折扣」。「30天內付款」錯誤，因為付款條件為發票日起60天，且信件未提及提前付款可獲折扣。「購買完整培訓套件」錯誤，因為培訓計畫為獨立費用項目，與折扣條件無關。「在財政年度結束前下訂」錯誤，因為信件中完全未提及任何財政年度的截止日期。"},
      {id:"p7m4",text:"When does Mr. Cheng plan to contact Ms. Hoffmann next?",options:["A) By phone the following Tuesday","B) By phone the following Wednesday","C) By email next Friday","D) At a scheduled meeting next week"],answer:"B",explanation:"「下週三以電話聯繫」正確，因為信件明確說明「我將於下週三以電話與您聯繫跟進」。「下週二以電話聯繫」錯誤，因為週二是上次會議的日期，而非計劃中的後續聯繫時間。「下週五以電子郵件聯繫」錯誤，因為信件說明將於週三致電，而非週五發送電子郵件。「下週安排會面」錯誤，因為信件描述的是電話跟進，而非面對面會議。"}
    ]
  },
  {id:"p7m_p2",type:"double",title:"Survey + Article",passages:[
    {label:"Text 1 — Industry Survey",content:`REMOTE WORK TRENDS IN TECH INDUSTRY

A new industry survey by WorkFuture Research found that 68% of technology companies now offer permanent remote or hybrid work arrangements, up from just 23% in 2019. The survey, covering 1,500 companies across North America, found companies offering flexible arrangements reported 34% lower employee turnover and 22% higher productivity scores.

Dr. Amanda Foster, lead researcher, noted that the shift is largely driven by employee demand. "Flexibility is now a baseline expectation for tech talent," she said. "Companies that fail to adapt risk losing their competitive edge."

The survey also identified challenges: 41% of managers reported difficulty monitoring team performance remotely, and 38% cited collaboration and communication issues as ongoing concerns.`},
    {label:"Text 2 — Company Review",content:`★★★★☆ (4/5) — Senior Software Engineer at CloudBridge Technologies

I've been at CloudBridge for three years and recently transitioned to their hybrid work model. Overall, I'm satisfied, but a few things to note.

Positives: Management trusts employees, and flexible scheduling has improved my work-life balance. We have a home office stipend and great collaboration tools.

Challenges: Cross-team collaboration can be frustrating when not everyone is on the same schedule. Also, newer employees sometimes struggle to get mentored effectively.

Overall, CloudBridge handles remote work better than most, but there's still room for improvement.`}
  ],
    questions:[
      {id:"p7m5",text:"According to Text 1, what is a key finding of the WorkFuture survey?",options:["A) Most companies prefer full in-office work","B) Remote work increased productivity by 68%","C) Flexible arrangements reduce employee turnover","D) Tech companies are reducing office space"],answer:"C",explanation:"「彈性工作安排可降低員工離職率」正確，因為文本1說明提供彈性安排的公司「回報員工離職率降低了34%」。「多數公司偏好完全在辦公室上班」錯誤，因為調查發現68%的公司現已提供遠端或混合辦公安排。「遠端辦公使生產力提升68%」錯誤，因為68%指的是提供彈性工作的公司比例，而非生產力數字。「科技公司正在縮減辦公空間」錯誤，因為調查中並未討論辦公空間的決策。"},
      {id:"p7m6",text:"What does the reviewer in Text 2 identify as a challenge?",options:["A) Lack of remote work tools","B) No home office stipend","C) Cross-team collaboration difficulties","D) Poor management performance"],answer:"C",explanation:"「跨團隊協作困難」正確，因為文本2說明「當每個人的時間表不一致時，跨團隊協作可能令人感到沮喪」。「缺乏遠端工作工具」錯誤，因為評論者提到擁有「優質的協作工具」是正面之處。「無居家辦公津貼」錯誤，因為評論者明確提及有收到居家辦公津貼。「管理績效不佳」錯誤，因為評論者表示「管理層信任員工」為正面評價。"},
      {id:"p7m7",text:"Which concern appears in BOTH texts?",options:["A) Home office expenses","B) Communication and collaboration issues","C) Employee compensation","D) Office real estate costs"],answer:"B",explanation:"「溝通與協作問題」正確，因為文本1指出38%的管理者將「協作與溝通問題列為持續性顧慮」，而文本2也說明跨團隊協作令人感到沮喪。「居家辦公費用」錯誤，因為只有文本2提及居家辦公津貼；文本1並未涉及此話題。「員工薪酬」錯誤，因為兩篇文本均未將薪資或報酬討論為顧慮事項。「辦公室不動產成本」錯誤，因為兩篇文本均未提及辦公空間的費用。"},
      {id:"p7m8",text:"What percentage of companies offered remote work in 2019, according to Text 1?",options:["A) 68%","B) 41%","C) 34%","D) 23%"],answer:"D",explanation:"「23%」正確，因為文本1說明目前有68%的公司提供遠端或混合辦公安排，「相較於2019年的僅23%有所提升」。「68%」錯誤，因為那是目前提供彈性工作安排的公司比例，而非2019年的數字。「41%」錯誤，因為那是回報遠端監控團隊績效有困難的管理者比例。「34%」錯誤，因為那是提供彈性安排的公司所回報的員工離職率降幅。"}
    ]
  },
  {id:"p7m_p3",type:"single",title:"HR Policy",passage:`DELTA FINANCIAL SERVICES
EMPLOYEE WELLNESS PROGRAM

Delta Financial Services is committed to supporting the health and well-being of all employees. Effective this year, the following wellness benefits are available:

PHYSICAL HEALTH
• Company-subsidized gym membership: up to $50/month reimbursement
• Annual health screening: fully covered
• Flu vaccination: provided free at the workplace each October

MENTAL HEALTH
• Access to confidential counseling: up to 8 sessions per year at no cost
• Mental health days: 3 additional paid days off per year
• Online mindfulness and stress management program

FINANCIAL WELLNESS
• Retirement planning workshop: held quarterly
• Financial advisory consultation: 2 sessions per year included

To enroll or for more information, contact wellness@delta.com or visit the HR portal under "Benefits."`,
    questions:[
      {id:"p7m9",text:"What is the maximum gym membership reimbursement per month?",options:["A) $25","B) $50","C) $75","D) $100"],answer:"B",explanation:"「50美元」正確，因為政策說明公司提供健身房會員費「每月最高50美元的報銷」。「25美元」錯誤，因為所述的報銷上限為每月50美元，而非25美元。「75美元」錯誤，因為員工健康計畫說明中完全未出現75美元的金額。「100美元」錯誤，因為計畫明確將健身房報銷上限設定為每月50美元。"},
      {id:"p7m10",text:"How many counseling sessions are covered per year?",options:["A) 3","B) 5","C) 8","D) 12"],answer:"C",explanation:"「8次」正確，因為政策說明員工可享「保密諮商：每年最多8次，費用全免」。「3次」錯誤，因為3指的是額外的心理健康假天數，而非諮商次數。「5次」錯誤，因為健康計畫中完全未出現5次的數字。「12次」錯誤，因為涵蓋的諮商次數上限為8次，而非12次。"},
      {id:"p7m11",text:"Which wellness benefit is NOT listed in the program?",options:["A) Financial advisory consultation","B) Flu vaccination","C) Yoga classes","D) Mental health days"],answer:"C",explanation:"「瑜珈課程」是正確答案，因為此福利在健康計畫清單中完全未出現。「財務諮詢」錯誤，因為政策在財務健康項下明確列出每年2次財務諮詢。「流感疫苗接種」錯誤，因為政策列出每年10月在工作場所免費提供流感疫苗接種。「心理健康假」錯誤，因為每年3天額外帶薪心理健康假已列在心理健康福利項下。"},
      {id:"p7m12",text:"When are retirement planning workshops held?",options:["A) Monthly","B) Twice a year","C) Quarterly","D) Annually"],answer:"C",explanation:"「每季」正確，因為政策說明「退休規劃研討會：每季舉辦一次」。「每月」錯誤，因為研討會每季舉辦，而非每個月。「每年兩次」錯誤，因為每季代表每年四次，而非兩次。「每年一次」錯誤，因為一年一次的頻率低於所規定的每季一次時程。"}
    ]
  },
  {id:"p7m_p4",type:"single",title:"Press Release",passage:`FOR IMMEDIATE RELEASE

AXIOM TECH ACQUIRES DATABRIDGE SOLUTIONS FOR $340 MILLION

San Francisco, CA — Axiom Technologies, a leading provider of enterprise software, today announced the acquisition of DataBridge Solutions, a cloud-based data integration startup, for approximately $340 million.

The acquisition is expected to close in Q4 of this year, subject to regulatory approval. DataBridge's platform, which connects over 200 enterprise data sources, will be integrated into Axiom's flagship product suite within 18 months.

"This acquisition accelerates our vision of becoming the one-stop platform for enterprise data management," said Axiom CEO Lisa Chang. "DataBridge's technology is a natural complement to our existing capabilities."

DataBridge, founded in 2018, employs 85 people across offices in New York and Boston. All DataBridge employees will be offered positions within Axiom following the close of the transaction.`,
    questions:[
      {id:"p7m13",text:"For how much did Axiom acquire DataBridge?",options:["A) $200 million","B) $240 million","C) $340 million","D) $540 million"],answer:"C",explanation:"「3.4億美元」正確，因為新聞稿說明收購價格為「約3.4億美元」。「2億美元」錯誤，因為新聞稿中完全未出現2億美元的數字。「2.4億美元」錯誤，因為公告中完全未提及2.4億美元的金額。「5.4億美元」錯誤，因為所述的收購價格為3.4億美元，而非5.4億美元。"},
      {id:"p7m14",text:"When is the acquisition expected to close?",options:["A) Immediately","B) Q3 of this year","C) Q4 of this year","D) Next year"],answer:"C",explanation:"「本年度第四季」正確，因為新聞稿說明「收購預計在本年度第四季完成，有待監管機關核准」。「立即」錯誤，因為交易有待監管核准，代表無法即時完成。「本年度第三季」錯誤，因為所述的交割季度為第四季，而非第三季。「明年」錯誤，因為新聞稿明確說明將在本年度第四季完成，而非翌年。"},
      {id:"p7m15",text:"What will happen to DataBridge employees?",options:["A) They will be let go","B) They will stay with DataBridge independently","C) They will be offered positions at Axiom","D) They will work remotely only"],answer:"C",explanation:"「將獲得在 Axiom 任職的機會」正確，因為新聞稿說明「交易完成後，所有 DataBridge 員工均將獲得在 Axiom 任職的機會」。「將被解雇」錯誤，因為新聞稿明確說明所有員工均將獲得職位。「將繼續在獨立的 DataBridge 任職」錯誤，因為 DataBridge 正在被收購，員工將過渡至 Axiom。「將僅採遠端辦公」錯誤，因為新聞稿中並未提及 DataBridge 員工的任何遠端辦公安排。"},
      {id:"p7m16",text:"How long will it take to integrate DataBridge's platform into Axiom's product suite?",options:["A) 6 months","B) 12 months","C) 18 months","D) 24 months"],answer:"C",explanation:"「18個月」正確，因為新聞稿說明 DataBridge 的平台「將在18個月內整合至 Axiom 的旗艦產品套件」。「6個月」錯誤，因為新聞稿中完全未提及6個月的整合時程。「12個月」錯誤，因為所述的整合期間為18個月，而非12個月。「24個月」錯誤，因為新聞稿指定的時間範圍較短，為18個月而非兩年。"}
    ]
  },
  {id:"p7m_p5",type:"single",title:"Training Program",passage:`LEADERSHIP DEVELOPMENT PROGRAM — SPRING COHORT

Applications are now open for the Leadership Development Program (LDP), designed for high-potential employees at the senior associate to manager level. The program runs for 12 weeks and covers the following modules:

Week 1–3: Strategic Thinking and Business Acumen
Week 4–6: People Management and Team Building
Week 7–9: Communication, Influence, and Stakeholder Engagement
Week 10–12: Innovation, Change Management, and Project Execution

ELIGIBILITY: Minimum 3 years with the company and a "Meets Expectations" or higher in the last two performance reviews. Nominations must come from your direct manager.

COMMITMENT: 2 full days per month, plus individual coaching sessions and self-directed learning (est. 4 hours/week).

Applications close February 28th. For more information, visit the Learning & Development portal.`,
    questions:[
      {id:"p7m17",text:"What level of employee is the program designed for?",options:["A) All employees","B) Senior associates to managers","C) Vice presidents and above","D) New hires only"],answer:"B",explanation:"「資深專員至經理級別」正確，因為計畫說明其「針對資深專員至經理級別的高潛力員工設計」。「所有員工」錯誤，因為計畫針對特定級別範圍，並設有新進或初階員工可能無法符合的資格條件。「副總裁及以上」錯誤，因為計畫的上限為經理級別，而非副總裁。「僅限新進員工」錯誤，因為資格要求最低需在公司任職3年。"},
      {id:"p7m18",text:"What performance review rating is required to be eligible?",options:["A) Outstanding only","B) Meets Expectations or higher","C) Exceeds Expectations only","D) Any rating"],answer:"B",explanation:"「符合期望或以上」正確，因為資格條件說明「最近兩次績效考核須達符合期望或以上」。「僅限優秀」錯誤，因為最低門檻為符合期望，較高評級也可符合資格，但優秀並非唯一可接受的評級。「僅限超越期望」錯誤，因為符合期望也能滿足要求，使此選項過於嚴格。「任何評級均可」錯誤，因為低於期望的評級不能使員工取得計畫參加資格。"},
      {id:"p7m19",text:"What is covered in weeks 7 through 9?",options:["A) Strategic Thinking","B) People Management","C) Communication and Stakeholder Engagement","D) Change Management"],answer:"C",explanation:"「溝通與利害關係人管理」正確，因為課程表說明「第7至9週：溝通、影響力與利害關係人管理」。「策略思維」錯誤，因為該模組涵蓋於第1至3週，而非第7至9週。「人員管理」錯誤，因為那是第4至6週的重點內容。「變革管理」錯誤，因為變革管理屬於第10至12週有關創新與專案執行的模組。"},
      {id:"p7m20",text:"How must employees apply for the program?",options:["A) By self-applying online","B) Via a nomination from their direct manager","C) By contacting HR directly","D) Through an open interview process"],answer:"B",explanation:"「由直屬主管提名」正確，因為資格條件說明「提名須由直屬主管提出」。「自行線上申請」錯誤，因為員工不能自我提名；提名必須來自主管。「直接聯繫人資部門」錯誤，因為人資部門並非列為申請的入口；必須由直屬主管發起提名。「透過公開面試流程」錯誤，因為並未提及任何面試流程——入選途徑為主管提名。"}
    ]
  },
  {id:"p7m_p6",type:"double",title:"Hotel Booking + Complaint",passages:[
    {label:"Text 1 — Hotel Booking Confirmation",content:`BOOKING CONFIRMATION
The Meridian Grand Hotel

Guest: Thomas Yuen
Check-in: September 14
Check-out: September 17
Room Type: Deluxe King Room (Non-smoking)
Rate: $210/night — Total: $630 (3 nights)
Booking Reference: MGH-4452

Inclusions: Complimentary breakfast, free Wi-Fi, airport shuttle (arrival only)
Cancellation Policy: Free cancellation up to 48 hours before check-in. After that, one night's charge applies.
Loyalty Points: 315 points earned upon checkout.`},
    {label:"Text 2 — Guest Feedback Form",content:`Guest: Thomas Yuen | Stay: Sept 14–17 | Overall Rating: 2/5

I am writing to express my disappointment with my recent stay. While the room was comfortable and the breakfast was excellent, there were several issues.

The airport shuttle I expected upon arrival was not available — staff said the service had been suspended that week due to driver availability. I was not informed of this in advance and had to take a taxi at my own expense.

Additionally, the Wi-Fi in my room was extremely slow and unreliable for the duration of my stay, making it difficult to work. Given that I was attending a business conference, reliable internet is essential.

I would appreciate compensation for the taxi cost ($35) and would like these issues to be addressed before my next visit.`}
  ],
    questions:[
      {id:"p7m21",text:"What was included in Mr. Yuen's booking?",options:["A) Free parking","B) Airport shuttle on arrival only","C) Round-trip airport transfers","D) Spa access"],answer:"B",explanation:"「僅限抵達時提供機場接送」正確，因為文本1將「機場接送（僅限抵達）」列為訂房內容之一。「免費停車」錯誤，因為訂房確認函中完全未提及任何停車福利。「雙程機場接送」錯誤，因為確認函明確說明僅限抵達，不含返回機場的行程。「SPA使用」錯誤，因為所列的包含項目中並無任何SPA福利。"},
      {id:"p7m22",text:"What issue does Mr. Yuen specifically request compensation for?",options:["A) The slow Wi-Fi","B) The missing shuttle","C) The taxi cost","D) The late check-in"],answer:"C",explanation:"「計程車費用」正確，因為文本2說明「希望獲得計程車費用（35美元）的補償」。「網路速度緩慢」錯誤，因為雖然袁先生抱怨網路問題，但他並未要求財務補償。「接送服務缺席」錯誤，因為他對接送服務的投訴是他搭乘計程車的原因，但他特別要求的是計程車費的補償。「遲到辦理入住」錯誤，因為意見回饋表中完全未提及任何遲到辦理入住的問題。"},
      {id:"p7m23",text:"What aspect of the hotel did Mr. Yuen rate positively?",options:["A) The Wi-Fi service","B) The airport shuttle","C) The room and breakfast","D) The conference facilities"],answer:"C",explanation:"「客房與早餐」正確，因為文本2說明「客房舒適，早餐非常出色」。「Wi-Fi服務」錯誤，因為袁先生形容Wi-Fi「極為緩慢且不穩定」，屬於負面體驗。「機場接送服務」錯誤，因為接送服務在他住宿期間未能提供，是投訴的來源。「會議設施」錯誤，因為意見回饋表中完全未提及任何飯店會議設施。"},
      {id:"p7m24",text:"How many loyalty points did Mr. Yuen earn?",options:["A) 210","B) 315","C) 630","D) 420"],answer:"B",explanation:"「315點」正確，因為文本1明確說明「退房時可獲得315點」。「210」錯誤，因為那是每晚房費（美元），而非忠誠度點數總計。「630」錯誤，因為那是三晚住宿的總費用（美元），而非累積的點數。「420」錯誤，因為訂房確認函中完全未出現420點的數字。"}
    ]
  }
];

const PART7_HARD = [
  {id:"p7h_p1",type:"single",title:"Investment Analysis Report",passage:`MERIDIAN CAPITAL PARTNERS
QUARTERLY INVESTMENT ANALYSIS — Q3 20XX

EXECUTIVE SUMMARY

Meridian Capital Partners achieved a consolidated portfolio return of 11.4% in Q3, outperforming the benchmark S&P Technology Index by 2.7 percentage points. This performance was primarily driven by strong gains in our cloud computing and AI positions, which collectively contributed 6.2 percentage points to total returns.

SECTOR ANALYSIS

The AI Infrastructure segment remains our highest conviction holding at 28% of the portfolio. Despite short-term volatility driven by regulatory uncertainty, our long-term thesis remains intact. We anticipate AI workload demand will compound at approximately 35% annually through 2027.

Our cybersecurity allocation was reduced from 18% to 14% following underperformance relative to sector peers. This freed capital for semiconductor additions, where we see compelling valuations amid the current inventory correction cycle.

RISK FACTORS

Geopolitical tensions present material risks to global technology holdings, particularly regarding export controls and supply chain fragmentation. We have modeled three scenarios with estimated portfolio impacts ranging from -3% to -12% in adverse scenarios.

OUTLOOK

Looking ahead to Q4, we maintain a cautiously optimistic stance. The Federal Reserve's anticipated rate stabilization should provide a favorable backdrop for growth-oriented technology assets.`,
    questions:[
      {id:"p7h1",text:"By how much did Meridian outperform its benchmark in Q3?",options:["A) 6.2 percentage points","B) 11.4 percentage points","C) 2.7 percentage points","D) 28 percentage points"],answer:"C",explanation:"「2.7個百分點」正確，因為報告說明 Meridian 的回報「優於基準標普科技指數2.7個百分點」。「6.2個百分點」錯誤，因為那是雲端運算與AI部位對總回報的貢獻，而非超越基準的幅度。「11.4個百分點」錯誤，因為那是投資組合的總回報，而非超越基準的差距。「28個百分點」錯誤，因為28%指的是AI基礎設施板塊的投資組合配置比例，而非績效數字。"},
      {id:"p7h2",text:"Why was the cybersecurity allocation reduced?",options:["A) Regulatory risks","B) Underperformance relative to sector peers","C) Geopolitical supply chain concerns","D) Overvaluation relative to semiconductors"],answer:"B",explanation:"「相對於同業表現不佳」正確，因為報告說明網路安全配置的削減是「因相對於同業表現不佳」所致。「監管風險」錯誤，因為監管不確定性是針對AI基礎設施波動性而提及的，而非網路安全。「地緣政治供應鏈顧慮」錯誤，因為這些被列為全球科技持倉的風險因素，而非削減網路安全配置的特定原因。「相對於半導體的估值偏高」錯誤，因為報告將半導體的誘人估值描述為投資機會，而非削減網路安全配置的直接原因。"},
      {id:"p7h3",text:"What is the projected annual growth rate for AI workload demand?",options:["A) 11.4%","B) 28%","C) 35%","D) 18%"],answer:"C",explanation:"「35%」正確，因為報告說明「AI工作負載需求預計將至2027年以每年約35%的速度複合成長」。「11.4%」錯誤，因為那是第三季的投資組合總回報，而非AI需求成長預測。「28%」錯誤，因為那是AI基礎設施板塊的投資組合配置比例，而非需求成長率。「18%」錯誤，因為那是網路安全在削減前的配置比例，而非AI成長數字。"},
      {id:"p7h4",text:"What does the report suggest about the Q4 outlook?",options:["A) Strongly bullish due to AI growth","B) Negative due to regulatory risks","C) Cautiously optimistic with rate stabilization expected","D) Uncertain due to portfolio volatility"],answer:"C",explanation:"「謹慎樂觀，預期利率將趨穩」正確，因為展望部分說明「我們維持謹慎樂觀的立場」，並引述聯準會「預期的利率穩定」作為有利背景。「因AI成長而強烈看多」錯誤，因為整體語氣為謹慎樂觀，而非強烈看多。「因監管風險而悲觀」錯誤，因為整體第四季立場為樂觀，即便承認監管風險的存在。「因投資組合波動而不確定」錯誤，因為報告表達的是明確的樂觀立場，而非不確定性。"},
      {id:"p7h5",text:"The word 'stabilization' as used in the report most likely means:",options:["A) A sharp decline in interest rates","B) Interest rates leveling off at a steady level","C) The elimination of all monetary policy","D) A government guarantee on bond yields"],answer:"B",explanation:"「利率趨於穩定的水平」正確，因為報告說明「聯準會預期的利率穩定應為成長導向的科技資產提供有利背景」，意即利率預期將停止變動並趨於穩定，這對成長型資產有利。「利率大幅下降」錯誤，因為穩定意指利率趨於平穩，而非必然大幅下降；下降屬於降息，而非穩定。「取消所有貨幣政策」錯誤，因為穩定指的是利率變動的暫停，而非貨幣政策本身的終結。「政府對債券殖利率的保證」錯誤，因為穩定關係到利率走向，而非任何形式的政府投資回報保證。"}
    ]
  },
  {id:"p7h_p2",type:"triple",title:"Policy + Email + Survey",passages:[
    {label:"Text 1 — Internal Email",content:`From: L.Crawford@zenith-corp.com
To: All-Staff@zenith-corp.com
Subject: Changes to Travel & Expense Policy

Team,

Following a review of our company travel expenditures, which increased 42% year-over-year, the Finance Committee has approved several updates to our T&E Policy, effective June 1st.

Key changes:
• Economy class is mandatory for all domestic flights
• Hotel accommodation capped at $200/night in Tier 1 cities, $150/night elsewhere
• Meal allowances reduced to $60/day (previously $80/day)
• All expenses above $500 require VP pre-approval

L. Crawford, VP Finance`},
    {label:"Text 2 — Policy Excerpt",content:`ZENITH CORPORATION — TRAVEL & EXPENSE POLICY (Effective June 1st)

Section 4.3 — International Travel

4.3.1 Flights exceeding 8 hours qualify for Business Class, subject to VP pre-approval.
4.3.2 Hotel accommodation for international travel capped at $280/night.
4.3.3 Per diem rates follow current IRS guidelines and vary by destination.
4.3.4 All international travel must be booked through TravelPro at least 7 business days in advance.
4.3.5 Expense reports must be submitted within 10 business days of returning.`},
    {label:"Text 3 — Employee Survey Response",content:`Internal Feedback Survey — Sales Division (Anonymous)
Rating: 2/5

I understand cost control, but these changes impact my effectiveness. I travel frequently to New York and San Francisco — the $200/night cap is tight in those cities.

I recently traveled to Tokyo for a major client negotiation. The 18-hour round trip was exhausting in economy. I appreciate the Business Class option for flights over 8 hours, but VP pre-approval added two days' delay, nearly causing me to miss the meeting.

Suggestion: Introduce an automated pre-approval system for recurring travel routes, and revise Tier 1 city hotel rates to reflect current market rates.`}
  ],
    questions:[
      {id:"p7h6",text:"According to Text 1, what triggered the policy update?",options:["A) Employee complaints about travel conditions","B) A 42% year-over-year increase in travel costs","C) Regulatory requirements","D) A decrease in revenue"],answer:"B",explanation:"「差旅費用年增42%」正確，因為文本1說明政策更新是在「審查公司差旅支出後，其較去年同期增加42%」所推動的。「員工對差旅條件的抱怨」錯誤，因為觸發因素是財務方面——費用上升——而非員工不滿。「監管要求」錯誤，因為文章中並未提及任何外部監管規定促使政策修訂。「收入下降」錯誤，因為文章描述的是差旅支出的增加，而非收入下降。"},
      {id:"p7h7",text:"Under the revised policy, when is Business Class allowed on international flights?",options:["A) For any international flight","B) When flight exceeds 6 hours","C) When exceeding 8 hours with VP approval","D) Only for executive-level employees"],answer:"C",explanation:"「飛行時間超過8小時且獲副總裁核准」正確，因為文本2第4.3.1條說明「飛行時間超過8小時的航班可搭乘商務艙，需事先取得副總裁核准」。「任何國際航班均可」錯誤，因為商務艙選項僅適用於超過8小時的航班，並非所有國際航班。「飛行時間超過6小時」錯誤，因為政策規定的門檻為8小時，而非6小時。「僅限主管級別員工」錯誤，因為政策依據飛行時間允許搭乘商務艙，而非員工資歷。"},
      {id:"p7h8",text:"What specific suggestion does the survey respondent make?",options:["A) Eliminate the pre-approval requirement","B) Increase international hotel cap","C) Introduce automated pre-approval for regular routes","D) Reinstate the $80/day meal allowance"],answer:"C",explanation:"「針對常規路線引入自動化預審核」正確，因為文本3明確建議「針對常規差旅路線引入自動化預審核系統」。「取消預審核要求」錯誤，因為受訪者建議的是自動化，而非完全取消。「提高國際住宿上限」錯誤，因為受訪者詢問的是第一級別國內城市的費率，而非國際住宿上限。「恢復每日80美元的餐費補貼」錯誤，因為受訪者在調查回應中並未提及餐費補貼為顧慮事項。"},
      {id:"p7h9",text:"Which information is consistent across all three texts?",options:["A) The meal allowance reduction was well received","B) VP approval is required for some expense items","C) All Business Class travel is prohibited","D) Hotel costs are the primary driver of excess spending"],answer:"B",explanation:"「部分費用項目須取得副總裁核准」正確，因為文本1說明超過500美元的費用需要副總裁事先核准，文本2要求長途航班搭乘商務艙須取得副總裁事先核准，而文本3則提及副總裁的預審核造成了延誤。「餐費補貼削減受到好評」錯誤，因為調查受訪者對這些變更的評分為2/5分，並未表達認同。「所有商務艙出行均被禁止」錯誤，因為文本2明確允許超過8小時的航班在取得副總裁核准後搭乘商務艙。「住宿費用是超支的主要原因」錯誤，因為文本1引述差旅總支出增加42%，並未將住宿確認為主要原因。"}
    ]
  },
  {id:"p7h_p3",type:"single",title:"Corporate Governance Report",passage:`ANNUAL CORPORATE GOVERNANCE REPORT — VANTAGE GLOBAL PLC

BOARD COMPOSITION AND INDEPENDENCE

As of the reporting date, the Board comprises twelve directors: five executive directors, six independent non-executive directors, and one non-independent non-executive director. The Board is satisfied that its composition provides an appropriate balance of skills, experience, and independence, consistent with the requirements of the Corporate Governance Code.

AUDIT COMMITTEE

The Audit Committee, composed entirely of independent non-executive directors, met five times during the financial year. Its activities included overseeing the financial reporting process, reviewing the effectiveness of internal controls, and evaluating the performance and independence of the external auditor, Grant & Morrison LLP.

Following a tender process conducted this year, the Board has recommended that shareholders approve the appointment of Deloitte as external auditor at the forthcoming Annual General Meeting, replacing Grant & Morrison LLP after a 14-year tenure.

RISK MANAGEMENT

The Board conducts an annual review of the principal risks facing the Company and the adequacy of mitigating controls. Key risks identified this year include: macroeconomic volatility, cybersecurity threats, talent retention, and regulatory change in our core markets. No significant control failures were identified during the year.`,
    questions:[
      {id:"p7h10",text:"How many independent non-executive directors are on the board?",options:["A) Five","B) Six","C) Seven","D) Twelve"],answer:"B",explanation:"「六位」正確，因為報告說明董事會由「六位獨立非執行董事」組成。「五位」錯誤，因為五位是執行董事的人數，而非獨立非執行董事。「七位」錯誤，因為報告中並未出現七位董事的人數；獨立非執行董事為六位。「十二位」錯誤，因為十二位是包含所有類別的董事會成員總數。"},
      {id:"p7h11",text:"What is the main reason for replacing Grant & Morrison LLP?",options:["A) They underperformed on the audit","B) They charged excessive fees","C) They have served for 14 years and a tender process was conducted","D) They failed an independence review"],answer:"C",explanation:"「已任職14年且已進行招標程序」正確，因為報告說明在本年度進行招標程序後，德勤將在「任職14年後」取代 Grant & Morrison LLP。「審計工作表現不佳」錯誤，因為報告中並未提及對 Grant & Morrison 審計品質的任何批評。「收費過高」錯誤，因為審計師費用並未被討論為更換的因素。「獨立性審查未通過」錯誤，因為並未提及任何獨立性失敗；此次更換是常規招標程序的結果。"},
      {id:"p7h12",text:"Which risk is NOT mentioned in the risk management section?",options:["A) Cybersecurity threats","B) Talent retention","C) Supply chain disruption","D) Regulatory change"],answer:"C",explanation:"「供應鏈中斷」是正確答案，因為它並未出現在報告列出的四項主要風險中。「網路安全威脅」錯誤，因為它被明確列為本年度識別的四項主要風險之一。「人才留任」錯誤，因為它被明確列為本年度識別的四項主要風險之一。「監管變化」錯誤，因為它被明確列為第四項主要風險，表述為「核心市場的監管變化」。"},
      {id:"p7h13",text:"The word 'tenure' in the report most likely refers to:",options:["A) The auditor's annual salary","B) The length of the auditor's appointment period","C) The auditor's qualifications","D) The quality of the audit work"],answer:"B",explanation:"「審計師的任職期間長度」正確，因為在此語境中「tenure（任期）」指的是 Grant & Morrison LLP 擔任外部審計師的時間長度——具體為14年。「審計師的年薪」錯誤，因為任期指的是服務的持續時間，而非薪酬。「審計師的資格」錯誤，因為資格描述的是證照與資歷，而任期指的是服務時長。「審計工作的品質」錯誤，因為工作品質與任期的概念不同，任期關乎的是專業關係的長度。"}
    ]
  },
  {id:"p7h_p4",type:"double",title:"Job Listing + Cover Letter",passages:[
    {label:"Text 1 — Job Posting",content:`DIRECTOR OF PRODUCT MANAGEMENT — CLOUDVAULT INC.

CloudVault Inc., a leading provider of enterprise cloud infrastructure solutions, is seeking an experienced Director of Product Management to lead our core platform division.

RESPONSIBILITIES:
• Define and execute the product roadmap for CloudVault's flagship platform
• Lead a team of 8 senior product managers
• Collaborate with engineering, sales, and customer success teams
• Drive go-to-market strategy for new product launches
• Report directly to the Chief Product Officer

REQUIREMENTS:
• 10+ years in product management, with at least 3 years in a director-level role
• Deep expertise in cloud infrastructure, SaaS, or enterprise software
• Proven track record of shipping products at scale
• Strong analytical and data-driven decision-making skills
• MBA or equivalent preferred

COMPENSATION: $180,000–$220,000 base + equity + full benefits
LOCATION: San Francisco, CA (Hybrid: 3 days in-office required)`},
    {label:"Text 2 — Application Cover Letter",content:`Dear Hiring Team,

I am writing to apply for the Director of Product Management position at CloudVault Inc. With 14 years of product management experience, including five years as VP of Product at DataStream Technologies, I believe I am exceptionally well-positioned for this role.

At DataStream, I led a team of 12 product managers and was responsible for our flagship cloud analytics platform, which grew from $20 million to $85 million in ARR under my leadership. I spearheaded three major product launches, each exceeding adoption targets by over 30%.

While I note that the role specifies 3 days in-office, I should mention that I am currently based in Seattle and would need to relocate. I am fully prepared to do so and would target a start date no later than August 1st.

I hold an MBA from Stanford Graduate School of Business and remain deeply passionate about building products that solve real enterprise challenges. I would welcome the opportunity to discuss how my experience aligns with CloudVault's vision.

Sincerely,
Priya Mehta`}
  ],
    questions:[
      {id:"p7h14",text:"How many product managers will the Director oversee?",options:["A) 5","B) 8","C) 10","D) 12"],answer:"B",explanation:"「8人」正確，因為文本1說明總監將「領導一個由8位資深產品經理組成的團隊」。「5人」錯誤，因為職缺公告或求職信中均未提及5人的團隊。「10人」錯誤，因為10指的是所需的最低產品管理工作年資，而非團隊規模。「12人」錯誤，因為梅塔女士在前公司 DataStream 領導了12人的團隊，而非 CloudVault 的團隊規模。"},
      {id:"p7h15",text:"What challenge does Ms. Mehta acknowledge in her letter?",options:["A) She lacks cloud infrastructure experience","B) She does not have an MBA","C) She is not currently in San Francisco","D) She has never led a team before"],answer:"C",explanation:"「她目前不在舊金山」正確，因為文本2說明「我目前居住在西雅圖，需要搬遷」。「她缺乏雲端基礎設施經驗」錯誤，因為梅塔女士描述了在雲端分析平台的工作經驗，與該職位相關。「她沒有MBA學位」錯誤，因為求職信說明她「擁有史丹佛大學商學院的MBA學位」。「她從未領導過團隊」錯誤，因為她特別提到在 DataStream 領導了12位產品經理的團隊。"},
      {id:"p7h16",text:"By how much did Ms. Mehta's product grow in ARR at DataStream?",options:["A) From $20M to $65M","B) From $20M to $85M","C) From $30M to $85M","D) From $50M to $85M"],answer:"B",explanation:"「從2000萬美元成長至8500萬美元」正確，因為文本2說明該平台「在我的領導下，年度經常性收入從2000萬美元成長至8500萬美元」。「從2000萬美元成長至6500萬美元」錯誤，因為最終的年度經常性收入為8500萬美元，而非6500萬美元。「從3000萬美元成長至8500萬美元」錯誤，因為起始年度經常性收入為2000萬美元，而非3000萬美元。「從5000萬美元成長至8500萬美元」錯誤，因為起始點為2000萬美元，而非5000萬美元。"},
      {id:"p7h17",text:"What is listed as preferred but not required in the job posting?",options:["A) Cloud infrastructure experience","B) A product management background","C) An MBA or equivalent","D) Strong analytical skills"],answer:"C",explanation:"「MBA或同等學歷」正確，因為文本1在條件欄中以「優先考量」修飾語列出此項，表示為期望但非強制要求。「雲端基礎設施經驗」錯誤，因為職缺公告將「雲端基礎設施、SaaS或企業軟體的深厚專業知識」列為硬性要求。「產品管理背景」錯誤，因為10年以上的產品管理經驗被列為強制性要求。「強大的分析能力」錯誤，因為強大的分析能力及數據驅動的決策能力被列為必要條件，並無「優先考量」的修飾語。"}
    ]
  },
  {id:"p7h_p5",type:"single",title:"Analyst Research Note",passage:`EQUITY RESEARCH NOTE — INITIATING COVERAGE
COMPANY: PulseTech Corp (NASDAQ: PLTC)
RATING: BUY | TARGET PRICE: $87
ANALYST: J. Watanabe, CFA

INVESTMENT THESIS

We initiate coverage on PulseTech with a Buy rating and a 12-month price target of $87, representing approximately 35% upside from the current price of $64.50. Our thesis rests on three pillars: (1) an underpenetrated $45 billion addressable market in healthcare IoT, (2) PulseTech's proprietary sensor technology, which we believe confers a durable competitive advantage, and (3) an accelerating revenue growth trajectory supported by recent enterprise contract wins.

VALUATION

Our target is derived from a blended valuation methodology weighting DCF analysis (60%) and EV/Revenue multiples (40%). We apply a 5x forward EV/Revenue multiple, reflecting the company's premium growth profile relative to sector peers. The DCF assumes a WACC of 9.5% and a terminal growth rate of 3.5%.

RISKS

Key downside risks include: potential pricing pressure from larger rivals entering the healthcare IoT space, regulatory delays in medical device certification, and execution risk in scaling the enterprise sales motion. Insider selling activity over the past two quarters warrants monitoring.`,
    questions:[
      {id:"p7h18",text:"What is the analyst's 12-month price target for PulseTech?",options:["A) $64.50","B) $75","C) $87","D) $92"],answer:"C",explanation:"「87美元」正確，因為報告明確說明「12個月目標股價為87美元」。「64.50美元」錯誤，因為那是目前的股票價格，而非目標價格。「75美元」錯誤，因為研究報告中完全未提及75美元的目標價格。「92美元」錯誤，因為所述的目標價格為87美元，而非92美元。"},
      {id:"p7h19",text:"What weighting is given to DCF analysis in the blended valuation?",options:["A) 40%","B) 50%","C) 60%","D) 70%"],answer:"C",explanation:"「60%」正確，因為估值部分說明方法論將「DCF分析（60%）與EV/收入倍數（40%）」加以加權。「40%」錯誤，因為40%是賦予EV/收入倍數的權重，而非DCF分析。「50%」錯誤，因為兩個組成部分的分配為60/40，而非均等的50/50。「70%」錯誤，因為估值方法論中完全未提及70%的權重。"},
      {id:"p7h20",text:"What risk factor is mentioned as warranting monitoring?",options:["A) Management turnover","B) Product recalls","C) Insider selling activity","D) Currency exchange rate risk"],answer:"C",explanation:"「內部人士賣股活動」正確，因為風險部分說明「過去兩季的內部人士賣股活動值得關注」。「管理層更替」錯誤，因為報告中並未提及任何領導層變動或管理不穩定作為風險。「產品召回」錯誤，因為主要下行風險中並未列出任何產品召回風險。「匯率風險」錯誤，因為研究報告中並未討論任何外匯或貨幣風險。"},
      {id:"p7h21",text:"The term 'underpenetrated market' in the report most likely means:",options:["A) A market with too many competitors","B) A market that has not yet been fully developed or captured","C) A market facing regulatory restrictions","D) A market with declining demand"],answer:"B",explanation:"「尚未被充分開發或佔領的市場」正確，因為在投資分析中，「penetration不足（underpenetrated）」描述的是一個龐大的可觸達市場，現有產品或服務尚未覆蓋大多數潛在客戶。「競爭對手過多的市場」錯誤，因為滲透不足意味著供給或覆蓋範圍不足，而非過度競爭。「面臨監管限制的市場」錯誤，因為監管挑戰被單獨列為風險因素，與市場滲透的概念不同。「需求下降的市場」錯誤，因為滲透不足的市場代表成長機會，意味著需求存在但尚未被掌握。"},
      {id:"p7h22",text:"What is the approximate upside the analyst sees from the current price?",options:["A) 15%","B) 25%","C) 35%","D) 45%"],answer:"C",explanation:"「35%」正確，因為報告說明87美元的目標價「相較於目前股價64.50美元，代表約35%的上漲空間」。「15%」錯誤，因為研究報告中完全未提及15%的上漲空間。「25%」錯誤，因為所述的上漲空間約為35%，而非25%。「45%」錯誤，因為分析師所述的上漲空間約為35%，而非45%。"}
    ]
  },
  {id:"p7h_p6",type:"triple",title:"Policy + Incident + Response",passages:[
    {label:"Text 1 — Data Breach Policy",content:`APEX FINANCIAL SERVICES
DATA BREACH RESPONSE POLICY

In the event of a confirmed or suspected data breach, the following procedures must be followed:

1. IDENTIFICATION: The IT Security team must verify and classify the breach within 2 hours of detection.
2. CONTAINMENT: All affected systems must be isolated immediately to prevent further data compromise.
3. NOTIFICATION: The Chief Information Security Officer (CISO) must be notified within 4 hours. Regulators must be notified within 72 hours if personal data is involved.
4. ASSESSMENT: A full forensic investigation must be initiated within 24 hours.
5. REMEDIATION: A remediation plan must be developed and approved by the CISO before systems are restored.

Employees who detect suspicious activity must report it immediately to security@apex.com.`},
    {label:"Text 2 — Incident Report",content:`INCIDENT REPORT — CONFIDENTIAL
Date: November 8, 10:45 PM
Reported by: IT Security Analyst K. Patel

At approximately 10:15 PM, our monitoring systems detected unusual outbound data transfers from the payments database server. Initial analysis suggests that approximately 15,000 customer records, including encrypted payment card data, may have been exfiltrated.

The affected server has been isolated from the network as of 10:30 PM. The IT Security team is conducting a preliminary investigation. The source of the intrusion appears to be a compromised vendor credential used to access our API gateway.

The CISO has been notified as of 10:50 PM. The forensic investigation team has been placed on standby.`},
    {label:"Text 3 — Regulatory Notification",content:`To: Office of the Data Protection Commissioner
From: Apex Financial Services
Re: Personal Data Breach Notification

In accordance with applicable data protection regulations, we are writing to notify your office of a personal data breach affecting an estimated 15,000 individuals, discovered on November 8.

The breach involved the potential unauthorized exfiltration of encrypted payment card data. We have contained the breach, isolated affected systems, and initiated a full forensic investigation. No evidence of data decryption or misuse has been identified at this time.

We are committed to full transparency throughout the investigation and will provide a detailed root cause analysis and remediation report within 30 days.

Date of Notification: November 9 (35 hours after discovery)`}
  ],
    questions:[
      {id:"p7h23",text:"According to the policy in Text 1, within how many hours must the CISO be notified?",options:["A) 2 hours","B) 4 hours","C) 24 hours","D) 72 hours"],answer:"B",explanation:"「4小時」正確，因為文本1第3步驟說明「資訊安全長（CISO）必須在4小時內獲得通報」。「2小時」錯誤，因為2小時是IT安全團隊驗證並分類資安事件的時限，而非通報CISO的時限。「24小時」錯誤，因為24小時是啟動全面鑑識調查的截止時間，而非通報CISO。「72小時」錯誤，因為72小時是通報監管機關的截止時間，而非通報CISO。"},
      {id:"p7h24",text:"What appears to be the source of the breach according to Text 2?",options:["A) A phishing email to an employee","B) A compromised vendor credential","C) A malicious insider","D) A software vulnerability"],answer:"B",explanation:"「遭入侵的廠商憑證」正確，因為文本2說明「入侵來源疑似為一組用於存取API閘道的遭入侵廠商憑證」。「針對員工的網路釣魚郵件」錯誤，因為事件報告中並未提及任何網路釣魚攻擊。「惡意內部人員」錯誤，因為報告指向的是外部廠商憑證被入侵，而非內部不當行為。「軟體漏洞」錯誤，因為已識別的入侵入口為憑證，而非軟體本身的缺陷。"},
      {id:"p7h25",text:"Was the regulatory notification sent within the required timeframe?",options:["A) No, it was sent too late","B) Yes, it was sent within 72 hours","C) Yes, it was sent within 24 hours","D) No, it was sent within 35 hours which exceeded the limit"],answer:"B",explanation:"「是的，在72小時內送達」正確，因為文本3說明通知於發現後35小時送出，而文本1要求在72小時內通報監管機關——35小時遠在此限制內。「否，送達太晚」錯誤，因為35小時少於72小時的監管要求。「是的，在24小時內送達」錯誤，因為35小時超過24小時，但仍符合72小時的規定。「否，在35小時內送達超出限制」錯誤，因為規定的限制為72小時，而35小時並未超出。"},
      {id:"p7h26",text:"What is Apex committed to providing within 30 days?",options:["A) A full refund to affected customers","B) A root cause analysis and remediation report","C) A new security policy","D) A press release to the public"],answer:"B",explanation:"「根本原因分析及補救報告」正確，因為文本3說明 Apex「將在30天內提供詳細的根本原因分析及補救報告」。「對受影響客戶的全額退款」錯誤，因為監管通知中完全未提及對客戶的任何補償或退款。「新的安全政策」錯誤，因為承諾提供的是調查報告，而非新的政策文件。「對公眾的新聞稿」錯誤，因為通知的對象是監管辦公室，而非公眾。"},
      {id:"p7h27",text:"Which step in the Data Breach Response Policy (Text 1) was completed FIRST according to Text 2?",options:["A) NOTIFICATION — CISO informed","B) CONTAINMENT — server isolated","C) IDENTIFICATION — breach classified","D) REMEDIATION — plan approved"],answer:"B",explanation:"「圍堵——伺服器已隔離」正確，因為文本2顯示受影響的伺服器於晚上10:30被隔離，而CISO直到晚上10:50才獲得通報，因此圍堵是更早完成的步驟。「通報——CISO已獲告知」錯誤，因為晚上10:50的CISO通報發生在伺服器已於10:30被隔離之後。「識別——資安事件已分類」錯誤，因為雖然偵測發生於10:15，但事件報告於10:45提交，且未確認在圍堵之前已完成完整分類。「補救——計畫已核准」錯誤，因為補救是最後步驟，且文本2中並未提及任何補救計畫核准的完成。"}
    ]
  }
];
