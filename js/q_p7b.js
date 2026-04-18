// Part 7 expansion — q_p7b.js
// PART7B_EASY: 5 single passages
// PART7B_MEDIUM: 4 passages (2 single + 2 double)
// PART7B_HARD: 4 passages (1 single + 1 double + 2 triple)

const PART7B_EASY = [
  {
    id: "p7b_easy_1",
    type: "single",
    title: "Store Announcement",
    passage: `GRAND OPENING SALE — TechZone Electronics

We are thrilled to announce the grand opening of TechZone Electronics at Westfield Shopping Center, Unit 42. To celebrate, we are offering exclusive discounts of up to 40% on selected laptops, tablets, and smartphones from Saturday, November 5 to Sunday, November 6 only.

Store hours during the sale: 9:00 a.m. – 9:00 p.m.

In addition, the first 100 customers each day will receive a free TechZone tote bag. Free parking is available at Level B2 of the Westfield car park. For more information, visit our website at www.techzone.com or call us at 555-0180.`,
    questions: [
      {
        id: "p7b_easy_1_q1",
        text: "What is the purpose of this announcement?",
        options: ["A) To advertise a new product line", "B) To inform customers of a store opening", "C) To announce a change in store hours", "D) To promote a membership program"],
        answer: "B",
        explanation: "「告知顧客門市開幕」是正確答案，因為公告明確寫道「我們非常興奮地宣布 TechZone Electronics 在 Westfield 購物中心盛大開幕」。「宣傳新產品線」是錯誤的，因為公告的主題是門市開幕活動，而非推出新的產品類別。「宣布營業時間變更」是錯誤的，因為文中提到的營業時間是特定於本次特賣活動，並非對原有時間的變更。「推廣會員計畫」是錯誤的，因為公告中完全沒有提到任何會員或忠誠度計畫。"
      },
      {
        id: "p7b_easy_1_q2",
        text: "What will the first 100 customers each day receive?",
        options: ["A) A discount voucher", "B) A free smartphone", "C) A free tote bag", "D) Free parking"],
        answer: "C",
        explanation: "「免費手提袋」是正確答案，因為公告寫道「每天前 100 位顧客將獲得一個免費的 TechZone 手提袋」。「折扣券」是錯誤的，因為文中並未提及贈送折扣券給早到顧客，最高 40% 的折扣是適用於所有特賣期間的購物者。「免費智慧型手機」是錯誤的，因為智慧型手機是以折扣價出售的商品，並非作為贈品發放。「免費停車」是錯誤的，因為 B2 層的免費停車場是開放給所有來店訪客，並非僅限前 100 位顧客。"
      },
      {
        id: "p7b_easy_1_q3",
        text: "How long does the sale last?",
        options: ["A) One week", "B) Three days", "C) Two days", "D) One day"],
        answer: "C",
        explanation: "「兩天」是正確答案，因為公告明確寫道特賣活動「僅限週六 11 月 5 日至週日 11 月 6 日」，正好是兩天。「一週」是錯誤的，因為文章清楚地將特賣活動限制在週末，而非整整七天。「三天」是錯誤的，因為特賣在週日結束，只有週六和週日兩天，並不包含第三天。「一天」是錯誤的，因為特賣橫跨兩個獨立的日期（週六與週日），而非僅一天。"
      }
    ]
  },
  {
    id: "p7b_easy_2",
    type: "single",
    title: "Employee Notice",
    passage: `NOTICE TO ALL EMPLOYEES

The company cafeteria will be closed for renovations from Monday, December 4 through Friday, December 8. During this period, food truck vendors will be available in the main parking lot from 11:30 a.m. to 1:30 p.m. daily.

Employees are also welcome to use the kitchen facilities on the 3rd floor, which include a microwave, refrigerator, and hot water dispenser.

We apologize for the inconvenience and appreciate your patience. The cafeteria is expected to reopen on Monday, December 11 with an expanded menu and new seating.

— Facilities Management`,
    questions: [
      {
        id: "p7b_easy_2_q1",
        text: "Why will the cafeteria be closed?",
        options: ["A) Due to a health inspection", "B) For staff training", "C) For renovations", "D) Due to a holiday"],
        answer: "C",
        explanation: "「進行裝修」是正確答案，因為通知明確寫道「公司餐廳將於 12 月 4 日（週一）至 12 月 8 日（週五）期間因裝修而關閉」。「衛生檢查」是錯誤的，因為通知中完全未提及任何檢查，關閉原因是預先安排的裝修工程。「員工培訓」是錯誤的，因為通知說明的是餐廳的實體改建，而非培訓活動。「因假日」是錯誤的，因為關閉時間橫跨正常工作週，且明確歸因於裝修工程，而非國定假日。"
      },
      {
        id: "p7b_easy_2_q2",
        text: "Where can employees eat during the closure?",
        options: ["A) The lobby restaurant", "B) The main parking lot food trucks", "C) A nearby café", "D) The rooftop terrace"],
        answer: "B",
        explanation: "「主停車場的餐車」是正確答案，因為通知寫道「餐車供應商將每日上午 11:30 至下午 1:30 在主停車場提供服務」。「大廳餐廳」是錯誤的，因為通知中完全未提及任何大廳餐廳。「附近的咖啡廳」是錯誤的，因為通知並未引導員工前往任何外部咖啡廳或場外選項。「屋頂露台」是錯誤的，因為通知中沒有提到任何屋頂設施可作為用餐地點。"
      },
      {
        id: "p7b_easy_2_q3",
        text: "What is NOT mentioned as available in the 3rd floor kitchen?",
        options: ["A) A microwave", "B) A refrigerator", "C) A coffee machine", "D) A hot water dispenser"],
        answer: "C",
        explanation: "「咖啡機」是正確答案，因為通知中列出三樓廚房設備為「微波爐、冰箱及熱水機」，並未包含咖啡機。「微波爐」是錯誤的，因為通知已明確列出微波爐為可用廚房設備之一。「冰箱」是錯誤的，因為通知已明確列出冰箱為可用廚房設備之一。「熱水機」是錯誤的，因為通知已明確列出熱水機為可用廚房設備之一。"
      }
    ]
  },
  {
    id: "p7b_easy_3",
    type: "single",
    title: "Travel Booking Confirmation",
    passage: `Booking Confirmation — SkyFly Travel Agency

Dear Ms. Nguyen,

Thank you for booking with SkyFly Travel Agency. Below is your itinerary:

Departure: January 15 — Flight SF402, Taipei → Tokyo (Narita), Departs 08:30, Arrives 12:45
Return: January 22 — Flight SF403, Tokyo (Narita) → Taipei, Departs 14:00, Arrives 16:15

Hotel: Sakura Inn, Shinjuku — 7 nights (January 15–22), Superior Room, Breakfast included
Total Charged: NT$62,500

Please note that the hotel check-in time is 3:00 p.m. An airport transfer from Narita to your hotel is included. If you need to make any changes, please contact us at 02-2345-6789 at least 48 hours before departure.`,
    questions: [
      {
        id: "p7b_easy_3_q1",
        text: "How long will Ms. Nguyen stay in Tokyo?",
        options: ["A) 5 nights", "B) 6 nights", "C) 7 nights", "D) 8 nights"],
        answer: "C",
        explanation: "「7 晚」是正確答案，因為確認書明確寫道飯店預訂「7 晚（1 月 15 日至 22 日）」。「5 晚」是錯誤的，因為預訂涵蓋從 1 月 15 日至 22 日，共七晚，而非五晚。「6 晚」是錯誤的，因為從 1 月 15 日計算至 1 月 22 日為七晚，而非六晚。「8 晚」是錯誤的，因為 1 月 22 日的離開日期標誌著住宿的結束，合計為七晚。"
      },
      {
        id: "p7b_easy_3_q2",
        text: "What is included in the hotel booking?",
        options: ["A) Dinner", "B) Breakfast", "C) Airport shuttle and dinner", "D) All meals"],
        answer: "B",
        explanation: "「早餐」是正確答案，因為確認書載明高級客房包含「含早餐」作為飯店預訂的一部分。「晚餐」是錯誤的，因為只有早餐被列為包含項目，晚餐並未提及。「機場接送及晚餐」是錯誤的，因為機場接送雖另外包含，但晚餐並不在飯店包含範圍內。「所有餐點」是錯誤的，因為只有早餐被明確說明，午餐和晚餐均未涵蓋。"
      },
      {
        id: "p7b_easy_3_q3",
        text: "By when must Ms. Nguyen contact SkyFly if she needs changes?",
        options: ["A) At least 24 hours before departure", "B) At least 48 hours before departure", "C) At least 72 hours before departure", "D) At least one week before departure"],
        answer: "B",
        explanation: "「至少在出發前 48 小時」是正確答案，因為確認書寫道「請至少在出發前 48 小時聯絡我們」。「至少在出發前 24 小時」是錯誤的，因為所需的通知時間是 48 小時，是 24 小時的兩倍。「至少在出發前 72 小時」是錯誤的，因為規定的要求是 48 小時，而非 72 小時。「至少在出發前一週」是錯誤的，因為一週（168 小時）遠超過確認書中所載的 48 小時通知要求。"
      }
    ]
  },
  {
    id: "p7b_easy_4",
    type: "single",
    title: "Product Recall Notice",
    passage: `PRODUCT SAFETY RECALL NOTICE

HomeComfort Inc. is voluntarily recalling Model HC-200 Electric Kettle (serial numbers HC200-00001 through HC200-05000) due to a potential overheating issue that may pose a burn risk.

Affected customers should immediately stop using the product and contact our customer service team at 1-800-HOME-200 to arrange a free replacement. Proof of purchase is not required.

This recall affects units purchased between March 1 and August 31 of this year. Units purchased after September 1 are not affected.

We sincerely apologize for any inconvenience and thank you for your cooperation in ensuring your safety.

HomeComfort Inc. Customer Safety Team`,
    questions: [
      {
        id: "p7b_easy_4_q1",
        text: "Why is the product being recalled?",
        options: ["A) It has an electrical short circuit", "B) It may overheat and cause burns", "C) It uses too much electricity", "D) Its warranty has expired"],
        answer: "B",
        explanation: "「可能過熱並造成燒傷」是正確答案，因為通知說明召回原因為「可能發生過熱問題，造成燒傷風險」。「有電氣短路」是錯誤的，因為所述問題是過熱，而非短路，兩者是不同的故障類型。「耗電量過大」是錯誤的，因為通知中完全未將能源消耗列為召回原因。「保固期已到期」是錯誤的，因為保固到期並非安全問題，與所述召回原因毫無關聯。"
      },
      {
        id: "p7b_easy_4_q2",
        text: "What must customers provide to get a replacement?",
        options: ["A) Serial number and receipt", "B) A photo of the defect", "C) Nothing; proof of purchase is not required", "D) The original packaging"],
        answer: "C",
        explanation: "「無需提供任何東西；不需要購買證明」是正確答案，因為通知明確寫道聯絡客服申請免費更換時「不需要提供購買證明」。「序號和收據」是錯誤的，因為雖然序號可識別受影響產品，但通知已豁免購買證明的要求。「故障照片」是錯誤的，因為通知中並未提及需要提供任何照片文件才能獲得更換品。「原始包裝」是錯誤的，因為通知並未要求顧客退還或提供原始包裝。"
      },
      {
        id: "p7b_easy_4_q3",
        text: "Which purchase date is NOT affected by the recall?",
        options: ["A) April 15", "B) July 30", "C) August 31", "D) October 5"],
        answer: "D",
        explanation: "「10 月 5 日」是正確答案，因為通知說明「9 月 1 日之後購買的產品不受影響」，而 10 月 5 日晚於 9 月 1 日。「4 月 15 日」是錯誤的，因為 4 月 15 日落在受影響的購買區間（3 月 1 日至 8 月 31 日）之內。「7 月 30 日」是錯誤的，因為 7 月 30 日同樣落在受影響的 3 月 1 日至 8 月 31 日區間內。「8 月 31 日」是錯誤的，因為 8 月 31 日是受影響購買期間的最後一天，因此仍包含在召回範圍內。"
      }
    ]
  },
  {
    id: "p7b_easy_5",
    type: "single",
    title: "Office Policy Update",
    passage: `UPDATED REMOTE WORK POLICY — Effective February 1

Following employee feedback and a review of productivity data, the company has updated its remote work policy. Effective February 1, full-time employees in eligible roles may work remotely up to three days per week, up from the previous limit of two days.

To be eligible, employees must:
• Have completed at least six months of employment
• Have received a satisfactory or higher rating in their most recent performance review
• Obtain approval from their direct manager

Employees wishing to change their remote work schedule must submit a revised plan to HR by January 20. Questions can be directed to hr@company.com.`,
    questions: [
      {
        id: "p7b_easy_5_q1",
        text: "What changed in the remote work policy?",
        options: ["A) The policy was eliminated", "B) The number of remote days was reduced", "C) Employees may now work remotely up to three days per week", "D) Remote work now requires two managers' approval"],
        answer: "C",
        explanation: "「員工現在每週最多可遠端工作三天」是正確答案，因為更新明確說明員工「每週可遠端工作最多三天，較先前的兩天上限有所提升」。「政策已取消」是錯誤的，因為政策是更新而非廢除，遠端工作仍然被允許。「遠端工作天數減少了」是錯誤的，因為變更方向相反，是將上限從兩天增加為三天。「遠端工作現在需要兩位主管批准」是錯誤的，因為政策只要求直屬主管批准，並未提及第二位主管。"
      },
      {
        id: "p7b_easy_5_q2",
        text: "What is one requirement for employees to be eligible?",
        options: ["A) At least two years of employment", "B) A performance rating of 'outstanding'", "C) At least six months of employment", "D) A signed contract extension"],
        answer: "C",
        explanation: "「至少任職六個月」是正確答案，因為資格條件說明員工必須「已完成至少六個月的任職期」。「至少任職兩年」是錯誤的，因為所需的任職時間是六個月，而非兩年。「績效評等為「優秀」」是錯誤的，因為最低要求的評等是「令人滿意或更高」，而非特定的「優秀」。「簽署合約延展書」是錯誤的，因為政策通知中完全未提及合約延展作為資格條件。"
      },
      {
        id: "p7b_easy_5_q3",
        text: "By what date must employees submit a revised remote work plan?",
        options: ["A) January 15", "B) January 20", "C) February 1", "D) February 15"],
        answer: "B",
        explanation: "「1 月 20 日」是正確答案，因為通知說明員工「必須在 1 月 20 日前向人力資源部門提交修訂計畫」。「1 月 15 日」是錯誤的，因為截止日期是 1 月 20 日，而非 1 月 15 日。「2 月 1 日」是錯誤的，因為那是更新後的政策生效日期，而非提交排程變更的截止日期。「2 月 15 日」是錯誤的，因為政策通知中完全沒有出現 2 月 15 日這個日期。"
      }
    ]
  }
];

