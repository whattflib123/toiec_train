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
      {id:"p7e1",text:"What is the purpose of this email?",options:["A) To confirm a payment","B) To notify the customer about a shipment","C) To request a product return","D) To offer a discount"],answer:"B",explanation:"'Notify the customer about a shipment' is correct because the email explicitly states 'your order #ORD-78542 has been shipped and is on its way to you,' making shipment notification the clear purpose. 'To confirm a payment' is wrong because the email contains no mention of a payment transaction or charge. 'To request a product return' is wrong because the email describes a successful delivery, not a return process. 'To offer a discount' is wrong because no discount or promotional offer appears anywhere in the email."},
      {id:"p7e2",text:"How can Ms. Robinson track her package?",options:["A) By calling the store","B) By visiting a ShopMart location","C) By using the tracking number on the website","D) By replying to the email"],answer:"C",explanation:"'By using the tracking number on the website' is correct because the email states 'You can track your package using tracking number TRK9985432 at our website or on the carrier's site.' 'By calling the store' is wrong because calling is mentioned only for customer service questions, not for tracking. 'By visiting a ShopMart location' is wrong because the passage makes no mention of going to a physical store to track a package. 'By replying to the email' is wrong because replying is listed as a way to ask questions, not to track the shipment."},
      {id:"p7e3",text:"When is customer service available?",options:["A) 7 days a week","B) Monday through Saturday","C) Monday through Friday","D) Weekends only"],answer:"C",explanation:"'Monday through Friday' is correct because the email explicitly states the customer service line is 'available Monday–Friday, 9 AM to 6 PM.' '7 days a week' is wrong because the passage specifies a five-day window that excludes weekends. 'Monday through Saturday' is wrong because Saturday is not included in the stated availability. 'Weekends only' is wrong because the passage clearly states weekday hours only, with no mention of weekend service."}
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
      {id:"p7e4",text:"What is the main subject of this notice?",options:["A) A building renovation project","B) A scheduled elevator maintenance","C) New office rental policies","D) Emergency evacuation procedures"],answer:"B",explanation:"'A scheduled elevator maintenance' is correct because the notice states that 'Scheduled maintenance work will be carried out on the building's elevator system on Friday, April 5th.' 'A building renovation project' is wrong because the notice refers only to elevator maintenance, not a broader renovation. 'New office rental policies' is wrong because no rental or leasing policies are mentioned anywhere in the notice. 'Emergency evacuation procedures' is wrong because the maintenance is planned in advance and is not an emergency situation."},
      {id:"p7e5",text:"What should tenants do if they need help moving heavy items?",options:["A) Use Elevator A","B) Wait until maintenance is complete","C) Contact building management at least 24 hours ahead","D) Call the elevator company directly"],answer:"C",explanation:"'Contact building management at least 24 hours ahead' is correct because the notice states 'Tenants requiring assistance with heavy items should contact the building management office at least 24 hours in advance.' 'Use Elevator A' is wrong because while Elevator A remains operational, the notice does not say it can accommodate heavy-item assistance. 'Wait until maintenance is complete' is wrong because the notice provides an advance-notice process rather than instructing tenants to simply wait. 'Call the elevator company directly' is wrong because the notice directs tenants to building management, not the elevator company."},
      {id:"p7e6",text:"What will be offered to tenants during the maintenance period?",options:["A) Alternative parking","B) Light refreshments in the lobby","C) Temporary office space","D) Discounted rent"],answer:"B",explanation:"'Light refreshments in the lobby' is correct because the notice explicitly states 'Light refreshments will be provided in the lobby for all tenants affected during the maintenance window.' 'Alternative parking' is wrong because the notice makes no mention of parking arrangements during the maintenance. 'Temporary office space' is wrong because no temporary workspace is mentioned anywhere in the notice. 'Discounted rent' is wrong because the notice offers refreshments as a gesture, not any financial compensation."}
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
      {id:"p7e7",text:"What type of position is being advertised?",options:["A) Part-time bookkeeper","B) Full-time senior accountant","C) Temporary finance consultant","D) Junior accounting assistant"],answer:"B",explanation:"'Full-time senior accountant' is correct because the advertisement clearly states DataFlow Technologies is 'seeking a full-time Senior Accountant to join our finance team.' 'Part-time bookkeeper' is wrong because the role is explicitly described as full-time, not part-time. 'Temporary finance consultant' is wrong because the position is a permanent full-time role, not a consulting or temporary engagement. 'Junior accounting assistant' is wrong because the ad seeks a senior-level professional with at least five years of experience."},
      {id:"p7e8",text:"What is stated as preferred but not required?",options:["A) A bachelor's degree","B) Excel proficiency","C) CPA certification","D) 5 years of experience"],answer:"C",explanation:"'CPA certification' is correct because the advertisement lists it under requirements with the qualifier 'preferred,' meaning it is desired but not mandatory. 'A bachelor's degree' is wrong because the passage states a bachelor's degree in Accounting or Finance as a firm requirement, with no 'preferred' qualifier. 'Excel proficiency' is wrong because proficiency in QuickBooks and Microsoft Excel is listed as a requirement, not merely preferred. '5 years of experience' is wrong because a minimum of 5 years of accounting experience is listed as a mandatory requirement."}
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
      {id:"p7e9",text:"How many days per week can employees work from home?",options:["A) One day","B) Two days","C) Three days","D) Five days"],answer:"B",explanation:"'Two days' is correct because the memo explicitly states employees are 'eligible to work from home up to two days per week.' 'One day' is wrong because the memo specifies up to two days, not one. 'Three days' is wrong because the maximum stated in the memo is two days per week. 'Five days' is wrong because a fully remote arrangement is not permitted under this policy."},
      {id:"p7e10",text:"What must employees do before working from home?",options:["A) Buy office equipment","B) Schedule days in advance via the HR portal","C) Work overtime to compensate","D) Get written approval from the CEO"],answer:"B",explanation:"'Schedule days in advance via the HR portal' is correct because guideline 2 states 'All work-from-home days must be scheduled in advance using the HR portal.' 'Buy office equipment' is wrong because the memo requires a suitable workspace but does not instruct employees to purchase equipment. 'Work overtime to compensate' is wrong because guideline 4 states performance expectations remain the same, with no mention of compensatory overtime. 'Get written approval from the CEO' is wrong because the memo states manager approval is required, not approval from the CEO."},
      {id:"p7e11",text:"According to the memo, what is true about performance expectations?",options:["A) They are lowered for remote workers","B) They are the same regardless of location","C) They are determined by the manager","D) They are reviewed quarterly"],answer:"B",explanation:"'They are the same regardless of location' is correct because guideline 4 explicitly states 'Performance expectations remain the same regardless of work location.' 'They are lowered for remote workers' is wrong because the memo states the opposite — expectations do not change based on location. 'They are determined by the manager' is wrong because while managers approve scheduling, the memo does not say managers set individual performance expectations. 'They are reviewed quarterly' is wrong because no quarterly review of performance expectations is mentioned in the memo."}
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
      {id:"p7e12",text:"How much does registration cost for TechSpark members?",options:["A) $75","B) $50","C) Free","D) $25"],answer:"C",explanation:"'Free' is correct because the registration section explicitly states 'Free for TechSpark members.' '$75' is wrong because that is the registration fee for non-members, not members. '$50' is wrong because no $50 price point is mentioned anywhere in the invitation. '$25' is wrong because no $25 discounted rate is mentioned; members pay nothing at all."},
      {id:"p7e13",text:"What is the registration deadline?",options:["A) November 10th","B) November 15th","C) November 1st","D) November 20th"],answer:"A",explanation:"'November 10th' is correct because the invitation states 'Register at techspark.com/summit before November 10th.' 'November 15th' is wrong because that is the date of the event itself, not the registration deadline. 'November 1st' is wrong because no November 1st deadline is mentioned in the invitation. 'November 20th' is wrong because that date falls after the event and is not referenced in the passage."},
      {id:"p7e14",text:"What is provided during the event?",options:["A) Transportation","B) Hotel accommodation","C) Networking lunch","D) Conference materials by mail"],answer:"C",explanation:"'Networking lunch' is correct because the highlights section explicitly lists 'Networking lunch provided' as one of the event offerings. 'Transportation' is wrong because the invitation makes no mention of any transport arrangements for attendees. 'Hotel accommodation' is wrong because no lodging is mentioned in the invitation. 'Conference materials by mail' is wrong because the invitation does not mention any materials being sent to attendees after the event."}
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
      {id:"p7e15",text:"What is the general return window for items in original packaging?",options:["A) 15 days","B) 30 days","C) 60 days","D) 7 days"],answer:"B",explanation:"'30 days' is correct because the policy states 'Items may be returned within 30 days of purchase for a full refund.' '15 days' is wrong because that shorter window applies specifically to electronics that have been opened for inspection, not to items in original packaging. '60 days' is wrong because no 60-day return window is mentioned anywhere in the policy. '7 days' is wrong because 7 days is the processing time for refunds, not the return window."},
      {id:"p7e16",text:"Which items CANNOT be returned?",options:["A) Electronics","B) Opened packages","C) Custom orders and downloadable software","D) Items without a warranty"],answer:"C",explanation:"'Custom orders and downloadable software' is correct because the policy explicitly states 'Custom orders and downloadable software are non-refundable.' 'Electronics' is wrong because electronics can be returned within 15 days if opened for inspection. 'Opened packages' is wrong because while items must generally be in original packaging, the policy does allow opened electronics within a shorter window. 'Items without a warranty' is wrong because warranty status is not mentioned as a condition affecting returnability."},
      {id:"p7e17",text:"How long does a refund take to process?",options:["A) 1–2 business days","B) 3–4 business days","C) 5–7 business days","D) 10 business days"],answer:"C",explanation:"'5–7 business days' is correct because the policy explicitly states 'Refunds are processed within 5–7 business days.' '1–2 business days' is wrong because the policy specifies a longer processing window than one or two days. '3–4 business days' is wrong because that timeframe is not mentioned anywhere in the return policy. '10 business days' is wrong because the policy gives a maximum of 7 business days, not 10."}
    ]
  },
  {id:"p7e_p7",type:"single",title:"Newsletter Announcement",passage:`GREENFIELD QUARTERLY NEWSLETTER

Dear Clients and Partners,

We are thrilled to share that Greenfield Consulting has been recognized as one of the Top 50 Fastest-Growing Companies in North America by Business Today magazine. This recognition reflects the hard work of our entire team and the trust our clients place in us.

In other news, we are expanding our Digital Transformation practice with three new service areas: AI Integration, Cloud Migration, and Cybersecurity Advisory. These services are available to all existing clients at preferential rates.

Our annual Client Appreciation Dinner will be held on December 5th at the Grand Hotel. Invitations will be sent to all active clients next week.

Thank you for your continued partnership.`,
    questions:[
      {id:"p7e18",text:"What achievement is mentioned in the newsletter?",options:["A) Opening a new office","B) Being recognized as a top fast-growing company","C) Launching a new software product","D) Reaching one million customers"],answer:"B",explanation:"'Being recognized as a top fast-growing company' is correct because the newsletter states Greenfield Consulting 'has been recognized as one of the Top 50 Fastest-Growing Companies in North America by Business Today magazine.' 'Opening a new office' is wrong because no new office opening is mentioned in the newsletter. 'Launching a new software product' is wrong because the newsletter announces new service areas, not a software product. 'Reaching one million customers' is wrong because no customer milestone figure is mentioned in the passage."},
      {id:"p7e19",text:"Which new service area is NOT mentioned?",options:["A) AI Integration","B) Cloud Migration","C) Data Analytics","D) Cybersecurity Advisory"],answer:"C",explanation:"'Data Analytics' is correct as the answer because the newsletter lists exactly three new service areas — AI Integration, Cloud Migration, and Cybersecurity Advisory — and Data Analytics does not appear among them. 'AI Integration' is wrong because it is explicitly listed as one of the three new service areas. 'Cloud Migration' is wrong because it is explicitly listed as the second new service area. 'Cybersecurity Advisory' is wrong because it is explicitly listed as the third new service area."},
      {id:"p7e20",text:"When will invitations for the Client Appreciation Dinner be sent?",options:["A) Immediately","B) On December 5th","C) Next week","D) At the end of the year"],answer:"C",explanation:"'Next week' is correct because the newsletter states 'Invitations will be sent to all active clients next week.' 'Immediately' is wrong because the newsletter specifies that invitations will go out next week, implying a short delay. 'On December 5th' is wrong because that is the date of the dinner itself, not the date invitations will be sent. 'At the end of the year' is wrong because no year-end timeline for invitations is mentioned in the newsletter."}
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
      {id:"p7e21",text:"What class did Mr. Park book?",options:["A) Business","B) First Class","C) Economy","D) Premium Economy"],answer:"C",explanation:"'Economy' is correct because the booking confirmation explicitly lists 'Class: Economy' under the flight details. 'Business' is wrong because business class is not mentioned anywhere in the confirmation. 'First Class' is wrong because the booking clearly states economy class, not first class. 'Premium Economy' is wrong because the confirmation lists a standard economy booking with no upgrade indicated."},
      {id:"p7e22",text:"When should Mr. Park arrive at the airport at the latest?",options:["A) 07:30","B) 06:00","C) 05:30","D) 08:00"],answer:"B",explanation:"'06:00' is correct because the confirmation states Mr. Park must 'arrive at the airport at least 90 minutes before departure,' and the departure time is 07:30, so 07:30 minus 90 minutes equals 06:00. '07:30' is wrong because that is the departure time itself — arriving then would be too late. '05:30' is wrong because that would be 120 minutes before departure, which exceeds the minimum required. '08:00' is wrong because that is 30 minutes after departure, by which time the flight would have already left."},
      {id:"p7e23",text:"How can Mr. Park cancel his booking?",options:["A) By visiting a SkyJet office","B) By calling or visiting the website","C) By sending an email","D) Only at the airport"],answer:"B",explanation:"'By calling or visiting the website' is correct because the confirmation states 'For changes or cancellations, visit skyjet.com or call +82-2-5555-1200.' 'By visiting a SkyJet office' is wrong because the passage directs customers to the website or phone, not a physical office. 'By sending an email' is wrong because no email address is provided for cancellations in the confirmation. 'Only at the airport' is wrong because the confirmation offers online and phone options, making an airport visit unnecessary."}
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
      {id:"p7m1",text:"Why is Robert Cheng writing to Ms. Hoffmann?",options:["A) To request a meeting","B) To submit a project proposal","C) To confirm a signed contract","D) To report a system error"],answer:"B",explanation:"'To submit a project proposal' is correct because the letter states 'we are pleased to submit this formal proposal for your review,' making the submission of a proposal the clear purpose. 'To request a meeting' is wrong because a meeting has already taken place last Tuesday; this letter is a follow-up, not a meeting request. 'To confirm a signed contract' is wrong because the proposal is being submitted for review, meaning no contract has been signed yet. 'To report a system error' is wrong because no technical problem is mentioned anywhere in the letter."},
      {id:"p7m2",text:"How long does NovaTech typically take to implement its ERP system?",options:["A) 10 weeks","B) 12 weeks","C) 14 weeks","D) 20 weeks"],answer:"C",explanation:"'14 weeks' is correct because the letter states the platform has 'an average implementation time of 14 weeks.' '10 weeks' is wrong because no 10-week implementation timeline is mentioned in the proposal. '12 weeks' is wrong because 12 refers to NovaTech's years of experience, not the implementation duration. '20 weeks' is wrong because 20 refers to the hours in the staff training program, not the implementation time."},
      {id:"p7m3",text:"What condition must be met to receive the 10% discount?",options:["A) Payment within 30 days","B) Purchasing the full training package","C) Committing to a 3-year support contract","D) Ordering before the end of the fiscal year"],answer:"C",explanation:"'Committing to a 3-year support contract' is correct because the letter states 'We are prepared to offer a 10% discount should you commit to a 3-year support contract.' 'Payment within 30 days' is wrong because the payment terms are net 60 days, and early payment is not mentioned as a discount condition. 'Purchasing the full training package' is wrong because the training program is a separate line item and is not linked to the discount. 'Ordering before the end of the fiscal year' is wrong because no fiscal year deadline is mentioned in the letter."},
      {id:"p7m4",text:"When does Mr. Cheng plan to contact Ms. Hoffmann next?",options:["A) By phone the following Tuesday","B) By phone the following Wednesday","C) By email next Friday","D) At a scheduled meeting next week"],answer:"B",explanation:"'By phone the following Wednesday' is correct because the letter explicitly states 'I will follow up with you by phone next Wednesday.' 'By phone the following Tuesday' is wrong because Tuesday is when the previous meeting occurred, not the planned follow-up. 'By email next Friday' is wrong because the letter specifies a phone call on Wednesday, not an email on Friday. 'At a scheduled meeting next week' is wrong because the letter describes a phone follow-up, not a face-to-face meeting."}
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
      {id:"p7m5",text:"According to Text 1, what is a key finding of the WorkFuture survey?",options:["A) Most companies prefer full in-office work","B) Remote work increased productivity by 68%","C) Flexible arrangements reduce employee turnover","D) Tech companies are reducing office space"],answer:"C",explanation:"'Flexible arrangements reduce employee turnover' is correct because Text 1 states companies with flexible arrangements 'reported 34% lower employee turnover.' 'Most companies prefer full in-office work' is wrong because the survey found 68% of companies now offer remote or hybrid arrangements. 'Remote work increased productivity by 68%' is wrong because 68% is the share of companies offering flexible work, not a productivity figure. 'Tech companies are reducing office space' is wrong because office space decisions are not discussed in the survey."},
      {id:"p7m6",text:"What does the reviewer in Text 2 identify as a challenge?",options:["A) Lack of remote work tools","B) No home office stipend","C) Cross-team collaboration difficulties","D) Poor management performance"],answer:"C",explanation:"'Cross-team collaboration difficulties' is correct because Text 2 states 'Cross-team collaboration can be frustrating when not everyone is on the same schedule.' 'Lack of remote work tools' is wrong because the reviewer mentions having 'great collaboration tools' as a positive. 'No home office stipend' is wrong because the reviewer specifically mentions receiving a home office stipend. 'Poor management performance' is wrong because the reviewer states 'Management trusts employees' as a positive aspect."},
      {id:"p7m7",text:"Which concern appears in BOTH texts?",options:["A) Home office expenses","B) Communication and collaboration issues","C) Employee compensation","D) Office real estate costs"],answer:"B",explanation:"'Communication and collaboration issues' is correct because Text 1 reports 38% of managers cited 'collaboration and communication issues as ongoing concerns,' and Text 2 states cross-team collaboration is frustrating. 'Home office expenses' is wrong because only Text 2 mentions a home office stipend; Text 1 does not address this topic. 'Employee compensation' is wrong because neither text discusses salary or pay as a concern. 'Office real estate costs' is wrong because neither text mentions the cost of office space."},
      {id:"p7m8",text:"What percentage of companies offered remote work in 2019, according to Text 1?",options:["A) 68%","B) 41%","C) 34%","D) 23%"],answer:"D",explanation:"'23%' is correct because Text 1 states that remote or hybrid arrangements are now offered by 68% of companies, 'up from just 23% in 2019.' '68%' is wrong because that is the current percentage of companies offering flexible arrangements, not the 2019 figure. '41%' is wrong because that is the percentage of managers who reported difficulty monitoring team performance remotely. '34%' is wrong because that is the reduction in employee turnover reported by companies with flexible arrangements."}
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
      {id:"p7m9",text:"What is the maximum gym membership reimbursement per month?",options:["A) $25","B) $50","C) $75","D) $100"],answer:"B",explanation:"'$50' is correct because the policy states the company offers 'up to $50/month reimbursement' for gym membership. '$25' is wrong because the stated reimbursement cap is $50 per month, not $25. '$75' is wrong because no $75 figure appears in the wellness program description. '$100' is wrong because the program explicitly caps the gym reimbursement at $50 per month."},
      {id:"p7m10",text:"How many counseling sessions are covered per year?",options:["A) 3","B) 5","C) 8","D) 12"],answer:"C",explanation:"'8' is correct because the policy states employees have 'access to confidential counseling: up to 8 sessions per year at no cost.' '3' is wrong because 3 refers to the number of additional mental health days off, not counseling sessions. '5' is wrong because no 5-session figure appears anywhere in the wellness program. '12' is wrong because the covered sessions are capped at 8, not 12."},
      {id:"p7m11",text:"Which wellness benefit is NOT listed in the program?",options:["A) Financial advisory consultation","B) Flu vaccination","C) Yoga classes","D) Mental health days"],answer:"C",explanation:"'Yoga classes' is correct as the answer because this benefit does not appear anywhere in the wellness program listing. 'Financial advisory consultation' is wrong because the policy explicitly lists 2 financial advisory sessions per year under Financial Wellness. 'Flu vaccination' is wrong because the policy lists a free flu vaccination provided at the workplace each October. 'Mental health days' is wrong because 3 additional paid mental health days per year are listed under Mental Health benefits."},
      {id:"p7m12",text:"When are retirement planning workshops held?",options:["A) Monthly","B) Twice a year","C) Quarterly","D) Annually"],answer:"C",explanation:"'Quarterly' is correct because the policy states 'Retirement planning workshop: held quarterly.' 'Monthly' is wrong because the workshops are held every quarter, not every month. 'Twice a year' is wrong because quarterly means four times a year, not twice. 'Annually' is wrong because once a year would be less frequent than the quarterly schedule specified."}
    ]
  },
  {id:"p7m_p4",type:"single",title:"Press Release",passage:`FOR IMMEDIATE RELEASE

AXIOM TECH ACQUIRES DATABRIDGE SOLUTIONS FOR $340 MILLION

San Francisco, CA — Axiom Technologies, a leading provider of enterprise software, today announced the acquisition of DataBridge Solutions, a cloud-based data integration startup, for approximately $340 million.

The acquisition is expected to close in Q4 of this year, subject to regulatory approval. DataBridge's platform, which connects over 200 enterprise data sources, will be integrated into Axiom's flagship product suite within 18 months.

"This acquisition accelerates our vision of becoming the one-stop platform for enterprise data management," said Axiom CEO Lisa Chang. "DataBridge's technology is a natural complement to our existing capabilities."

DataBridge, founded in 2018, employs 85 people across offices in New York and Boston. All DataBridge employees will be offered positions within Axiom following the close of the transaction.`,
    questions:[
      {id:"p7m13",text:"For how much did Axiom acquire DataBridge?",options:["A) $200 million","B) $240 million","C) $340 million","D) $540 million"],answer:"C",explanation:"'$340 million' is correct because the press release states the acquisition price is 'approximately $340 million.' '$200 million' is wrong because no $200 million figure appears in the press release. '$240 million' is wrong because no $240 million figure is mentioned anywhere in the announcement. '$540 million' is wrong because the stated acquisition price is $340 million, not $540 million."},
      {id:"p7m14",text:"When is the acquisition expected to close?",options:["A) Immediately","B) Q3 of this year","C) Q4 of this year","D) Next year"],answer:"C",explanation:"'Q4 of this year' is correct because the press release states 'The acquisition is expected to close in Q4 of this year, subject to regulatory approval.' 'Immediately' is wrong because the deal is subject to regulatory approval, meaning it cannot close instantly. 'Q3 of this year' is wrong because the stated closing quarter is Q4, not Q3. 'Next year' is wrong because the press release specifies a close within this year's Q4, not the following year."},
      {id:"p7m15",text:"What will happen to DataBridge employees?",options:["A) They will be let go","B) They will stay with DataBridge independently","C) They will be offered positions at Axiom","D) They will work remotely only"],answer:"C",explanation:"'They will be offered positions at Axiom' is correct because the press release states 'All DataBridge employees will be offered positions within Axiom following the close of the transaction.' 'They will be let go' is wrong because the press release explicitly states all employees will be offered positions. 'They will stay with DataBridge independently' is wrong because DataBridge is being acquired and employees are transitioning to Axiom. 'They will work remotely only' is wrong because no remote-work arrangement for DataBridge staff is mentioned in the press release."},
      {id:"p7m16",text:"How long will it take to integrate DataBridge's platform into Axiom's product suite?",options:["A) 6 months","B) 12 months","C) 18 months","D) 24 months"],answer:"C",explanation:"'18 months' is correct because the press release states DataBridge's platform 'will be integrated into Axiom's flagship product suite within 18 months.' '6 months' is wrong because no 6-month integration timeline is mentioned in the press release. '12 months' is wrong because the stated integration period is 18 months, not 12. '24 months' is wrong because the press release specifies a shorter 18-month window, not two years."}
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
      {id:"p7m17",text:"What level of employee is the program designed for?",options:["A) All employees","B) Senior associates to managers","C) Vice presidents and above","D) New hires only"],answer:"B",explanation:"'Senior associates to managers' is correct because the program description states it is 'designed for high-potential employees at the senior associate to manager level.' 'All employees' is wrong because the program targets a specific level range and requires eligibility conditions that new or junior staff may not meet. 'Vice presidents and above' is wrong because the program's upper boundary is the manager level, not vice presidents. 'New hires only' is wrong because eligibility requires a minimum of 3 years with the company."},
      {id:"p7m18",text:"What performance review rating is required to be eligible?",options:["A) Outstanding only","B) Meets Expectations or higher","C) Exceeds Expectations only","D) Any rating"],answer:"B",explanation:"'Meets Expectations or higher' is correct because the eligibility criteria state a 'Meets Expectations or higher in the last two performance reviews.' 'Outstanding only' is wrong because the minimum threshold is Meets Expectations, so higher ratings also qualify but Outstanding is not the only acceptable rating. 'Exceeds Expectations only' is wrong because Meets Expectations also satisfies the requirement, making this option too restrictive. 'Any rating' is wrong because a below-expectations rating would not qualify an employee for the program."},
      {id:"p7m19",text:"What is covered in weeks 7 through 9?",options:["A) Strategic Thinking","B) People Management","C) Communication and Stakeholder Engagement","D) Change Management"],answer:"C",explanation:"'Communication and Stakeholder Engagement' is correct because the schedule states 'Week 7–9: Communication, Influence, and Stakeholder Engagement.' 'Strategic Thinking' is wrong because that module is covered in weeks 1 through 3, not weeks 7 through 9. 'People Management' is wrong because that is the focus of weeks 4 through 6. 'Change Management' is wrong because Change Management is part of the week 10–12 module on Innovation and Project Execution."},
      {id:"p7m20",text:"How must employees apply for the program?",options:["A) By self-applying online","B) Via a nomination from their direct manager","C) By contacting HR directly","D) Through an open interview process"],answer:"B",explanation:"'Via a nomination from their direct manager' is correct because the eligibility section states 'Nominations must come from your direct manager.' 'By self-applying online' is wrong because employees cannot nominate themselves; the nomination must come from a manager. 'By contacting HR directly' is wrong because HR is not listed as the entry point for applications; the direct manager must initiate the nomination. 'Through an open interview process' is wrong because no interview process is mentioned — entry is through a manager's nomination."}
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
      {id:"p7m21",text:"What was included in Mr. Yuen's booking?",options:["A) Free parking","B) Airport shuttle on arrival only","C) Round-trip airport transfers","D) Spa access"],answer:"B",explanation:"'Airport shuttle on arrival only' is correct because Text 1 lists 'airport shuttle (arrival only)' as one of the booking inclusions. 'Free parking' is wrong because no parking benefit is mentioned in the booking confirmation. 'Round-trip airport transfers' is wrong because the confirmation specifies arrival only, not a return trip to the airport. 'Spa access' is wrong because no spa benefit is included in the listed inclusions."},
      {id:"p7m22",text:"What issue does Mr. Yuen specifically request compensation for?",options:["A) The slow Wi-Fi","B) The missing shuttle","C) The taxi cost","D) The late check-in"],answer:"C",explanation:"'The taxi cost' is correct because Text 2 states 'I would appreciate compensation for the taxi cost ($35).' 'The slow Wi-Fi' is wrong because while Mr. Yuen complains about the Wi-Fi, he does not request financial compensation for it. 'The missing shuttle' is wrong because his complaint about the shuttle is the reason he took a taxi, but he requests compensation for the taxi fare specifically. 'The late check-in' is wrong because no late check-in issue is mentioned in the feedback form."},
      {id:"p7m23",text:"What aspect of the hotel did Mr. Yuen rate positively?",options:["A) The Wi-Fi service","B) The airport shuttle","C) The room and breakfast","D) The conference facilities"],answer:"C",explanation:"'The room and breakfast' is correct because Text 2 states 'the room was comfortable and the breakfast was excellent.' 'The Wi-Fi service' is wrong because Mr. Yuen describes the Wi-Fi as 'extremely slow and unreliable,' which is a negative experience. 'The airport shuttle' is wrong because the shuttle was not available during his stay, which was a source of complaint. 'The conference facilities' is wrong because no hotel conference facilities are mentioned in the feedback form."},
      {id:"p7m24",text:"How many loyalty points did Mr. Yuen earn?",options:["A) 210","B) 315","C) 630","D) 420"],answer:"B",explanation:"'315 points' is correct because Text 1 explicitly states '315 points earned upon checkout.' '210' is wrong because that is the nightly room rate in dollars, not the loyalty points total. '630' is wrong because that is the total cost of the stay in dollars for three nights, not the points earned. '420' is wrong because no 420-point figure appears anywhere in the booking confirmation."}
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
      {id:"p7h1",text:"By how much did Meridian outperform its benchmark in Q3?",options:["A) 6.2 percentage points","B) 11.4 percentage points","C) 2.7 percentage points","D) 28 percentage points"],answer:"C",explanation:"'2.7 percentage points' is correct because the report states Meridian achieved a return 'outperforming the benchmark S&P Technology Index by 2.7 percentage points.' '6.2 percentage points' is wrong because that is the contribution from cloud computing and AI positions to total returns, not the benchmark outperformance. '11.4 percentage points' is wrong because that is the total portfolio return, not the margin by which it beat the benchmark. '28 percentage points' is wrong because 28% refers to the portfolio weighting of the AI Infrastructure segment, not a performance figure."},
      {id:"p7h2",text:"Why was the cybersecurity allocation reduced?",options:["A) Regulatory risks","B) Underperformance relative to sector peers","C) Geopolitical supply chain concerns","D) Overvaluation relative to semiconductors"],answer:"B",explanation:"'Underperformance relative to sector peers' is correct because the report states the cybersecurity allocation was reduced 'following underperformance relative to sector peers.' 'Regulatory risks' is wrong because regulatory uncertainty is cited in relation to AI Infrastructure volatility, not cybersecurity. 'Geopolitical supply chain concerns' is wrong because those are listed as risk factors for global technology holdings generally, not the specific reason for cutting cybersecurity. 'Overvaluation relative to semiconductors' is wrong because the report describes compelling valuations in semiconductors as an opportunity, not as a direct reason for cutting cybersecurity."},
      {id:"p7h3",text:"What is the projected annual growth rate for AI workload demand?",options:["A) 11.4%","B) 28%","C) 35%","D) 18%"],answer:"C",explanation:"'35%' is correct because the report states 'AI workload demand will compound at approximately 35% annually through 2027.' '11.4%' is wrong because that is the total portfolio return in Q3, not the AI demand growth projection. '28%' is wrong because that is the portfolio weighting of the AI Infrastructure segment, not a demand growth rate. '18%' is wrong because that was the previous cybersecurity allocation percentage before it was reduced, not an AI growth figure."},
      {id:"p7h4",text:"What does the report suggest about the Q4 outlook?",options:["A) Strongly bullish due to AI growth","B) Negative due to regulatory risks","C) Cautiously optimistic with rate stabilization expected","D) Uncertain due to portfolio volatility"],answer:"C",explanation:"'Cautiously optimistic with rate stabilization expected' is correct because the outlook section states 'we maintain a cautiously optimistic stance' and cites the Federal Reserve's 'anticipated rate stabilization' as a positive backdrop. 'Strongly bullish due to AI growth' is wrong because the tone is cautiously optimistic, not strongly bullish. 'Negative due to regulatory risks' is wrong because the overall Q4 stance is optimistic, even though regulatory risk is acknowledged. 'Uncertain due to portfolio volatility' is wrong because the report expresses a clear optimistic position rather than uncertainty."},
      {id:"p7h5",text:"The word 'stabilization' as used in the report most likely means:",options:["A) A sharp decline in interest rates","B) Interest rates leveling off at a steady level","C) The elimination of all monetary policy","D) A government guarantee on bond yields"],answer:"B",explanation:"'Interest rates leveling off at a steady level' is correct because the report states 'The Federal Reserve's anticipated rate stabilization should provide a favorable backdrop,' meaning rates are expected to stop moving and settle, which would benefit growth-oriented assets. 'A sharp decline in interest rates' is wrong because stabilization implies rates becoming steady, not necessarily falling sharply; a decline would be a cut, not stabilization. 'The elimination of all monetary policy' is wrong because stabilization refers to a pause in rate changes, not the end of monetary policy itself. 'A government guarantee on bond yields' is wrong because stabilization is about the direction of interest rate movement, not any form of government guarantee on investment returns."}
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
      {id:"p7h6",text:"According to Text 1, what triggered the policy update?",options:["A) Employee complaints about travel conditions","B) A 42% year-over-year increase in travel costs","C) Regulatory requirements","D) A decrease in revenue"],answer:"B",explanation:"'A 42% year-over-year increase in travel costs' is correct because Text 1 states the policy update followed 'a review of our company travel expenditures, which increased 42% year-over-year.' 'Employee complaints about travel conditions' is wrong because the trigger was financial — rising costs — not employee dissatisfaction. 'Regulatory requirements' is wrong because no external regulatory mandate is mentioned as prompting the policy changes. 'A decrease in revenue' is wrong because the passage describes an increase in travel expenditure, not a revenue decline."},
      {id:"p7h7",text:"Under the revised policy, when is Business Class allowed on international flights?",options:["A) For any international flight","B) When flight exceeds 6 hours","C) When exceeding 8 hours with VP approval","D) Only for executive-level employees"],answer:"C",explanation:"'When exceeding 8 hours with VP approval' is correct because Text 2 section 4.3.1 states 'Flights exceeding 8 hours qualify for Business Class, subject to VP pre-approval.' 'For any international flight' is wrong because the Business Class option is only available for flights over 8 hours, not all international flights. 'When flight exceeds 6 hours' is wrong because the threshold stated in the policy is 8 hours, not 6. 'Only for executive-level employees' is wrong because the policy allows Business Class based on flight duration, not employee seniority."},
      {id:"p7h8",text:"What specific suggestion does the survey respondent make?",options:["A) Eliminate the pre-approval requirement","B) Increase international hotel cap","C) Introduce automated pre-approval for regular routes","D) Reinstate the $80/day meal allowance"],answer:"C",explanation:"'Introduce automated pre-approval for regular routes' is correct because Text 3 explicitly suggests to 'Introduce an automated pre-approval system for recurring travel routes.' 'Eliminate the pre-approval requirement' is wrong because the respondent proposes automating it, not removing it entirely. 'Increase international hotel cap' is wrong because the respondent asks about Tier 1 domestic city rates, not the international hotel cap. 'Reinstate the $80/day meal allowance' is wrong because the respondent does not mention meal allowances as a concern in the survey response."},
      {id:"p7h9",text:"Which information is consistent across all three texts?",options:["A) The meal allowance reduction was well received","B) VP approval is required for some expense items","C) All Business Class travel is prohibited","D) Hotel costs are the primary driver of excess spending"],answer:"B",explanation:"'VP approval is required for some expense items' is correct because Text 1 states expenses above $500 require VP pre-approval, Text 2 requires VP pre-approval for Business Class on long flights, and Text 3 mentions that VP pre-approval caused a delay. 'The meal allowance reduction was well received' is wrong because the survey respondent rates the changes 2/5 and does not express approval of the changes. 'All Business Class travel is prohibited' is wrong because Text 2 explicitly allows Business Class for flights over 8 hours with VP approval. 'Hotel costs are the primary driver of excess spending' is wrong because Text 1 cites total travel expenditures rising 42%, without identifying hotels as the primary cause."}
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
      {id:"p7h10",text:"How many independent non-executive directors are on the board?",options:["A) Five","B) Six","C) Seven","D) Twelve"],answer:"B",explanation:"'Six' is correct because the report states the Board comprises 'six independent non-executive directors.' 'Five' is wrong because five is the number of executive directors, not independent non-executive directors. 'Seven' is wrong because no director count of seven appears in the report; the independent non-executives number six. 'Twelve' is wrong because twelve is the total number of directors on the board, including all categories."},
      {id:"p7h11",text:"What is the main reason for replacing Grant & Morrison LLP?",options:["A) They underperformed on the audit","B) They charged excessive fees","C) They have served for 14 years and a tender process was conducted","D) They failed an independence review"],answer:"C",explanation:"'They have served for 14 years and a tender process was conducted' is correct because the report states Deloitte will replace Grant & Morrison LLP 'after a 14-year tenure' following a tender process conducted this year. 'They underperformed on the audit' is wrong because no criticism of Grant & Morrison's audit quality is mentioned in the report. 'They charged excessive fees' is wrong because auditor fees are not discussed as a factor in the replacement decision. 'They failed an independence review' is wrong because no independence failure is mentioned; the change follows a routine tender process."},
      {id:"p7h12",text:"Which risk is NOT mentioned in the risk management section?",options:["A) Cybersecurity threats","B) Talent retention","C) Supply chain disruption","D) Regulatory change"],answer:"C",explanation:"'Supply chain disruption' is correct as the answer because it does not appear in the four key risks listed in the report. 'Cybersecurity threats' is wrong because it is explicitly listed as one of the four key risks identified this year. 'Talent retention' is wrong because it is explicitly listed as one of the four key risks identified this year. 'Regulatory change' is wrong because it is explicitly listed as the fourth key risk, stated as 'regulatory change in our core markets.'"},
      {id:"p7h13",text:"The word 'tenure' in the report most likely refers to:",options:["A) The auditor's annual salary","B) The length of the auditor's appointment period","C) The auditor's qualifications","D) The quality of the audit work"],answer:"B",explanation:"'The length of the auditor's appointment period' is correct because 'tenure' in this context means the duration of time Grant & Morrison LLP has served as external auditor — specifically 14 years. 'The auditor's annual salary' is wrong because tenure refers to duration of service, not compensation. 'The auditor's qualifications' is wrong because qualifications describe credentials, while tenure refers to time served. 'The quality of the audit work' is wrong because quality of work is separate from the concept of tenure, which concerns the length of the professional relationship."}
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
      {id:"p7h14",text:"How many product managers will the Director oversee?",options:["A) 5","B) 8","C) 10","D) 12"],answer:"B",explanation:"'8' is correct because Text 1 states the director will 'Lead a team of 8 senior product managers.' '5' is wrong because no team of 5 is mentioned in the job posting or cover letter. '10' is wrong because 10 refers to the minimum years of product management experience required, not the team size. '12' is wrong because Ms. Mehta led a team of 12 at her previous company, DataStream, not the team size at CloudVault."},
      {id:"p7h15",text:"What challenge does Ms. Mehta acknowledge in her letter?",options:["A) She lacks cloud infrastructure experience","B) She does not have an MBA","C) She is not currently in San Francisco","D) She has never led a team before"],answer:"C",explanation:"'She is not currently in San Francisco' is correct because Text 2 states 'I am currently based in Seattle and would need to relocate.' 'She lacks cloud infrastructure experience' is wrong because Ms. Mehta describes experience with a cloud analytics platform, which is relevant to the role. 'She does not have an MBA' is wrong because the letter states she 'holds an MBA from Stanford Graduate School of Business.' 'She has never led a team before' is wrong because she specifically mentions leading a team of 12 product managers at DataStream."},
      {id:"p7h16",text:"By how much did Ms. Mehta's product grow in ARR at DataStream?",options:["A) From $20M to $65M","B) From $20M to $85M","C) From $30M to $85M","D) From $50M to $85M"],answer:"B",explanation:"'From $20M to $85M' is correct because Text 2 states the platform 'grew from $20 million to $85 million in ARR under my leadership.' 'From $20M to $65M' is wrong because the ending ARR was $85 million, not $65 million. 'From $30M to $85M' is wrong because the starting ARR was $20 million, not $30 million. 'From $50M to $85M' is wrong because the starting point was $20 million, not $50 million."},
      {id:"p7h17",text:"What is listed as preferred but not required in the job posting?",options:["A) Cloud infrastructure experience","B) A product management background","C) An MBA or equivalent","D) Strong analytical skills"],answer:"C",explanation:"'An MBA or equivalent' is correct because Text 1 lists it under requirements with the qualifier 'preferred,' meaning it is desirable but not mandatory. 'Cloud infrastructure experience' is wrong because the posting lists 'Deep expertise in cloud infrastructure, SaaS, or enterprise software' as a firm requirement. 'A product management background' is wrong because 10+ years in product management is listed as a mandatory requirement. 'Strong analytical skills' is wrong because strong analytical and data-driven decision-making skills are listed as a requirement, with no 'preferred' qualifier."}
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
      {id:"p7h18",text:"What is the analyst's 12-month price target for PulseTech?",options:["A) $64.50","B) $75","C) $87","D) $92"],answer:"C",explanation:"'$87' is correct because the report explicitly states a '12-month price target of $87.' '$64.50' is wrong because that is the current stock price, not the target price. '$75' is wrong because no $75 price target is mentioned anywhere in the research note. '$92' is wrong because the target price stated is $87, not $92."},
      {id:"p7h19",text:"What weighting is given to DCF analysis in the blended valuation?",options:["A) 40%","B) 50%","C) 60%","D) 70%"],answer:"C",explanation:"'60%' is correct because the valuation section states the methodology weights 'DCF analysis (60%) and EV/Revenue multiples (40%).' '40%' is wrong because 40% is the weighting given to EV/Revenue multiples, not DCF analysis. '50%' is wrong because the two components are split 60/40, not equally at 50/50. '70%' is wrong because no 70% weighting is mentioned in the valuation methodology."},
      {id:"p7h20",text:"What risk factor is mentioned as warranting monitoring?",options:["A) Management turnover","B) Product recalls","C) Insider selling activity","D) Currency exchange rate risk"],answer:"C",explanation:"'Insider selling activity' is correct because the risks section states 'Insider selling activity over the past two quarters warrants monitoring.' 'Management turnover' is wrong because no leadership changes or management instability are mentioned as a risk in the report. 'Product recalls' is wrong because no product recall risk is listed among the key downside risks. 'Currency exchange rate risk' is wrong because no foreign exchange or currency risk is discussed in the research note."},
      {id:"p7h21",text:"The term 'underpenetrated market' in the report most likely means:",options:["A) A market with too many competitors","B) A market that has not yet been fully developed or captured","C) A market facing regulatory restrictions","D) A market with declining demand"],answer:"B",explanation:"'A market that has not yet been fully developed or captured' is correct because 'underpenetrated' in investment analysis describes a large addressable market where current products or services have not yet reached most potential customers. 'A market with too many competitors' is wrong because underpenetration implies insufficient supply or reach, not excessive competition. 'A market facing regulatory restrictions' is wrong because regulatory challenges are listed separately as a risk factor, distinct from the concept of market penetration. 'A market with declining demand' is wrong because an underpenetrated market represents a growth opportunity, implying demand exists but has not been captured."},
      {id:"p7h22",text:"What is the approximate upside the analyst sees from the current price?",options:["A) 15%","B) 25%","C) 35%","D) 45%"],answer:"C",explanation:"'35%' is correct because the report states the $87 target represents 'approximately 35% upside from the current price of $64.50.' '15%' is wrong because no 15% upside figure is mentioned in the research note. '25%' is wrong because the stated upside is approximately 35%, not 25%. '45%' is wrong because the analyst's stated upside is approximately 35%, not 45%."}
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
      {id:"p7h23",text:"According to the policy in Text 1, within how many hours must the CISO be notified?",options:["A) 2 hours","B) 4 hours","C) 24 hours","D) 72 hours"],answer:"B",explanation:"'4 hours' is correct because Text 1 step 3 states 'The Chief Information Security Officer (CISO) must be notified within 4 hours.' '2 hours' is wrong because 2 hours is the window for the IT Security team to verify and classify the breach, not the CISO notification window. '24 hours' is wrong because 24 hours is the deadline for initiating a full forensic investigation, not the CISO notification. '72 hours' is wrong because 72 hours is the deadline for notifying regulators, not the CISO."},
      {id:"p7h24",text:"What appears to be the source of the breach according to Text 2?",options:["A) A phishing email to an employee","B) A compromised vendor credential","C) A malicious insider","D) A software vulnerability"],answer:"B",explanation:"'A compromised vendor credential' is correct because Text 2 states 'the source of the intrusion appears to be a compromised vendor credential used to access our API gateway.' 'A phishing email to an employee' is wrong because no phishing attack is mentioned in the incident report. 'A malicious insider' is wrong because the report points to an external vendor credential compromise, not internal wrongdoing. 'A software vulnerability' is wrong because the identified entry point was a credential, not a flaw in the software itself."},
      {id:"p7h25",text:"Was the regulatory notification sent within the required timeframe?",options:["A) No, it was sent too late","B) Yes, it was sent within 72 hours","C) Yes, it was sent within 24 hours","D) No, it was sent within 35 hours which exceeded the limit"],answer:"B",explanation:"'Yes, it was sent within 72 hours' is correct because Text 3 states the notification was sent 35 hours after discovery, and Text 1 requires regulator notification within 72 hours — 35 hours is well within this limit. 'No, it was sent too late' is wrong because 35 hours is less than the 72-hour regulatory requirement. 'Yes, it was sent within 24 hours' is wrong because 35 hours exceeds 24 hours, though it still complies with the 72-hour rule. 'No, it was sent within 35 hours which exceeded the limit' is wrong because the required limit is 72 hours, and 35 hours does not exceed it."},
      {id:"p7h26",text:"What is Apex committed to providing within 30 days?",options:["A) A full refund to affected customers","B) A root cause analysis and remediation report","C) A new security policy","D) A press release to the public"],answer:"B",explanation:"'A root cause analysis and remediation report' is correct because Text 3 states Apex 'will provide a detailed root cause analysis and remediation report within 30 days.' 'A full refund to affected customers' is wrong because no compensation or refund to customers is mentioned in the regulatory notification. 'A new security policy' is wrong because the commitment is to provide an investigation report, not a new policy document. 'A press release to the public' is wrong because the notification is directed to the regulatory office, not the public."},
      {id:"p7h27",text:"Which step in the Data Breach Response Policy (Text 1) was completed FIRST according to Text 2?",options:["A) NOTIFICATION — CISO informed","B) CONTAINMENT — server isolated","C) IDENTIFICATION — breach classified","D) REMEDIATION — plan approved"],answer:"B",explanation:"'CONTAINMENT — server isolated' is correct because Text 2 shows the affected server was isolated at 10:30 PM, whereas the CISO was not notified until 10:50 PM, making containment the earlier completed step. 'NOTIFICATION — CISO informed' is wrong because CISO notification at 10:50 PM came after the server was already isolated at 10:30 PM. 'IDENTIFICATION — breach classified' is wrong because while detection occurred at 10:15 PM, the incident report is filed at 10:45 PM and does not confirm full classification before containment. 'REMEDIATION — plan approved' is wrong because remediation is the final step and no remediation plan approval is mentioned as complete in Text 2."}
    ]
  }
];
