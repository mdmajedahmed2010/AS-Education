'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Coins, 
  Globe, 
  TrendingUp, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Landmark,
  PiggyBank,
  Wallet
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

interface CountryCostData {
  currency: string;
  symbol: string;
  fxRate: number; // 1 Foreign Unit = X BDT
  avgTuitionForeign: number;
  avgLivingForeignYear: number;
  visaFeeForeign: number;
  healthInsuranceForeign: number;
  partTimeHourlyPay: number;
  maxPartTimeHoursWeek: number;
  solvencyMonthsRequired: number;
}

const COUNTRY_DATA: Record<string, CountryCostData> = {
  UK: {
    currency: 'GBP',
    symbol: '£',
    fxRate: 158,
    avgTuitionForeign: 15500,
    avgLivingForeignYear: 12006, // Outer London standard
    visaFeeForeign: 490,
    healthInsuranceForeign: 776,
    partTimeHourlyPay: 11.44,
    maxPartTimeHoursWeek: 20,
    solvencyMonthsRequired: 9,
  },
  Australia: {
    currency: 'AUD',
    symbol: 'A$',
    fxRate: 82,
    avgTuitionForeign: 29000,
    avgLivingForeignYear: 29710,
    visaFeeForeign: 1600,
    healthInsuranceForeign: 650,
    partTimeHourlyPay: 23.23,
    maxPartTimeHoursWeek: 24,
    solvencyMonthsRequired: 12,
  },
  Canada: {
    currency: 'CAD',
    symbol: 'C$',
    fxRate: 88,
    avgTuitionForeign: 21000,
    avgLivingForeignYear: 20635, // GIC requirement standard
    visaFeeForeign: 235,
    healthInsuranceForeign: 800,
    partTimeHourlyPay: 17.30,
    maxPartTimeHoursWeek: 20,
    solvencyMonthsRequired: 12,
  },
  USA: {
    currency: 'USD',
    symbol: '$',
    fxRate: 122,
    avgTuitionForeign: 23000,
    avgLivingForeignYear: 14500,
    visaFeeForeign: 185,
    healthInsuranceForeign: 1500,
    partTimeHourlyPay: 15.00,
    maxPartTimeHoursWeek: 20,
    solvencyMonthsRequired: 12,
  },
  Malaysia: {
    currency: 'MYR',
    symbol: 'RM',
    fxRate: 27.5,
    avgTuitionForeign: 22000,
    avgLivingForeignYear: 18000,
    visaFeeForeign: 1200,
    healthInsuranceForeign: 500,
    partTimeHourlyPay: 12.00,
    maxPartTimeHoursWeek: 20,
    solvencyMonthsRequired: 12,
  },
};

