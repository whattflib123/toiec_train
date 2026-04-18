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
        explanation: "The announcement is about a 'grand opening' of TechZone Electronics."
      },
      {
        id: "p7b_easy_1_q2",
        text: "What will the first 100 customers each day receive?",
        options: ["A) A discount voucher", "B) A free smartphone", "C) A free tote bag", "D) Free parking"],
        answer: "C",
        explanation: "'The first 100 customers each day will receive a free TechZone tote bag.'"
      },
      {
        id: "p7b_easy_1_q3",
        text: "How long does the sale last?",
        options: ["A) One week", "B) Three days", "C) Two days", "D) One day"],
        answer: "C",
        explanation: "The sale runs 'from Saturday, November 5 to Sunday, November 6 only' — two days."
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
        explanation: "'The company cafeteria will be closed for renovations.'"
      },
      {
        id: "p7b_easy_2_q2",
        text: "Where can employees eat during the closure?",
        options: ["A) The lobby restaurant", "B) The main parking lot food trucks", "C) A nearby café", "D) The rooftop terrace"],
        answer: "B",
        explanation: "'Food truck vendors will be available in the main parking lot.'"
      },
      {
        id: "p7b_easy_2_q3",
        text: "What is NOT mentioned as available in the 3rd floor kitchen?",
        options: ["A) A microwave", "B) A refrigerator", "C) A coffee machine", "D) A hot water dispenser"],
        answer: "C",
        explanation: "The notice lists microwave, refrigerator, and hot water dispenser — coffee machine is not mentioned."
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
        explanation: "Hotel is booked for 7 nights (January 15–22)."
      },
      {
        id: "p7b_easy_3_q2",
        text: "What is included in the hotel booking?",
        options: ["A) Dinner", "B) Breakfast", "C) Airport shuttle and dinner", "D) All meals"],
        answer: "B",
        explanation: "'Superior Room, Breakfast included.'"
      },
      {
        id: "p7b_easy_3_q3",
        text: "By when must Ms. Nguyen contact SkyFly if she needs changes?",
        options: ["A) At least 24 hours before departure", "B) At least 48 hours before departure", "C) At least 72 hours before departure", "D) At least one week before departure"],
        answer: "B",
        explanation: "'Please contact us ... at least 48 hours before departure.'"
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
        explanation: "'A potential overheating issue that may pose a burn risk.'"
      },
      {
        id: "p7b_easy_4_q2",
        text: "What must customers provide to get a replacement?",
        options: ["A) Serial number and receipt", "B) A photo of the defect", "C) Nothing; proof of purchase is not required", "D) The original packaging"],
        answer: "C",
        explanation: "'Proof of purchase is not required.'"
      },
      {
        id: "p7b_easy_4_q3",
        text: "Which purchase date is NOT affected by the recall?",
        options: ["A) April 15", "B) July 30", "C) August 31", "D) October 5"],
        answer: "D",
        explanation: "'Units purchased after September 1 are not affected' — October 5 is after September 1."
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
        explanation: "'May work remotely up to three days per week, up from the previous limit of two days.'"
      },
      {
        id: "p7b_easy_5_q2",
        text: "What is one requirement for employees to be eligible?",
        options: ["A) At least two years of employment", "B) A performance rating of 'outstanding'", "C) At least six months of employment", "D) A signed contract extension"],
        answer: "C",
        explanation: "'Have completed at least six months of employment.'"
      },
      {
        id: "p7b_easy_5_q3",
        text: "By what date must employees submit a revised remote work plan?",
        options: ["A) January 15", "B) January 20", "C) February 1", "D) February 15"],
        answer: "B",
        explanation: "'Must submit a revised plan to HR by January 20.'"
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
        explanation: "'To propose a collaborative partnership for the upcoming Riverside Urban Renewal Project.'"
      },
      {
        id: "p7b_med_1_q2",
        text: "What does NovaBuild want Urban Design Associates to contribute?",
        options: ["A) Civil engineering expertise", "B) Sustainable architecture and community design", "C) Financial investment", "D) Project management services"],
        answer: "B",
        explanation: "'Expertise in sustainable architecture and community-centric design to strengthen our bid.'"
      },
      {
        id: "p7b_med_1_q3",
        text: "What is implied about the contract bidding process?",
        options: ["A) NovaBuild has already been awarded the contract", "B) The deadline for submitting a bid is still upcoming", "C) Urban Design has already submitted a competing bid", "D) The city has rejected previous proposals"],
        answer: "B",
        explanation: "'The submission deadline is November 30' and the email is dated October 14 — the deadline has not passed."
      },
      {
        id: "p7b_med_1_q4",
        text: "What did Mr. Marsh include with his email?",
        options: ["A) A signed partnership agreement", "B) A project brief and company credentials", "C) A financial analysis", "D) Letters of recommendation"],
        answer: "B",
        explanation: "'I have attached a preliminary project brief and our company credentials for your review.'"
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
        explanation: "'Has grown into a 60-person powerhouse.'"
      },
      {
        id: "p7b_med_2_q2",
        text: "When did Dr. Santos join the company?",
        options: ["A) Ten years ago", "B) Nine years ago", "C) When the department was founded", "D) After winning the Global Innovation Award"],
        answer: "B",
        explanation: "'Dr. Maria Santos joined the company nine years ago as a senior engineer.'"
      },
      {
        id: "p7b_med_2_q3",
        text: "What does Dr. Santos suggest about the department's next project?",
        options: ["A) It involves wearable technology", "B) It is a new version of the EcoChip", "C) It will be announced next quarter", "D) It focuses on energy efficiency"],
        answer: "A",
        explanation: "'We're working on something that will change how people interact with wearable devices.'"
      },
      {
        id: "p7b_med_2_q4",
        text: "Which of the following best describes the EcoChip?",
        options: ["A) A high-performance graphics processor", "B) An energy-efficient processor used globally", "C) A processor developed for military use", "D) A chip designed for smartphones only"],
        answer: "B",
        explanation: "'A low-power processor ... adopted by manufacturers in 12 countries ... used in more than 40 million devices.'"
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
        explanation: "'Our company ... is interested in purchasing an enterprise license for DataWave Pro.'"
      },
      {
        id: "p7b_med_3_q2",
        text: "How much would a 115-user license cost per user per year?",
        options: ["A) $282", "B) $280", "C) $270", "D) $265"],
        answer: "C",
        explanation: "According to Sandra's reply: '115-user tier: $31,000/year ($270 per user).'"
      },
      {
        id: "p7b_med_3_q3",
        text: "What is included in the enterprise license at no extra cost?",
        options: ["A) On-site training", "B) Video tutorials and documentation", "C) 30-day pilot and on-site training", "D) A dedicated account manager"],
        answer: "B",
        explanation: "'A full library of video tutorials and documentation is included with all enterprise licenses at no extra cost.'"
      },
      {
        id: "p7b_med_3_q4",
        text: "What must Mr. Lau do before the pilot can begin?",
        options: ["A) Make an upfront payment", "B) Attend an orientation session", "C) Sign a pilot agreement", "D) Provide a list of all users"],
        answer: "C",
        explanation: "'I can have your account set up within 24 hours of receiving a signed pilot agreement.'"
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
        explanation: "'The new office offers 30% more floor space, modern workstations.'"
      },
      {
        id: "p7b_med_4_q2",
        text: "Why is Ms. Reeves concerned about the access card event?",
        options: ["A) She thinks the event is too crowded", "B) She will be away on the date of the event", "C) She does not know where the event is held", "D) She already has an access card"],
        answer: "B",
        explanation: "'I will be traveling for work from March 22 to March 27 and will miss the access card distribution event on March 25.'"
      },
      {
        id: "p7b_med_4_q3",
        text: "What does Ms. Reeves ask about regarding transportation?",
        options: ["A) Whether there is a company shuttle bus", "B) Whether monthly parking fees can be waived", "C) Whether there is secure bicycle storage", "D) Whether there is a nearby train station"],
        answer: "C",
        explanation: "'I currently commute by bicycle ... will there be secure bicycle storage at the new location?'"
      },
      {
        id: "p7b_med_4_q4",
        text: "What concern does Ms. Reeves raise about her team's equipment?",
        options: ["A) The equipment may not work at the new location", "B) She needs to know who will handle moving the equipment", "C) The new office may not have enough space for it", "D) The equipment needs to be upgraded before the move"],
        answer: "B",
        explanation: "'Who should I coordinate with to ensure these are moved safely?'"
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
        explanation: "'In light of recent amendments to the FATF recommendations and corresponding updates to local regulatory frameworks.'"
      },
      {
        id: "p7b_hard_1_q2",
        text: "Which of the following represents a change from previous requirements?",
        options: ["A) SAR filing within 72 hours", "B) Annual re-screening of Tier-1 clients", "C) PEP screening of second-degree relatives", "D) EDD for cash transactions over $10,000"],
        answer: "C",
        explanation: "Expansion of PEP screening to second-degree relatives is a new requirement; the others describe the OLD requirements."
      },
      {
        id: "p7b_hard_1_q3",
        text: "What must regional compliance officers do within 14 days?",
        options: ["A) Complete the AML training course", "B) File all outstanding SARs", "C) Confirm implementation to Global Compliance Division", "D) Re-screen all clients"],
        answer: "C",
        explanation: "'Regional compliance officers must submit implementation confirmation to the Global Compliance Division within 14 calendar days.'"
      },
      {
        id: "p7b_hard_1_q4",
        text: "What is implied about the consequence of non-compliance?",
        options: ["A) Staff will be dismissed", "B) The firm may face regulatory sanctions and reputational damage", "C) The firm's license will automatically be revoked", "D) Clients will be notified of the failure"],
        answer: "B",
        explanation: "'Failure to comply may expose the firm to regulatory sanctions and reputational risk.'"
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
        explanation: "'Damages sought amount to $22 million ... our assessment is that the claim has a moderate probability of success for the plaintiff.'"
      },
      {
        id: "p7b_hard_2_q2",
        text: "What concern exists about CB-212?",
        options: ["A) It has not entered clinical trials yet", "B) Its Phase I data showed a liver toxicity signal", "C) It has been rejected by the FDA", "D) It directly competes with an existing product of the acquirer"],
        answer: "B",
        explanation: "'CB-212's Phase I data revealed a hepatotoxicity signal' — hepatotoxicity means liver toxicity."
      },
      {
        id: "p7b_hard_2_q3",
        text: "Why is the convertible note a concern according to the financial summary?",
        options: ["A) Its interest rate is above market", "B) It matures before the estimated cash runway ends", "C) It was issued without shareholder approval", "D) It has already been called by the lender"],
        answer: "B",
        explanation: "'The convertible note becomes due before the end of the estimated cash runway, creating a potential liquidity event.'"
      },
      {
        id: "p7b_hard_2_q4",
        text: "What deal structure do both documents support?",
        options: ["A) A full cash acquisition at a fixed price", "B) A stock-for-stock merger", "C) Performance-based earnout provisions tied to regulatory milestones", "D) A leveraged buyout using Crestline's assets"],
        answer: "C",
        explanation: "Legal memo: 'indemnification provisions tailored to GenPath exposure.' Financial summary: 'earnout tied to CB-107's regulatory milestones.' Both support contingent/performance-based structuring."
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
        explanation: "'Expansion of Metro Line 6 (40%)' from the prospectus."
      },
      {
        id: "p7b_hard_3_q2",
        text: "According to the analyst report, what is a key advantage for high-bracket taxpayers?",
        options: ["A) The bonds are backed by federal guarantees", "B) The coupon rate is above market average", "C) The tax-exempt coupon provides a yield advantage", "D) The bond has a short duration"],
        answer: "C",
        explanation: "'Tax-exempt coupon provides significant yield advantage for investors in the 32%+ tax bracket.'"
      },
      {
        id: "p7b_hard_3_q3",
        text: "What is the approximate tax-equivalent yield calculated by the portfolio manager?",
        options: ["A) 4.75%", "B) 5.5%", "C) 6.2%", "D) 7.2%"],
        answer: "D",
        explanation: "'The tax-exempt 4.75% coupon is equivalent to a taxable yield of approximately 7.2%.'"
      },
      {
        id: "p7b_hard_3_q4",
        text: "What safeguard does the portfolio manager propose to address construction risk?",
        options: ["A) A lower allocation to reduce exposure", "B) A covenant requiring semi-annual project progress reports", "C) Selling the bond after two years", "D) Purchasing credit default swaps"],
        answer: "B",
        explanation: "'I recommend we include a covenant in our commitment letter requiring semi-annual project progress reports.'"
      },
      {
        id: "p7b_hard_3_q5",
        text: "Which risk is mentioned in BOTH the prospectus and the analyst report?",
        options: ["A) Rising interest rates", "B) Tax policy changes", "C) Construction delays and cost overruns", "D) Decline in the credit rating"],
        answer: "C",
        explanation: "Prospectus: 'Construction delays that may affect scheduled completion milestones.' Analyst: 'Construction cost inflation has increased project estimates by approximately 8%.'"
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
        explanation: "'Sale of the Consumer Products Division ... representing a 9.2x EBITDA multiple.'"
      },
      {
        id: "p7b_hard_4_q2",
        text: "According to the Q&A, which employees are affected by the workforce reduction?",
        options: ["A) Consumer Products Division employees", "B) Employees at Orion Capital Partners", "C) Technology Solutions and Digital Services employees", "D) All Nexon employees globally"],
        answer: "C",
        explanation: "'The workforce reduction applies only to the Technology Solutions and Digital Services units.'"
      },
      {
        id: "p7b_hard_4_q3",
        text: "What is Orion Capital Partners' plan for the Consumer Products Division's current staff?",
        options: ["A) Lay off 8% of the workforce", "B) Integrate them into existing Orion teams", "C) No planned changes to headcount in the near term", "D) Transfer them to Nexon Digital"],
        answer: "C",
        explanation: "'No planned changes to headcount or operational structure in the near term.'"
      },
      {
        id: "p7b_hard_4_q4",
        text: "What is the maximum severance an affected employee could receive?",
        options: ["A) 4 weeks", "B) 13 weeks", "C) 20 weeks", "D) 26 weeks"],
        answer: "D",
        explanation: "'A maximum of 26 weeks' per the Q&A severance terms."
      },
      {
        id: "p7b_hard_4_q5",
        text: "What can be inferred about the EBITDA margin of the Consumer Products Division?",
        options: ["A) Approximately 10%", "B) Approximately 14%", "C) Approximately 20%", "D) Approximately 25%"],
        answer: "B",
        explanation: "Revenue ~$210M, EBITDA ~$30M. Margin = 30/210 ≈ 14.3%. Orion press statement provides both figures."
      }
    ]
  }
];
