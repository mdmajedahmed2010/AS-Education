'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  Building, 
  Clock, 
  MessageCircle,
  Award
} from 'lucide-react';
import { destinations } from '@/data/destinations';
import { universities } from '@/data/universities';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function SingleDestinationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openModal } = useConsultationModal();

  const destination = destinations.find((d) => d.slug === slug) || destinations[0];

  const matchedUniversities = universities.filter(
    (u) => u.country.toLowerCase().includes(destination.name.toLowerCase()) || 
           destination.popularUniversities.some(p => p.toLowerCase().includes(u.name.toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Editorial Hero Banner */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold shadow-md">
            <span className="text-base">{destination.flag}</span>
            <span>Study in {destination.name} Guide</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
            {destination.tagline}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {destination.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openModal({ country: destination.name })}
              className="px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
            >
              Apply for {destination.name} &rarr;
            </button>
            <a
              href="https://wa.me/8801927353600"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat with Counselor</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Quick Stats Bar */}
      <section className="py-6 bg-slate-50/80 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Average Tuition</span>
              <span className="text-base font-extrabold text-slate-900 mt-1 block">{destination.avgTuition}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Living Expenses</span>
              <span className="text-base font-extrabold text-brand-blue mt-1 block">{destination.avgLiving}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Post-Study Work</span>
              <span className="text-base font-extrabold text-slate-900 mt-1 block">{destination.postStudyWork}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Visa Success Ratio</span>
              <span className="text-base font-extrabold text-brand-blue mt-1 block">{destination.visaSuccessRate}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        
        {/* Key Benefits & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 7 Cols: Benefits */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Study in {destination.name}?
              </h2>
              <p className="text-sm text-slate-500 font-normal">
                A premier blend of global academic prestige, work authorization, and long-term residency options.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.keyBenefits.map((b, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-800 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            {/* Admission Requirements Matrix */}
            <div className="bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                <span>Admission & Visa Criteria</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/60 space-y-3">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm block">Undergraduate (Bachelor):</span>
                  <ul className="space-y-2 text-slate-600 font-medium">
                    {destination.admissionRequirements.undergraduate.map((req, i) => (
                      <li key={i} className="leading-relaxed">• {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/60 space-y-3">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm block">Postgraduate (Masters):</span>
                  <ul className="space-y-2 text-slate-600 font-medium">
                    {destination.admissionRequirements.postgraduate.map((req, i) => (
                      <li key={i} className="leading-relaxed">• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Partner Universities & Fast Apply */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-10 space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                2026/2027 Applications
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Apply for {destination.name} Admissions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Our certified counselors will audit your academic credentials and match you with institutions offering maximum scholarship potential.
              </p>

              <button
                onClick={() => openModal({ country: destination.name })}
                className="w-full py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold transition-all shadow-md text-center"
              >
                <span>Get Free Profile Assessment &rarr;</span>
              </button>
            </div>

            {/* Popular Universities List */}
            <div className="bg-slate-50/80 rounded-[2.5rem] p-8 border border-slate-100 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Featured Partner Universities:
              </h4>

              <div className="space-y-2.5">
                {destination.popularUniversities.map((u, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <span className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-brand-blue" />
                      <span>{u}</span>
                    </span>
                    <span className="text-[10px] text-brand-blue font-bold">Partner</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
