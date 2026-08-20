'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileCheck, 
  CheckCircle2, 
  Download, 
  Printer, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Landmark, 
  Building,
  MessageCircle,
  FolderCheck
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

interface DocumentItem {
  id: string;
  name: string;
  description: string;
  category: 'academic' | 'financial' | 'embassy';
  countrySpecific?: string[];
  mandatory: boolean;
}

const ALL_DOCUMENTS: DocumentItem[] = [
  // Academic
  { id: 'transcripts', name: 'Original Academic Transcripts & Certificates', description: 'Attested certificates & mark sheets from SSC, HSC, or 4-year Bachelor degree.', category: 'academic', mandatory: true },
  { id: 'passport', name: 'Valid International Passport', description: 'Minimum 6–12 months validity remaining with blank visa pages.', category: 'academic', mandatory: true },
  { id: 'english', name: 'IELTS / PTE Scorecard OR MOI Attestation Letter', description: 'Original language test report or English Medium of Instruction letter from university.', category: 'academic', mandatory: true },
  { id: 'sop', name: 'Statement of Purpose (SOP) / Motivation Essay', description: 'Course-specific academic statement highlighting career objectives and return ties.', category: 'academic', mandatory: true },
  { id: 'lor', name: 'Two Letters of Recommendation (LOR)', description: 'Official academic references from former professors / departmental heads.', category: 'academic', mandatory: true },
  { id: 'cv', name: 'Europass / International Standard Academic CV', description: 'Detailed academic resume detailing skills, publications, and gap activities.', category: 'academic', mandatory: true },
  { id: 'gap_proof', name: 'Employment / Job Experience Documentation', description: 'Experience certificates, company appointment letters, and pay slips (for gaps > 1 yr).', category: 'academic', mandatory: false },

  // Financial
  { id: 'bank_statement', name: '28-Day Bank Statement & Solvency Certificate', description: 'Maintained balance from approved Bangladesh Bank commercial bank (SCB, EBL, City, BRAC).', category: 'financial', mandatory: true },
  { id: 'sponsor_affidavit', name: 'Sponsor Affidavit of Support & Source of Funds', description: 'Notarized sponsorship affidavit from Parents/Spouse with trade license or business TIN.', category: 'financial', mandatory: true },
  { id: 'tax_return', name: 'Income Tax Return Certificate (IT-10B / TIN Proof)', description: 'Latest 2-3 years tax acknowledgment slips of financial sponsor.', category: 'financial', mandatory: true },
  { id: 'gic_canada', name: 'GIC (Guaranteed Investment Certificate) Account ($20,635 CAD)', description: 'Mandatory Canadian bank fund deposit for direct SDS / Non-SDS visa filing.', category: 'financial', countrySpecific: ['Canada'], mandatory: true },

  // Embassy & Compliance
  { id: 'tb_test_uk', name: 'IOM Dhaka Tuberculosis (TB) Medical Clearance', description: 'Mandatory medical test report from IOM Migration Health Assessment Center, Dhaka.', category: 'embassy', countrySpecific: ['UK'], mandatory: true },
  { id: 'oshc_australia', name: 'Overseas Student Health Cover (OSHC) Policy', description: 'Mandatory Australian health insurance covering entire duration of study visa.', category: 'embassy', countrySpecific: ['Australia'], mandatory: true },
  { id: 'gs_australia', name: 'Genuine Student (GS) Written Assessment Statement', description: 'Comprehensive response matrix detailing career progression and economic ties to Bangladesh.', category: 'embassy', countrySpecific: ['Australia'], mandatory: true },
  { id: 'police_clearance', name: 'National Police Clearance Certificate (DMP/Online)', description: 'Verified digital police verification clearance from Bangladesh Police.', category: 'embassy', mandatory: true },
  { id: 'marriage_cert', name: 'Nikahnama & Marriage Certificate (If applying with spouse)', description: 'Govt. registered Muslim/Hindu marriage deed translated into English with notarization.', category: 'embassy', mandatory: false },
];

export default function DocumentChecklist() {
  const { openModal } = useConsultationModal();
  const [selectedCountry, setSelectedCountry] = useState<string>('UK');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    transcripts: true,
    passport: true,
    english: true,
  });

  const filteredDocs = ALL_DOCUMENTS.filter(doc => {
    if (!doc.countrySpecific) return true;
    return doc.countrySpecific.includes(selectedCountry);
  });

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = filteredDocs.filter(d => checkedIds[d.id]).length;
  const progressPercent = Math.round((completedCount / filteredDocs.length) * 100);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppAudit = () => {
    const missingDocs = filteredDocs.filter(d => !checkedIds[d.id]).map(d => d.name);
    const text = `*AS Education - Visa Document Readiness Audit*
🎯 Destination: ${selectedCountry}
📊 Prepared: ${completedCount}/${filteredDocs.length} (${progressPercent}% Ready)
⚠️ Pending Documents:
${missingDocs.length > 0 ? missingDocs.map(m => `• ${m}`).join('\n') : '• All documents gathered! Ready for visa filing.'}

Please schedule a document verification review.`;
    window.open(`https://wa.me/8801927353600?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-slate-200/80 shadow-xs font-sans space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-brand-blue" />
            Compliance Engine
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Interactive Visa Document Checklist
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Stage-by-stage requirement checklist calibrated for Bangladeshi passport holders.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all flex items-center gap-2 self-start md:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Country Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
          1. Select Destination Country:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {['UK', 'Australia', 'Canada', 'USA', 'Malaysia'].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCountry(c)}
              className={`py-3 px-3 rounded-2xl text-xs font-bold transition-all text-center border ${
                selectedCountry === c
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              {c === 'UK' ? 'UK 🇬🇧' : c === 'Australia' ? 'Australia 🇦🇺' : c === 'Canada' ? 'Canada 🇨🇦' : c === 'USA' ? 'USA 🇺🇸' : 'Malaysia 🇲🇾'}
            </button>
          ))}
        </div>
      </div>

      {/* Readiness Progress Bar */}
      <div className="p-6 rounded-3xl bg-slate-950 text-white space-y-3 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold gap-1">
          <span className="text-slate-300">File Readiness Status ({selectedCountry}):</span>
          <span className="text-brand-blue font-mono font-bold text-sm">
            {progressPercent}% Complete ({completedCount}/{filteredDocs.length} Documents)
          </span>
        </div>
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
          <div 
            className="h-full bg-brand-blue transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {filteredDocs.map((doc) => {
          const isChecked = !!checkedIds[doc.id];
          return (
            <div
              key={doc.id}
              onClick={() => toggleCheck(doc.id)}
              className={`p-4 sm:p-5 rounded-3xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isChecked
                  ? 'bg-blue-50/50 border-brand-blue/30 text-slate-900'
                  : 'bg-slate-50/60 border-slate-200/60 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {}}
                className="w-5 h-5 text-brand-blue rounded-lg cursor-pointer mt-0.5 accent-brand-blue"
              />

              <div className="flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-slate-900 font-extrabold' : 'text-slate-800'}`}>
                    {doc.name}
                  </span>
                  {doc.mandatory && (
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60">
                      Mandatory
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {doc.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={handleWhatsAppAudit}
          className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send Checklist for Free Audit &rarr;</span>
        </button>

        <button
          onClick={() => openModal({ country: selectedCountry, service: 'Full Document & SOP Audit' })}
          className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shadow-md text-center"
        >
          Book In-Person Document Verification &rarr;
        </button>
      </div>

    </div>
  );
}