export default function CostCalculator() {
  const { openModal } = useConsultationModal();
  const [calculatorMode, setCalculatorMode] = useState<'budget' | 'solvency'>('budget');
  const [country, setCountry] = useState<string>('UK');
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(15);
  const [includePartTime, setIncludePartTime] = useState<boolean>(true);

  const data = COUNTRY_DATA[country];

  // 1. Budget Calculations
  const grossTuition = data.avgTuitionForeign;
  const scholarshipAmount = Math.round(grossTuition * (scholarshipPercent / 100));
  const netTuition = grossTuition - scholarshipAmount;
  const livingCost = data.avgLivingForeignYear;
  const governmentFees = data.visaFeeForeign + data.healthInsuranceForeign;
  const totalAnnualForeign = netTuition + livingCost + governmentFees;
  const totalAnnualBdt = totalAnnualForeign * data.fxRate;
  const totalAnnualLakh = (totalAnnualBdt / 100000).toFixed(2);

  // Part-time calculations (48 working weeks)
  const annualWorkHours = 48 * data.maxPartTimeHoursWeek;
  const annualPartTimeEarningsForeign = Math.round(annualWorkHours * data.partTimeHourlyPay);
  const annualPartTimeEarningsBdt = annualPartTimeEarningsForeign * data.fxRate;
  const annualPartTimeLakh = (annualPartTimeEarningsBdt / 100000).toFixed(2);
  const netOutOfPocketBdt = includePartTime ? Math.max(0, totalAnnualBdt - annualPartTimeEarningsBdt) : totalAnnualBdt;
  const netOutOfPocketLakh = (netOutOfPocketBdt / 100000).toFixed(2);

  // 2. 28-Day Bank Solvency Calculation
  const solvencyLivingForeign = country === 'UK' ? 1023 * 9 : (data.avgLivingForeignYear * (data.solvencyMonthsRequired / 12));
  const requiredSolvencyForeign = netTuition + solvencyLivingForeign;
  const requiredSolvencyBdt = requiredSolvencyForeign * data.fxRate;
  const requiredSolvencyLakh = (requiredSolvencyBdt / 100000).toFixed(2);

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-xs font-sans space-y-8">
      
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-brand-blue" />
            Financial Engine
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Study Abroad Cost & Solvency Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Compute real tuition, part-time legal offsets, and mandatory 28-day embassy funds in Bangladeshi Taka.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="inline-flex p-1.5 bg-slate-100 rounded-full border border-slate-200/80 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setCalculatorMode('budget')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              calculatorMode === 'budget'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            💰 Total Budget Estimator
          </button>
          <button
            type="button"
            onClick={() => setCalculatorMode('solvency')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              calculatorMode === 'solvency'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            🏦 28-Day Bank Solvency
          </button>
        </div>
      </div>

      {/* Country Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
          1. Select Destination Country
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {Object.keys(COUNTRY_DATA).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCountry(c)}
              className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all text-center border ${
                country === c
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              {c === 'UK' ? 'UK 🇬🇧' : c === 'Australia' ? 'Australia 🇦🇺' : c === 'Canada' ? 'Canada 🇨🇦' : c === 'USA' ? 'USA 🇺🇸' : 'Malaysia 🇲🇾'}
            </button>
          ))}
        </div>
      </div>

      {/* MODE 1: BUDGET CALCULATOR */}
      {calculatorMode === 'budget' && (
        <div className="space-y-6">
          
          {/* Sliders and Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>Estimated Scholarship Merit Discount:</span>
                <span className="text-brand-blue font-mono font-bold">{scholarshipPercent}% ({data.symbol}{scholarshipAmount.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                step="5"
                value={scholarshipPercent}
                onChange={(e) => setScholarshipPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <span className="text-[11px] text-slate-500 block font-medium">
                AS Education students typically receive £1,500 – £5,000 / A$5,000+ tuition waivers.
              </span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/80">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900 block">Factor Part-Time Legal Income</span>
                <span className="text-[11px] text-slate-500 block">Based on official {data.maxPartTimeHoursWeek} hrs/week legal student limit</span>
              </div>
              <input
                type="checkbox"
                checked={includePartTime}
                onChange={(e) => setIncludePartTime(e.target.checked)}
                className="w-5 h-5 text-brand-blue rounded-lg cursor-pointer accent-brand-blue"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Gross Annual Outflow</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                ৳ {totalAnnualLakh} <span className="text-xs font-normal text-slate-500">Lakh BDT</span>
              </div>
              <span className="text-xs text-slate-500 block font-medium">
                {data.symbol}{totalAnnualForeign.toLocaleString()} {data.currency} (1 {data.currency} = ৳{data.fxRate})
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/60 space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">Part-Time Student Wages</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono">
                ৳ {annualPartTimeLakh} <span className="text-xs font-normal text-emerald-700">Lakh BDT</span>
              </div>
              <span className="text-xs text-emerald-700 block font-medium">
                {data.symbol}{annualPartTimeEarningsForeign.toLocaleString()} {data.currency} / year ({data.symbol}{data.partTimeHourlyPay}/hr)
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-2 shadow-lg">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Net Out-of-Pocket Cost</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                ৳ {netOutOfPocketLakh} <span className="text-xs font-normal text-slate-400">Lakh BDT</span>
              </div>
              <span className="text-xs text-slate-300 block font-medium">
                Initial deposit + remaining living funds
              </span>
            </div>

          </div>

        </div>
      )}

      {/* MODE 2: 28-DAY BANK SOLVENCY CALCULATOR */}
      {calculatorMode === 'solvency' && (
        <div className="space-y-6">
          
          <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200/70 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
              <Landmark className="w-4 h-4 text-amber-700" />
              <span>Official 28-Day Maintenance Fund Rule for Bangladesh:</span>
            </div>
            <p className="text-xs text-amber-800 leading-relaxed font-medium">
              Embassies (UKVI, Home Affairs, IRCC) require mandatory proof of funds held continuously for <strong>28 consecutive days</strong> in a Bangladesh Bank scheduled commercial bank prior to visa submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white space-y-4 shadow-xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Required 28-Day Bank Statement Balance
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                ৳ {requiredSolvencyLakh} <span className="text-sm font-normal text-slate-400">Lakh BDT</span>
              </div>
              <span className="text-xs text-slate-300 block">
                Approx. {data.symbol}{Math.round(requiredSolvencyForeign).toLocaleString()} {data.currency} at current FX rate
              </span>

              <div className="pt-3 border-t border-white/10 text-xs text-slate-400 space-y-1 font-medium">
                <div>• Remaining 1st Year Tuition: <strong className="text-white">{data.symbol}{netTuition.toLocaleString()}</strong></div>
                <div>• Required Maintenance ({data.solvencyMonthsRequired} Months): <strong className="text-white">{data.symbol}{Math.round(solvencyLivingForeign).toLocaleString()}</strong></div>
              </div>
            </div>

            <div className="p-6 rounded-[2.5rem] bg-slate-50/80 border border-slate-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Acceptable Scheduled Banks in Dhaka
                </span>
                <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                  <li className="flex items-center gap-2">✓ Standard Chartered Bank, Eastern Bank, City Bank</li>
                  <li className="flex items-center gap-2">✓ BRAC Bank, Dutch-Bangla Bank, Prime Bank</li>
                  <li className="flex items-center gap-2">✓ Savings Account or mature Fixed Deposit (FDR)</li>
                  <li className="flex items-center gap-2">✓ Sponsor Affidavit & Source of Funds Audit</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openModal({ country, service: '28-Day Bank Solvency Audit' })}
                  className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-md text-center"
                >
                  Get Bank Solvency & Sponsor Audit &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Bottom Footer */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Calibrated to official 2026/2027 embassy exchange rates and living fund guidelines.</span>
        </span>
        <button
          onClick={() => openModal({ country, service: 'Financial Planning & Scholarship Guidance' })}
          className="text-brand-blue font-bold hover:underline"
        >
          Book Personalized Financial Consultation &rarr;
        </button>
      </div>

    </div>
  );
}
