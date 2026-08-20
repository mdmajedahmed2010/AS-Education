'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  Quote,
  Search,
  Zap,
  TrendingUp,
  Clock,
  Building,
  Check,
  HelpCircle,
  FileCheck2,
  Users2
} from 'lucide-react';
import { testimonials, caseStudies, Testimonial } from '@/data/testimonials';
import VideoReelsSection from '@/components/home/VideoReelsSection';
import { useConsultationModal } from '@/components/providers/ModalContext';

const COUNTRIES = [
  { id: 'all', label: 'All Stories' },
  { id: 'United Kingdom', label: 'UK 🇬🇧' },
  { id: 'Australia', label: 'Australia 🇦🇺' },
  { id: 'Canada', label: 'Canada 🇨🇦' },
  { id: 'USA', label: 'USA 🇺🇸' },
  { id: 'Malaysia', label: 'Malaysia 🇲🇾' },
  { id: 'Europe', label: 'Europe 🇪🇺' },
];

const METRICS = [
  { value: '99.4%', label: 'Visa Approval Rate', desc: 'Across top global destinations in 2024-2026', icon: ShieldCheck },
  { value: '24 Hours', label: 'Fastest Decision', desc: 'UK Priority & Super Priority CAS approvals', icon: Zap },
  { value: '৳15 Cr+', label: 'Scholarships Secured', desc: 'Merit, entrance, and departmental waivers', icon: Award },
  { value: '1,200+', label: 'Global Placements', desc: 'Students actively studying in 15+ countries', icon: Users2 },
];

