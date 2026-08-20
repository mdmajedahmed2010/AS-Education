'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, X, ArrowRight } from 'lucide-react';

export default function StickyNotificationBar({ onOpenModal }: { onOpenModal?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-white py-2 px-4 relative z-40 text-xs font-semibold shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] uppercase tracking-wider font-bold">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Admissions Alert
          </span>
          <p className="truncate">
            <span className="font-bold text-blue-300">2026/2027 Intakes:</span> Applications actively accepted for the UK, Australia, Canada, USA, and Europe.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/tools#eligibility"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all text-[11px] font-bold border border-white/20"
          >
            Evaluate Eligibility (60s)
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-white/80 hover:text-white rounded hover:bg-white/10"
            aria-label="Close Announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
