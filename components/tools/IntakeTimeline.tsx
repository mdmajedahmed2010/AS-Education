'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Printer,
  Bell,
  MessageCircle
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

interface IntakeMilestone {
  month: string;
  title: string;
  description: string;
  badge: string;
  urgent: boolean;
}

const INTAKES_DATA: Record<string, { label: string; months: string; countdownText: string; milestones: IntakeMilestone[] }> = {
  september: {
    label: 'September 2026 / Fall (Major Intake)',
    months: 'Application Window: Feb – June 2026',
    countdownText: 'CAS Deadlines Approaching: Final Call for Transcripts',
    milestones: [
      { month: 'Feb – March', title: 'Profile Assessment & University Shortlisting', description: 'Gather academic transcripts, select top 3 universities, and prepare SOP.', badge: 'Foundation', urgent: false },
      { month: 'April – May', title: 'English Test / MOI & Conditional Offer Letters', description: 'Submit university applications and secure conditional offers within 7–14 days.', badge: 'Offer Letter', urgent: false },
      { month: 'June – July', title: 'Deposit Payment & 28-Day Bank Solvency Start', description: 'Pay tuition deposit to issue CAS/CoE/I-20 and maintain required bank funds for 28 days.', badge: 'Crucial Stage', urgent: true },
      { month: 'July – August', title: 'Embassy Visa Filing & Biometrics at VFS Dhaka', description: 'Submit visa file, complete IOM medical (for UK), and attend biometrics appointment.', badge: 'Visa Filing', urgent: true },
      { month: 'September', title: 'Visa Grant, Forex Card & Airport Departure', description: 'Receive visa sticker/eVisa, open student banking file, and fly to destination campus.', badge: 'Arrival', urgent: false },
    ],
  },
  january: {
    label: 'January 2027 / Spring (Fast Intake)',
    months: 'Application Window: July – Nov 2026',
    countdownText: 'Admissions Open: 1-Year Fast-Track Masters Available',
    milestones: [
      { month: 'July – August', title: 'Program Selection & MOI Letter Attestation', description: 'Select 1-year Masters or Bachelors programs open for January/Spring semester.', badge: 'Planning', urgent: false },
      { month: 'September – Oct', title: 'Direct Application & CAS/CoE Processing', description: 'Receive unconditional admission letter and finalize initial tuition deposit.', badge: 'Admission', urgent: false },
      { month: 'Nov – Dec', title: '28-Day Bank Maintenance & Visa Biometrics', description: 'Submit financial statement and complete embassy biometric submission in Dhaka.', badge: 'Embassy Action', urgent: true },
      { month: 'January', title: 'Orientation & Class Commencement', description: 'Pre-departure briefing, student accommodation check-in, and class enrollment.', badge: 'Orientation', urgent: false },
    ],
  },
  may: {
    label: 'May 2026 / Summer (Specialized Intake)',
    months: 'Application Window: Dec 2025 – March 2026',
    countdownText: 'Fast-Track Track: Super Priority Visa (24h–5 Days)',
    milestones: [
      { month: 'Dec – Jan', title: 'Fast-Track University File Submission', description: 'Immediate application submission for open May/Summer intake universities in UK & Europe.', badge: 'Priority', urgent: false },
      { month: 'Feb – March', title: 'CAS Issuance & 28-Day Solvency Holding', description: 'Expedited CAS issuance and financial sponsorship balance verification.', badge: 'Fast Track', urgent: true },
      { month: 'April', title: 'Super Priority Visa Submission (24h–5 Days)', description: 'Fast-track visa processing through VFS Global Dhaka for on-time class arrival.', badge: 'Urgent', urgent: true },
      { month: 'May', title: 'Summer Semester Start', description: 'Commence studies with smaller class sizes and immediate part-time work eligibility.', badge: 'Welcome', urgent: false },
    ],
  },
};

export default function IntakeTimeline() {
  const { openModal } = useConsultationModal();
  const [activeIntake, setActiveIntake] = useState<'september' | 'january' | 'may'>('september');

  const intake = INTAKES_DATA[activeIntake];

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppReminder = () => {
    const text = `*AS Education - Intake Deadline Reminder Request*
🎯 Target Intake: ${intake.label}
🗓️ Window: ${intake.months}

Please add my file to the priority admissions pipeline for this intake.`;
    window.open(`https://wa.me/8801927353600?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-xs font-sans space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
            Milestone Engine
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Intake Timeline & Deadline Planner
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Never miss a CAS deadline, 28-day bank freeze, or VFS Dhaka biometric appointment window.
          </p>
        </div>

        {/* Intake Switcher */}
        <div className="inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200/80 self-start md:self-auto">
          {(['september', 'january', 'may'] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveIntake(key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeIntake === key
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {key === 'september' ? 'Sep 2026 (Major)' : key === 'january' ? 'Jan 2027 (Spring)' : 'May 2026 (Summer)'}
            </button>
          ))}
        </div>
      </div>

      {/* Intake Status Banner */}
      <div className="p-6 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">
            ● Active Intake Pipeline
          </span>
          <h4 className="text-lg sm:text-xl font-bold text-white">
            {intake.label}
          </h4>
          <p className="text-xs text-slate-400 font-medium">
            {intake.months} • {intake.countdownText}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
            title="Print Roadmap"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            onClick={handleWhatsAppReminder}
            className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Set Reminder</span>
          </button>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="space-y-4 pt-2">
        {intake.milestones.map((m, idx) => (
          <div key={idx} className="flex items-start gap-4 group">
            
            {/* Step Number & Connector */}
            <div className="flex flex-col items-center shrink-0">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold shadow-xs ${
                m.urgent ? 'bg-amber-500 text-white ring-4 ring-amber-100' : 'bg-slate-900 text-white'
              }`}>
                0{idx + 1}
              </div>
              {idx < intake.milestones.length - 1 && (
                <div className="w-0.5 h-14 bg-slate-200 my-1 group-hover:bg-brand-blue transition-colors" />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-1 p-5 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-brand-blue transition-all space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                  📅 {m.month}
                </span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                  m.urgent ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-white text-slate-700 border-slate-200'
                }`}>
                  {m.badge}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {m.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {m.description}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-slate-500 font-medium">
          Ready to fast-track your admission for {intake.label.split(' ')[0]}?
        </span>
        <button
          onClick={() => openModal({ service: `Admissions for ${intake.label}` })}
          className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-md text-center"
        >
          Begin Free Application Process &rarr;
        </button>
      </div>

    </div>
  );
}
