'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  Building, 
  ArrowRight
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function AboutPage() {
  const { openModal } = useConsultationModal();

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
                British Council Certified Advisory (Reg. GAL-2023)
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                About AS Education.<br />
                <span className="text-slate-300 font-medium">Restoring Trust in Admissions.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Established in Dhaka with a singular vision: to eliminate agency exploitation, offer zero file opening fees, and deliver institutional-grade university placement and visa processing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* 2-Column Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                Our Foundational Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Transparent Higher Education Consulting with Zero Hidden Costs
              </h2>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                For years, aspiring Bangladeshi students have encountered exorbitant upfront fees, ambiguous admission promises, and inaccurate visa guidance. AS Education was founded to restore absolute trust and institutional precision to international education consulting.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                As official British Council certified counselors, our advisors undergo continuous training on UKVI compliance, Australian Genuine Student (GS) criteria, and Canadian SDS immigration frameworks.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-[2rem] bg-slate-50/80 border border-slate-100">
                  <span className="text-3xl font-black text-slate-900 font-mono block">100%</span>
                  <span className="text-xs font-bold text-slate-600 mt-1 block">Zero File Opening Charges</span>
                </div>
                <div className="p-6 rounded-[2rem] bg-slate-50/80 border border-slate-100">
                  <span className="text-3xl font-black text-brand-blue font-mono block">1,200+</span>
                  <span className="text-xs font-bold text-slate-600 mt-1 block">Visas Successfully Granted</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 space-y-8 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white shrink-0">
                    <Image
                      src="/logo.jpg"
                      alt="AS Education"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AS Education Global</h3>
                    <p className="text-xs text-brand-blue font-semibold uppercase tracking-wider">Fly With Your Dream</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Accredited Representation:</strong> Direct authorized representation with universities in UK, Australia, Canada, USA, and Europe.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Meticulous Compliance Audits:</strong> Every statement of purpose (SOP), sponsor affidavit, and bank solvency document is audited before embassy submission.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span><strong>Pre-Visa Mock Interview Coaching:</strong> Dedicated credibility interview rehearsals ensuring students face visa officers with total confidence.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openModal()}
                    className="w-full py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 text-center"
                  >
                    Schedule an In-Person Consultation &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Dhanmondi Office Direct Access */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Location</span>
                <p className="text-base font-bold text-slate-900 leading-snug">
                  Level 1, 67/B, Dhanmondi 15/A (New 8/A), Satmasjid Road, Dhaka-1209
                </p>
                <p className="text-xs text-slate-500 font-medium">Opposite Ibn Sina Hospital</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Hotlines</span>
                <p className="text-base font-bold text-brand-blue">
                  +880 1927-353600 / +880 1826-619151
                </p>
                <p className="text-xs text-slate-500 font-medium">WhatsApp & Direct Voice Call</p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Hours</span>
                <p className="text-base font-bold text-slate-900">
                  Saturday – Thursday: 10:00 AM – 6:30 PM
                </p>
                <p className="text-xs text-slate-600 font-semibold">Walk-In Assessments Welcome</p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
