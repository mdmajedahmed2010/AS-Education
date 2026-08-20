'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Zap, GraduationCap, Award, Users, FileText, Landmark, ArrowRight, CheckCircle2
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

const SERVICES = [
  {
    icon: Zap,
    tag: '24h Decision',
    title: 'UK Super Priority & 1-Day Visa',
    desc: 'Specialized fast-track CAS processing and priority visa submission for UK university admissions with zero file fees.',
    points: ['Fast-track unconditional offer & CAS', 'IELTS waiver facilitation via university MOI', 'Priority VFS Dhaka appointment booking'],
  },
  {
    icon: GraduationCap,
    tag: '200+ Institutions',
    title: 'Global University Selection',
    desc: 'Precision university and program matching based on your previous CGPA, study gap, tuition budget, and career goals.',
    points: ['Profile audit & 3 best-fit university options', 'Tuition budget & living expense breakdown', 'Direct partner submission with zero fees'],
  },
  {
    icon: Award,
    tag: 'Up to 50% Waiver',
    title: 'Merit Scholarship Advisory',
    desc: 'Targeted scholarship application support to secure substantial tuition fee reductions for international students.',
    points: ['Early-bird scholarship deadline tracking', 'Vice-Chancellor merit grant application', 'Deposit discount negotiations'],
  },
  {
    icon: FileText,
    tag: 'Turnitin Verified',
    title: 'SOP & Motivation Letter Drafting',
    desc: 'Comprehensive SOP editing, structure-optimization, and credibility interview coaching tailored to university criteria.',
    points: ['1-on-1 academic motivation structuring', 'Grammar & originality review', 'Pre-CAS mock interview drills'],
  },
  {
    icon: Users,
    tag: 'Family Visas',
    title: 'Spouse & Dependent Visa Filing',
    desc: 'Expert documentation for accompanying spouses with unrestricted full-time work permits in the UK, Australia, and Canada.',
    points: ['Relationship proof & marriage verification', 'Spouse full-time work permit application', 'Combined maintenance fund calculation'],
  },
  {
    icon: Landmark,
    tag: 'Compliance Audit',
    title: '28-Day Solvency & Bank Audit',
    desc: 'Bangladesh Bank approved student file management, 28-day maintenance funds guidance, and student housing assistance.',
    points: ['28-day holding bank statement audit', 'Student Forex file opening assistance', 'On-campus & private accommodation support'],
  },
];

export default function BentoGrid() {
  const { openModal } = useConsultationModal();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            End-to-End Admissions Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Comprehensive Services.<br />
            <span className="text-slate-300 font-medium">From Profile to Placement.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Every service is delivered with total transparency, zero hidden charges, and continuous mentorship from British Council certified advisors.
          </p>
        </motion.div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 hover:bg-slate-100/90 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-200/60 text-slate-700 uppercase tracking-wider">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors duration-300 mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal text-slate-500 leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pb-6 border-b border-slate-200/60">
                    {svc.points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    ৳0 Agency Fee
                  </span>
                  <button
                    onClick={() => openModal()}
                    className="text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Get Started</span>
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