const PART7B_MEDIUM = [
  {
    id: "p7b_med_1",
    type: "single",
    title: "Business Proposal Email",
    passage: `From: David Marsh <d.marsh@novabuild.com>
To: Claire Fontaine <c.fontaine@urbandesign.com>
Subject: Partnership Proposal — Urban Renewal Project
Date: October 14

Dear Ms. Fontaine,

I am writing on behalf of NovaBuild Construction to propose a collaborative partnership for the upcoming Riverside Urban Renewal Project. Having reviewed Urban Design Associates' portfolio, I believe our firms' complementary strengths could produce exceptional results.

NovaBuild brings 20 years of large-scale civil engineering experience, including the award-winning Harbor Bridge project. We are seeking a partner with Urban Design's expertise in sustainable architecture and community-centric design to strengthen our bid for the city contract.

The contract value is estimated at $45 million, and the submission deadline is November 30. Should you be open to discussing this further, I would welcome a meeting at your earliest convenience.

I have attached a preliminary project brief and our company credentials for your review.

Best regards,
David Marsh
Director of Business Development, NovaBuild Construction`,
    questions: [
      {
        id: "p7b_med_1_q1",
        text: "What is the main purpose of this email?",
        options: ["A) To submit a project bid", "B) To propose a business partnership", "C) To follow up on a previous contract", "D) To request credentials from Urban Design"],
        answer: "B",
        explanation: "「提出商業合作提案」是正確答案，因為電子郵件說明寄件者聯絡方丹小姐的目的是「為即將到來的河濱都市更新計畫提出合作夥伴關係提案」。「提交專案投標書」是錯誤的，因為這封郵件是提議共同投標的合作邀請，而非投標書本身。「跟進先前的合約」是錯誤的，因為信中未提及兩家公司之間的任何先前合約，這是初次接洽。「向 Urban Design 索取資歷文件」是錯誤的，因為馬許先生隨信附上的是 NovaBuild 自身的公司資歷，而非向對方索取資料。"
      },
      {
        id: "p7b_med_1_q2",
        text: "What does NovaBuild want Urban Design Associates to contribute?",
        options: ["A) Civil engineering expertise", "B) Sustainable architecture and community design", "C) Financial investment", "D) Project management services"],
        answer: "B",
        explanation: "「永續建築與社區設計」是正確答案，因為郵件說明 NovaBuild 尋求「Urban Design 在永續建築與以社區為中心的設計方面的專業知識，以強化我們的投標競爭力」。「土木工程專業知識」是錯誤的，因為 NovaBuild 本身具備 20 年的土木工程經驗，那是他們自己的貢獻，而非他們所尋求的。「財務投資」是錯誤的，因為郵件討論的是合作贏得合約，而非向 Urban Design 尋求資金。「專案管理服務」是錯誤的，因為郵件中並未提及專案管理是希望 Urban Design 貢獻的項目。"
      },
      {
        id: "p7b_med_1_q3",
        text: "What is implied about the contract bidding process?",
        options: ["A) NovaBuild has already been awarded the contract", "B) The deadline for submitting a bid is still upcoming", "C) Urban Design has already submitted a competing bid", "D) The city has rejected previous proposals"],
        answer: "B",
        explanation: "「投標截止日期尚未到來」是正確答案，因為郵件說明「投標截止日期為 11 月 30 日」，而郵件日期為 10 月 14 日，代表截止日期尚未到達。「NovaBuild 已獲得合約」是錯誤的，因為 NovaBuild 仍在努力強化其投標，尚未獲得任何合約。「Urban Design 已提交競爭性投標」是錯誤的，因為郵件是邀請 Urban Design 合作，暗示他們尚未單獨提交投標。「市政府已拒絕過去的提案」是錯誤的，因為郵件中完全未提及任何先前被拒絕的提案。"
      },
      {
        id: "p7b_med_1_q4",
        text: "What did Mr. Marsh include with his email?",
        options: ["A) A signed partnership agreement", "B) A project brief and company credentials", "C) A financial analysis", "D) Letters of recommendation"],
        answer: "B",
        explanation: "「專案說明書和公司資歷文件」是正確答案，因為郵件說明「我已附上初步的專案說明書及我們的公司資歷文件供您參閱」。「已簽署的合作協議」是錯誤的，因為郵件是在提議合作關係，而非以簽署文件確認合作。「財務分析報告」是錯誤的，因為附件中完全未提及任何財務分析報告。「推薦信」是錯誤的，因為郵件提到的是公司資歷文件，而非第三方出具的推薦信。"
      }
    ]
  },
  {
    id: "p7b_med_2",
    type: "single",
    title: "Company Newsletter Article",
    passage: `EMPLOYEE SPOTLIGHT: Ten Years of Innovation

This month, we celebrate the ten-year anniversary of our Research & Development department. What started as a team of four engineers has grown into a 60-person powerhouse responsible for 23 patents and three award-winning product lines.

Department Head Dr. Maria Santos joined the company nine years ago as a senior engineer. "When I arrived, the team was working out of a converted storage room," she recalls with a laugh. "Today, we have a state-of-the-art facility with equipment that scientists at universities envy."

The department's most celebrated achievement is the development of the EcoChip, a low-power processor that has been adopted by manufacturers in 12 countries. The EcoChip won the Global Innovation Award in 2021 and is currently used in more than 40 million devices worldwide.

Looking ahead, Dr. Santos hints at an ambitious project: "We're working on something that will change how people interact with wearable devices. I can't say more yet, but stay tuned."`,
    questions: [
      {
        id: "p7b_med_2_q1",
        text: "How many people currently work in the R&D department?",
        options: ["A) 4", "B) 12", "C) 23", "D) 60"],
        answer: "D",
        explanation: "「60」是正確答案，因為文章說明該部門「已成長為 60 人的強大團隊」。「4」是錯誤的，因為四人是部門成立之初的原始團隊規模，而非現在的人數。「12」是錯誤的，因為 12 是採用 EcoChip 的國家數量，而非部門人數。「23」是錯誤的，因為 23 是該部門持有的專利數量，而非員工人數。"
      },
      {
        id: "p7b_med_2_q2",
        text: "When did Dr. Santos join the company?",
        options: ["A) Ten years ago", "B) Nine years ago", "C) When the department was founded", "D) After winning the Global Innovation Award"],
        answer: "B",
        explanation: "「九年前」是正確答案，因為文章明確說明「瑪麗亞·桑托斯博士九年前以高級工程師身分加入公司」。「十年前」是錯誤的，因為部門是十年前成立的，但桑托斯博士是一年後才加入。「部門成立時」是錯誤的，因為桑托斯博士是在九年前加入，而部門成立於十年前。「獲得全球創新獎之後」是錯誤的，因為那個獎項是 2021 年獲得的，而桑托斯博士是在文章撰寫的九年前就加入了公司。"
      },
      {
        id: "p7b_med_2_q3",
        text: "What does Dr. Santos suggest about the department's next project?",
        options: ["A) It involves wearable technology", "B) It is a new version of the EcoChip", "C) It will be announced next quarter", "D) It focuses on energy efficiency"],
        answer: "A",
        explanation: "「涉及穿戴式技術」是正確答案，因為桑托斯博士說道「我們正在開發一項將改變人們與穿戴裝置互動方式的東西」。「是 EcoChip 的新版本」是錯誤的，因為桑托斯博士暗示的是全新的事物，並未提及 EcoChip。「將在下一季宣布」是錯誤的，因為桑托斯博士表示她尚無法透露細節，但沒有指定下一季的發布時間。「專注於節能」是錯誤的，因為節能是 EcoChip 的特點，而非對下一個專案的描述。"
      },
      {
        id: "p7b_med_2_q4",
        text: "Which of the following best describes the EcoChip?",
        options: ["A) A high-performance graphics processor", "B) An energy-efficient processor used globally", "C) A processor developed for military use", "D) A chip designed for smartphones only"],
        answer: "B",
        explanation: "「在全球廣泛使用的節能處理器」是正確答案，因為文章描述 EcoChip 是「一款低耗電處理器，已被 12 個國家的製造商採用」，並應用於全球逾 4,000 萬台設備中。「高效能圖形處理器」是錯誤的，因為 EcoChip 被描述為低耗電，且文中完全未提及圖形處理功能。「為軍事用途開發的處理器」是錯誤的，因為文章描述的是消費者與製造商的採用情形，並非軍事應用。「僅針對智慧型手機設計的晶片」是錯誤的，因為 EcoChip 被描述為應用於廣泛的裝置類型，並不限於智慧型手機。"
      }
    ]
  },
  {
    id: "p7b_med_3",
    type: "double",
    title: "Software License Inquiry",
    passages: [
      {
        label: "Email from Client",
        content: `From: Kevin Lau <k.lau@petrolink.com>
To: licensing@softwaveinc.com
Subject: Enterprise License Inquiry — DataWave Pro
Date: March 5

Hello,

Our company, PetroLink Engineering, is interested in purchasing an enterprise license for DataWave Pro. We currently have 85 users who would need access, with the possibility of adding up to 30 more over the next year.

Could you please provide pricing information for both 85 and 115 user tiers? We would also like to know if volume discounts apply and whether we can pilot the software for 30 days before purchasing.

Additionally, are training resources included with the enterprise license, or would those be a separate cost?

Thank you,
Kevin Lau
IT Procurement Manager, PetroLink Engineering`
      },
      {
        label: "Reply from SoftWave Inc.",
        content: `From: Sandra Holt <s.holt@softwaveinc.com>
To: k.lau@petrolink.com
Subject: RE: Enterprise License Inquiry — DataWave Pro
Date: March 6

Dear Mr. Lau,

Thank you for your interest in DataWave Pro. I am happy to provide the following information:

Pricing:
• 85-user tier: $24,000/year ($282 per user)
• 100-user tier: $28,000/year ($280 per user)
• 115-user tier: $31,000/year ($270 per user)

Volume discounts apply for licenses of 100+ users, as reflected above.

Regarding a trial period: Yes, we offer a 30-day pilot for enterprise prospects at no charge. You will have access to all features during the trial.

Training resources: A full library of video tutorials and documentation is included with all enterprise licenses at no extra cost. We also offer on-site training sessions for an additional fee of $2,500 per day.

Please let me know if you would like to proceed with the pilot. I can have your account set up within 24 hours of receiving a signed pilot agreement.

Best regards,
Sandra Holt
Enterprise Sales, SoftWave Inc.`
      }
    ],
    questions: [
      {
        id: "p7b_med_3_q1",
        text: "Why did Mr. Lau contact SoftWave Inc.?",
        options: ["A) To renew an existing license", "B) To inquire about purchasing an enterprise license", "C) To report a software issue", "D) To request a refund"],
        answer: "B",
        explanation: "「詢問購買企業授權」是正確答案，因為劉先生的郵件說明「我們公司有意購買 DataWave Pro 的企業授權」。「更新現有授權」是錯誤的，因為郵件呈現的是全新的購買諮詢，並未提及與 SoftWave 的任何既有關係。「回報軟體問題」是錯誤的，因為郵件中完全未提及任何程式錯誤或技術問題，內容完全圍繞定價和授權。「申請退款」是錯誤的，因為 PetroLink 尚未進行任何購買，目前是首次評估這款產品。"
      },
      {
        id: "p7b_med_3_q2",
        text: "How much would a 115-user license cost per user per year?",
        options: ["A) $282", "B) $280", "C) $270", "D) $265"],
        answer: "C",
        explanation: "「$270」是正確答案，因為桑德拉的回覆明確說明「115 位使用者方案：每年 $31,000（每位使用者 $270）」。「$282」是錯誤的，因為那是 85 位使用者方案的每人費用，而非 115 位使用者方案。「$280」是錯誤的，因為那是 100 位使用者方案的每人費用。「$265」是錯誤的，因為所提供的定價表中完全沒有每人 $265 的費率。"
      },
      {
        id: "p7b_med_3_q3",
        text: "What is included in the enterprise license at no extra cost?",
        options: ["A) On-site training", "B) Video tutorials and documentation", "C) 30-day pilot and on-site training", "D) A dedicated account manager"],
        answer: "B",
        explanation: "「教學影片和說明文件」是正確答案，因為桑德拉的回覆說明「完整的教學影片資料庫和說明文件已免費包含在所有企業授權中」。「現場培訓」是錯誤的，因為現場培訓被明確列為額外服務，每天收費 $2,500。「30 天試用和現場培訓」是錯誤的，因為雖然試用期是免費的，但現場培訓仍需額外付費。「專屬客戶經理」是錯誤的，因為回覆中完全未提及企業授權包含專屬客戶經理服務。"
      },
      {
        id: "p7b_med_3_q4",
        text: "What must Mr. Lau do before the pilot can begin?",
        options: ["A) Make an upfront payment", "B) Attend an orientation session", "C) Sign a pilot agreement", "D) Provide a list of all users"],
        answer: "C",
        explanation: "「簽署試用協議」是正確答案，因為桑德拉的回覆說明「收到已簽署的試用協議後，我可以在 24 小時內完成帳號設定」。「預先付款」是錯誤的，因為 30 天試用期「免費提供」，開始試用無需任何付款。「參加說明會」是錯誤的，因為回覆中完全未提及說明會是開始試用的前提條件。「提供所有使用者名單」是錯誤的，因為回覆只要求已簽署的試用協議，而非使用者名單，即可啟動試用。"
      }
    ]
  },
  {
    id: "p7b_med_4",
    type: "double",
    title: "Facility Relocation Announcement",
    passages: [
      {
        label: "Company Announcement",
        content: `TO: All Employees
FROM: Operations Management
RE: Office Relocation — Effective April 1
DATE: February 20

We are pleased to announce that our headquarters will relocate to 88 Harbor View Drive, Suite 400 on April 1. The new office offers 30% more floor space, modern workstations, and improved meeting facilities, including two video-conferencing rooms.

Employees who currently use company-provided parking at the 50 Central Avenue location should note that the new building offers 120 underground parking spaces on a first-come, first-served basis. Monthly parking fees will increase from $80 to $95.

All employees will be required to obtain new access cards for the new building. A distribution event will be held on March 25 in the existing conference room from 9:00 a.m. to 5:00 p.m.

Please do not bring any personal items to the new location before April 1, as access will not be available until that date.`
      },
      {
        label: "Employee Email",
        content: `From: Angela Reeves <a.reeves@company.com>
To: operations@company.com
Subject: Relocation Question
Date: February 22

Hello,

I have read the relocation announcement and have a few questions.

First, I will be traveling for work from March 22 to March 27 and will miss the access card distribution event on March 25. Is there another way I can obtain my card before April 1?

Second, I currently commute by bicycle and do not need a parking space. However, will there be secure bicycle storage at the new location?

Third, my team has several monitors and specialized equipment. Who should I coordinate with to ensure these are moved safely?

Thank you,
Angela Reeves
Senior Data Analyst`
      }
    ],
    questions: [
      {
        id: "p7b_med_4_q1",
        text: "What is one benefit of the new office mentioned in the announcement?",
        options: ["A) Free parking for all employees", "B) An on-site cafeteria", "C) More floor space and modern workstations", "D) A gym and wellness center"],
        answer: "C",
        explanation: "「更大的空間和現代化工作站」是正確答案，因為公告說明「新辦公室提供多出 30% 的使用面積、現代化工作站及改善的會議設施」。「所有員工免費停車」是錯誤的，因為公告說明停車費實際上將從每月 $80 漲至 $95，且車位依先到先得原則分配。「現場餐廳」是錯誤的，因為新辦公室的優點中完全未提及餐廳。「健身房和健康中心」是錯誤的，因為搬遷公告中沒有提到任何健身房或健康設施。"
      },
      {
        id: "p7b_med_4_q2",
        text: "Why is Ms. Reeves concerned about the access card event?",
        options: ["A) She thinks the event is too crowded", "B) She will be away on the date of the event", "C) She does not know where the event is held", "D) She already has an access card"],
        answer: "B",
        explanation: "「她在活動當天不在公司」是正確答案，因為瑞芙斯女士表示「我將在 3 月 22 日至 27 日出差，因此無法參加 3 月 25 日的門禁卡發放活動」。「她認為活動人太多」是錯誤的，因為瑞芙斯女士並未提及人員過多的問題。「她不知道活動地點」是錯誤的，因為公告清楚說明活動在現有會議室舉行，而瑞芙斯女士並未表示對地點感到困惑。「她已經有門禁卡了」是錯誤的，因為公告說明所有員工都需要取得新大樓的新門禁卡，而瑞芙斯女士正是在詢問如何取得她的門禁卡。"
      },
      {
        id: "p7b_med_4_q3",
        text: "What does Ms. Reeves ask about regarding transportation?",
        options: ["A) Whether there is a company shuttle bus", "B) Whether monthly parking fees can be waived", "C) Whether there is secure bicycle storage", "D) Whether there is a nearby train station"],
        answer: "C",
        explanation: "「是否有安全的自行車停放處」是正確答案，因為瑞芙斯女士表示「我目前騎自行車上班……新地點是否有安全的自行車停放處？」「是否有公司接駁車」是錯誤的，因為瑞芙斯女士的郵件中完全未提及接駁車。「每月停車費是否可豁免」是錯誤的，因為瑞芙斯女士說她不需要停車位，所以停車費並非她的顧慮。「附近是否有火車站」是錯誤的，因為瑞芙斯女士騎自行車通勤，詢問的是自行車停放設施，而非大眾交通。"
      },
      {
        id: "p7b_med_4_q4",
        text: "What concern does Ms. Reeves raise about her team's equipment?",
        options: ["A) The equipment may not work at the new location", "B) She needs to know who will handle moving the equipment", "C) The new office may not have enough space for it", "D) The equipment needs to be upgraded before the move"],
        answer: "B",
        explanation: "「她需要知道由誰負責搬運設備」是正確答案，因為瑞芙斯女士詢問「我應該與誰協調，以確保這些設備被安全地移動？」「設備在新地點可能無法正常運作」是錯誤的，因為瑞芙斯女士並未提及任何關於設備在新地點相容性或功能性的疑慮。「新辦公室可能沒有足夠的空間容納設備」是錯誤的，因為瑞芙斯女士並未質疑新辦公室是否有足夠空間放置設備。「設備在搬遷前需要升級」是錯誤的，因為瑞芙斯女士詢問的是安全運輸問題，而非任何設備升級事宜。"
      }
    ]
  }
];

