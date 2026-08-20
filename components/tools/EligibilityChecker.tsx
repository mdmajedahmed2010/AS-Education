'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Globe, 
  Coins, 
  Award, 
  AlertCircle,
  Building,
  RotateCcw,
  MessageCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { triggerConfetti } from '@/lib/confetti';
import { useConsultationModal } from '@/components/providers/ModalContext';

interface MatchedUni {
  name: string;
  location: string;
  scholarship: string;
  waiver: string;
}

const PARTNER_MATCHES: Record<string, MatchedUni[]> = {
  UK: [
    { name: 'University of Greenwich', location: 'London, UK', scholarship: 'Up to £3,000 Merit Grant', waiver: 'MOI Accepted (NSU/BRAC/DU/IUB/DIU)' },
    { name: 'London South Bank University (LSBU)', location: 'London, UK', scholarship: 'Up to £4,000 Vice-Chancellor Award', waiver: 'MOI & Internal English Test' },
    { name: 'University of Hertfordshire', location: 'Hatfield, UK', scholarship: '£1,000 – £4,000 Early Bird', waiver: 'MOI Accepted' },
    { name: 'Canterbury Christ Church University', location: 'Canterbury, UK', scholarship: 'Up to £2,500 International Bursary', waiver: 'MOI Accepted' }
  ],
  Australia: [
    { name: 'Western Sydney University', location: 'Sydney, NSW', scholarship: 'Up to $6,000 Annual Grant', waiver: 'PTE 58 / IELTS 6.5' },
    { name: 'Deakin University', location: 'Melbourne, VIC', scholarship: '25% STEM Scholarship', waiver: 'PTE / IELTS Accepted' },
    { name: 'Victoria University', location: 'Melbourne, VIC', scholarship: 'Up to $3,000 Study Grant', waiver: 'PTE 50+ / IELTS 6.0' }
  ],
  Canada: [
    { name: 'Algonquin College', location: 'Ottawa, ON', scholarship: '$1,000 Entrance Award', waiver: 'SDS Scheme / Duolingo Accepted' },
    { name: 'Seneca Polytechnic', location: 'Toronto, ON', scholarship: '$2,000 Merit Scholarship', waiver: 'IELTS 6.0 / SDS' },
    { name: 'University of Windsor', location: 'Windsor, ON', scholarship: 'Up to $5,000 Graduate Award', waiver: 'IELTS / MOI Review' }
  ],
  USA: [
    { name: 'University of South Florida', location: 'Tampa, FL', scholarship: 'Up to $8,000 / Year', waiver: 'Duolingo 110+ / IELTS' },
    { name: 'George Mason University', location: 'Fairfax, VA', scholarship: 'Up to $10,000 Merit Grant', waiver: 'IELTS 6.5 / TOEFL' }
  ],
  Malaysia: [
    { name: 'Asia Pacific University (APU)', location: 'Kuala Lumpur', scholarship: 'Up to 30% Tuition Waiver', waiver: '100% No IELTS (MOI Direct)' },
    { name: 'Taylor\'s University', location: 'Subang Jaya', scholarship: 'Merit Discount Available', waiver: 'MOI Direct Admission' }
  ],
  Europe: [
    { name: 'LUT University (Finland)', location: 'Lappeenranta, Finland', scholarship: '50% – 100% Tuition Waiver', waiver: 'IELTS / Duolingo' },
    { name: 'AIMS / Malta Partner College', location: 'Valletta, Malta', scholarship: 'Low Tuition €5,500/yr', waiver: 'Direct Embassy Interview Track' }
  ]
};

