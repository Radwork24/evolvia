export const quizQuestions = [
  {
    id: 1,
    question: "When faced with a complex real-world challenge, what is your first instinct?",
    options: [
      { text: "Break it down into mathematical models, logic, and coded systems", stream: "science-pcm", score: { pcm: 3, pcb: 1, comm: 1, arts: 0 } },
      { text: "Analyze biological, health, or environmental factors and living systems", stream: "science-pcb", score: { pcm: 1, pcb: 3, comm: 0, arts: 0 } },
      { text: "Examine economic incentives, market forces, and financial feasibility", stream: "commerce", score: { pcm: 1, pcb: 0, comm: 3, arts: 1 } },
      { text: "Understand human psychology, cultural narratives, and creative expression", stream: "humanities", score: { pcm: 0, pcb: 0, comm: 1, arts: 3 } }
    ]
  },
  {
    id: 2,
    question: "Which type of book or online content captivates you for hours?",
    options: [
      { text: "Artificial Intelligence, Physics discoveries, and Robotics hardware", stream: "science-pcm", score: { pcm: 3, pcb: 0, comm: 1, arts: 0 } },
      { text: "Medical breakthroughs, neuroscience, genetics, and ecology", stream: "science-pcb", score: { pcm: 0, pcb: 3, comm: 0, arts: 1 } },
      { text: "Startup case studies, stock market investing, and venture capital", stream: "commerce", score: { pcm: 1, pcb: 0, comm: 3, arts: 0 } },
      { text: "Philosophy, global diplomacy, visual design, and creative writing", stream: "humanities", score: { pcm: 0, pcb: 0, comm: 1, arts: 3 } }
    ]
  },
  {
    id: 3,
    question: "What kind of project would you enjoy building the most?",
    options: [
      { text: "Building an automated drone or algorithm that solves math optimizations", stream: "science-pcm", score: { pcm: 3, pcb: 1, comm: 1, arts: 0 } },
      { text: "Developing a low-cost water purifier or disease diagnostic toolkit", stream: "science-pcb", score: { pcm: 1, pcb: 3, comm: 0, arts: 0 } },
      { text: "Launching an e-commerce brand with supply chain & revenue models", stream: "commerce", score: { pcm: 0, pcb: 0, comm: 3, arts: 1 } },
      { text: "Directing a documentary, writing a novel, or designing brand identities", stream: "humanities", score: { pcm: 0, pcb: 0, comm: 1, arts: 3 } }
    ]
  },
  {
    id: 4,
    question: "In a group project, what role do you naturally assume?",
    options: [
      { text: "Technical Architect & Problem Solver", stream: "science-pcm", score: { pcm: 3, pcb: 1, comm: 1, arts: 0 } },
      { text: "Research Analyst & Empirical Fact-Checker", stream: "science-pcb", score: { pcm: 1, pcb: 3, comm: 0, arts: 0 } },
      { text: "Resource Manager, Budget Planner & Pitch Presenter", stream: "commerce", score: { pcm: 0, pcb: 0, comm: 3, arts: 1 } },
      { text: "Storyteller, UI/UX Designer & Community Lead", stream: "humanities", score: { pcm: 0, pcb: 0, comm: 1, arts: 3 } }
    ]
  },
  {
    id: 5,
    question: "What is your primary career aspiration for the next 10 years?",
    options: [
      { text: "Innovating deep tech, quantum computing, aerospace, or software architecture", stream: "science-pcm", score: { pcm: 3, pcb: 0, comm: 1, arts: 0 } },
      { text: "Saving lives as a surgeon, neuroscientist, bio-engineer, or researcher", stream: "science-pcb", score: { pcm: 0, pcb: 3, comm: 0, arts: 0 } },
      { text: "Leading investment funds, founding unicorn startups, or CFO leadership", stream: "commerce", score: { pcm: 1, pcb: 0, comm: 3, arts: 0 } },
      { text: "Influencing policy, creative direction, civil services, or UX strategy", stream: "humanities", score: { pcm: 0, pcb: 0, comm: 1, arts: 3 } }
    ]
  }
];

