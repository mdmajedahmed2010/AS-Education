'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, GraduationCap, DollarSign, Search, Sparkles } from 'lucide-react';

export default function HeroQuickSelector({ onOpenModal }: { onOpenModal?: (country: string) => void }) {
  const router = useRouter();
  const [country, setCountry] = useState('uk');
  const [level, setLevel] = useState('masters');
  const [budget, setBudget] = useState('15-20');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (country) {
      router.push(`/destinations/study-in-${country}`);
    } else {
      router.push('/universities');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl p-4 sm:p-5 border border-slate-700 shadow-xl bg-slate-900/90 backdrop-blur-xl relative z-20 font-sans">
      <div className="flex items-center gap-2 px-2 pb-3 text-[11px] font-bold uppercase tracking-wider text-blue-400">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        Instant University & Destination Matcher
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
        {/* Country */}
        <div className="sm:col-span-4 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-center">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Globe className="w-3 h-3 text-blue-400" /> Target Destination
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-bold text-white outline-none cursor-pointer"
          >
            <option value="uk" className="bg-slate-900">United Kingdom 🇬🇧</option>
            <option value="australia" className="bg-slate-900">Australia 🇦🇺</option>
            <option value="canada" className="bg-slate-900">Canada 🇨🇦</option>
            <option value="usa" className="bg-slate-900">United States 🇺🇸</option>
            <option value="malaysia" className="bg-slate-900">Malaysia 🇲🇾</option>
            <option value="europe" className="bg-slate-900">Europe / Finland 🇪🇺</option>
          </select>
        </div>

        {/* Level */}
        <div className="sm:col-span-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-center">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <GraduationCap className="w-3 h-3 text-amber-400" /> Study Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-bold text-white outline-none cursor-pointer"
          >
            <option value="masters" className="bg-slate-900">Masters (1-2 Yrs)</option>
            <option value="bachelors" className="bg-slate-900">Bachelors (3-4 Yrs)</option>
            <option value="foundation" className="bg-slate-900">Diploma / Foundation</option>
          </select>
        </div>

        {/* Budget */}
        <div className="sm:col-span-3 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-center">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-amber-400" /> Annual Budget
          </label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="bg-transparent text-xs sm:text-sm font-bold text-white outline-none cursor-pointer"
          >
            <option value="5-10" className="bg-slate-900">5 – 10 Lakh BDT / yr</option>
            <option value="10-15" className="bg-slate-900">10 – 15 Lakh BDT / yr</option>
            <option value="15-20" className="bg-slate-900">15 – 20 Lakh BDT / yr</option>
            <option value="20+" className="bg-slate-900">20+ Lakh BDT / yr</option>
          </select>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 flex items-center">
          <button
            type="submit"
            className="w-full h-full min-h-[46px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            Explore
          </button>
        </div>
      </form>
    </div>
  );
}
