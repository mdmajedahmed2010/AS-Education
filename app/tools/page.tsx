'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Calculator, 
  FileCheck, 
  Calendar, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import EligibilityChecker from '@/components/tools/EligibilityChecker';
import CostCalculator from '@/components/tools/CostCalculator';
import IntakeTimeline from '@/components/tools/IntakeTimeline';
import DocumentChecklist from '@/components/tools/DocumentChecklist';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function ToolsPage() {
  const { openModal } = useConsultationModal();
  const [activeTab, setActiveTab] = useState<'eligibility' | 'calculator' | 'timeline' | 'checklist'>('eligibility');

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
                Interactive Student Decision Suite
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Decision Tools.<br />
                <span className="text-slate-300 font-medium">Eligibility & Cost Calculators.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Calculate your admission chances, forecast tuition and living expenses, verify bank solvency rules, and generate customized visa checklists.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation Tabs Bar */}
      <section className="sticky top-16 z-30 bg-slate-50/80 backdrop-blur-md border-y border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar items-center gap-2">
            
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'eligibility'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>1. Eligibility Evaluator</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'calculator'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>2. Cost & Solvency Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'timeline'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>3. Intake Timeline Planner</span>
            </button>

            <button
              onClick={() => setActiveTab('checklist')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === 'checklist'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>4. Visa Document Checklist</span>
            </button>

          </div>
        </div>
      </section>

      {/* Main Tool Container */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100">
            {activeTab === 'eligibility' && <EligibilityChecker />}
            {activeTab === 'calculator' && <CostCalculator />}
            {activeTab === 'timeline' && <IntakeTimeline />}
            {activeTab === 'checklist' && <DocumentChecklist />}
          </div>

          {/* Assistance Banner */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-950 text-white text-center space-y-4 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need One-on-One Evaluation with a Senior Counselor?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Our British Council certified advisors are ready to review your academic transcripts, English status, and bank solvency details with zero fees.
            </p>
            <div className="pt-4">
              <button
                onClick={() => openModal()}
                className="px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95"
              >
                Schedule Free Profile Session &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
