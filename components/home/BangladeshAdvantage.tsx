'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheck, BookOpen, Building2, Users,
  MapPin, Clock, CheckCircle2, ArrowRight, Phone, Sparkles
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    tag: 'Zero File Fee',
    number: '01',
    title: '100% Zero File Opening Fee',
    highlight: 'Unlike other agencies in Dhaka',
    desc: 'While others charge ৳15,000–৳40,000 upfront, we charge zero file opening or consultation fees — before or after admission.',
    points: ['No upfront agency charges', 'No consultation fees ever', 'Direct partner university model'],
  },
  {
    icon: BookOpen,
    tag: 'No IELTS (MOI)',
    number: '02',
    title: 'MOI IELTS Waiver Admissions',
    highlight: 'Study abroad without IELTS',
    desc: 'Direct university admissions with Medium of Instruction (MOI) certificates from NSU, BRAC, IUB, EWU, DIU, DU and recognized institutions.',
    points: ['Recognized institution MOI', 'Direct CAS & I-20 issuance', 'UK, Australia & Malaysia pathways'],
  },
  {
    icon: Building2,
    tag: 'Bank Audit',
    number: '03',
    title: '28-Day Bank Solvency Protocol',
    highlight: 'Bangladesh Bank compliant',
    desc: 'Structured pre-submission guidance on funds verification, sponsor affidavits, and 28-day holding statements from top commercial banks.',
    points: ['Sponsor affidavit templates', '28-day holding verification', 'Scheduled bank compliance'],
  },
  {
    icon: Users,
    tag: 'Family Visas',
    number: '04',
    title: 'Spouse & Dependent Work Rights',
    highlight: 'Full-time work permission',
    desc: 'Expert counseling for UK Master by Research/PhD and Australia Subclass 500 unrestricted full-time spouse working permissions.',
    points: ['UK dependent work rights', 'Australia spouse 500 visa', 'Complete joint application assist'],
  },
];

export default function BangladeshAdvantage() {
  const { openModal } = useConsultationModal();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans">
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
            Designed for Bangladeshi Students & Families
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Strategic Advantages.<br />
            <span className="text-slate-300 font-medium">For Bangladeshi Students.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminating upfront agency fees, solving IELTS constraints, and providing rigorous 28-day bank fund audits.
          </p>
        </motion.div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 hover:bg-slate-100/90 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {adv.number}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-slate-200/60 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {adv.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors duration-300 mb-2">
                    {adv.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">
                    {adv.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 space-y-2 mt-auto">
                  {adv.points.map((pt, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Office Visit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-[2.5rem] bg-slate-950 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                Dhaka Principal Head Office
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Level 1, 67/B, Dhanmondi 15/A (New 8/A), Satmasjid Road, Dhaka-1209
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" /> Sat–Thu: 10:00 AM – 6:30 PM
                </span>
                <span>•</span>
                <span>Opposite Ibn Sina Hospital</span>
                <span>•</span>
                <span className="text-white font-bold">Walk-in Consultation Available</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => openModal()}
                className="px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-sm font-bold transition-all shadow-md active:scale-95 text-center"
              >
                Book In-Person Session
              </button>
              <a
                href="tel:01927353600"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>+880 1927-353600</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
