export interface Testimonial {
  id: string;
  studentName: string;
  country: string;
  flag: string;
  university: string;
  program: string;
  intake: string;
  visaTime: string;
  avatar: string;
  story: string;
  verified: boolean;
  studyGap?: string;
  rating: number;
  scholarship?: string;
  tags?: string[];
  keyHighlight?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "masrup-fabian",
    studentName: "Masrup Fabian",
    country: "United Kingdom",
    flag: "🇬🇧",
    university: "University of Greenwich, London",
    program: "MSc Big Data & Data Analytics",
    intake: "September 2026",
    visaTime: "1-Day Priority Approval",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    story: "I was stunned when my UK student visa was approved in just 24 hours! AS Education guided me through the entire CAS issuance, MOI assessment without IELTS, and mock interview preparations. Their transparency and zero hidden fee model set a benchmark.",
    verified: true,
    studyGap: "2 Years Gap Justified",
    scholarship: "£3,000 Early Bird",
    rating: 5,
    tags: ["Without IELTS (MOI)", "Priority Visa", "London Campus"],
    keyHighlight: "Fastest 24-Hour Visa Grant"
  },
  {
    id: "tanvir-ahmed",
    studentName: "Tanvir Ahmed",
    country: "Australia",
    flag: "🇦🇺",
    university: "Western Sydney University",
    program: "Master of Information & Communications Tech",
    intake: "July 2026",
    visaTime: "14 Days Subclass 500",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    story: "Australia's new Genuine Student (GS) criteria and bank solvency requirements felt overwhelming, but the counselors at AS Education thoroughly audited my financial matrices. My Subclass 500 visa was granted without a single objection.",
    verified: true,
    studyGap: "3 Years Professional Gap",
    scholarship: "$6,000 Dean's Merit",
    rating: 5,
    tags: ["Subclass 500", "Bank Audit Passed", "Spouse Included"],
    keyHighlight: "Genuine Student (GS) Pass"
  },
  {
    id: "nusrat-jahan",
    studentName: "Nusrat Jahan Mim",
    country: "Canada",
    flag: "🇨🇦",
    university: "University of Windsor",
    program: "Master of Applied Computing (MAC)",
    intake: "January 2027",
    visaTime: "24 Days Approval",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    story: "From Statement of Purpose (SOP) drafting to GIC bank account clearance, AS Education walked me through every critical milestone. Visiting their Dhanmondi office and speaking directly with certified counselors gave my family absolute peace of mind.",
    verified: true,
    studyGap: "Fresh Graduate",
    scholarship: "CAD $5,000 Entrance",
    rating: 5,
    tags: ["SDS Stream", "GIC Cleared", "Direct PGWP"],
    keyHighlight: "Top-Tier Ontario Master's"
  },
  {
    id: "shahriar-kabir",
    studentName: "Shahriar Kabir",
    country: "USA",
    flag: "🇺🇸",
    university: "University of North Texas",
    program: "MS in Artificial Intelligence & Data Science",
    intake: "Fall 2026",
    visaTime: "F-1 Approved in First Attempt",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    story: "Facing the US Embassy visa interview was my biggest fear. AS Education's 1-on-1 mock interview drill, DS-160 scrutiny, and I-20 financial presentation gave me 100% confidence. The consular officer said 'Your visa is approved' in less than 2 minutes!",
    verified: true,
    studyGap: "1.5 Years Gap",
    scholarship: "$10,000 In-State Tuition Waiver",
    rating: 5,
    tags: ["F-1 Interview Drill", "STEM OPT (3 Years)", "Tuition Waiver"],
    keyHighlight: "First-Attempt F-1 Approval"
  },
  {
    id: "sakib-hasan",
    studentName: "Sakib Hasan",
    country: "Malaysia",
    flag: "🇲🇾",
    university: "Asia Pacific University (APU)",
    program: "BSc (Hons) in Computer Science (UK Dual Degree)",
    intake: "May 2026",
    visaTime: "10 Days EMGS eVAL",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    story: "I wanted a world-renowned British computer science degree within an accessible budget. AS Education recommended the APU dual-degree pathway in Malaysia. The EMGS e-Visa came through in under two weeks!",
    verified: true,
    studyGap: "1 Year HSC Gap",
    scholarship: "30% Merit Scholarship",
    rating: 5,
    tags: ["UK Dual Degree", "Budget-Friendly", "EMGS Direct"],
    keyHighlight: "Affordable British Degree"
  },
  {
    id: "fariha-rahman",
    studentName: "Fariha Rahman",
    country: "Europe",
    flag: "🇫🇮",
    university: "Centria University of Applied Sciences, Finland",
    program: "Bachelor of Business Management",
    intake: "September 2026",
    visaTime: "Residence Permit in 3 Weeks",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    story: "The guidance I received for the Finnish entrance exam and 50% tuition scholarship application was extraordinary. I arrived in Finland seamlessly with full European residency rights and part-time work privileges.",
    verified: true,
    studyGap: "2 Years Gap",
    scholarship: "50% Tuition Waiver",
    rating: 5,
    tags: ["Nordic PR Track", "50% Scholarship", "EnterFinland Support"],
    keyHighlight: "50% Nordic Scholarship"
  },
  {
    id: "mehedi-hasan",
    studentName: "Mehedi Hasan Rifat",
    country: "Europe",
    flag: "🇬🇷",
    university: "Webster University Athens, Greece",
    program: "BSc in Business Administration",
    intake: "January 2027",
    visaTime: "Schengen Visa Approved",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    story: "AS Education is by far the most reliable consultancy in Dhaka for European university admissions. Their clear documentation checklist made my embassy appointment effortless and stress-free.",
    verified: true,
    studyGap: "Fresh Candidate",
    scholarship: "€2,500 Academic Award",
    rating: 5,
    tags: ["Schengen Visa", "US Accredited Campus", "Easy Transfer"],
    keyHighlight: "European Schengen Access"
  },
  {
    id: "anika-tabassum",
    studentName: "Anika Tabassum",
    country: "Europe",
    flag: "🇩🇪",
    university: "IU International University of Applied Sciences, Germany",
    program: "MSc in International Management",
    intake: "October 2026",
    visaTime: "National D-Visa Granted",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    story: "Opening the German Expatrio blocked account and securing the APS certificate felt daunting, but AS Education handled every step methodically. Now studying in Berlin with an 18-month job seeker visa guarantee.",
    verified: true,
    studyGap: "2.5 Years Work Exp",
    scholarship: "35% Tuition Reduction",
    rating: 5,
    tags: ["Blocked Account Assist", "18-Mo Job Seeker", "Berlin Campus"],
    keyHighlight: "APS & Blocked Account Mastery"
  }
];

