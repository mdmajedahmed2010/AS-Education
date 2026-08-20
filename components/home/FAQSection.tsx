'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';
import { faqs } from '@/data/faq';

export default function FAQSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Requirements', 'Eligibility', 'Financials', 'Services', 'Visa & Family'];

  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return selectedCategory === 'All' || faq.category.toLowerCase() === selectedCategory.toLowerCase();
    }
    const matchSearch = faq.question.toLowerCase().includes(query) || 
                        faq.answer.toLowerCase().includes(query) ||
                        faq.category.toLowerCase().includes(query);
    if (selectedCategory === 'All') return matchSearch;
    return matchSearch && faq.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Minimal Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Admissions & Visa Guidelines
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Frequently Asked Questions.<br />
            <span className="text-slate-300 font-medium">Clear, Direct Answers.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Everything you need to know about IELTS waivers, bank solvency protocols, post-study work rights, and family visas.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-12">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic (e.g. MOI waiver, bank audit, spouse visa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-brand-blue focus:bg-white transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div 
                key={faq.id || idx}
                className="bg-slate-50/80 rounded-[2rem] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-start justify-between gap-4 transition-colors hover:bg-slate-100/80"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-slate-900 text-white' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-7 pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 pt-4"
                    >
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Category: {faq.category}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-slate-50/50 rounded-[2rem] text-sm text-slate-500">
              <p>No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-2 text-xs font-bold text-brand-blue hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Minimal Help Banner */}
        <div className="mt-14 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Have an unlisted case or complex question?
            </h4>
            <p className="text-xs text-slate-500">
              Speak directly with British Council certified counselors.
            </p>
          </div>

          <a
            href="https://wa.me/8801927353600"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
