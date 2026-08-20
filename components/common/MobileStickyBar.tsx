'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Calculator, Phone, Sparkles } from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function MobileStickyBar() {
  const { openModal } = useConsultationModal();

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-slate-950/95 backdrop-blur-xl border border-slate-800/80 px-2 py-2 rounded-2xl flex items-center justify-between gap-1 shadow-2xl font-sans">
      
      {/* 1. Destinations */}
      <Link
        href="/destinations"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white transition-colors"
      >
        <Globe className="w-4 h-4 text-brand-blue mb-0.5" />
        <span className="text-[10px] font-bold tracking-tight">Explore</span>
      </Link>

      {/* 2. Eligibility / Tools */}
      <Link
        href="/tools"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white transition-colors"
      >
        <Calculator className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[10px] font-bold tracking-tight">Tools</span>
      </Link>

      {/* 3. Call Hotline */}
      <a
        href="tel:01927353600"
        className="flex-1 flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white transition-colors"
      >
        <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-bold tracking-tight">Hotline</span>
      </a>

      {/* 4. Book Free Session CTA */}
      <button
        onClick={() => openModal()}
        className="flex-[1.3] py-2.5 px-3 bg-brand-blue hover:bg-blue-700 active:scale-95 text-white text-[11px] font-bold rounded-xl shadow-md flex items-center justify-center gap-1 transition-all"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Free Session</span>
      </button>

    </div>
  );
}
