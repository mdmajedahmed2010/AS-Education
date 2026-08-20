export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "ielts-waiver",
    category: "Requirements",
    question: "Is it possible to study abroad without IELTS?",
    answer: "Yes. Many of our partner universities in the UK, Malaysia, Cyprus, Greece, and selected European destinations accept alternative English proofs. These include a Medium of Instruction (MOI) certificate from your previous degree, strong English grades in secondary education, or university internal English tests."
  },
  {
    id: "study-gap",
    category: "Eligibility",
    question: "Can I apply if I have a study gap in my academic history?",
    answer: "Absolutely. Undergraduate programs typically accept study gaps of 2 to 4 years, while postgraduate Master's programs routinely accept gaps of 5 to 8+ years when supported by verifiable employment experience letters, professional tax certificates, or salary records—all of which our expert advisory team helps you document."
  },
  {
    id: "bank-solvency",
    category: "Financials",
    question: "Who can sponsor my financial solvency requirements?",
    answer: "Primary acceptable sponsors include parents, siblings, or the student themselves. Select countries also permit official educational bank loans or first-blood relatives. Our compliance team verifies your bank statement duration (e.g. 28-day rule for the UK, GIC for Canada) to guarantee zero embassy rejections."
  },
  {
    id: "consultancy-fee",
    category: "Services",
    question: "Does AS Education charge any upfront file opening fees?",
    answer: "No. AS Education provides 100% transparent services with zero upfront file opening fees. Initial profile evaluations, university shortlisting, and admission application processing are completely complimentary."
  },
  {
    id: "spouse-visa",
    category: "Visa & Family",
    question: "Which countries permit accompanying spouses with full work rights?",
    answer: "Australia allows full unrestricted work rights for spouses of Master's and PhD students under the Subclass 500 visa. Canada, Malaysia, and select European nations (such as Finland) also offer dependent visa pathways. In the UK, spouse visas are available for research-based Master's and PhD candidates."
  },
  {
    id: "dhanmondi-office",
    category: "Contact",
    question: "How can I book an in-person consultation at your Dhanmondi office?",
    answer: "You are welcome to visit our Dhanmondi Head Office (Level 1, 67/B, Dhanmondi 15/A, Satmasjid Road, Dhaka—opposite Ibn Sina Hospital) Saturday through Thursday from 10:00 AM to 6:30 PM. Alternatively, click 'Book Free Consultation' on this platform to schedule your dedicated slot."
  }
];
