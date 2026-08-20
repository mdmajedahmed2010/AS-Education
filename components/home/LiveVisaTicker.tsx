'use client';

import React from 'react';
import { Award, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const RECENT_VISAS = [
  { student: 'Masrup F.', country: 'UK 🇬🇧', uni: 'Univ. of Greenwich', intake: 'Sep 2026', time: '24h Super Priority', mode: 'MOI Accepted' },
  { student: 'Tanvir A.', country: 'Australia 🇦🇺', uni: 'Western Sydney Univ.', intake: 'July 2026', time: 'Subclass 500', mode: 'Spouse Included' },
  { student: 'Nusrat J.', country: 'Canada 🇨🇦', uni: 'Univ. of Windsor', intake: 'Sep 2026', time: 'Direct Admission', mode: '3-Year PGWP' },
  { student: 'Sakib H.', country: 'Malaysia 🇲🇾', uni: 'Asia Pacific Univ.', intake: 'May 2026', time: '10-Day EMGS eVAL', mode: 'Dual Degree' },
  { student: 'Fariha M.', country: 'Finland 🇪🇺', uni: 'Centria UAS', intake: 'Sep 2026', time: 'Residence Permit', mode: '50% Scholarship' },
  { student: 'Rahim K.', country: 'UK 🇬🇧', uni: 'London South Bank Univ.', intake: 'May 2026', time: '48h Priority Visa', mode: 'Zero File Fee' },
  { student: 'Mehedi H.', country: 'USA 🇺🇸', uni: 'Univ. of North Texas', intake: 'Fall 2026', time: 'F-1 Visa Approved', mode: 'STEM OPT' },
  { student: 'Tasnim A.', country: 'Australia 🇦🇺', uni: 'Deakin University', intake: 'July 2026', time: 'Visa Granted', mode: 'Full Work Rights' },
];

export default function LiveVisaTicker() {
  return (
    <div className="bg-slate-950 border-y border-slate-800 text-white py-3 overflow-hidden font-sans relative z-20">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        
        {/* Fixed Title Badge */}
        <div className="flex items-center gap-2 shrink-0 bg-blue-950/90 text-blue-300 border border-blue-700/60 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm z-30">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span className="whitespace-nowrap">Live Visa Approvals</span>
        </div>

        {/* Infinite CSS Marquee Stream */}
        <div className="flex-1 overflow-hidden relative">
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap will-change-transform">
            {[...RECENT_VISAS, ...RECENT_VISAS].map((visa, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 shrink-0 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-xs text-xs text-slate-300"
              >
                <span className="font-bold text-white">{visa.student}</span>
                <span className="text-slate-600">•</span>
                <span className="text-amber-300 font-semibold">{visa.country}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 hidden sm:inline">{visa.uni}</span>
                <span className="px-2 py-0.5 rounded bg-amber-900/50 text-amber-300 font-bold text-[10px] border border-amber-800/40">
                  {visa.time}
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 font-medium text-[10px] border border-blue-800/40">
                  {visa.mode}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