export const streamResultsData = {
  pcm: {
    title: "Science (PCM - Physics, Chemistry, Mathematics)",
    badge: "Tech & Engineering Dominant",
    matchScore: "96%",
    description: "You exhibit strong analytical acumen, logical rigor, and a natural curiosity for computational and physical systems.",
    topCareers: ["Software & AI Engineer", "Data Scientist", "Aerospace / Robotics Engineer", "Quantitative Analyst"],
    recommendedDegrees: ["B.Tech / B.E in CS / AI", "B.S. in Applied Mathematics", "B.Arch", "Integrated M.Sc"],
    topInstitutes: ["IIT Bombay", "BITS Pilani", "IIIT Hyderabad", "NIT Trichy"],
    books: ["'Structure & Interpretation of Computer Programs'", "'Feynman Lectures on Physics'", "'Thinking Fast and Slow'"]
  },
  pcb: {
    title: "Science (PCB - Physics, Chemistry, Biology)",
    badge: "Medical & Bio-Sciences Dominant",
    matchScore: "94%",
    description: "You have strong scientific curiosity, keen observational skills, and an aptitude for life sciences, healthcare, and biotech innovation.",
    topCareers: ["Doctor / Surgeon (MBBS)", "Biomedical Engineer", "Genetics Researcher", "Pharmacologist"],
    recommendedDegrees: ["MBBS / BDS", "B.Tech Biotechnology", "B.Pharm", "B.Sc Microbiology"],
    topInstitutes: ["AIIMS New Delhi", "CMC Vellore", "JIPMER", "IISc Bangalore"],
    books: ["'The Gene: An Intimate History' by Siddhartha Mukherjee", "'Campbell Biology'", "'Being Mortal' by Atul Gawande"]
  },
  comm: {
    title: "Commerce with Applied Mathematics / FinTech",
    badge: "Business & Quantitative Finance",
    matchScore: "92%",
    description: "You possess high business instincts, analytical valuation skills, and interest in financial markets, entrepreneurship, and economics.",
    topCareers: ["Investment Banker", "Chartered Accountant (CA/CFA)", "FinTech Product Manager", "Management Consultant"],
    recommendedDegrees: ["B.Com (Hons)", "BBA / IPM", "B.A. Economics (Hons)", "BMS / Finance"],
    topInstitutes: ["SRCC Delhi", "IIM Indore (IPM)", "St. Xavier's College", "Shaheed Sukhdev (SSCBS)"],
    books: ["'The Intelligent Investor' by Benjamin Graham", "'Principles' by Ray Dalio", "'Freakonomics'"]
  },
  arts: {
    title: "Humanities, Liberal Arts & Design",
    badge: "Creative & Strategic Leadership",
    matchScore: "95%",
    description: "You have exceptional critical thinking, visual design sensibility, and a deep grasp of human behavior, narratives, and societal systems.",
    topCareers: ["Product / UI-UX Designer", "Civil Services / Policy Strategist", "Journalist / Creative Director", "Corporate Lawyer"],
    recommendedDegrees: ["B.Des (Interaction/Product)", "B.A. Psychology / Political Science", "B.A. LLB", "B.A. Journalism"],
    topInstitutes: ["NID Ahmedabad", "Ashoka University", "St. Stephen's College", "NLSIU Bengaluru"],
    books: ["'The Design of Everyday Things' by Don Norman", "'Sapiens' by Yuval Noah Harari", "'Ways of Seeing' by John Berger"]
  }
};

export const collegesData = [
  {
    id: 1,
    name: "IIT Bombay (Indian Institute of Technology)",
    location: "Mumbai, Maharashtra",
    stream: "Engineering & Tech",
    nirfRank: "#3 in Overall",
    avgPackage: "₹23.5 LPA",
    cutoff: "JEE Advanced Top 500",
    fees: "₹2.2L / yr",
    tags: ["Autonomous", "Top Placement", "AI & Robotics"],
    badge: "Premier Tech"
  },
  {
    id: 2,
    name: "AIIMS (All India Institute of Medical Sciences)",
    location: "New Delhi",
    stream: "Medical & Life Sciences",
    nirfRank: "#1 in Medical",
    avgPackage: "₹18.0 LPA",
    cutoff: "NEET Top 50 Rank",
    fees: "₹1,628 / yr",
    tags: ["Govt", "Top Research", "Hospital Attachment"],
    badge: "Top Medical"
  },
  {
    id: 3,
    name: "SRCC (Shri Ram College of Commerce)",
    location: "New Delhi (DU)",
    stream: "Commerce & Economics",
    nirfRank: "#1 in Commerce",
    avgPackage: "₹15.2 LPA",
    cutoff: "CUET 99.5+ Percentile",
    fees: "₹32,000 / yr",
    tags: ["Premier Commerce", "Big 4 Recruiters", "Wall St Alumni"],
    badge: "Top Commerce"
  },
  {
    id: 4,
    name: "BITS Pilani (Birla Institute of Technology & Science)",
    location: "Pilani, Rajasthan",
    stream: "Engineering & Tech",
    nirfRank: "#18 in Overall",
    avgPackage: "₹20.8 LPA",
    cutoff: "BITSAT 310+",
    fees: "₹5.4L / yr",
    tags: ["0% Attendance Policy", "Dual Degree", "Strong Alumni"],
    badge: "Top Private Tech"
  },
  {
    id: 5,
    name: "NID (National Institute of Design)",
    location: "Ahmedabad, Gujarat",
    stream: "Design & Arts",
    nirfRank: "#1 in Design",
    avgPackage: "₹16.5 LPA",
    cutoff: "NID DAT Prelims + Mains",
    fees: "₹3.8L / yr",
    tags: ["Industrial Design", "UI/UX", "Global Exchange"],
    badge: "Premier Design"
  },
  {
    id: 6,
    name: "IIM Indore (IPM 5-Year Integrated Program)",
    location: "Indore, Madhya Pradesh",
    stream: "Management & Commerce",
    nirfRank: "#8 in Management",
    avgPackage: "₹25.6 LPA",
    cutoff: "IPMAT Top 150",
    fees: "₹6.5L / yr",
    tags: ["After 12th Entry", "IIM Alumni Status", "Top Consulting"],
    badge: "Top Management"
  }
];

