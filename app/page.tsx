'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Globe,
  Award
} from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import LiveVisaTicker from '@/components/home/LiveVisaTicker';
import BangladeshAdvantage from '@/components/home/BangladeshAdvantage';
import BentoGrid from '@/components/home/BentoGrid';
import RoadmapSection from '@/components/home/RoadmapSection';
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection';
import VideoReelsSection from '@/components/home/VideoReelsSection';
import CounselorSpotlight from '@/components/home/CounselorSpotlight';
import FAQSection from '@/components/home/FAQSection';
import LeadBanner from '@/components/home/LeadBanner';
import DestinationsSection from '@/components/home/DestinationsSection';
import { useConsultationModal } from '@/components/providers/ModalContext';

const PARTNER_UNIVERSITIES = [
  { name: 'University of Greenwich', country: '🇬🇧 UK', note: 'Top London Campus' },
  { name: 'Western Sydney University', country: '🇦🇺 Australia', note: 'Top 2% Worldwide' },
  { name: 'London South Bank University', country: '🇬🇧 UK', note: 'Central London' },
  { name: 'Algonquin College', country: '🇨🇦 Canada', note: 'Direct SDS Stream' },
  { name: 'University of Hertfordshire', country: '🇬🇧 UK', note: 'MOI Accepted' },
  { name: 'Asia Pacific University', country: '🇲🇾 Malaysia', note: 'Dual UK Degrees' },
  { name: 'Centria UAS', country: '🇪🇺 Finland', note: '50% Scholarship' },
  { name: 'University of Bedfordshire', country: '🇬🇧 UK', note: 'Fast-Track CAS' },
];

export default function HomePage() {
  const { openModal } = useConsultationModal();

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Live Verified Visa Approvals Infinite Ticker */}
      <LiveVisaTicker />

      {/* 3. Official Global Partner University Infinite Marquee */}
      <section className="py-4 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider shrink-0">
              <Building className="w-4 h-4 text-brand-blue" />
              <span>Official Global Partners:</span>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="flex items-center gap-6 animate-marquee whitespace-nowrap will-change-transform text-xs font-semibold text-slate-700">
                {[...PARTNER_UNIVERSITIES, ...PARTNER_UNIVERSITIES].map((uni, idx) => (
                  <span key={idx} className="shrink-0 flex items-center gap-1.5 hover:text-brand-blue transition-colors">
                    <span className="font-bold text-slate-900">{uni.name}</span>
                    <span className="text-slate-400">({uni.country})</span>
                    <span className="text-[10px] text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">{uni.note}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Strategic Bangladesh Advantage Section (Zero Fees, MOI, Solvency, Spouse, Dhanmondi Office) */}
      <BangladeshAdvantage />

      {/* 4.5. Clickable Study Destinations Cards */}
      <DestinationsSection />

      {/* 5. Core Admissions & Visa Services Bento Grid */}
      <BentoGrid />

      {/* 6. Proven 6-Step Admissions & Visa Roadmap */}
      <RoadmapSection onOpenModal={() => openModal()} />

      {/* 7. Verified Success Stories & Student Approvals */}
      <SuccessStoriesSection onOpenModal={() => openModal()} />

      {/* 8. Authentic Student Video Reels */}
      <VideoReelsSection onOpenModal={() => openModal()} />

      {/* 9. British Council Certified Counselor Leadership Spotlight */}
      <CounselorSpotlight onOpenModal={() => openModal()} />

      {/* 10. Categorized FAQ Section */}
      <FAQSection onOpenModal={() => openModal()} />

      {/* 11. Final High-Converting Lead Banner */}
      <LeadBanner onOpenModal={() => openModal()} />

    </div>
  );
}