export default function SuccessStoriesPage() {
  const { openModal } = useConsultationModal();
  const [filterCountry, setFilterCountry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return testimonials.filter((t) => {
      const matchesCountry = filterCountry === 'all' || t.country.toLowerCase().includes(filterCountry.toLowerCase());
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCountry;

      const matchesSearch = 
        t.studentName.toLowerCase().includes(query) ||
        t.university.toLowerCase().includes(query) ||
        t.program.toLowerCase().includes(query) ||
        (t.tags && t.tags.some(tag => tag.toLowerCase().includes(query))) ||
        (t.studyGap && t.studyGap.toLowerCase().includes(query)) ||
        (t.scholarship && t.scholarship.toLowerCase().includes(query)) ||
        t.story.toLowerCase().includes(query);

      return matchesCountry && matchesSearch;
    });
  }, [filterCountry, searchQuery]);

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. EDITORIAL HERO SECTION */}
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
                Verified Visa Approvals & Case Analytics
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Real Journeys.<br/>
                <span className="text-slate-300 font-medium">Proven Visa Outcomes.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Explore transparent documentation, authentic student experiences, and real case studies from learners admitted to premier institutions worldwide.
              </p>
            </motion.div>
          </div>

          {/* 4 Trust Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-12 border-t border-slate-100"
          >
            {METRICS.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  {m.value}
                </span>
                <span className="text-sm font-bold text-brand-blue mt-1">
                  {m.label}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium leading-relaxed">
                  {m.desc}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 2. LIVE FILTER & SEARCH SECTION */}
      <section className="py-8 bg-slate-50/70 border-y border-slate-100 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Country Tabs */}
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {COUNTRIES.map((c) => {
                const isActive = filterCountry === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setFilterCountry(c.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search student, university, tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 text-xs sm:text-sm rounded-full pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. EDITORIAL STORIES GRID */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Verified Student Profiles ({filtered.length})
            </h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              100% Genuine Records
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 bg-slate-50/50 rounded-[2.5rem] border border-dashed border-slate-200">
              <p className="text-base text-slate-500 font-medium">No success stories match your search query.</p>
              <button
                onClick={() => { setFilterCountry('all'); setSearchQuery(''); }}
                className="mt-4 text-xs font-bold text-brand-blue hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, idx) => (
                  <motion.div
                    key={item.id || idx}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-12 hover:bg-slate-100/90 transition-all duration-500 cursor-default relative overflow-hidden"
                  >
                    <div>
                      {/* Card Header: Avatar, Name, Country */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.avatar}
                            alt={item.studentName}
                            className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-sm"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                                {item.studentName}
                              </h3>
                              <span className="inline-flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-200/60">
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Verified
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-slate-500 mt-1">
                              {item.flag} {item.country} <span className="mx-1 text-slate-300">·</span> {item.intake}
                            </p>
                          </div>
                        </div>

                        {item.keyHighlight && (
                          <span className="hidden sm:inline-block px-3 py-1 bg-white rounded-full text-[11px] font-bold text-brand-blue shadow-xs border border-slate-200/60">
                            {item.keyHighlight}
                          </span>
                        )}
                      </div>

                      {/* University & Course Info */}
                      <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200/60 space-y-1">
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Building className="w-4 h-4 text-brand-blue shrink-0" />
                          <span className="line-clamp-1">{item.university}</span>
                        </div>
                        <div className="text-xs font-semibold text-slate-500 pl-6 line-clamp-1">
                          {item.program}
                        </div>
                      </div>

                      {/* Story Quote */}
                      <div className="relative mb-6">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal italic">
                          "{item.story}"
                        </p>
                      </div>

                      {/* Tags / Solutions Badges */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {item.tags.map((t, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-200/70 text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Scholarship & Visa Speed */}
                    <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                      <div>
                        {item.scholarship ? (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.scholarship}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-slate-400">
                            {item.studyGap || 'Direct Placement'}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mt-0.5">
                            ⚡ {item.visaTime}
                          </span>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* 4. DEEP CASE STUDY ANALYSIS SECTION */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              Case Study Analytics
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How We Solve <br/>
              <span className="text-slate-400 font-medium">Complex Visa Challenges.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              Every student profile has unique hurdles—from extensive study gaps and missing language tests to stringent bank solvency audits. Here is how our certified advisory team delivers breakthrough results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div 
                key={cs.id || idx}
                className="bg-white rounded-[2rem] p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      {cs.destination}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {cs.timeline}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                    {cs.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mb-6">
                    {cs.student} · {cs.university}
                  </p>

                  <div className="space-y-4 text-xs leading-relaxed">
                    <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100">
                      <span className="font-bold text-red-900 block mb-1">⚠️ Profile Challenge:</span>
                      <p className="text-red-800">{cs.challenge}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                      <span className="font-bold text-blue-900 block mb-1">🛠️ AS Advisory Strategy:</span>
                      <p className="text-blue-800">{cs.solution}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <span className="font-bold text-emerald-900 block mb-1">🎉 Visa Outcome:</span>
                      <p className="text-emerald-800 font-semibold">{cs.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    Course: {cs.program}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VIDEO REELS PROOF SECTION */}
      <VideoReelsSection onOpenModal={() => openModal()} />

      {/* 6. TRUST STANDARDS SECTION */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Zero Hidden Fees</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Direct applications to partner universities with 100% transparent documentation standards and zero surprise consulting charges.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Pre-Submission Financial Audit</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our former visa compliance specialists audit your source of funds, tax returns, and bank solvency before filing to prevent rejections.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">1-on-1 Embassy Interview Drills</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Rigorous mock interview sessions tailored for US F-1 consular officers, UK CAS credibility assessments, and Australian GS matrices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. HIGH-CONVERSION BOTTOM BANNER */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-blue/20 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-4">
            Start Your Journey Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let Your Visa Grant Be Our Next Success Story.
          </h2>
          <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Get your academic profile, study gap, and financial documents pre-assessed by certified British Council & ICEF accredited counselors.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-sm font-bold transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Book Free Profile Evaluation &rarr;
            </button>
            <Link
              href="/tools/eligibility"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-sm font-bold border border-slate-800 transition-all"
            >
              Check University Eligibility
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
