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
      {id:"p7e1",text:"What is the purpose of this email?",options:["A) To confirm a payment","B) To notify the customer about a shipment","C) To request a product return","D) To offer a discount"],answer:"B",explanation:"The email states 'your order has been shipped' — its main purpose is shipment notification."},
      {id:"p7e2",text:"How can Ms. Robinson track her package?",options:["A) By calling the store","B) By visiting a ShopMart location","C) By using the tracking number on the website","D) By replying to the email"],answer:"C",explanation:"The email states she can 'track your package using tracking number TRK9985432 at our website'."},
      {id:"p7e3",text:"When is customer service available?",options:["A) 7 days a week","B) Monday through Saturday","C) Monday through Friday","D) Weekends only"],answer:"C",explanation:"'Available Monday–Friday, 9 AM to 6 PM'."}
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
      {id:"p7e4",text:"What is the main subject of this notice?",options:["A) A building renovation project","B) A scheduled elevator maintenance","C) New office rental policies","D) Emergency evacuation procedures"],answer:"B",explanation:"The notice is about 'scheduled maintenance work on the building's elevator system'."},
      {id:"p7e5",text:"What should tenants do if they need help moving heavy items?",options:["A) Use Elevator A","B) Wait until maintenance is complete","C) Contact building management at least 24 hours ahead","D) Call the elevator company directly"],answer:"C",explanation:"'Contact the building management office at least 24 hours in advance'."},
      {id:"p7e6",text:"What will be offered to tenants during the maintenance period?",options:["A) Alternative parking","B) Light refreshments in the lobby","C) Temporary office space","D) Discounted rent"],answer:"B",explanation:"'Light refreshments will be provided in the lobby'."}
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
      {id:"p7e7",text:"What type of position is being advertised?",options:["A) Part-time bookkeeper","B) Full-time senior accountant","C) Temporary finance consultant","D) Junior accounting assistant"],answer:"B",explanation:"The ad states it is seeking a 'full-time Senior Accountant'."},
      {id:"p7e8",text:"What is stated as preferred but not required?",options:["A) A bachelor's degree","B) Excel proficiency","C) CPA certification","D) 5 years of experience"],answer:"C",explanation:"'CPA certification preferred' — desired but not mandatory."}
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
      {id:"p7e9",text:"How many days per week can employees work from home?",options:["A) One day","B) Two days","C) Three days","D) Five days"],answer:"B",explanation:"'Eligible to work from home up to two days per week'."},
      {id:"p7e10",text:"What must employees do before working from home?",options:["A) Buy office equipment","B) Schedule days in advance via the HR portal","C) Work overtime to compensate","D) Get written approval from the CEO"],answer:"B",explanation:"'All work-from-home days must be scheduled in advance using the HR portal'."},
      {id:"p7e11",text:"According to the memo, what is true about performance expectations?",options:["A) They are lowered for remote workers","B) They are the same regardless of location","C) They are determined by the manager","D) They are reviewed quarterly"],answer:"B",explanation:"'Performance expectations remain the same regardless of work location'."}
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
      {id:"p7e12",text:"How much does registration cost for TechSpark members?",options:["A) $75","B) $50","C) Free","D) $25"],answer:"C",explanation:"'Free for TechSpark members'."},
      {id:"p7e13",text:"What is the registration deadline?",options:["A) November 10th","B) November 15th","C) November 1st","D) November 20th"],answer:"A",explanation:"'Register...before November 10th'."},
      {id:"p7e14",text:"What is provided during the event?",options:["A) Transportation","B) Hotel accommodation","C) Networking lunch","D) Conference materials by mail"],answer:"C",explanation:"'Networking lunch provided'."}
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
      {id:"p7e15",text:"What is the general return window for items in original packaging?",options:["A) 15 days","B) 30 days","C) 60 days","D) 7 days"],answer:"B",explanation:"'Items may be returned within 30 days of purchase'."},
      {id:"p7e16",text:"Which items CANNOT be returned?",options:["A) Electronics","B) Opened packages","C) Custom orders and downloadable software","D) Items without a warranty"],answer:"C",explanation:"'Custom orders and downloadable software are non-refundable'."},
      {id:"p7e17",text:"How long does a refund take to process?",options:["A) 1–2 business days","B) 3–4 business days","C) 5–7 business days","D) 10 business days"],answer:"C",explanation:"'Refunds are processed within 5–7 business days'."}
    ]
  },
  {id:"p7e_p7",type:"single",title:"Newsletter Announcement",passage:`GREENFIELD QUARTERLY NEWSLETTER

Dear Clients and Partners,

We are thrilled to share that Greenfield Consulting has been recognized as one of the Top 50 Fastest-Growing Companies in North America by Business Today magazine. This recognition reflects the hard work of our entire team and the trust our clients place in us.

In other news, we are expanding our Digital Transformation practice with three new service areas: AI Integration, Cloud Migration, and Cybersecurity Advisory. These services are available to all existing clients at preferential rates.

Our annual Client Appreciation Dinner will be held on December 5th at the Grand Hotel. Invitations will be sent to all active clients next week.

Thank you for your continued partnership.`,
    questions:[
      {id:"p7e18",text:"What achievement is mentioned in the newsletter?",options:["A) Opening a new office","B) Being recognized as a top fast-growing company","C) Launching a new software product","D) Reaching one million customers"],answer:"B",explanation:"'Recognized as one of the Top 50 Fastest-Growing Companies in North America'."},
      {id:"p7e19",text:"Which new service area is NOT mentioned?",options:["A) AI Integration","B) Cloud Migration","C) Data Analytics","D) Cybersecurity Advisory"],answer:"C",explanation:"The three new areas are AI Integration, Cloud Migration, and Cybersecurity Advisory — Data Analytics is not mentioned."},
      {id:"p7e20",text:"When will invitations for the Client Appreciation Dinner be sent?",options:["A) Immediately","B) On December 5th","C) Next week","D) At the end of the year"],answer:"C",explanation:"'Invitations will be sent to all active clients next week'."}
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
      {id:"p7e21",text:"What class did Mr. Park book?",options:["A) Business","B) First Class","C) Economy","D) Premium Economy"],answer:"C",explanation:"'Class: Economy'."},
      {id:"p7e22",text:"When should Mr. Park arrive at the airport at the latest?",options:["A) 07:30","B) 06:00","C) 05:30","D) 08:00"],answer:"B",explanation:"'Arrive at least 90 minutes before departure' — 07:30 minus 90 min = 06:00."},
      {id:"p7e23",text:"How can Mr. Park cancel his booking?",options:["A) By visiting a SkyJet office","B) By calling or visiting the website","C) By sending an email","D) Only at the airport"],answer:"B",explanation:"'For changes or cancellations, visit skyjet.com or call +82-2-5555-1200'."}
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
      {id:"p7m1",text:"Why is Robert Cheng writing to Ms. Hoffmann?",options:["A) To request a meeting","B) To submit a project proposal","C) To confirm a signed contract","D) To report a system error"],answer:"B",explanation:"'We are pleased to submit this formal proposal for your review'."},
      {id:"p7m2",text:"How long does NovaTech typically take to implement its ERP system?",options:["A) 10 weeks","B) 12 weeks","C) 14 weeks","D) 20 weeks"],answer:"C",explanation:"'Average implementation time of 14 weeks'."},
      {id:"p7m3",text:"What condition must be met to receive the 10% discount?",options:["A) Payment within 30 days","B) Purchasing the full training package","C) Committing to a 3-year support contract","D) Ordering before the end of the fiscal year"],answer:"C",explanation:"'Offer a 10% discount should you commit to a 3-year support contract'."},
      {id:"p7m4",text:"When does Mr. Cheng plan to contact Ms. Hoffmann next?",options:["A) By phone the following Tuesday","B) By phone the following Wednesday","C) By email next Friday","D) At a scheduled meeting next week"],answer:"B",explanation:"'I will follow up with you by phone next Wednesday'."}
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
      {id:"p7m5",text:"According to Text 1, what is a key finding of the WorkFuture survey?",options:["A) Most companies prefer full in-office work","B) Remote work increased productivity by 68%","C) Flexible arrangements reduce employee turnover","D) Tech companies are reducing office space"],answer:"C",explanation:"'Companies offering flexible arrangements reported 34% lower employee turnover'."},
      {id:"p7m6",text:"What does the reviewer in Text 2 identify as a challenge?",options:["A) Lack of remote work tools","B) No home office stipend","C) Cross-team collaboration difficulties","D) Poor management performance"],answer:"C",explanation:"'Cross-team collaboration can be frustrating when not everyone is on the same schedule'."},
      {id:"p7m7",text:"Which concern appears in BOTH texts?",options:["A) Home office expenses","B) Communication and collaboration issues","C) Employee compensation","D) Office real estate costs"],answer:"B",explanation:"Text 1 notes 38% cited collaboration issues; Text 2 also mentions collaboration frustrations."},
      {id:"p7m8",text:"What percentage of companies offered remote work in 2019, according to Text 1?",options:["A) 68%","B) 41%","C) 34%","D) 23%"],answer:"D",explanation:"'Up from just 23% in 2019'."}
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
      {id:"p7m9",text:"What is the maximum gym membership reimbursement per month?",options:["A) $25","B) $50","C) $75","D) $100"],answer:"B",explanation:"'Up to $50/month reimbursement'."},
      {id:"p7m10",text:"How many counseling sessions are covered per year?",options:["A) 3","B) 5","C) 8","D) 12"],answer:"C",explanation:"'Up to 8 sessions per year at no cost'."},
      {id:"p7m11",text:"Which wellness benefit is NOT listed in the program?",options:["A) Financial advisory consultation","B) Flu vaccination","C) Yoga classes","D) Mental health days"],answer:"C",explanation:"'Yoga classes' is not mentioned — the program includes gym membership but not yoga specifically."},
      {id:"p7m12",text:"When are retirement planning workshops held?",options:["A) Monthly","B) Twice a year","C) Quarterly","D) Annually"],answer:"C",explanation:"'Retirement planning workshop: held quarterly'."}
    ]
  },
  {id:"p7m_p4",type:"single",title:"Press Release",passage:`FOR IMMEDIATE RELEASE

AXIOM TECH ACQUIRES DATABRIDGE SOLUTIONS FOR $340 MILLION

San Francisco, CA — Axiom Technologies, a leading provider of enterprise software, today announced the acquisition of DataBridge Solutions, a cloud-based data integration startup, for approximately $340 million.

The acquisition is expected to close in Q4 of this year, subject to regulatory approval. DataBridge's platform, which connects over 200 enterprise data sources, will be integrated into Axiom's flagship product suite within 18 months.

"This acquisition accelerates our vision of becoming the one-stop platform for enterprise data management," said Axiom CEO Lisa Chang. "DataBridge's technology is a natural complement to our existing capabilities."

DataBridge, founded in 2018, employs 85 people across offices in New York and Boston. All DataBridge employees will be offered positions within Axiom following the close of the transaction.`,
    questions:[
      {id:"p7m13",text:"For how much did Axiom acquire DataBridge?",options:["A) $200 million","B) $240 million","C) $340 million","D) $540 million"],answer:"C",explanation:"'For approximately $340 million'."},
      {id:"p7m14",text:"When is the acquisition expected to close?",options:["A) Immediately","B) Q3 of this year","C) Q4 of this year","D) Next year"],answer:"C",explanation:"'Expected to close in Q4 of this year, subject to regulatory approval'."},
      {id:"p7m15",text:"What will happen to DataBridge employees?",options:["A) They will be let go","B) They will stay with DataBridge independently","C) They will be offered positions at Axiom","D) They will work remotely only"],answer:"C",explanation:"'All DataBridge employees will be offered positions within Axiom'."},
      {id:"p7m16",text:"How long will it take to integrate DataBridge's platform into Axiom's product suite?",options:["A) 6 months","B) 12 months","C) 18 months","D) 24 months"],answer:"C",explanation:"'Will be integrated...within 18 months'."}
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
      {id:"p7m17",text:"What level of employee is the program designed for?",options:["A) All employees","B) Senior associates to managers","C) Vice presidents and above","D) New hires only"],answer:"B",explanation:"'Designed for high-potential employees at the senior associate to manager level'."},
      {id:"p7m18",text:"What performance review rating is required to be eligible?",options:["A) Outstanding only","B) Meets Expectations or higher","C) Exceeds Expectations only","D) Any rating"],answer:"B",explanation:"'Meets Expectations or higher in the last two performance reviews'."},
      {id:"p7m19",text:"What is covered in weeks 7 through 9?",options:["A) Strategic Thinking","B) People Management","C) Communication and Stakeholder Engagement","D) Change Management"],answer:"C",explanation:"'Week 7–9: Communication, Influence, and Stakeholder Engagement'."},
      {id:"p7m20",text:"How must employees apply for the program?",options:["A) By self-applying online","B) Via a nomination from their direct manager","C) By contacting HR directly","D) Through an open interview process"],answer:"B",explanation:"'Nominations must come from your direct manager'."}
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
      {id:"p7m21",text:"What was included in Mr. Yuen's booking?",options:["A) Free parking","B) Airport shuttle on arrival only","C) Round-trip airport transfers","D) Spa access"],answer:"B",explanation:"'Airport shuttle (arrival only)' was listed as an inclusion."},
      {id:"p7m22",text:"What issue does Mr. Yuen specifically request compensation for?",options:["A) The slow Wi-Fi","B) The missing shuttle","C) The taxi cost","D) The late check-in"],answer:"C",explanation:"'I would appreciate compensation for the taxi cost ($35)'."},
      {id:"p7m23",text:"What aspect of the hotel did Mr. Yuen rate positively?",options:["A) The Wi-Fi service","B) The airport shuttle","C) The room and breakfast","D) The conference facilities"],answer:"C",explanation:"'The room was comfortable and the breakfast was excellent'."},
      {id:"p7m24",text:"How many loyalty points did Mr. Yuen earn?",options:["A) 210","B) 315","C) 630","D) 420"],answer:"B",explanation:"'315 points earned upon checkout'."}
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
      {id:"p7h1",text:"By how much did Meridian outperform its benchmark in Q3?",options:["A) 6.2 percentage points","B) 11.4 percentage points","C) 2.7 percentage points","D) 28 percentage points"],answer:"C",explanation:"'Outperforming the S&P Technology Index by 2.7 percentage points'."},
      {id:"p7h2",text:"Why was the cybersecurity allocation reduced?",options:["A) Regulatory risks","B) Underperformance relative to sector peers","C) Geopolitical supply chain concerns","D) Overvaluation relative to semiconductors"],answer:"B",explanation:"'Following underperformance relative to sector peers'."},
      {id:"p7h3",text:"What is the projected annual growth rate for AI workload demand?",options:["A) 11.4%","B) 28%","C) 35%","D) 18%"],answer:"C",explanation:"'AI workload demand will compound at approximately 35% annually through 2027'."},
      {id:"p7h4",text:"What does the report suggest about the Q4 outlook?",options:["A) Strongly bullish due to AI growth","B) Negative due to regulatory risks","C) Cautiously optimistic with rate stabilization expected","D) Uncertain due to portfolio volatility"],answer:"C",explanation:"'We maintain a cautiously optimistic stance' and mention anticipated 'rate stabilization'."},
      {id:"p7h5",text:"The word 'moats' in a standard investment context most likely refers to:",options:["A) Financial cash reserves","B) Physical infrastructure advantages","C) Sustainable competitive advantages","D) Government-backed protections"],answer:"C",explanation:"'Competitive moats' is a term for durable competitive advantages that protect a business."}
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
      {id:"p7h6",text:"According to Text 1, what triggered the policy update?",options:["A) Employee complaints about travel conditions","B) A 42% year-over-year increase in travel costs","C) Regulatory requirements","D) A decrease in revenue"],answer:"B",explanation:"'Travel expenditures increased 42% year-over-year'."},
      {id:"p7h7",text:"Under the revised policy, when is Business Class allowed on international flights?",options:["A) For any international flight","B) When flight exceeds 6 hours","C) When exceeding 8 hours with VP approval","D) Only for executive-level employees"],answer:"C",explanation:"Section 4.3.1: 'Flights exceeding 8 hours qualify for Business Class, subject to VP pre-approval'."},
      {id:"p7h8",text:"What specific suggestion does the survey respondent make?",options:["A) Eliminate the pre-approval requirement","B) Increase international hotel cap","C) Introduce automated pre-approval for regular routes","D) Reinstate the $80/day meal allowance"],answer:"C",explanation:"'Introduce an automated pre-approval system for recurring travel routes'."},
      {id:"p7h9",text:"Which information is consistent across all three texts?",options:["A) The meal allowance reduction was well received","B) VP approval is required for some expense items","C) All Business Class travel is prohibited","D) Hotel costs are the primary driver of excess spending"],answer:"B",explanation:"Text 1 mentions VP approval for >$500; Text 2 requires VP approval for Business Class; Text 3 mentions it."}
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
      {id:"p7h10",text:"How many independent non-executive directors are on the board?",options:["A) Five","B) Six","C) Seven","D) Twelve"],answer:"B",explanation:"'Six independent non-executive directors'."},
      {id:"p7h11",text:"What is the main reason for replacing Grant & Morrison LLP?",options:["A) They underperformed on the audit","B) They charged excessive fees","C) They have served for 14 years and a tender process was conducted","D) They failed an independence review"],answer:"C",explanation:"'Replacing Grant & Morrison LLP after a 14-year tenure' following a tender process."},
      {id:"p7h12",text:"Which risk is NOT mentioned in the risk management section?",options:["A) Cybersecurity threats","B) Talent retention","C) Supply chain disruption","D) Regulatory change"],answer:"C",explanation:"Supply chain disruption is not listed; the four risks are macroeconomic volatility, cybersecurity, talent retention, and regulatory change."},
      {id:"p7h13",text:"The word 'tenure' in the report most likely refers to:",options:["A) The auditor's annual salary","B) The length of the auditor's appointment period","C) The auditor's qualifications","D) The quality of the audit work"],answer:"B",explanation:"'Tenure' in this context means the period during which Grant & Morrison served as external auditor."}
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
      {id:"p7h14",text:"How many product managers will the Director oversee?",options:["A) 5","B) 8","C) 10","D) 12"],answer:"B",explanation:"'Lead a team of 8 senior product managers'."},
      {id:"p7h15",text:"What challenge does Ms. Mehta acknowledge in her letter?",options:["A) She lacks cloud infrastructure experience","B) She does not have an MBA","C) She is not currently in San Francisco","D) She has never led a team before"],answer:"C",explanation:"'I am currently based in Seattle and would need to relocate'."},
      {id:"p7h16",text:"By how much did Ms. Mehta's product grow in ARR at DataStream?",options:["A) From $20M to $65M","B) From $20M to $85M","C) From $30M to $85M","D) From $50M to $85M"],answer:"B",explanation:"'Grew from $20 million to $85 million in ARR under my leadership'."},
      {id:"p7h17",text:"What is listed as preferred but not required in the job posting?",options:["A) Cloud infrastructure experience","B) A product management background","C) An MBA or equivalent","D) Strong analytical skills"],answer:"C",explanation:"'MBA or equivalent preferred' — desired but not mandatory."}
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
      {id:"p7h18",text:"What is the analyst's 12-month price target for PulseTech?",options:["A) $64.50","B) $75","C) $87","D) $92"],answer:"C",explanation:"'12-month price target of $87'."},
      {id:"p7h19",text:"What weighting is given to DCF analysis in the blended valuation?",options:["A) 40%","B) 50%","C) 60%","D) 70%"],answer:"C",explanation:"'DCF analysis (60%) and EV/Revenue multiples (40%)'."},
      {id:"p7h20",text:"What risk factor is mentioned as warranting monitoring?",options:["A) Management turnover","B) Product recalls","C) Insider selling activity","D) Currency exchange rate risk"],answer:"C",explanation:"'Insider selling activity over the past two quarters warrants monitoring'."},
      {id:"p7h21",text:"The term 'underpenetrated market' in the report most likely means:",options:["A) A market with too many competitors","B) A market that has not yet been fully developed or captured","C) A market facing regulatory restrictions","D) A market with declining demand"],answer:"B",explanation:"'Underpenetrated' = not yet fully served by existing products — a growth opportunity."},
      {id:"p7h22",text:"What is the approximate upside the analyst sees from the current price?",options:["A) 15%","B) 25%","C) 35%","D) 45%"],answer:"C",explanation:"'Approximately 35% upside from the current price of $64.50'."}
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
      {id:"p7h23",text:"According to the policy in Text 1, within how many hours must the CISO be notified?",options:["A) 2 hours","B) 4 hours","C) 24 hours","D) 72 hours"],answer:"B",explanation:"'The CISO must be notified within 4 hours'."},
      {id:"p7h24",text:"What appears to be the source of the breach according to Text 2?",options:["A) A phishing email to an employee","B) A compromised vendor credential","C) A malicious insider","D) A software vulnerability"],answer:"B",explanation:"'The source of the intrusion appears to be a compromised vendor credential'."},
      {id:"p7h25",text:"Was the regulatory notification sent within the required timeframe?",options:["A) No, it was sent too late","B) Yes, it was sent within 72 hours","C) Yes, it was sent within 24 hours","D) No, it was sent within 35 hours which exceeded the limit"],answer:"B",explanation:"'November 9, 35 hours after discovery' — well within the 72-hour regulatory requirement."},
      {id:"p7h26",text:"What is Apex committed to providing within 30 days?",options:["A) A full refund to affected customers","B) A root cause analysis and remediation report","C) A new security policy","D) A press release to the public"],answer:"B",explanation:"'Provide a detailed root cause analysis and remediation report within 30 days'."},
      {id:"p7h27",text:"Which step in the Data Breach Response Policy (Text 1) was completed FIRST according to Text 2?",options:["A) NOTIFICATION — CISO informed","B) CONTAINMENT — server isolated","C) IDENTIFICATION — breach classified","D) REMEDIATION — plan approved"],answer:"B",explanation:"The server was isolated at 10:30 PM, before the CISO was notified at 10:50 PM."}
    ]
  }
];
