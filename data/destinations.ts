export interface Destination {
  id: string;
  name: string;
  slug: string;
  flag: string;
  tagline: string;
  heroImage: string;
  avgTuition: string;
  avgLiving: string;
  postStudyWork: string;
  intakes: string[];
  ieltsRequirement: string;
  ieltsWaiver: boolean;
  studyGapAcceptance: string;
  spouseVisa: string;
  visaSuccessRate: string;
  keyBenefits: string[];
  popularUniversities: string[];
  description: string;
  admissionRequirements: {
    undergraduate: string[];
    postgraduate: string[];
  };
}

export const destinations: Destination[] = [
  {
    id: "uk",
    name: "United Kingdom (UK)",
    slug: "study-in-uk",
    flag: "🇬🇧",
    tagline: "World-Class 1-Year Masters, 2-Year PSW & 1-Day Priority Visa",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "£12,000 - £18,000 / year",
    avgLiving: "£9,207 - £12,006 / year (Outside London)",
    postStudyWork: "2 Years Graduate Route (3 Years for PhD)",
    intakes: ["January / February", "May / June", "September / October"],
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 54-59 / MOI Accepted",
    ieltsWaiver: true,
    studyGapAcceptance: "Up to 5-8 years with valid job experience",
    spouseVisa: "Allowed for Research/PhD & select Master programs",
    visaSuccessRate: "99.2%",
    keyBenefits: [
      "1-Year Fast Track Masters Degree (Save 1 Year Living Cost)",
      "2-Year Post Study Work (PSW) Visa for international students",
      "IELTS Waiver available with MOI (Medium of Instruction) / HSC English",
      "Fast CAS & 1-day Priority/Super Priority Visa approval available",
      "Scholarships up to £2,000 - £5,000 for Bangladeshi students",
      "Top Universities in London, Greenwich, Hertfordshire, LSBU, Bedfordshire"
    ],
    popularUniversities: [
      "University of Greenwich (London)",
      "London South Bank University (LSBU)",
      "University of Hertfordshire",
      "University of Bedfordshire",
      "Coventry University",
      "University of East London"
    ],
    description: "The UK is the top destination for Bangladeshi students seeking prestigious degrees with high ROI. With AS Education's direct university partnerships, students can secure admissions with MOI and receive CAS within record time.",
    admissionRequirements: {
      undergraduate: [
        "HSC with minimum GPA 3.50 - 4.00 or A-Levels",
        "IELTS 6.0 (no band less than 5.5) or internal university English test / MOI",
        "Valid Passport, NID & Academic Certificates",
        "Statement of Purpose (SOP) tailored for UKVI"
      ],
      postgraduate: [
        "Bachelor Degree with minimum CGPA 2.50+",
        "IELTS 6.5 (no band less than 5.5) or MOI (Medium of Instruction)",
        "Updated CV & Professional Experience Reference Letters",
        "Strong Academic & Career SOP"
      ]
    }
  },
  {
    id: "australia",
    name: "Australia",
    slug: "study-in-australia",
    flag: "🇦🇺",
    tagline: "High Quality of Life, Subclass 500 Visa & Full Work Rights for Spouse",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "AUD $22,000 - $36,000 / year",
    avgLiving: "AUD $24,500 / year",
    postStudyWork: "2 - 4 Years Temporary Graduate Visa (Subclass 485)",
    intakes: ["February / March", "July", "November"],
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 50 - 58",
    ieltsWaiver: false,
    studyGapAcceptance: "Up to 3-5 years with genuine justification & tax docs",
    spouseVisa: "Allowed with Full Work Rights for Masters students",
    visaSuccessRate: "97.5%",
    keyBenefits: [
      "Top 100 QS Ranked World Universities",
      "Substantial Part-time work opportunities (48 hrs / fortnight)",
      "Generous regional study extensions for PSW",
      "Full work rights for accompanying spouse of Master's students",
      "High minimum wage & safe multicultural lifestyle"
    ],
    popularUniversities: [
      "Western Sydney University",
      "Deakin University",
      "Victoria University",
      "University of Wollongong",
      "Swinburne University of Technology"
    ],
    description: "Australia offers world-class education and lucrative career pathways. AS Education provides comprehensive Genuine Student (GS) statement drafting and bank solvency auditing.",
    admissionRequirements: {
      undergraduate: [
        "HSC minimum GPA 4.0+ or Foundation Year completion",
        "IELTS 6.0 (no band less than 6.0) or PTE 50+",
        "Genuine Student (GS) Financial Matrix and Proof of Funds"
      ],
      postgraduate: [
        "Recognized 4-year Bachelor's degree (CGPA 2.75+)",
        "IELTS 6.5 (no band less than 6.0) or PTE 58+",
        "GS Statement detailing career progression and ties to Bangladesh"
      ]
    }
  },
  {
    id: "canada",
    name: "Canada",
    slug: "study-in-canada",
    flag: "🇨🇦",
    tagline: "Affordable High-Tech Education, Co-op Programs & 3-Year PGWP",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "CAD $16,000 - $28,000 / year",
    avgLiving: "CAD $20,635 / year (GIC Proof)",
    postStudyWork: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    intakes: ["January (Winter)", "May (Spring/Summer)", "September (Fall)"],
    ieltsRequirement: "IELTS 6.0 - 6.5 (Academic) / PTE 60+",
    ieltsWaiver: false,
    studyGapAcceptance: "Up to 5 years with valid professional proof",
    spouseVisa: "Open Work Permit available for eligible university programs",
    visaSuccessRate: "96.8%",
    keyBenefits: [
      "Co-op Work terms integrated into study programs",
      "Direct pathway to Permanent Residency (PR) via Express Entry / PNP",
      "Up to 3 Years PGWP after completing a 2-year program",
      "World-class public colleges and research universities",
      "Safe, welcoming, and immigrant-friendly society"
    ],
    popularUniversities: [
      "University of Windsor",
      "Brock University",
      "Conestoga College",
      "Seneca Polytechnic",
      "Fanshawe College"
    ],
    description: "Canada combines world-class tech and business programs with straightforward post-graduation work opportunities. AS Education assists with CAQ, GIC payment, and SDS visa filing.",
    admissionRequirements: {
      undergraduate: [
        "HSC with minimum 65%+ in academic subjects",
        "IELTS 6.0 overall with no band under 6.0 (SDS standard)",
        "GIC (Guaranteed Investment Certificate) of CAD $20,635"
      ],
      postgraduate: [
        "4-year Bachelor's degree (minimum 60-70% / CGPA 2.8+)",
        "IELTS 6.5 overall (minimum 6.0 in each module)",
        "Comprehensive Statement of Purpose aligned with career goals"
      ]
    }
  },
  {
    id: "malaysia",
    name: "Malaysia",
    slug: "study-in-malaysia",
    flag: "🇲🇾",
    tagline: "Low Cost UK/Australia Dual Degree, Halal Lifestyle & Fast EMGS eVAL",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "$3,500 - $7,000 / year (4-8 Lakh BDT)",
    avgLiving: "$3,000 - $4,500 / year (3-5 Lakh BDT)",
    postStudyWork: "Credit Transfer & Direct UK/Australia pathway",
    intakes: ["January", "April", "July", "September", "November"],
    ieltsRequirement: "IELTS 5.0 - 5.5 or MOI / English Proficiency Letter",
    ieltsWaiver: true,
    studyGapAcceptance: "Up to 8-10 years accepted easily",
    spouseVisa: "Spouse & Children visa available for Masters/PhD",
    visaSuccessRate: "99.8%",
    keyBenefits: [
      "Extremely affordable tuition (4-8 Lakh BDT/yr) & low cost of living",
      "Earn UK (De Montfort, Staffordshire) / Australia Dual Degrees",
      "Credit transfer opportunities to UK, Canada, Australia",
      "Almost 100% Visa Approval rate with EMGS approval",
      "Halal, friendly, and culturally comfortable environment"
    ],
    popularUniversities: [
      "Asia Pacific University (APU)",
      "Taylor's University",
      "UCSI University",
      "City University Malaysia",
      "Infrastructure University Kuala Lumpur (IUKL)"
    ],
    description: "Malaysia is the premier low-cost Asian education hub. Bangladeshi students can obtain British and Australian degrees at 1/3rd the cost. AS Education handles EMGS clearance and VAL rapidly.",
    admissionRequirements: {
      undergraduate: [
        "HSC minimum GPA 2.50+ or O/A Levels",
        "Passport with minimum 18 months validity",
        "EMGS Medical Examination clearance"
      ],
      postgraduate: [
        "Bachelor's degree with minimum CGPA 2.25+",
        "Academic certificates, transcripts & CV",
        "EMGS Visa Approval Letter (VAL)"
      ]
    }
  },
  {
    id: "europe",
    name: "Europe & Schengen (Finland, Cyprus, Greece)",
    slug: "study-in-europe",
    flag: "🇪🇺",
    tagline: "Free Travel Across 29 Schengen Countries & 50-100% Scholarships",
    heroImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "€3,000 - €9,000 / year",
    avgLiving: "€6,000 - €9,000 / year",
    postStudyWork: "1 - 2 Years Job Search Visa (Finland/Germany)",
    intakes: ["February (Spring)", "September (Autumn)"],
    ieltsRequirement: "IELTS 5.5 - 6.5 or MOI depending on country",
    ieltsWaiver: true,
    studyGapAcceptance: "Up to 6-8 years accepted",
    spouseVisa: "Family reunification allowed in Finland & key EU states",
    visaSuccessRate: "97.0%",
    keyBenefits: [
      "Free travel across 29 Schengen zone countries",
      "Scholarships up to 50% - 100% tuition waiver in Finland",
      "Affordable options in Cyprus, Greece, Malta, and Hungary",
      "Part-time work permitted (30 hours/week in Finland)",
      "High post-graduation employment rate in European tech sectors"
    ],
    popularUniversities: [
      "Centria University of Applied Sciences (Finland)",
      "LAB University of Applied Sciences (Finland)",
      "University of Nicosia (Cyprus)",
      "Webster University Athens (Greece)",
      "Budapest Metropolitan University (Hungary)"
    ],
    description: "Studying in Europe offers high quality of life, free mobility across the Schengen zone, and lucrative tech careers in countries like Finland, Greece, Cyprus, and Hungary.",
    admissionRequirements: {
      undergraduate: [
        "HSC with minimum GPA 3.0+ or equivalent",
        "IELTS 5.5-6.0 / Online entrance exam (Finland UAS exam)",
        "Financial solvency proof in student/parent bank account"
      ],
      postgraduate: [
        "Bachelor's degree with CGPA 2.50+",
        "IELTS 6.0-6.5 or MOI",
        "Relevant professional background & motivational letter"
      ]
    }
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    slug: "study-in-new-zealand",
    flag: "🇳🇿",
    tagline: "Top Ranked Universities, Safe Environment & 3-Year Post Study Work",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "NZD $22,000 - $34,000 / year",
    avgLiving: "NZD $20,000 / year",
    postStudyWork: "Up to 3 Years Post-Study Work Visa",
    intakes: ["February", "July", "November"],
    ieltsRequirement: "IELTS 6.0 - 6.5 / PTE 50 - 58",
    ieltsWaiver: false,
    studyGapAcceptance: "Up to 4-5 years with relevant experience",
    spouseVisa: "Work visa for spouse of Master's students",
    visaSuccessRate: "96.5%",
    keyBenefits: [
      "All 8 New Zealand Universities ranked in QS Top 500",
      "Safe, scenic, and peaceful study destination",
      "Up to 3 Years Post Study Work Visa",
      "Full work rights for Master's student spouse",
      "High demand for IT, Healthcare, and Engineering graduates"
    ],
    popularUniversities: [
      "University of Auckland",
      "Auckland University of Technology (AUT)",
      "University of Canterbury",
      "Massey University",
      "Waikato Institute of Technology (Wintec)"
    ],
    description: "New Zealand offers world-recognized qualifications in a stunning, secure environment. Ideal for students seeking high living standards and post-study career opportunities.",
    admissionRequirements: {
      undergraduate: [
        "HSC with minimum GPA 4.0+ or A-Levels",
        "IELTS 6.0 (no band less than 5.5) or PTE 50+",
        "Financial proof for 1 year tuition + NZD $20,000 living"
      ],
      postgraduate: [
        "Bachelor's degree with CGPA 2.80+",
        "IELTS 6.5 (no band less than 6.0) or PTE 58+",
        "Comprehensive Statement of Purpose"
      ]
    }
  },
  {
    id: "usa",
    name: "United States (USA)",
    slug: "study-in-usa",
    flag: "🇺🇸",
    tagline: "Global Tech Hub, Ivy League Prestige & 3-Year STEM OPT Work Rights",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
    avgTuition: "$18,000 - $35,000 / year",
    avgLiving: "$12,000 - $18,000 / year",
    postStudyWork: "1 Year OPT (Up to 3 Years for STEM Programs)",
    intakes: ["Spring (Jan/Feb)", "Fall (Aug/Sep)"],
    ieltsRequirement: "IELTS 6.5 / TOEFL 80 / Duolingo 110+",
    ieltsWaiver: true,
    studyGapAcceptance: "Flexible with solid academic & interview profile",
    spouseVisa: "F-2 Dependent Visa (Children can study for free)",
    visaSuccessRate: "95.0%",
    keyBenefits: [
      "3-Year STEM OPT extension for Engineering, CS, Math, and Data",
      "Generous merit scholarships and Assistantships (TA/RA)",
      "World's largest network of multinational employers (FAANG, Fortune 500)",
      "Opportunity for on-campus employment from day one",
      "Flexible curriculum and double-major options"
    ],
    popularUniversities: [
      "University of North Texas",
      "Trine University",
      "Wichita State University",
      "Kent State University",
      "University of South Florida"
    ],
    description: "The United States is the global leader in higher education and technological innovation. With STEM degree holders eligible for 36 months of OPT work authorization, you gain invaluable experience in the world's most dynamic economy.",
    admissionRequirements: {
      undergraduate: [
        "HSC with strong GPA (3.8+) or SAT scores (optional in many universities)",
        "IELTS 6.0-6.5 / Duolingo 105+ / TOEFL 75+",
        "Bank Solvency covering 1 year of I-20 expenses ($28K - $40K)"
      ],
      postgraduate: [
        "Bachelor's degree with CGPA 2.8+ (GRE/GMAT mostly waived)",
        "IELTS 6.5 / Duolingo 115+ / TOEFL 80+",
        "2-3 Letters of Recommendation (LOR) and strong SOP"
      ]
    }
  }
];
