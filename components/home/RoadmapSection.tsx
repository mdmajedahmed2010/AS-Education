'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Compass, FileText, ShieldCheck, Award, Sparkles, Plane,
  CheckCircle2, ArrowRight, Clock
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

const STEPS = [
  {
    num: '01', timeline: 'Day 1–2',
    title: 'Free Profile Assessment & Audit',
    desc: 'Our certified counselors review your academic background, IELTS/MOI status, and budget to match you with top universities.',
    keyPoints: ['IELTS / MOI Waiver Check', 'Top 3–5 University Matches', '100% Free Initial Assessment'],
    icon: Compass,
  },
  {
    num: '02', timeline: 'Week 1–2',
    title: 'Shortlisting & Fast-Track Application',
    desc: 'We structure your Statement of Purpose (SOP) and submit direct university applications for offer letters in 48–72 hours.',
    keyPoints: ['Direct Partner Offer in 48–72h', 'Merit Scholarship Applications', '0৳ File Opening Fee'],
    icon: FileText,
  },
  {
    num: '03', timeline: 'Week 2–4',
    title: 'Interview Coaching & CAS / CoE Release',
    desc: 'Mock credibility interviews and rapid release of your CAS (UK) or CoE (Australia) following deposit confirmation.',
    keyPoints: ['Mock Credibility Interviews', 'Official CAS / CoE Release', 'Financial Compliance Audit'],
    icon: ShieldCheck,
  },
  {
    num: '04', timeline: 'Week 4–6',
    title: 'Visa File Preparation & Biometrics',
    desc: 'Complete sponsorship documentation, medical clearance, and bank solvency dossier followed by priority VFS/TLS booking.',
    keyPoints: ['24h Super Priority Visa Options', 'Biometric & Medical Guidance', '28-Day Bank Statement Audit'],
    icon: Award,
  },
  {
    num: '05', timeline: 'Week 6–8',
    title: 'Visa Grant & Spouse Work Permit',
    desc: 'Collection of your official student visa grant and simultaneous filing of spouse full-time work permits.',
    keyPoints: ['Embassy Visa Grant Stamping', 'Spouse Work Permit Issuance', 'Passport Collection Support'],
    icon: Sparkles,
  },
  {
    num: '06', timeline: 'Pre-Departure',
    title: 'Pre-Departure Briefing & Housing',
    desc: 'Comprehensive travel briefings, forex card setup, student accommodation booking, and airport reception.',
    keyPoints: ['Student Housing Assistance', 'Student Forex Card Setup', 'Global Alumni Network'],
    icon: Plane,
  },
];

export default function RoadmapSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const { openModal } = useConsultationModal();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleStart = () => {
    if (onOpenModal) onOpenModal();
    else openModal();
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Structured Admissions Pathway
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Admissions Roadmap.<br />
            <span className="text-slate-300 font-medium">6 Steps to Visa Grant.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Over 1,200+ students have secured global university admissions following our structured framework.
          </p>
        </motion.div>

        {/* Minimalist Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 hover:bg-slate-100/90 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {s.num}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-200/60 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {s.timeline}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors duration-300 mb-3">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal text-slate-500 leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  <div className="space-y-2 pb-6 border-b border-slate-200/60">
                    {s.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Stage {s.num} / 06
                  </span>
                  <button
                    onClick={handleStart}
                    className="text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Start Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