export const scholarshipsData = [
  {
    id: 1,
    name: "Reliance Foundation Undergraduate Scholarship 2026",
    category: "Merit-cum-Means",
    stream: "All Streams (Special focus on STEM)",
    grantAmount: "Up to ₹2,00,000",
    deadline: "October 15, 2026",
    eligibility: "Class 12th score > 60%, household income < ₹15 Lakhs",
    badge: "High Value",
    status: "Applications Open"
  },
  {
    id: 2,
    name: "Google Generation Scholarship (APAC)",
    category: "Women in Tech & STEM",
    stream: "Computer Science & Engineering",
    grantAmount: "$2,500 USD (₹2.1 Lakhs)",
    deadline: "November 30, 2026",
    eligibility: "Female students enrolled in 1st/2nd year undergraduate CS",
    badge: "Global Grant",
    status: "Upcoming"
  },
  {
    id: 3,
    name: "Aditya Birla Group Scholarship",
    category: "Merit-Based",
    stream: "Engineering, Law & Management",
    grantAmount: "₹1,80,000 / year + Hostel",
    deadline: "August 30, 2026",
    eligibility: "Top 20 rankers in IIT / IIM / BITS / NLSIU entrance exams",
    badge: "Prestigious",
    status: "Applications Open"
  },
  {
    id: 4,
    name: "Tata Trusts Means Grant for Higher Education",
    category: "Need-Based",
    stream: "All Academic Streams",
    grantAmount: "Up to ₹1,50,000 tuition fee",
    deadline: "December 10, 2026",
    eligibility: "Undergraduate students with household income < ₹4.5 Lakhs",
    badge: "Full Tuition Support",
    status: "Applications Open"
  },
  {
    id: 5,
    name: "Kishore Vaigyanik Protsahan Yojana / INSPIRE Fellowship",
    category: "STEM Research",
    stream: "Pure Sciences (Physics, Chem, Bio, Maths)",
    grantAmount: "₹80,000 / yr + ₹20,000 Contingency",
    deadline: "September 25, 2026",
    eligibility: "Top 1% in Class 12 Board exams pursuing B.Sc / BS-MS",
    badge: "Govt of India",
    status: "Applications Open"
  }
];

export const counselorsData = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "Senior STEM & Engineering Counsellor",
    credentials: "Ph.D. IIT Delhi • Ex-BITS Admissions Advisor",
    experience: "12+ Years Exp",
    rating: "4.95 (340+ reviews)",
    specialty: "JEE Strategy, Branch Selection & Tech Careers",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    availableSlots: ["Tomorrow 10:00 AM", "Tomorrow 3:30 PM", "Friday 6:00 PM"]
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Commerce, Finance & IPM Specialist",
    credentials: "IIM Ahmedabad Alum • Ex-McKinsey Consultant",
    experience: "9+ Years Exp",
    rating: "4.92 (280+ reviews)",
    specialty: "IPMAT Prep, CA vs CFA, Top B-Schools & FinTech",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    availableSlots: ["Today 5:00 PM", "Tomorrow 11:30 AM", "Saturday 2:00 PM"]
  },
  {
    id: 3,
    name: "Priya Sundaram",
    role: "Design, Liberal Arts & Psychology Mentor",
    credentials: "NID Ahmedabad Alum • Design Lead at Fintech",
    experience: "8+ Years Exp",
    rating: "4.98 (410+ reviews)",
    specialty: "NID/UCEED Portfolio, UI/UX, Psychology & Law",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    availableSlots: ["Tomorrow 1:00 PM", "Thursday 4:00 PM", "Saturday 10:00 AM"]
  }
];
