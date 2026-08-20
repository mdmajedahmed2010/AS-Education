'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  Calendar, 
  Building
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function DestinationsPage() {
  const { openModal } = useConsultationModal();
  const [filterRegion, setFilterRegion] = useState('all');

  const filtered = destinations.filter((d) => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'europe') return d.slug.includes('europe') || d.slug.includes('uk');
    if (filterRegion === 'americas') return d.slug.includes('usa') || d.slug.includes('canada');
    if (filterRegion === 'apac') return d.slug.includes('australia') || d.slug.includes('malaysia') || d.slug.includes('zealand');
    return true;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Editorial Hero Header */}
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
                Global Study Destinations Catalog
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Study Destinations.<br />
                <span className="text-slate-300 font-medium">Global Opportunities.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Explore transparent entry criteria, tuition ranges, post-study work permits, and living costs across the world's premier study destinations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="py-6 bg-slate-50/80 border-y border-slate-100 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'europe', label: 'UK & Europe 🇬🇧 🇪🇺' },
              { id: 'americas', label: 'North America (USA/CA) 🇺🇸 🇨🇦' },
              { id: 'apac', label: 'Asia-Pacific (AU/MY) 🇦🇺 🇲🇾' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterRegion(tab.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  filterRegion === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col justify-between bg-slate-50/80 rounded-[2.5rem] overflow-hidden hover:bg-slate-100/90 transition-all duration-500 cursor-default"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.heroImage}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/30" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-xs">
                      <span>{item.flag}</span>
                      <span>{item.name}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold">
                        {item.postStudyWork} PSW
                      </span>
                      <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold">
                        {item.visaSuccessRate} Visa
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                        Study in {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Stats Matrix */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Tuition / Year</span>
                        <span className="font-bold text-slate-900 mt-0.5 block truncate">{item.avgTuition}</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60">
                        <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Living Cost</span>
                        <span className="font-bold text-brand-blue mt-0.5 block truncate">{item.avgLiving}</span>
                      </div>
                    </div>

                    {/* Popular Universities */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Popular Universities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.popularUniversities.slice(0, 2).map((uni, uIdx) => (
                          <span key={uIdx} className="text-xs font-semibold text-slate-700 bg-white border border-slate-200/60 px-3 py-1 rounded-lg truncate max-w-full">
                            🏛️ {uni}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-8 pt-0 flex items-center justify-between gap-3 border-t border-slate-200/60 mt-4">
                  <Link
                    href={`/destinations/${item.slug}`}
                    className="text-xs font-bold text-slate-900 hover:text-brand-blue flex items-center gap-1.5"
                  >
                    <span>Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openModal({ country: item.name })}
                    className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Apply Now
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
