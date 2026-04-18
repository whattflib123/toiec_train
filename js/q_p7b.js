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
        explanation: "'To inform customers of a store opening' is correct because the announcement explicitly states 'we are thrilled to announce the grand opening of TechZone Electronics at Westfield Shopping Center.' 'To advertise a new product line' is wrong because the announcement is about a store opening event, not the launch of a new product category. 'To announce a change in store hours' is wrong because the store hours mentioned are specific to the sale event, not a change from previous hours. 'To promote a membership program' is wrong because no membership or loyalty program is mentioned anywhere in the announcement."
      },
      {
        id: "p7b_easy_1_q2",
        text: "What will the first 100 customers each day receive?",
        options: ["A) A discount voucher", "B) A free smartphone", "C) A free tote bag", "D) Free parking"],
        answer: "C",
        explanation: "'A free tote bag' is correct because the announcement states 'the first 100 customers each day will receive a free TechZone tote bag.' 'A discount voucher' is wrong because no voucher is mentioned as a gift for early customers — discounts of up to 40% apply to all sale shoppers. 'A free smartphone' is wrong because smartphones are items being sold at a discount, not given away as gifts. 'Free parking' is wrong because free parking at Level B2 is available to all visitors, not exclusively to the first 100 customers."
      },
      {
        id: "p7b_easy_1_q3",
        text: "How long does the sale last?",
        options: ["A) One week", "B) Three days", "C) Two days", "D) One day"],
        answer: "C",
        explanation: "'Two days' is correct because the announcement explicitly states the sale runs 'from Saturday, November 5 to Sunday, November 6 only,' which is exactly two days. 'One week' is wrong because the passage clearly limits the sale to a weekend, not a full seven days. 'Three days' is wrong because the sale ends on Sunday — only Saturday and Sunday are included, not a third day. 'One day' is wrong because the sale spans two separate days (Saturday and Sunday), not a single day."
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
        explanation: "'For renovations' is correct because the notice explicitly states 'The company cafeteria will be closed for renovations from Monday, December 4 through Friday, December 8.' 'Due to a health inspection' is wrong because no inspection is mentioned; the closure is a planned renovation. 'For staff training' is wrong because the notice is about a physical renovation of the cafeteria, not a training event. 'Due to a holiday' is wrong because the closure spans a regular work week and is attributed to renovation work, not a public holiday."
      },
      {
        id: "p7b_easy_2_q2",
        text: "Where can employees eat during the closure?",
        options: ["A) The lobby restaurant", "B) The main parking lot food trucks", "C) A nearby café", "D) The rooftop terrace"],
        answer: "B",
        explanation: "'The main parking lot food trucks' is correct because the notice states 'food truck vendors will be available in the main parking lot from 11:30 a.m. to 1:30 p.m. daily.' 'The lobby restaurant' is wrong because no lobby restaurant is mentioned in the notice. 'A nearby café' is wrong because the notice does not direct employees to any external café or off-site option. 'The rooftop terrace' is wrong because no rooftop facility is mentioned as an eating option."
      },
      {
        id: "p7b_easy_2_q3",
        text: "What is NOT mentioned as available in the 3rd floor kitchen?",
        options: ["A) A microwave", "B) A refrigerator", "C) A coffee machine", "D) A hot water dispenser"],
        answer: "C",
        explanation: "'A coffee machine' is correct as the answer because the notice lists the 3rd floor kitchen as having 'a microwave, refrigerator, and hot water dispenser' — a coffee machine is not included. 'A microwave' is wrong because a microwave is explicitly listed as one of the kitchen facilities available. 'A refrigerator' is wrong because a refrigerator is explicitly listed as one of the kitchen facilities available. 'A hot water dispenser' is wrong because a hot water dispenser is explicitly listed as one of the kitchen facilities available."
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
        explanation: "'7 nights' is correct because the confirmation explicitly states the hotel is booked for '7 nights (January 15–22).' '5 nights' is wrong because the booking covers seven nights, from January 15 through January 22, not five. '6 nights' is wrong because counting from January 15 to January 22 gives seven nights, not six. '8 nights' is wrong because the departure date of January 22 marks the end of the stay, making it seven nights total."
      },
      {
        id: "p7b_easy_3_q2",
        text: "What is included in the hotel booking?",
        options: ["A) Dinner", "B) Breakfast", "C) Airport shuttle and dinner", "D) All meals"],
        answer: "B",
        explanation: "'Breakfast' is correct because the confirmation states the Superior Room includes 'Breakfast included' as part of the hotel booking. 'Dinner' is wrong because only breakfast is listed as included; dinner is not mentioned. 'Airport shuttle and dinner' is wrong because while an airport transfer is included separately, dinner is not part of the hotel inclusion. 'All meals' is wrong because only breakfast is specified; lunch and dinner are not covered."
      },
      {
        id: "p7b_easy_3_q3",
        text: "By when must Ms. Nguyen contact SkyFly if she needs changes?",
        options: ["A) At least 24 hours before departure", "B) At least 48 hours before departure", "C) At least 72 hours before departure", "D) At least one week before departure"],
        answer: "B",
        explanation: "'At least 48 hours before departure' is correct because the confirmation states 'please contact us at 02-2345-6789 at least 48 hours before departure.' 'At least 24 hours before departure' is wrong because the required notice period is 48 hours, which is twice as long as 24 hours. 'At least 72 hours before departure' is wrong because the stated requirement is 48 hours, not 72. 'At least one week before departure' is wrong because one week (168 hours) far exceeds the 48-hour notice requirement stated in the confirmation."
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
        explanation: "'It may overheat and cause burns' is correct because the notice states the recall is due to 'a potential overheating issue that may pose a burn risk.' 'It has an electrical short circuit' is wrong because the stated issue is overheating, not a short circuit — these are distinct problems. 'It uses too much electricity' is wrong because energy consumption is not mentioned as the reason for the recall. 'Its warranty has expired' is wrong because warranty expiry is not a safety issue and has nothing to do with the stated recall reason."
      },
      {
        id: "p7b_easy_4_q2",
        text: "What must customers provide to get a replacement?",
        options: ["A) Serial number and receipt", "B) A photo of the defect", "C) Nothing; proof of purchase is not required", "D) The original packaging"],
        answer: "C",
        explanation: "'Nothing; proof of purchase is not required' is correct because the notice explicitly states 'Proof of purchase is not required' when contacting customer service for a free replacement. 'Serial number and receipt' is wrong because while serial numbers identify affected units, the notice waives the proof-of-purchase requirement. 'A photo of the defect' is wrong because no photo documentation is mentioned as a requirement for obtaining a replacement. 'The original packaging' is wrong because the notice does not ask customers to return or provide the original packaging."
      },
      {
        id: "p7b_easy_4_q3",
        text: "Which purchase date is NOT affected by the recall?",
        options: ["A) April 15", "B) July 30", "C) August 31", "D) October 5"],
        answer: "D",
        explanation: "'October 5' is correct as the answer because the notice states 'Units purchased after September 1 are not affected,' and October 5 falls after September 1. 'April 15' is wrong because April 15 falls within the affected purchase window of March 1 to August 31. 'July 30' is wrong because July 30 also falls within the March 1 to August 31 affected range. 'August 31' is wrong because August 31 is the last day of the affected purchase period and is therefore included in the recall."
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
        explanation: "'Employees may now work remotely up to three days per week' is correct because the update explicitly states employees 'may work remotely up to three days per week, up from the previous limit of two days.' 'The policy was eliminated' is wrong because the policy was updated, not removed — remote work is still permitted. 'The number of remote days was reduced' is wrong because the change went in the opposite direction, increasing the limit from two to three days. 'Remote work now requires two managers' approval' is wrong because the policy requires approval from the direct manager only, with no mention of a second manager."
      },
      {
        id: "p7b_easy_5_q2",
        text: "What is one requirement for employees to be eligible?",
        options: ["A) At least two years of employment", "B) A performance rating of 'outstanding'", "C) At least six months of employment", "D) A signed contract extension"],
        answer: "C",
        explanation: "'At least six months of employment' is correct because the eligibility criteria state employees must 'have completed at least six months of employment.' 'At least two years of employment' is wrong because the required tenure is six months, not two years. 'A performance rating of outstanding' is wrong because the minimum required rating is 'satisfactory or higher,' not specifically 'outstanding.' 'A signed contract extension' is wrong because no contract extension is mentioned as an eligibility condition."
      },
      {
        id: "p7b_easy_5_q3",
        text: "By what date must employees submit a revised remote work plan?",
        options: ["A) January 15", "B) January 20", "C) February 1", "D) February 15"],
        answer: "B",
        explanation: "'January 20' is correct because the notice states employees 'must submit a revised plan to HR by January 20.' 'January 15' is wrong because the stated deadline is January 20, not January 15. 'February 1' is wrong because that is the date the updated policy takes effect, not the deadline for submitting a schedule change. 'February 15' is wrong because no February 15 date appears anywhere in the policy notice."
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
        explanation: "'To propose a business partnership' is correct because the email states the writer is contacting Ms. Fontaine 'to propose a collaborative partnership for the upcoming Riverside Urban Renewal Project.' 'To submit a project bid' is wrong because the email is a proposal to partner on a bid, not the bid submission itself. 'To follow up on a previous contract' is wrong because no prior contract between the two firms is mentioned; this is an initial outreach. 'To request credentials from Urban Design' is wrong because Mr. Marsh attaches NovaBuild's own credentials — he does not ask for credentials from the recipient."
      },
      {
        id: "p7b_med_1_q2",
        text: "What does NovaBuild want Urban Design Associates to contribute?",
        options: ["A) Civil engineering expertise", "B) Sustainable architecture and community design", "C) Financial investment", "D) Project management services"],
        answer: "B",
        explanation: "'Sustainable architecture and community design' is correct because the email states NovaBuild is seeking 'Urban Design's expertise in sustainable architecture and community-centric design to strengthen our bid.' 'Civil engineering expertise' is wrong because NovaBuild itself brings 20 years of civil engineering experience; that is their own contribution, not what they seek. 'Financial investment' is wrong because the email discusses a collaboration to win a contract, not a request for financial capital from Urban Design. 'Project management services' is wrong because project management is not mentioned as the desired contribution from Urban Design."
      },
      {
        id: "p7b_med_1_q3",
        text: "What is implied about the contract bidding process?",
        options: ["A) NovaBuild has already been awarded the contract", "B) The deadline for submitting a bid is still upcoming", "C) Urban Design has already submitted a competing bid", "D) The city has rejected previous proposals"],
        answer: "B",
        explanation: "'The deadline for submitting a bid is still upcoming' is correct because the email states 'the submission deadline is November 30' and is dated October 14, meaning the deadline has not yet passed. 'NovaBuild has already been awarded the contract' is wrong because NovaBuild is still trying to strengthen its bid and has not been awarded anything. 'Urban Design has already submitted a competing bid' is wrong because the email proposes partnership with Urban Design, implying they have not yet submitted separately. 'The city has rejected previous proposals' is wrong because no prior rejected proposals are mentioned in the email."
      },
      {
        id: "p7b_med_1_q4",
        text: "What did Mr. Marsh include with his email?",
        options: ["A) A signed partnership agreement", "B) A project brief and company credentials", "C) A financial analysis", "D) Letters of recommendation"],
        answer: "B",
        explanation: "'A project brief and company credentials' is correct because the email states 'I have attached a preliminary project brief and our company credentials for your review.' 'A signed partnership agreement' is wrong because the email is proposing a partnership, not confirming one with a signed document. 'A financial analysis' is wrong because no financial analysis is mentioned among the attached documents. 'Letters of recommendation' is wrong because the email mentions credentials, not letters of recommendation from third parties."
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
        explanation: "'60' is correct because the article states the department 'has grown into a 60-person powerhouse.' '4' is wrong because four was the original team size when the department was founded, not the current number. '12' is wrong because 12 is the number of countries that have adopted the EcoChip, not the department headcount. '23' is wrong because 23 is the number of patents the department holds, not the number of employees."
      },
      {
        id: "p7b_med_2_q2",
        text: "When did Dr. Santos join the company?",
        options: ["A) Ten years ago", "B) Nine years ago", "C) When the department was founded", "D) After winning the Global Innovation Award"],
        answer: "B",
        explanation: "'Nine years ago' is correct because the article explicitly states 'Dr. Maria Santos joined the company nine years ago as a senior engineer.' 'Ten years ago' is wrong because the department was founded ten years ago, but Dr. Santos joined one year later. 'When the department was founded' is wrong because Dr. Santos joined nine years ago, while the department was founded ten years ago. 'After winning the Global Innovation Award' is wrong because the award was won in 2021, and Dr. Santos joined the company nine years before the article was written."
      },
      {
        id: "p7b_med_2_q3",
        text: "What does Dr. Santos suggest about the department's next project?",
        options: ["A) It involves wearable technology", "B) It is a new version of the EcoChip", "C) It will be announced next quarter", "D) It focuses on energy efficiency"],
        answer: "A",
        explanation: "'It involves wearable technology' is correct because Dr. Santos states 'We're working on something that will change how people interact with wearable devices.' 'It is a new version of the EcoChip' is wrong because Dr. Santos hints at something new without referencing the EcoChip. 'It will be announced next quarter' is wrong because Dr. Santos says she cannot share details yet, without specifying a next-quarter announcement. 'It focuses on energy efficiency' is wrong because energy efficiency is a feature of the EcoChip, not what is described as the next project."
      },
      {
        id: "p7b_med_2_q4",
        text: "Which of the following best describes the EcoChip?",
        options: ["A) A high-performance graphics processor", "B) An energy-efficient processor used globally", "C) A processor developed for military use", "D) A chip designed for smartphones only"],
        answer: "B",
        explanation: "'An energy-efficient processor used globally' is correct because the article describes the EcoChip as 'a low-power processor that has been adopted by manufacturers in 12 countries' and used in over 40 million devices worldwide. 'A high-performance graphics processor' is wrong because the EcoChip is described as low-power, and no mention of graphics processing is made. 'A processor developed for military use' is wrong because the article describes consumer and manufacturer adoption, not military applications. 'A chip designed for smartphones only' is wrong because the EcoChip is described as being used across a broad range of devices, not limited to smartphones."
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
        explanation: "'To inquire about purchasing an enterprise license' is correct because Mr. Lau's email states 'Our company ... is interested in purchasing an enterprise license for DataWave Pro.' 'To renew an existing license' is wrong because the email presents this as a new purchase inquiry, with no mention of an existing relationship with SoftWave. 'To report a software issue' is wrong because no bug or technical problem is mentioned; the email is entirely about pricing and licensing. 'To request a refund' is wrong because no prior purchase has been made — PetroLink is evaluating the product for the first time."
      },
      {
        id: "p7b_med_3_q2",
        text: "How much would a 115-user license cost per user per year?",
        options: ["A) $282", "B) $280", "C) $270", "D) $265"],
        answer: "C",
        explanation: "'$270' is correct because Sandra's reply specifies '115-user tier: $31,000/year ($270 per user).' '$282' is wrong because that is the per-user cost for the 85-user tier, not the 115-user tier. '$280' is wrong because that is the per-user cost for the 100-user tier. '$265' is wrong because no $265 per-user rate appears in the pricing table provided."
      },
      {
        id: "p7b_med_3_q3",
        text: "What is included in the enterprise license at no extra cost?",
        options: ["A) On-site training", "B) Video tutorials and documentation", "C) 30-day pilot and on-site training", "D) A dedicated account manager"],
        answer: "B",
        explanation: "'Video tutorials and documentation' is correct because Sandra's reply states 'A full library of video tutorials and documentation is included with all enterprise licenses at no extra cost.' 'On-site training' is wrong because on-site training is explicitly listed as an additional service costing $2,500 per day. '30-day pilot and on-site training' is wrong because while the pilot is free, on-site training carries an additional fee. 'A dedicated account manager' is wrong because no dedicated account manager is mentioned as an inclusion with the enterprise license."
      },
      {
        id: "p7b_med_3_q4",
        text: "What must Mr. Lau do before the pilot can begin?",
        options: ["A) Make an upfront payment", "B) Attend an orientation session", "C) Sign a pilot agreement", "D) Provide a list of all users"],
        answer: "C",
        explanation: "'Sign a pilot agreement' is correct because Sandra's reply states 'I can have your account set up within 24 hours of receiving a signed pilot agreement.' 'Make an upfront payment' is wrong because the 30-day pilot is offered 'at no charge,' so no payment is needed to start. 'Attend an orientation session' is wrong because no orientation session is mentioned as a prerequisite for beginning the pilot. 'Provide a list of all users' is wrong because the reply only requires a signed pilot agreement, not a user list, to initiate the trial."
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
        explanation: "'More floor space and modern workstations' is correct because the announcement states 'the new office offers 30% more floor space, modern workstations, and improved meeting facilities.' 'Free parking for all employees' is wrong because the announcement states parking fees will actually increase from $80 to $95 per month, and spaces are first-come, first-served. 'An on-site cafeteria' is wrong because no cafeteria is mentioned among the new office's benefits. 'A gym and wellness center' is wrong because no gym or wellness facility is mentioned in the relocation announcement."
      },
      {
        id: "p7b_med_4_q2",
        text: "Why is Ms. Reeves concerned about the access card event?",
        options: ["A) She thinks the event is too crowded", "B) She will be away on the date of the event", "C) She does not know where the event is held", "D) She already has an access card"],
        answer: "B",
        explanation: "'She will be away on the date of the event' is correct because Ms. Reeves states 'I will be traveling for work from March 22 to March 27 and will miss the access card distribution event on March 25.' 'She thinks the event is too crowded' is wrong because Ms. Reeves does not mention overcrowding as a concern. 'She does not know where the event is held' is wrong because the announcement clearly states the event is in the existing conference room, and Ms. Reeves does not express confusion about the location. 'She already has an access card' is wrong because the announcement states all employees need new cards for the new building, and Ms. Reeves is asking how to get hers."
      },
      {
        id: "p7b_med_4_q3",
        text: "What does Ms. Reeves ask about regarding transportation?",
        options: ["A) Whether there is a company shuttle bus", "B) Whether monthly parking fees can be waived", "C) Whether there is secure bicycle storage", "D) Whether there is a nearby train station"],
        answer: "C",
        explanation: "'Whether there is secure bicycle storage' is correct because Ms. Reeves states 'I currently commute by bicycle ... will there be secure bicycle storage at the new location?' 'Whether there is a company shuttle bus' is wrong because Ms. Reeves does not mention shuttle buses in her email. 'Whether monthly parking fees can be waived' is wrong because Ms. Reeves says she does not need a parking space, so fees are not her concern. 'Whether there is a nearby train station' is wrong because Ms. Reeves commutes by bicycle and asks about bicycle storage, not public transit."
      },
      {
        id: "p7b_med_4_q4",
        text: "What concern does Ms. Reeves raise about her team's equipment?",
        options: ["A) The equipment may not work at the new location", "B) She needs to know who will handle moving the equipment", "C) The new office may not have enough space for it", "D) The equipment needs to be upgraded before the move"],
        answer: "B",
        explanation: "'She needs to know who will handle moving the equipment' is correct because Ms. Reeves asks 'Who should I coordinate with to ensure these are moved safely?' 'The equipment may not work at the new location' is wrong because Ms. Reeves does not raise any concern about compatibility or functionality at the new site. 'The new office may not have enough space for it' is wrong because Ms. Reeves does not question whether there is space for the equipment. 'The equipment needs to be upgraded before the move' is wrong because Ms. Reeves asks about safe transportation, not about any upgrades."
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
        explanation: "'FATF recommendation amendments and local regulatory updates' is correct because the memo states the changes are required 'in light of recent amendments to the Financial Action Task Force (FATF) recommendations and corresponding updates to local regulatory frameworks.' 'A major money laundering case at the firm' is wrong because no internal incident is cited as the trigger; the changes are driven by external regulatory developments. 'An audit finding by external consultants' is wrong because the memo attributes the changes to FATF updates, not an external audit. 'A request from the board of directors' is wrong because the directive comes from the Global Compliance Division in response to regulatory changes, not from a board request."
      },
      {
        id: "p7b_hard_1_q2",
        text: "Which of the following represents a change from previous requirements?",
        options: ["A) SAR filing within 72 hours", "B) Annual re-screening of Tier-1 clients", "C) PEP screening of second-degree relatives", "D) EDD for cash transactions over $10,000"],
        answer: "C",
        explanation: "'PEP screening of second-degree relatives' is correct because the memo explicitly lists this as a new expansion — the previous scope did not include second-degree relatives and close associates. 'SAR filing within 72 hours' is wrong because 72 hours was the old requirement; the new requirement is 48 hours. 'Annual re-screening of Tier-1 clients' is wrong because annual re-screening was the previous practice; the new requirement is semi-annual. 'EDD for cash transactions over $10,000' is wrong because $10,000 was the old EDD threshold; the new threshold is reduced to $8,000."
      },
      {
        id: "p7b_hard_1_q3",
        text: "What must regional compliance officers do within 14 days?",
        options: ["A) Complete the AML training course", "B) File all outstanding SARs", "C) Confirm implementation to Global Compliance Division", "D) Re-screen all clients"],
        answer: "C",
        explanation: "'Confirm implementation to Global Compliance Division' is correct because the memo states 'Regional compliance officers must submit implementation confirmation to the Global Compliance Division within 14 calendar days of this notice.' 'Complete the AML training course' is wrong because no training completion deadline is mentioned; the 14-day deadline is for implementation confirmation. 'File all outstanding SARs' is wrong because SAR filing requirements relate to detection timing, not to this 14-day implementation confirmation window. 'Re-screen all clients' is wrong because while re-screening frequency is changed, re-screening all clients within 14 days is not the stated requirement."
      },
      {
        id: "p7b_hard_1_q4",
        text: "What is implied about the consequence of non-compliance?",
        options: ["A) Staff will be dismissed", "B) The firm may face regulatory sanctions and reputational damage", "C) The firm's license will automatically be revoked", "D) Clients will be notified of the failure"],
        answer: "B",
        explanation: "'The firm may face regulatory sanctions and reputational damage' is correct because the memo states 'Failure to comply may expose the firm to regulatory sanctions and reputational risk.' 'Staff will be dismissed' is wrong because the memo addresses consequences for the firm, not individual employee termination. 'The firm's license will automatically be revoked' is wrong because the memo uses cautious language ('may expose') rather than describing an automatic license revocation. 'Clients will be notified of the failure' is wrong because no client notification of non-compliance is mentioned in the memo."
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
        explanation: "'There is a moderate probability that Crestline may owe $22 million in damages' is correct because the legal memo states 'Damages sought amount to $22 million' and 'the claim has a moderate probability of success for the plaintiff.' 'It could invalidate all of Crestline's patents' is wrong because the litigation is described as a patent infringement suit against Crestline, not a challenge that would void its entire IP portfolio. 'It will definitely result in a settlement before closing' is wrong because the memo notes the trial is scheduled for Q2 of next year and expresses probability, not certainty of settlement. 'It prevents the acquisition from proceeding under antitrust law' is wrong because the memo discusses insurance and indemnification as responses to the risk, not an antitrust bar on the deal."
      },
      {
        id: "p7b_hard_2_q2",
        text: "What concern exists about CB-212?",
        options: ["A) It has not entered clinical trials yet", "B) Its Phase I data showed a liver toxicity signal", "C) It has been rejected by the FDA", "D) It directly competes with an existing product of the acquirer"],
        answer: "B",
        explanation: "'Its Phase I data showed a liver toxicity signal' is correct because the legal memo states 'CB-212's Phase I data revealed a hepatotoxicity signal that required a protocol amendment,' and hepatotoxicity means liver toxicity. 'It has not entered clinical trials yet' is wrong because the memo states CB-212 is currently in Phase II clinical trials. 'It has been rejected by the FDA' is wrong because the memo describes an ongoing trial with a protocol amendment, not an FDA rejection. 'It directly competes with an existing product of the acquirer' is wrong because no competing product relationship between CB-212 and the acquirer is mentioned in either document."
      },
      {
        id: "p7b_hard_2_q3",
        text: "Why is the convertible note a concern according to the financial summary?",
        options: ["A) Its interest rate is above market", "B) It matures before the estimated cash runway ends", "C) It was issued without shareholder approval", "D) It has already been called by the lender"],
        answer: "B",
        explanation: "'It matures before the estimated cash runway ends' is correct because the financial summary states 'The convertible note becomes due before the end of the estimated cash runway, creating a potential liquidity event.' 'Its interest rate is above market' is wrong because the interest rate on the convertible note is not discussed in the financial summary. 'It was issued without shareholder approval' is wrong because no information about the note's issuance process or shareholder approval is provided. 'It has already been called by the lender' is wrong because the note is described as due in 14 months, not already called or in default."
      },
      {
        id: "p7b_hard_2_q4",
        text: "What deal structure do both documents support?",
        options: ["A) A full cash acquisition at a fixed price", "B) A stock-for-stock merger", "C) Performance-based earnout provisions tied to regulatory milestones", "D) A leveraged buyout using Crestline's assets"],
        answer: "C",
        explanation: "'Performance-based earnout provisions tied to regulatory milestones' is correct because the legal memo recommends indemnification provisions tailored to GenPath litigation risk, and the financial summary recommends 'a purchase price adjustment mechanism (earnout) tied to CB-107's regulatory milestones' — both favor contingent pricing structures. 'A full cash acquisition at a fixed price' is wrong because both documents suggest variable or contingent pricing elements, not a fixed all-cash deal. 'A stock-for-stock merger' is wrong because neither document mentions equity as the transaction currency. 'A leveraged buyout using Crestline's assets' is wrong because the documents discuss drug milestone-based earnouts and litigation protection, not an asset-backed leveraged acquisition."
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
        explanation: "'40%' is correct because the prospectus explicitly states 'Expansion of Metro Line 6 (40%)' in the use of proceeds breakdown. '25%' is wrong because 25% is the allocation for Station Renovation, not Metro Line 6. '35%' is wrong because 35% is the allocation for the Fleet Electrification Program. '50%' is wrong because no 50% allocation appears in the use of proceeds; the three stated allocations are 40%, 35%, and 25%."
      },
      {
        id: "p7b_hard_3_q2",
        text: "According to the analyst report, what is a key advantage for high-bracket taxpayers?",
        options: ["A) The bonds are backed by federal guarantees", "B) The coupon rate is above market average", "C) The tax-exempt coupon provides a yield advantage", "D) The bond has a short duration"],
        answer: "C",
        explanation: "'The tax-exempt coupon provides a yield advantage' is correct because the analyst report states 'Tax-exempt coupon provides significant yield advantage for investors in the 32%+ tax bracket.' 'The bonds are backed by federal guarantees' is wrong because the prospectus describes a tax levy and fare revenue base as backing, not federal guarantees. 'The coupon rate is above market average' is wrong because the advantage for high-bracket investors comes from the tax exemption, not the coupon rate being above market. 'The bond has a short duration' is wrong because the bond has a 10-year maturity, which the analyst notes implies meaningful interest rate sensitivity."
      },
      {
        id: "p7b_hard_3_q3",
        text: "What is the approximate tax-equivalent yield calculated by the portfolio manager?",
        options: ["A) 4.75%", "B) 5.5%", "C) 6.2%", "D) 7.2%"],
        answer: "D",
        explanation: "'7.2%' is correct because the investor letter states 'the tax-exempt 4.75% coupon is equivalent to a taxable yield of approximately 7.2%' given the Foundation's 34% tax rate. '4.75%' is wrong because that is the stated coupon rate, not the tax-equivalent yield after accounting for the tax exemption benefit. '5.5%' is wrong because that is the lower end of comparable taxable corporate bond yields used as a benchmark, not the tax-equivalent yield calculation. '6.2%' is wrong because that is the upper end of the taxable corporate bond benchmark yield range, not the tax-equivalent yield of the PMTA bond."
      },
      {
        id: "p7b_hard_3_q4",
        text: "What safeguard does the portfolio manager propose to address construction risk?",
        options: ["A) A lower allocation to reduce exposure", "B) A covenant requiring semi-annual project progress reports", "C) Selling the bond after two years", "D) Purchasing credit default swaps"],
        answer: "B",
        explanation: "'A covenant requiring semi-annual project progress reports' is correct because the investor letter states 'I recommend we include a covenant in our commitment letter requiring semi-annual project progress reports.' 'A lower allocation to reduce exposure' is wrong because the portfolio manager recommends proceeding with the full $5 million allocation, not reducing it. 'Selling the bond after two years' is wrong because the letter frames the 10-year maturity as aligned with the Foundation's investment horizon and does not suggest an early exit. 'Purchasing credit default swaps' is wrong because no hedging instrument is mentioned; the proposed safeguard is an informational covenant, not a financial hedge."
      },
      {
        id: "p7b_hard_3_q5",
        text: "Which risk is mentioned in BOTH the prospectus and the analyst report?",
        options: ["A) Rising interest rates", "B) Tax policy changes", "C) Construction delays and cost overruns", "D) Decline in the credit rating"],
        answer: "C",
        explanation: "'Construction delays and cost overruns' is correct because the prospectus lists 'construction delays that may affect scheduled completion milestones' and the analyst report notes 'construction cost inflation has increased project estimates by approximately 8%.' 'Rising interest rates' is wrong because interest rate risk is mentioned in the prospectus and analyst report individually, but the analyst frames it as duration sensitivity, while both texts do not jointly highlight it as a shared named risk. 'Tax policy changes' is wrong because the prospectus mentions changes in transportation funding policy, not tax policy, while the analyst does not mention tax policy risk. 'Decline in the credit rating' is wrong because no credit rating downgrade risk is mentioned in either the prospectus or the analyst report."
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
        explanation: "'9.2x' is correct because the board announcement states the sale of the Consumer Products Division to Orion Capital Partners represents 'a 9.2x EBITDA multiple.' '7.5x' is wrong because no 7.5x multiple is mentioned in any of the three documents. '8.0x' is wrong because no 8.0x multiple appears in the announcement or any other text. '10.0x' is wrong because the stated valuation multiple is 9.2x, not 10.0x."
      },
      {
        id: "p7b_hard_4_q2",
        text: "According to the Q&A, which employees are affected by the workforce reduction?",
        options: ["A) Consumer Products Division employees", "B) Employees at Orion Capital Partners", "C) Technology Solutions and Digital Services employees", "D) All Nexon employees globally"],
        answer: "C",
        explanation: "'Technology Solutions and Digital Services employees' is correct because the Q&A explicitly states 'The workforce reduction applies only to the Technology Solutions and Digital Services units.' 'Consumer Products Division employees' is wrong because the Q&A confirms that Consumer Products employees are not affected — they transfer to Orion Capital Partners. 'Employees at Orion Capital Partners' is wrong because Orion's own employees are not part of Nexon's restructuring; Orion also states no planned headcount changes. 'All Nexon employees globally' is wrong because only specific units are affected, not the entire global workforce."
      },
      {
        id: "p7b_hard_4_q3",
        text: "What is Orion Capital Partners' plan for the Consumer Products Division's current staff?",
        options: ["A) Lay off 8% of the workforce", "B) Integrate them into existing Orion teams", "C) No planned changes to headcount in the near term", "D) Transfer them to Nexon Digital"],
        answer: "C",
        explanation: "'No planned changes to headcount in the near term' is correct because Orion's press statement says they intend to operate the division 'with no planned changes to headcount or operational structure in the near term.' 'Lay off 8% of the workforce' is wrong because the 8% workforce reduction applies to the Nexon Technology Solutions and Digital Services consolidation, not to Orion's plans for Consumer Products. 'Integrate them into existing Orion teams' is wrong because the press statement says the division will operate as a standalone entity under existing management. 'Transfer them to Nexon Digital' is wrong because Consumer Products employees are going to Orion, while Nexon Digital is the merged entity of Technology Solutions and Digital Services."
      },
      {
        id: "p7b_hard_4_q4",
        text: "What is the maximum severance an affected employee could receive?",
        options: ["A) 4 weeks", "B) 13 weeks", "C) 20 weeks", "D) 26 weeks"],
        answer: "D",
        explanation: "'26 weeks' is correct because the Q&A states severance is 'two weeks per year of service, with a minimum of four weeks and a maximum of 26 weeks.' '4 weeks' is wrong because four weeks is the minimum severance, not the maximum. '13 weeks' is wrong because no 13-week cap is mentioned in the Q&A severance formula. '20 weeks' is wrong because the stated maximum is 26 weeks, not 20."
      },
      {
        id: "p7b_hard_4_q5",
        text: "What can be inferred about the EBITDA margin of the Consumer Products Division?",
        options: ["A) Approximately 10%", "B) Approximately 14%", "C) Approximately 20%", "D) Approximately 25%"],
        answer: "B",
        explanation: "'Approximately 14%' is correct because Orion's press statement provides revenue of approximately $210 million and EBITDA of approximately $30 million, and dividing $30M by $210M gives an EBITDA margin of approximately 14.3%. 'Approximately 10%' is wrong because $30M divided by $210M equals roughly 14%, not 10%. 'Approximately 20%' is wrong because a 20% margin would require EBITDA of $42M on $210M revenue, which does not match the stated figures. 'Approximately 25%' is wrong because a 25% margin would require EBITDA of $52.5M on $210M revenue, far above the stated $30M."
      }
    ]
  }
];
