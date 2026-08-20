'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
import { destinations } from '@/data/destinations';

export default function DestinationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Top Global Study Destinations
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Study Destinations.<br />
            <span className="text-slate-300 font-medium">Global Opportunities.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore authentic admission requirements, post-study work rights, and fast-track visa pathways across leading destinations.
          </p>
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/destinations/${dest.slug}`} className="group block h-full">
                <div className="relative bg-slate-50/80 rounded-[2.5rem] overflow-hidden hover:bg-slate-100/90 transition-all duration-500 flex flex-col h-full cursor-pointer">
                  
                  {/* Card Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={dest.heroImage}
                      alt={`Study in ${dest.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-xs">
                        <span>{dest.flag}</span>
                        <span>{dest.name}</span>
                      </div>
                      
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                        {dest.visaSuccessRate} Visa
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-bold line-clamp-1 drop-shadow-sm">
                        {dest.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-2xl border border-slate-200/60">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Tuition / Year</span>
                          <span className="font-bold text-slate-900 text-xs truncate block mt-0.5">{dest.avgTuition}</span>
                        </div>
                        <div className="bg-white p-3 rounded-2xl border border-slate-200/60">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Post-Study Work</span>
                          <span className="font-bold text-brand-blue text-xs truncate block mt-0.5">{dest.postStudyWork}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-500 pt-1">
                        {dest.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                            <span className="line-clamp-1 font-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      <span>Explore {dest.name} Universities</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors"
          >
            <span className="pb-1 border-b-2 border-slate-900 group-hover:border-brand-blue transition-colors">
              Compare All Study Abroad Destinations
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
