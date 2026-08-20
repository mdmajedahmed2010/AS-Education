'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Award, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  GraduationCap
} from 'lucide-react';

export default function CounselorSpotlight({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Minimal Profile Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 text-slate-900 relative overflow-hidden space-y-6">
                
                {/* Certified Badge Top */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold shadow-xs">
                    <Award className="w-3.5 h-3.5 text-brand-blue" />
                    British Council Certified
                  </div>
                  <span className="text-xs text-slate-400 font-bold font-mono">Reg. GAL-2023</span>
                </div>

                {/* Profile Emblem & Title */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                    <GraduationCap className="w-10 h-10 text-brand-blue" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      A.S. Sajal
                    </h3>
                    <p className="text-xs font-bold text-brand-blue mt-1 uppercase tracking-wider">
                      Founder & Chief Education Counselor
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      British Council Certified Education Advisor · Dhaka
                    </p>
                  </div>
                </div>

                {/* Micro Credentials Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/60 text-center">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Visas Granted</span>
                    <span className="text-xl font-black text-slate-900 font-mono mt-0.5 block">1,200+</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/60">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">UK Priority</span>
                    <span className="text-xl font-black text-brand-blue font-mono mt-0.5 block">24 Hours</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://wa.me/8801927353600?text=I%20want%20to%20consult%20directly%20with%20A.S.%20Sajal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Direct WhatsApp Consultation</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Leadership Philosophy & Assurance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Senior Leadership & Institutional Credentials
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Authentic Guidance from an<br />
                <span className="text-slate-300 font-medium">Accredited Education Expert.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                "Higher education abroad is not merely an admission offer—it is a life-defining career investment. We operate with 100% transparency, zero hidden charges, and rigorous compliance standards."
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Certified British Council Advisory', desc: 'Accredited counselor training adhering strictly to UKVI, Australian GS, and Canadian SDS guidelines.' },
                { title: 'Strategic Profile Mapping', desc: 'Custom university and course placement matched to your long-term career goals and financial parameters.' },
                { title: 'Transparent Cost Modeling', desc: 'Exact breakdowns of tuition fees, embassy visas, insurance, and living costs with zero unexpected charges.' },
                { title: 'Mock Interview Coaching', desc: 'Pre-visa credibility interview rehearsals ensuring students face visa officers with poise.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Counseling Slot</span>
              </button>

              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Learn More About Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