const PART7B_HARD = [
  {
    id: "p7b_hard_1",
    type: "single",
    title: "Regulatory Compliance Update",
    passage: `To: Compliance Officers — All Regional Offices
From: Global Compliance Division
Subject: Updated AML Screening Requirements — Effective Q1
Classification: Internal — Confidential

In light of recent amendments to the Financial Action Task Force (FATF) recommendations and corresponding updates to local regulatory frameworks, all regional offices are required to implement enhanced Anti-Money Laundering (AML) screening protocols no later than the first business day of Q1.

Key changes include:
1. Expansion of Politically Exposed Person (PEP) screening to include second-degree relatives and close associates.
2. Mandatory re-screening of all Tier-1 and Tier-2 clients on a semi-annual basis (previously annual).
3. Enhanced Due Diligence (EDD) triggers now include cash transactions exceeding $8,000 (reduced from $10,000).
4. All Suspicious Activity Reports (SARs) must be filed within 48 hours of detection, down from 72 hours.

Regional compliance officers must submit implementation confirmation to the Global Compliance Division within 14 calendar days of this notice. Failure to comply may expose the firm to regulatory sanctions and reputational risk.

For guidance on implementation, refer to the updated AML Procedures Manual (v5.2) available on the compliance intranet portal.`,
    questions: [
      {
        id: "p7b_hard_1_q1",
        text: "What prompted the updates to AML screening requirements?",
        options: ["A) A major money laundering case at the firm", "B) FATF recommendation amendments and local regulatory updates", "C) An audit finding by external consultants", "D) A request from the board of directors"],
        answer: "B",
        explanation: "「FATF 建議修訂及當地法規更新」是正確答案，因為備忘錄說明變更的原因是「有鑑於金融行動工作組（FATF）建議的近期修訂及當地法規框架的相應更新」。「公司發生重大洗錢案件」是錯誤的，因為備忘錄中沒有引用任何內部事件作為觸發原因，變更是由外部法規發展所驅動的。「外部顧問的審計發現」是錯誤的，因為備忘錄將變更歸因於 FATF 更新，而非外部審計結果。「董事會的要求」是錯誤的，因為指令來自全球合規部門以回應法規變更，並非源於董事會的要求。"
      },
      {
        id: "p7b_hard_1_q2",
        text: "Which of the following represents a change from previous requirements?",
        options: ["A) SAR filing within 72 hours", "B) Annual re-screening of Tier-1 clients", "C) PEP screening of second-degree relatives", "D) EDD for cash transactions over $10,000"],
        answer: "C",
        explanation: "「對政治公眾人物（PEP）的二等親進行篩查」是正確答案，因為備忘錄明確將此列為新增的擴展範圍，先前的範圍並不包含二等親及密切關聯人士。「在 72 小時內申報可疑活動報告」是錯誤的，因為 72 小時是舊的要求，新要求已縮短為 48 小時。「每年對第一層客戶重新篩查」是錯誤的，因為每年篩查是過去的做法，新要求已改為每半年一次。「對超過 $10,000 的現金交易進行強化盡職調查」是錯誤的，因為 $10,000 是舊的強化盡職調查門檻，新門檻已降低至 $8,000。"
      },
      {
        id: "p7b_hard_1_q3",
        text: "What must regional compliance officers do within 14 days?",
        options: ["A) Complete the AML training course", "B) File all outstanding SARs", "C) Confirm implementation to Global Compliance Division", "D) Re-screen all clients"],
        answer: "C",
        explanation: "「向全球合規部門確認已完成執行」是正確答案，因為備忘錄說明「各地區合規主任必須在本通知發出後 14 個自然日內向全球合規部門提交執行確認」。「完成 AML 培訓課程」是錯誤的，因為備忘錄中未提及任何培訓完成截止日期，14 天期限是針對執行確認的。「提交所有未申報的可疑活動報告」是錯誤的，因為可疑活動報告的申報要求與偵測時限有關，並非這個 14 天的執行確認窗口。「重新篩查所有客戶」是錯誤的，因為雖然重新篩查的頻率有所改變，但在 14 天內重新篩查所有客戶並非備忘錄的要求。"
      },
      {
        id: "p7b_hard_1_q4",
        text: "What is implied about the consequence of non-compliance?",
        options: ["A) Staff will be dismissed", "B) The firm may face regulatory sanctions and reputational damage", "C) The firm's license will automatically be revoked", "D) Clients will be notified of the failure"],
        answer: "B",
        explanation: "「公司可能面臨法規制裁和聲譽損害」是正確答案，因為備忘錄說明「未能遵守可能使公司面臨法規制裁和聲譽風險」。「員工將被解雇」是錯誤的，因為備忘錄所述的後果是針對公司整體，而非個別員工的解雇。「公司執照將自動被撤銷」是錯誤的，因為備忘錄使用的是審慎措辭（「可能使……面臨」），而非描述執照自動被撤銷的確定性後果。「客戶將被通知違規情況」是錯誤的，因為備忘錄中完全未提及需要通知客戶任何不合規的情況。"
      }
    ]
  },
  {
    id: "p7b_hard_2",
    type: "double",
    title: "Acquisition Due Diligence",
    passages: [
      {
        label: "Legal Counsel Memorandum",
        content: `PRIVILEGED AND CONFIDENTIAL
ATTORNEY-CLIENT COMMUNICATION

To: Acquisition Committee
From: Hartley & Crane LLP
Re: Preliminary Due Diligence — Acquisition of Crestline Biotech
Date: September 14

Our review of Crestline Biotech's legal and regulatory status has identified the following material issues:

1. Pending Litigation: Crestline is currently a defendant in a patent infringement suit filed by GenPath Inc. in the District Court of Delaware. Damages sought amount to $22 million. Trial is scheduled for Q2 of next year. Our assessment is that the claim has a moderate probability of success for the plaintiff.

2. Regulatory Status: Two of Crestline's drug candidates (CB-107 and CB-212) are in Phase II clinical trials. CB-107 has received Breakthrough Therapy Designation from the FDA; CB-212 has not. Notably, CB-212's Phase I data revealed a hepatotoxicity signal that required a protocol amendment. Investors should be aware of this risk.

3. IP Portfolio: Crestline holds 14 active patents and 9 pending applications. Three patents are set to expire within the next five years. We recommend requesting an independent IP valuation.

In light of these findings, we recommend that representations and warranties insurance be obtained and that indemnification provisions in the purchase agreement be specifically tailored to address the GenPath litigation exposure.`
      },
      {
        label: "Internal Financial Summary",
        content: `Crestline Biotech — Financial Summary (FY Last Year)

Revenue:                $18.4M (primarily licensing and research grants)
R&D Expenditure:        $31.2M
Net Loss:               ($14.7M)
Cash and Equivalents:   $27.3M (estimated 18-month runway)
Debt:                   $5M convertible note (due in 14 months)

Key Observations:
• Revenue is insufficient to fund ongoing R&D; the company depends on external capital.
• The convertible note becomes due before the end of the estimated cash runway, creating a potential liquidity event.
• Breakthrough Therapy Designation for CB-107 could accelerate regulatory approval and increase commercial value significantly.
• R&D expenditure reflects investment in two active clinical-stage programs.

Recommendation: A purchase price adjustment mechanism (earnout) tied to CB-107's regulatory milestones would be advisable to align risk-sharing between buyer and seller.`
      }
    ],
    questions: [
      {
        id: "p7b_hard_2_q1",
        text: "What risk does the GenPath litigation present to the acquisition?",
        options: ["A) It could invalidate all of Crestline's patents", "B) There is a moderate probability that Crestline may owe $22 million in damages", "C) It will definitely result in a settlement before closing", "D) It prevents the acquisition from proceeding under antitrust law"],
        answer: "B",
        explanation: "「Crestline 有中等可能性需支付 2,200 萬美元的損害賠償」是正確答案，因為法律備忘錄說明「求償金額為 2,200 萬美元」，且「該索賠對原告而言具有中等可能的勝訴機率」。「可能使 Crestline 所有專利無效」是錯誤的，因為訴訟被描述為針對 Crestline 的專利侵權訴訟，而非足以使其整個智慧財產權組合無效的挑戰。「將在交割前確定達成和解」是錯誤的，因為備忘錄指出審判預定於明年第二季進行，且以可能性而非確定性來表達和解的結果。「因反壟斷法而阻止收購進行」是錯誤的，因為備忘錄討論的是以保險和賠償條款來應對風險，而非反壟斷法對交易的阻礙。"
      },
      {
        id: "p7b_hard_2_q2",
        text: "What concern exists about CB-212?",
        options: ["A) It has not entered clinical trials yet", "B) Its Phase I data showed a liver toxicity signal", "C) It has been rejected by the FDA", "D) It directly competes with an existing product of the acquirer"],
        answer: "B",
        explanation: "「其第一期臨床試驗數據出現肝毒性信號」是正確答案，因為法律備忘錄說明「CB-212 的第一期數據揭示了肝毒性信號，需要修改試驗方案」，肝毒性即指肝臟毒性。「尚未進入臨床試驗」是錯誤的，因為備忘錄說明 CB-212 目前正處於第二期臨床試驗階段。「已被 FDA 拒絕」是錯誤的，因為備忘錄描述的是一項在修正方案後持續進行的試驗，而非 FDA 的拒絕。「與收購方現有產品直接競爭」是錯誤的，因為兩份文件中均未提及 CB-212 與收購方之間存在任何競爭產品關係。"
      },
      {
        id: "p7b_hard_2_q3",
        text: "Why is the convertible note a concern according to the financial summary?",
        options: ["A) Its interest rate is above market", "B) It matures before the estimated cash runway ends", "C) It was issued without shareholder approval", "D) It has already been called by the lender"],
        answer: "B",
        explanation: "「其到期日早於預估現金可用期結束之前」是正確答案，因為財務摘要說明「可轉換票據的到期日在預估現金可用期結束之前，可能引發流動性事件」。「其利率高於市場水準」是錯誤的，因為財務摘要中完全未討論可轉換票據的利率。「未經股東批准即已發行」是錯誤的，因為文件中未提供任何關於票據發行程序或股東批准的資訊。「已被貸款方提前要求還款」是錯誤的，因為票據被描述為 14 個月後到期，並非已被要求提前還款或已違約。"
      },
      {
        id: "p7b_hard_2_q4",
        text: "What deal structure do both documents support?",
        options: ["A) A full cash acquisition at a fixed price", "B) A stock-for-stock merger", "C) Performance-based earnout provisions tied to regulatory milestones", "D) A leveraged buyout using Crestline's assets"],
        answer: "C",
        explanation: "「與法規里程碑掛鉤的績效型遞延對價條款」是正確答案，因為法律備忘錄建議針對 GenPath 訴訟風險量身訂製賠償條款，而財務摘要建議採用「與 CB-107 法規里程碑掛鉤的價格調整機制（遞延對價）」，兩份文件均支持條件式定價結構。「以固定價格進行全現金收購」是錯誤的，因為兩份文件均建議採用浮動或條件式的定價要素，而非固定的全現金交易。「股換股合併」是錯誤的，因為兩份文件均未提及以股權作為交易貨幣。「以 Crestline 資產為基礎的槓桿收購」是錯誤的，因為文件討論的是藥物里程碑遞延對價和訴訟保護機制，而非以資產為擔保的槓桿收購。"
      }
    ]
  },
  {
    id: "p7b_hard_3",
    type: "triple",
    title: "Infrastructure Bond Issuance",
    passages: [
      {
        label: "Prospectus Summary",
        content: `PACIFIC INFRASTRUCTURE BOND — SERIES 2024-A
Issuer: Pacific Metro Transit Authority ("PMTA")
Principal Amount: $500,000,000
Coupon Rate: 4.75% per annum, paid semi-annually
Maturity: 10 years from issuance
Credit Rating: AA- (Fitch), A+ (S&P)
Use of Proceeds: Expansion of Metro Line 6 (40%), Fleet Electrification Program (35%), Station Renovation (25%)
Tax Status: Interest payments exempt from federal income tax
Underwriter: Creston Capital Markets

Risk Factors:
• Revenue risk if ridership falls below projections
• Interest rate risk on variable-rate debt in the capital structure
• Construction delays that may affect scheduled completion milestones
• Changes in state and federal transportation funding policy`
      },
      {
        label: "Analyst Report",
        content: `BOND RESEARCH NOTE — Pacific Metro Transit Authority 2024-A

Rating: BUY (Income-Oriented Investors)
Target Yield: 4.60%–4.80%

Investment Thesis:
PMTA's Series 2024-A offers an attractive risk-adjusted return for tax-sensitive investors. The AA-/A+ dual rating reflects PMTA's strong fare revenue base and a dedicated tax levy that covers 60% of debt service. The authority has not missed a debt service payment in over 25 years.

Key Strengths:
• Tax-exempt coupon provides significant yield advantage for investors in the 32%+ tax bracket
• Metro Line 6 expansion targets a high-density corridor with projected ridership growth of 18% by 2027
• Fleet electrification reduces operating costs and aligns with ESG mandates

Key Risks:
• Remote work trends may suppress long-term ridership recovery
• Construction cost inflation has increased project estimates by approximately 8% since initial budgeting
• The 10-year duration implies meaningful interest rate sensitivity`
      },
      {
        label: "Investor Letter",
        content: `Dear Investment Committee,

I am recommending that the Foundation allocate $5 million to the PMTA 2024-A bond as part of our fixed income rebalancing.

Our current federal tax rate of 34% means the tax-exempt 4.75% coupon is equivalent to a taxable yield of approximately 7.2%, which compares favorably to comparable taxable corporate bonds currently yielding 5.5%–6.2%.

The dual investment-grade rating and PMTA's uninterrupted debt service history give me confidence in credit quality. The 10-year maturity aligns with our infrastructure investment horizon.

One concern I flag is the construction cost inflation noted in the analyst report. I recommend we include a covenant in our commitment letter requiring semi-annual project progress reports. This would allow us to monitor milestone adherence and escalate concerns before they become material.

Recommended allocation: $5 million (approximately 3% of fixed income portfolio).

— Portfolio Manager, Fixed Income`
      }
    ],
    questions: [
      {
        id: "p7b_hard_3_q1",
        text: "What portion of the bond proceeds is allocated to Metro Line 6 expansion?",
        options: ["A) 25%", "B) 35%", "C) 40%", "D) 50%"],
        answer: "C",
        explanation: "「40%」是正確答案，因為說明書在資金用途分項中明確說明「捷運六號線擴建（40%）」。「25%」是錯誤的，因為 25% 是車站翻新的分配比例，並非捷運六號線的份額。「35%」是錯誤的，因為 35% 是車隊電氣化計畫的分配比例。「50%」是錯誤的，因為資金用途中並無 50% 的分配，三項分配分別為 40%、35% 和 25%。"
      },
      {
        id: "p7b_hard_3_q2",
        text: "According to the analyst report, what is a key advantage for high-bracket taxpayers?",
        options: ["A) The bonds are backed by federal guarantees", "B) The coupon rate is above market average", "C) The tax-exempt coupon provides a yield advantage", "D) The bond has a short duration"],
        answer: "C",
        explanation: "「免稅票息提供殖利率優勢」是正確答案，因為分析師報告說明「免稅票息對所得稅級距 32% 以上的投資人提供顯著的殖利率優勢」。「債券有聯邦政府擔保」是錯誤的，因為說明書描述的擔保來源是稅收徵收機制和票價收入基礎，而非聯邦政府擔保。「票息率高於市場平均水準」是錯誤的，因為高稅率級距投資人的優勢來自免稅優惠，而非票息率高於市場水準。「債券存續期間較短」是錯誤的，因為這是一檔 10 年期債券，分析師也指出這意味著相當程度的利率敏感性。"
      },
      {
        id: "p7b_hard_3_q3",
        text: "What is the approximate tax-equivalent yield calculated by the portfolio manager?",
        options: ["A) 4.75%", "B) 5.5%", "C) 6.2%", "D) 7.2%"],
        answer: "D",
        explanation: "「7.2%」是正確答案，因為投資人信函說明鑑於基金會 34% 的稅率，「免稅的 4.75% 票息相當於約 7.2% 的應稅殖利率」。「4.75%」是錯誤的，因為那是債券的名目票息率，而非考量免稅優惠後的稅後等值殖利率。「5.5%」是錯誤的，因為那是用作基準比較的可課稅公司債殖利率區間的下限，而非此次計算的稅後等值殖利率。「6.2%」是錯誤的，因為那是可課稅公司債基準殖利率區間的上限，而非 PMTA 債券的稅後等值殖利率。"
      },
      {
        id: "p7b_hard_3_q4",
        text: "What safeguard does the portfolio manager propose to address construction risk?",
        options: ["A) A lower allocation to reduce exposure", "B) A covenant requiring semi-annual project progress reports", "C) Selling the bond after two years", "D) Purchasing credit default swaps"],
        answer: "B",
        explanation: "「要求每半年提交一次專案進度報告的契約條款」是正確答案，因為投資人信函說明「我建議在我們的承諾書中加入要求每半年提交專案進度報告的契約條款」。「降低投資金額以減少風險敞口」是錯誤的，因為投資組合經理建議以全額 500 萬美元投入，並未建議縮減金額。「兩年後出售債券」是錯誤的，因為信函將 10 年期的到期日定位為符合基金會的投資期限，並未建議提前退出。「購買信用違約交換（CDS）」是錯誤的，因為信函中未提及任何避險工具，所提出的保障措施是資訊性的契約條款，而非金融對沖工具。"
      },
      {
        id: "p7b_hard_3_q5",
        text: "Which risk is mentioned in BOTH the prospectus and the analyst report?",
        options: ["A) Remote work trends reducing ridership", "B) Tax policy changes", "C) Construction delays and cost overruns", "D) Decline in the credit rating"],
        answer: "C",
        explanation: "「工程延誤和成本超支」是正確答案，因為說明書列出「可能影響預定完工里程碑的工程延誤」，而分析師報告指出「工程成本通膨使專案估算增加了約 8%」，兩份文件均識別了與工程相關的風險。「遠端工作趨勢降低乘客人數」是錯誤的，因為這項風險只出現在分析師報告中（「遠端工作趨勢可能抑制長期客運量的復甦」），說明書中並未提及。「稅務政策變化」是錯誤的，因為說明書提到的是交通運輸資金政策的變化，而非稅務政策，且分析師報告也未將稅務政策列為風險。「信用評等下降」是錯誤的，因為說明書和分析師報告中均未提及信用評等遭下調的風險。"
      }
    ]
  },
  {
    id: "p7b_hard_4",
    type: "triple",
    title: "Corporate Restructuring",
    passages: [
      {
        label: "Board Announcement",
        content: `Nexon Global Group — Board of Directors Announcement

The Board of Directors announces that, following a comprehensive strategic review, the company will undertake a corporate restructuring effective January 1. The restructuring comprises three components:

1. Divestiture: The Board has approved the sale of the Consumer Products Division to Orion Capital Partners for $280 million, representing a 9.2x EBITDA multiple. The transaction is expected to close within 90 days, subject to regulatory approval.

2. Consolidation: The Technology Solutions and Digital Services units will be merged into a single entity, "Nexon Digital," under the leadership of current Digital Services President, Yuki Tanaka.

3. Workforce Reduction: As a result of the consolidation, approximately 340 positions will be eliminated, representing 8% of the combined workforce. Affected employees will receive severance packages in accordance with applicable labor laws and Nexon's enhanced redundancy policy.

The Board believes these actions will sharpen Nexon's strategic focus on its core technology business and deliver significant long-term shareholder value.`
      },
      {
        label: "Press Statement from Acquirer",
        content: `Orion Capital Partners — Statement on Nexon Consumer Products Acquisition

We are delighted to announce that Orion Capital Partners has reached a definitive agreement to acquire Nexon Global's Consumer Products Division. The acquisition represents a strategic addition to our portfolio of consumer-facing brands and aligns with our thesis of investing in established businesses with resilient cash flows.

The Consumer Products Division generated revenue of approximately $210 million in the most recent fiscal year, with EBITDA of approximately $30 million. We intend to operate the division as a standalone entity under existing management, with no planned changes to headcount or operational structure in the near term.

Orion is committed to investing in the division's growth, including exploring new distribution partnerships and international market opportunities.

We look forward to working with the Nexon Consumer Products team to build on its strong market position.`
      },
      {
        label: "Employee Q&A Document",
        content: `Nexon Global — Employee Q&A: Restructuring

Q: Will I know if my position is affected?
A: Managers will notify affected employees individually no later than January 15. All employees will be informed of their status before any public announcement.

Q: What severance will affected employees receive?
A: Affected employees will receive two weeks of severance pay for each year of service, with a minimum of four weeks and a maximum of 26 weeks. In addition, health coverage will continue for 90 days post-termination.

Q: Will the Consumer Products Division employees be affected by the workforce reduction?
A: No. The workforce reduction applies only to the Technology Solutions and Digital Services units. Consumer Products Division employees will transfer to Orion Capital Partners as part of the transaction.

Q: Who leads the newly merged Nexon Digital unit?
A: Yuki Tanaka, currently President of Digital Services, will lead the new Nexon Digital entity.`
      }
    ],
    questions: [
      {
        id: "p7b_hard_4_q1",
        text: "What EBITDA multiple was used to value the Consumer Products Division?",
        options: ["A) 7.5x", "B) 8.0x", "C) 9.2x", "D) 10.0x"],
        answer: "C",
        explanation: "「9.2 倍」是正確答案，因為董事會公告說明將消費品部門出售給 Orion Capital Partners 的交易「代表 9.2 倍的 EBITDA 倍數」。「7.5 倍」是錯誤的，因為三份文件中均未提及 7.5 倍的估值倍數。「8.0 倍」是錯誤的，因為公告或任何其他文件中均未出現 8.0 倍的估值倍數。「10.0 倍」是錯誤的，因為所述的估值倍數是 9.2 倍，而非 10.0 倍。"
      },
      {
        id: "p7b_hard_4_q2",
        text: "According to the Q&A, which employees are affected by the workforce reduction?",
        options: ["A) Consumer Products Division employees", "B) Employees at Orion Capital Partners", "C) Technology Solutions and Digital Services employees", "D) All Nexon employees globally"],
        answer: "C",
        explanation: "「技術解決方案及數位服務部門的員工」是正確答案，因為問答文件明確說明「裁員僅適用於技術解決方案及數位服務部門」。「消費品部門員工」是錯誤的，因為問答文件確認消費品員工不受影響，他們將隨交易轉移至 Orion Capital Partners。「Orion Capital Partners 的員工」是錯誤的，因為 Orion 自身的員工並不屬於 Nexon 重組的範圍，而且 Orion 也表明近期內不計劃進行人員調整。「全球所有 Nexon 員工」是錯誤的，因為只有特定部門受到影響，而非整個全球員工隊伍。"
      },
      {
        id: "p7b_hard_4_q3",
        text: "What is Orion Capital Partners' plan for the Consumer Products Division's current staff?",
        options: ["A) Lay off 8% of the workforce", "B) Integrate them into existing Orion teams", "C) No planned changes to headcount in the near term", "D) Transfer them to Nexon Digital"],
        answer: "C",
        explanation: "「近期內不計劃進行人員調整」是正確答案，因為 Orion 的新聞稿說明他們打算以「近期內不對人員或營運架構進行計劃性調整」的方式來經營該部門。「裁減 8% 的員工」是錯誤的，因為 8% 的裁員計畫適用於 Nexon 技術解決方案與數位服務部門的整合，而非 Orion 對消費品部門的規劃。「將他們整合進 Orion 現有團隊」是錯誤的，因為新聞稿說明該部門將以獨立實體的形式在現有管理層下運作。「將他們轉移至 Nexon Digital」是錯誤的，因為消費品員工將歸屬 Orion，而 Nexon Digital 是技術解決方案與數位服務合併後的實體。"
      },
      {
        id: "p7b_hard_4_q4",
        text: "What is the maximum severance an affected employee could receive?",
        options: ["A) 4 weeks", "B) 13 weeks", "C) 20 weeks", "D) 26 weeks"],
        answer: "D",
        explanation: "「26 週」是正確答案，因為問答文件說明資遣費為「每服務年資兩週，最少四週，最多 26 週」。「4 週」是錯誤的，因為四週是最低資遣費，而非最高上限。「13 週」是錯誤的，因為問答文件的資遣費計算公式中完全未提及 13 週的上限。「20 週」是錯誤的，因為所述的最高上限是 26 週，而非 20 週。"
      },
      {
        id: "p7b_hard_4_q5",
        text: "What can be inferred about the EBITDA margin of the Consumer Products Division?",
        options: ["A) Approximately 10%", "B) Approximately 14%", "C) Approximately 20%", "D) Approximately 25%"],
        answer: "B",
        explanation: "「約 14%」是正確答案，因為 Orion 的新聞稿提供的數據為收入約 2.1 億美元，EBITDA 約 3,000 萬美元，以 3,000 萬除以 2.1 億，EBITDA 利潤率約為 14.3%。「約 10%」是錯誤的，因為 3,000 萬除以 2.1 億約等於 14%，而非 10%。「約 20%」是錯誤的，因為 20% 的利潤率需要在 2.1 億的收入下實現 4,200 萬的 EBITDA，與所述數字不符。「約 25%」是錯誤的，因為 25% 的利潤率需要在 2.1 億的收入下實現 5,250 萬的 EBITDA，遠超過所述的 3,000 萬美元。"
      }
    ]
  }
];
