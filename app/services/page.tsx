'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Building, 
  Coins, 
  FileText, 
  HeartHandshake, 
  Plane, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function ServicesPage() {
  const { openModal } = useConsultationModal();

  const DETAILED_SERVICES = [
    {
      id: 'uk-priority',
      title: 'UK Super Priority & Fast-Track Admissions',
      tag: '24-Hour Approval Track',
      icon: Zap,
      description: 'Expedited CAS processing, fast-track unconditional offer letters, and super priority visa submissions for UK universities.',
      features: [
        'Priority CAS issuance in 48–72 hours',
        'IELTS waiver facilitation via university-approved MOI',
        'Credibility and pre-CAS mock interview preparation',
        'VFS Dhaka Super Priority 24-hour visa guidance'
      ],
    },
    {
      id: 'course-matching',
      title: 'Global University & Program Selection',
      tag: '200+ Institutions',
      icon: Building,
      description: 'Holistic profile appraisal matching your academic history, study gap, and financial budget with top accredited global universities.',
      features: [
        'Detailed review of previous CGPA, IELTS/MOI, and budget',
        'Shortlist of 3–5 high-acceptance partner universities',
        'Direct university liaison with zero file opening fees',
        'Fast-track offer letter processing'
      ],
    },
    {
      id: 'scholarship',
      title: 'Merit & Need-Based Scholarship Advisory',
      tag: 'Up to £10,000 Grants',
      icon: Coins,
      description: 'Strategic scholarship applications to secure maximum tuition discounts and financial grants for international students.',
      features: [
        'Identification of early-bird and merit scholarships',
        'Vice-Chancellor grant essay & portfolio review',
        'Automatic discounts negotiated on initial deposits',
        'Country-specific bursary and grant matching'
      ],
    },
    {
      id: 'sop-audit',
      title: 'Statement of Purpose (SOP) Drafting',
      tag: '100% Original Content',
      icon: FileText,
      description: 'Professional academic SOP and personal statement structuring tailored to university and visa compliance criteria.',
      features: [
        'One-on-one brainstorming on academic motivations',
        'Turnitin plagiarism check and structural refinement',
        'Clear explanation of career progression and study gap',
        'Alignment with UKVI, Genuine Student (GS), and SDS rules'
      ],
    },
    {
      id: 'spouse-visa',
      title: 'Spouse & Dependent Visa Filing',
      tag: 'Full-Time Work Rights',
      icon: HeartHandshake,
      description: 'Comprehensive legal documentation for married students seeking full-time work authorization for their accompanying spouses.',
      features: [
        'Marriage verification and genuine relationship dossier',
        'UK Master by Research/PhD and Australia Subclass 500 filing',
        'Combined financial sponsorship balance calculation',
        'Child schooling and accommodation advisory'
      ],
    },
    {
      id: 'pre-departure',
      title: '28-Day Bank Solvency & Pre-Departure Briefing',
      tag: 'Bank Audit & Logistics',
      icon: Plane,
      description: 'Complete assistance with 28-day maintenance funds auditing, Bangladesh Bank student file opening, and overseas transition.',
      features: [
        '28-day holding bank statement compliance audit',
        'Authorized scheduled commercial bank file opening',
        'Flight ticketing and international student baggage allowance',
        'On-campus and verified private student housing booking'
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Editorial Hero Header */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Full-Spectrum Higher Education Solutions
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Advisory Solutions.<br />
                <span className="text-slate-300 font-medium">Transparent & Fee-Free.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Every service is delivered with 100% transparency, zero file opening charges, and direct guidance from British Council certified counselors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 hover:bg-slate-100/90 transition-all duration-500 cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200/80">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors duration-300 mb-3">
                      {srv.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2.5 pb-6 border-b border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Included Deliverables:
                      </span>
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      0৳ File Opening Fee
                    </span>

                    <button
                      onClick={() => openModal({ service: srv.title })}
                      className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs"
                    >
                      Book Service &rarr;
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
