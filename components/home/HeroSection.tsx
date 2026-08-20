'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck,
  Award, Zap, Users, MessageCircle, Plane,
  Globe, TrendingUp, Star, Clock
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

const STATS = [
  { value: '1,200+', label: 'Visas Approved', icon: CheckCircle2 },
  { value: '99.4%', label: 'Success Rate', icon: Star },
  { value: '24 Hours', label: 'UK Super Priority', icon: Zap },
  { value: '0৳', label: 'File Opening Fee', icon: ShieldCheck },
];

const COUNTRIES = [
  { id: 'uk', flag: '🇬🇧', name: 'UK', detail: '24h Super Priority · MOI Accepted · 2-Yr PSW', tuition: '£12k–18k/yr' },
  { id: 'australia', flag: '🇦🇺', name: 'Australia', detail: 'Spouse Work Rights · 500 Visa · MOI/PTE', tuition: 'A$22k–34k/yr' },
  { id: 'canada', flag: '🇨🇦', name: 'Canada', detail: '3-Year PGWP · SDS Scheme · Direct SDS', tuition: 'C$16k–24k/yr' },
  { id: 'usa', flag: '🇺🇸', name: 'USA', detail: 'F-1 Visa · 3-Yr OPT · STEM Extension', tuition: '$18k–28k/yr' },
  { id: 'malaysia', flag: '🇲🇾', name: 'Malaysia', detail: 'Dual UK Degree · No IELTS · 10-Day Visa', tuition: '$3.5k–6k/yr' },
  { id: 'europe', flag: '🇪🇺', name: 'Europe', detail: 'Scholarships · Low Budget · Schengen PR', tuition: '€6k–10k/yr' },
];

export default function HeroSection() {
  const { openModal } = useConsultationModal();
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pt-10 sm:pt-16 pb-16 lg:pb-24 font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Headline & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:col-span-7 space-y-8"
          >

            {/* Pill badge */}
            <motion.div variants={item}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                British Council Certified · Dhanmondi, Dhaka
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Fly With Your Dream to<br />
                <span className="text-slate-300 font-medium">UK, Canada & Australia.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p variants={item} className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl font-normal">
              Bangladesh's premier study abroad advisory. Official university partner admissions, <strong className="text-slate-900 font-semibold">zero file opening charges</strong>, and MOI assessments.
            </motion.p>

            {/* Stats Grid */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100/80 flex flex-col"
                  >
                    <Icon className="w-4 h-4 text-brand-blue mb-2" />
                    <span className="text-xl font-black text-slate-900 leading-tight">{s.value}</span>
                    <span className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => openModal()}
                className="px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-brand-blue text-sm font-bold transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Book Free Profile Evaluation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/8801927353600?text=Hello%20AS%20Education,%20I%20need%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 text-sm font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat with Counselor</span>
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-semibold pt-1">
              <span className="flex items-center gap-1.5 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" /> 100% Free Initial Assessment
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" /> No Hidden Fees Ever
              </span>
              <span className="text-slate-200">•</span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-brand-blue" /> Fast-Track Processing
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Banner + Country Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >

            {/* Official Banner Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl aspect-[16/10] group">
              <Image
                src="/banner.jpg"
                alt="Dream Big Study Abroad - AS Education"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-slate-950/25" />
              <div className="absolute bottom-4 inset-x-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  🎓 2026/2027 Intakes Open
                </span>
                <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md">
                  Official Desk
                </span>
              </div>
            </div>

            {/* Quick Country Matcher */}
            <div className="bg-slate-50/80 rounded-[2rem] p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Plane className="w-3.5 h-3.5 text-brand-blue" />
                  Quick Destination Matcher
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Select Country</span>
              </div>

              {/* Country Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(c)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                      selectedCountry.id === c.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    <span className="block text-sm mb-0.5">{c.flag}</span>
                    {c.name}
                  </button>
                ))}
              </div>

              {/* Selected Country Details */}
              <div className="rounded-xl bg-white p-3.5 border border-slate-200/80 flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs font-bold text-slate-900">Study in {selectedCountry.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">{selectedCountry.detail}</p>
                </div>
                <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-lg shrink-0">
                  {selectedCountry.tuition}
                </span>
              </div>

              <button
                onClick={() => openModal({ country: selectedCountry.name })}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs"
              >
                Apply for {selectedCountry.name} Intake &rarr;
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