export const caseStudies = [
  {
    id: "case-uk-gap",
    title: "Overcoming a 4-Year Study Gap for UK Tier-4 Master's",
    student: "Imran H.",
    destination: "United Kingdom 🇬🇧",
    university: "University of Chester",
    program: "MSc Management with Placement",
    challenge: "4-year employment gap after Bachelor's without formal tax slips; initial fear of CAS rejection.",
    solution: "Audited bank statements, structured verified employer letters with notarized salary certificates, and wrote a career-progression SOP aligning his past experience with the UK curriculum.",
    result: "CAS issued in 5 business days. UK Priority Visa approved in 24 hours.",
    timeline: "24 Hours Visa Decision",
    icon: "ShieldCheck"
  },
  {
    id: "case-aus-gs",
    title: "Navigating Australia's Strict Genuine Student (GS) Test with Spouse",
    student: "Kamrul & Sadia",
    destination: "Australia 🇦🇺",
    university: "Deakin University, Melbourne",
    program: "Master of Business Analytics",
    challenge: "Dual applicants (primary + dependent spouse), strict GS requirement, and regional economic ties scrutiny.",
    solution: "Crafted an 8-page comprehensive GS justification document highlighting home country asset ties, post-study ROI in Dhaka's fintech sector, and clean 3-month funds audit.",
    result: "Subclass 500 Visa granted for both primary and spouse in 18 days without any interview call.",
    timeline: "18 Days (No Interview)",
    icon: "GraduationCap"
  },
  {
    id: "case-usa-moi",
    title: "US F-1 Visa with Medium of Instruction (MOI) & $12k Scholarship",
    student: "Tanzeem A.",
    destination: "USA 🇺🇸",
    university: "Western Illinois University",
    program: "MS in Computer Science",
    challenge: "Applying without GRE and using university MOI letter instead of IELTS, requiring a strong consular defense.",
    solution: "1-on-1 embassy interview preparation with 5 mock sessions focusing on funding clarity, non-immigrant intent, and academic readiness.",
    result: "F-1 Visa approved at US Embassy Dhaka with $12,000 tuition scholarship grant.",
    timeline: "Approved at First Attempt",
    icon: "Award"
  }
];
