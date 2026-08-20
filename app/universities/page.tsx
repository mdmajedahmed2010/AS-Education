'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Search, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  MapPin,
  Coins
} from 'lucide-react';
import { universities, University } from '@/data/universities';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function UniversitiesPage() {
  const { openModal } = useConsultationModal();
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUniversities = universities.filter((u) => {
    const matchCountry = selectedCountry === 'all' || u.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const query = searchQuery.trim().toLowerCase();
    const matchSearch = !query || 
                        u.name.toLowerCase().includes(query) || 
                        u.city.toLowerCase().includes(query) ||
                        u.popularPrograms.some(p => p.toLowerCase().includes(query));
    return matchCountry && matchSearch;
  });

  const handleApply = (u: University) => {
    openModal({ country: u.country, service: `Admission for ${u.name}` });
  };

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
                Global Partner Directory
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Partner Institutions.<br />
                <span className="text-slate-300 font-medium">Global University Network.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Explore direct application pathways, fast-track offer letters, and exclusive merit scholarships across premier institutions worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Search & Filter Bar */}
      <section className="py-6 bg-slate-50/80 border-y border-slate-100 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Country Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'all', label: 'All Institutions' },
                { id: 'United Kingdom', label: 'UK 🇬🇧' },
                { id: 'Australia', label: 'Australia 🇦🇺' },
                { id: 'Canada', label: 'Canada 🇨🇦' },
                { id: 'Malaysia', label: 'Malaysia 🇲🇾' },
                { id: 'Europe', label: 'Europe 🇪🇺' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCountry(item.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    selectedCountry === item.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search university or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 text-xs sm:text-sm rounded-full pl-10 pr-4 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((u, idx) => (
              <motion.div
                key={u.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 hover:bg-slate-100/90 transition-all duration-500 cursor-default"
              >
                <div className="space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs text-brand-blue font-bold flex items-center gap-1.5 mb-1.5">
                        <span className="text-sm">{u.flag}</span>
                        <span>{u.city}, {u.country}</span>
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                        {u.name}
                      </h3>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200/80 text-[11px] font-bold shrink-0">
                      {u.ranking}
                    </span>
                  </div>

                  {/* Highlights Matrix */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Tuition / Year</span>
                      <span className="font-bold text-slate-900 mt-0.5 block truncate">{u.avgTuitionForeign}</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60">
                      <span className="text-[10px] font-bold text-emerald-700 block uppercase tracking-wider">Scholarship</span>
                      <span className="font-bold text-emerald-800 mt-0.5 block truncate">{u.scholarshipAvailable}</span>
                    </div>
                  </div>

                  {/* Criteria Checklist */}
                  <div className="space-y-2 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{u.ieltsScore}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{u.ieltsWaiver ? 'IELTS Waiver Available via MOI' : 'Standard English Score Required'}</span>
                    </div>
                  </div>

                  {/* Popular Programs */}
                  <div className="pt-4 border-t border-slate-200/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Popular Degree Programs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {u.popularPrograms.slice(0, 3).map((p) => (
                        <span key={p} className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200/60 text-xs font-semibold">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-slate-400">
                    Intakes: {u.intakes.join(', ')}
                  </span>

                  <button
                    onClick={() => handleApply(u)}
                    className="px-5 py-2 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Apply Now &rarr;
                  </button>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
