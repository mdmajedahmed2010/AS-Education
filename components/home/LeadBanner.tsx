'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MessageCircle, Phone, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function LeadBanner({ onOpenModal }: { onOpenModal?: () => void } = {}) {
  const { openModal } = useConsultationModal();
  const handleOpen = onOpenModal || openModal;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 sm:p-14 lg:p-16 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-[11px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                2026 / 2027 Intakes Open
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.1]">
                Ready to Fly with Your Dream?<br />
                <span className="text-slate-500 font-medium">Free Profile Evaluation.</span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
                Get your academic profile and study gap evaluated by certified counselors with zero agency fees and complete transparency.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-brand-blue" /> Zero File Opening Fees
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Star className="w-4 h-4 text-brand-blue" /> 1,200+ Visa Grants
                </span>
                <span className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-brand-blue" /> 2-Hour Response
                </span>
              </div>
            </div>

            {/* Right CTAs */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <button
                onClick={() => handleOpen()}
                className="w-full py-4 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-sm font-bold transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Book Free Profile Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/8801927353600?text=Hello%20AS%20Education,%20I%20want%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <div className="flex gap-3 pt-1">
                <a
                  href="tel:01927353600"
                  className="flex-1 py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold text-center border border-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>+880 1927-353600</span>
                </a>
                <a
                  href="tel:01826619151"
                  className="flex-1 py-3 px-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-bold text-center border border-white/10 transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>+880 1826-619151</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
