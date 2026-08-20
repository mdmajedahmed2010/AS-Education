'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const FILTERS = ['All', 'UK', 'Australia', 'Canada', 'Malaysia', 'Europe'];

function StoryCard({ s, idx }: { s: (typeof testimonials)[0]; idx: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-12 hover:bg-slate-100/80 transition-colors duration-500 cursor-default"
    >
      <div className="mb-6 text-slate-300 group-hover:text-brand-blue transition-colors duration-500">
        <Quote className="w-10 h-10 rotate-180" />
      </div>
      
      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium flex-1 mb-8">
        "{s.story}"
      </p>

      <div className="mt-auto flex items-end justify-between pt-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-slate-200/60 to-transparent" />
        
        <div>
          <h4 className="text-base font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
            {s.studentName}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium tracking-wide">
            {s.university} <span className="mx-1 text-slate-300">|</span> <span className="text-slate-900">{s.country}</span>
          </p>
        </div>
        
        <div className="flex flex-col items-end">
          <div className="flex gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />
            ))}
          </div>
          <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            {s.visaTime}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SuccessStoriesSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const filtered = activeFilter === 'All'
    ? testimonials.slice(0, 4)
    : testimonials.filter(t => t.country.toLowerCase().includes(activeFilter.toLowerCase())).slice(0, 4);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Centered Minimal Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Verified Student Testimonials
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Stories of Success.<br />
              <span className="text-slate-300 font-medium">Real Student Outcomes.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
              Real voices from students who turned their study abroad dreams into reality with our guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-6 pt-4 overflow-x-auto pb-2 no-scrollbar"
          >
            {FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 relative pb-2 ${
                  activeFilter === cat
                    ? 'text-brand-blue'
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, idx) => (
              <StoryCard key={s.id || idx} s={s} idx={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Minimal Footer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24 flex justify-center"
        >
          <Link 
            href="/success-stories" 
            className="group inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors"
          >
            <span className="pb-1 border-b-2 border-slate-900 group-hover:border-brand-blue transition-colors">
              Read All Verified Stories
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