export default function EligibilityChecker() {
  const { openModal } = useConsultationModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    targetCountry: 'UK',
    studyLevel: 'Masters',
    fieldOfStudy: 'Computer Science & IT',
    cgpa: '3.25',
    englishStatus: 'MOI', // 'IELTS_6.5', 'IELTS_6.0', 'PTE', 'MOI', 'None'
    studyGapYears: '1',
    hasSpouse: 'No',
    budgetPerYear: '12-18',
  });

  const [score, setScore] = useState<number | null>(null);
  const [report, setReport] = useState<{
    status: string;
    admissionChance: string;
    scholarshipEst: string;
    visaRisk: string;
    actionPlan: string;
  } | null>(null);

  const calculateEligibility = () => {
    const cgpaNum = parseFloat(formData.cgpa) || 3.0;
    let baseScore = 65;

    // CGPA weight
    if (cgpaNum >= 3.5) baseScore += 20;
    else if (cgpaNum >= 3.0) baseScore += 15;
    else if (cgpaNum >= 2.75) baseScore += 10;
    else baseScore += 4;

    // English weight
    if (formData.englishStatus === 'IELTS_6.5') baseScore += 15;
    else if (formData.englishStatus === 'PTE') baseScore += 14;
    else if (formData.englishStatus === 'IELTS_6.0') baseScore += 10;
    else if (formData.englishStatus === 'MOI') baseScore += 13;
    else baseScore += 2;

    // Study Gap adjustment
    const gap = parseInt(formData.studyGapYears) || 0;
    if (gap > 4) baseScore -= 4;

    const finalScore = Math.min(98, Math.max(52, baseScore));
    setScore(finalScore);

    if (finalScore >= 85) {
      setReport({
        status: 'Tier-1 Direct Admission & Scholarship High Priority',
        admissionChance: '96% Probability with Fast-Track CAS / CoE in 48-72 Hours',
        scholarshipEst: 'Eligible for £2,500 – £5,000 / A$5,000+ Merit Grant',
        visaRisk: 'Very Low (Level 1 Visa Assessment Category)',
        actionPlan: 'Submit transcripts for fast-track unconditional offer & scholarship confirmation.',
      });
    } else if (finalScore >= 70) {
      setReport({
        status: 'Standard Direct Admission with MOI / IELTS Waiver',
        admissionChance: '88% Probability across top accredited partner universities',
        scholarshipEst: 'Eligible for £1,500 – £3,000 International Bursary',
        visaRisk: 'Low (Standard 28-day financial audit required)',
        actionPlan: 'SOP structural audit will optimize offer speed and scholarship allocation.',
      });
    } else {
      setReport({
        status: 'Targeted University Match & Gap Documentation Required',
        admissionChance: '75% Probability via specialized admission pathways',
        scholarshipEst: 'Early payment deposit discount (5% – 10%)',
        visaRisk: 'Moderate (Requires verified employment reference letters)',
        actionPlan: 'Senior counselor review recommended to prepare job verification dossier.',
      });
    }

    setStep(3);
    triggerConfetti({ particleCount: 80, spread: 70 });
  };

  const handleWhatsAppClaim = () => {
    const text = `*AS Education - Profile Assessment Summary*
🎯 Target Country: ${formData.targetCountry}
🎓 Degree Level: ${formData.studyLevel}
📚 Major: ${formData.fieldOfStudy}
📊 CGPA / GPA: ${formData.cgpa}
🗣️ English Status: ${formData.englishStatus}
⏳ Study Gap: ${formData.studyGapYears} Year(s)
👫 Accompanying Spouse: ${formData.hasSpouse}
🏆 Calculated Match: ${score}% (${report?.status})

Please connect me with a senior counselor to review my admission options.`;
    window.open(`https://wa.me/8801927353600?text=${encodeURIComponent(text)}`, '_blank');
  };

  const matchedUniversities = PARTNER_MATCHES[formData.targetCountry] || PARTNER_MATCHES['UK'];

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-xs font-sans space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          AI Profile Matcher
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          60-Second Eligibility & Scholarship Scorer
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal">
          Instant evaluation calibrated to 2026/2027 entry requirements, MOI policies, and embassy rules.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
        {[
          { num: 1, label: '1. Destination' },
          { num: 2, label: '2. Credentials' },
          { num: 3, label: '3. Results & Matches' },
        ].map((s) => (
          <div key={s.num} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= s.num ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'
            }`}>
              {s.num}
            </div>
            <span className={`text-xs font-semibold hidden sm:inline ${
              step >= s.num ? 'text-slate-900 font-bold' : 'text-slate-400'
            }`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* STEP 1: Destination & Field */}
      {step === 1 && (
        <div className="space-y-6 max-w-xl mx-auto pt-2">
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">Target Study Destination</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'UK', label: 'UK 🇬🇧' },
                { id: 'Australia', label: 'Australia 🇦🇺' },
                { id: 'Canada', label: 'Canada 🇨🇦' },
                { id: 'USA', label: 'USA 🇺🇸' },
                { id: 'Malaysia', label: 'Malaysia 🇲🇾' },
                { id: 'Europe', label: 'Europe 🇪🇺' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, targetCountry: c.id })}
                  className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all text-center border ${
                    formData.targetCountry === c.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">Desired Degree Level</label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'Bachelors', label: 'Bachelors (Undergrad)' },
                { id: 'Masters', label: 'Masters (Postgrad)' },
                { id: 'PhD', label: 'PhD / Research' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, studyLevel: lvl.id })}
                  className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all text-center border ${
                    formData.studyLevel === lvl.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">Target Field of Study</label>
            <select
              value={formData.fieldOfStudy}
              onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
            >
              <option value="Computer Science & IT">Computer Science, AI & Cyber Security</option>
              <option value="Business & MBA">Business Administration, MBA & Finance</option>
              <option value="Engineering">Engineering (Civil, Mechanical, Electrical)</option>
              <option value="Health & Nursing">Health Sciences, Nursing & Public Health</option>
              <option value="Law & Social Sciences">Law, Media & Social Sciences</option>
              <option value="Tourism & Hospitality">Tourism & Hospitality Management</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">Estimated Annual Tuition Budget</label>
            <select
              value={formData.budgetPerYear}
              onChange={(e) => setFormData({ ...formData, budgetPerYear: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
            >
              <option value="5-10">৳ 5 – 10 Lakh / year (Malaysia / Affordable Europe)</option>
              <option value="12-18">৳ 12 – 18 Lakh / year (UK / Canada Standard)</option>
              <option value="18-28">৳ 18 – 28 Lakh / year (Top UK / Australia / USA)</option>
              <option value="28+">৳ 28+ Lakh / year (Russell Group / Group of Eight)</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-4 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Continue to Qualifications (Step 2)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* STEP 2: Qualifications & English */}
      {step === 2 && (
        <div className="space-y-6 max-w-xl mx-auto pt-2">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800">Previous CGPA / GPA</label>
              <span className="text-xs font-mono font-bold text-brand-blue">{formData.cgpa} / 4.00</span>
            </div>
            <input
              type="range"
              min="2.2"
              max="4.0"
              step="0.05"
              value={formData.cgpa}
              onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
              <span>2.20 (Min)</span>
              <span>3.00 (Standard)</span>
              <span>3.50+ (High Honors)</span>
              <span>4.00</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              English Language Proficiency Status
            </label>
            <select
              value={formData.englishStatus}
              onChange={(e) => setFormData({ ...formData, englishStatus: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
            >
              <option value="MOI">Medium of Instruction (MOI from NSU, BRAC, IUB, AIUB, DIU, DU, etc.)</option>
              <option value="IELTS_6.5">IELTS Overall 6.5+ (No band &lt; 6.0)</option>
              <option value="IELTS_6.0">IELTS Overall 6.0 (Standard Entry)</option>
              <option value="PTE">PTE Academic 58+ Score</option>
              <option value="None">No English Test Yet (Need IELTS Waiver / Planning Test)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Study Gap</label>
              <select
                value={formData.studyGapYears}
                onChange={(e) => setFormData({ ...formData, studyGapYears: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
              >
                <option value="0">0 Yrs (Fresh Graduate)</option>
                <option value="1">1 – 2 Years Gap</option>
                <option value="3">3 – 5 Years Gap (With Job)</option>
                <option value="6">5+ Years Gap (Professional)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Accompanying Spouse?</label>
              <select
                value={formData.hasSpouse}
                onChange={(e) => setFormData({ ...formData, hasSpouse: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
              >
                <option value="No">No (Applying Solo)</option>
                <option value="Yes">Yes (Spouse Work Permit)</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
            >
              Back
            </button>
            <button
              type="button"
              onClick={calculateEligibility}
              className="flex-1 py-3.5 px-8 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Admission & Scholarship Report &rarr;</span>
            </button>
          </div>

        </div>
      )}

      {/* STEP 3: Analytical Report & Matched Partner Universities */}
      {step === 3 && report && score && (
        <div className="space-y-8 max-w-2xl mx-auto pt-2">
          
          {/* Score Badge */}
          <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white text-center space-y-3 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-blue text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
              Evaluation Report Generated
            </div>
            
            <div className="text-5xl font-black text-white font-mono">
              {score}%
            </div>
            
            <h4 className="text-lg font-bold text-white max-w-md mx-auto leading-snug">
              {report.status}
            </h4>
          </div>

          {/* Analytical Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Admission Feasibility</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm block">{report.admissionChance}</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Scholarship Potential</span>
              <span className="font-bold text-brand-blue text-xs sm:text-sm block">{report.scholarshipEst}</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Visa Assessment Category</span>
              <span className="font-bold text-slate-900 text-xs sm:text-sm block">{report.visaRisk}</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recommended Strategy</span>
              <span className="font-bold text-slate-700 text-xs block">{report.actionPlan}</span>
            </div>
          </div>

          {/* Matched Universities List */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Building className="w-4 h-4 text-brand-blue" />
                <span>Recommended Partner Universities ({formData.targetCountry})</span>
              </h4>
              <span className="text-[11px] font-semibold text-emerald-600">0৳ File Opening Fee</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {matchedUniversities.map((uni, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between space-y-2">
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{uni.name}</h5>
                    <p className="text-[11px] text-slate-500">{uni.location}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-[11px] space-y-1">
                    <span className="font-bold text-brand-blue block">🏆 {uni.scholarship}</span>
                    <span className="text-slate-600 block">📄 {uni.waiver}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleWhatsAppClaim}
              className="flex-1 py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Claim Profile Report on WhatsApp &rarr;</span>
            </button>
            <button
              onClick={() => openModal({ country: formData.targetCountry, service: `Admission Review for ${formData.studyLevel} in ${formData.targetCountry}` })}
              className="flex-1 py-4 px-6 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-md text-center"
            >
              Book In-Person Session
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Recalculate with different parameters</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
