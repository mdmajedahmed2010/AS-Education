'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Sparkles, 
  Award,
  Calculator,
  FileCheck,
  Calendar,
  Building,
  CheckCircle2,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

export default function Navbar() {
  const { openModal } = useConsultationModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  const COUNTRIES = [
    { name: 'United Kingdom (UK)', slug: 'study-in-uk', flag: '🇬🇧', tag: '⚡ 24h Visas · MOI' },
    { name: 'Australia', slug: 'study-in-australia', flag: '🇦🇺', tag: 'Spouse Work Rights' },
    { name: 'Canada', slug: 'study-in-canada', flag: '🇨🇦', tag: '3-Yr Post-Study Work' },
    { name: 'United States (USA)', slug: 'study-in-usa', flag: '🇺🇸', tag: 'STEM OPT Grants' },
    { name: 'Malaysia', slug: 'study-in-malaysia', flag: '🇲🇾', tag: 'Dual UK Degrees' },
    { name: 'Europe / Finland', slug: 'study-in-europe', flag: '🇪🇺', tag: 'Scholarships' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* Top Announcement Ribbon */}
      <div className="bg-slate-950 text-white text-[11px] font-medium py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <span className="badge-pill bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Admissions Alert
            </span>
            <span className="hidden sm:inline text-slate-300">
              Applications actively accepted for <strong className="text-white">2026/2027 Intakes</strong> (UK, Canada, Australia, USA, Europe).
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-blue-300 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="hidden md:inline">British Council Certified Advisors Online</span>
            </div>

            <a 
              href="tel:01927353600" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+880 1927-353600</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white/92 backdrop-blur-xl shadow-md shadow-slate-900/8 border-b border-slate-200/80' 
          : 'bg-white border-b border-slate-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Official Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group py-1">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-xs border border-slate-100 group-hover:scale-105 transition-transform bg-white">
                <Image
                  src="/logo.jpg"
                  alt="AS Education - Fly With Your Dream"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-1">
                  AS <span className="text-brand-blue">EDUCATION</span>
                </span>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest leading-none">
                  Fly With Your Dream
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              {/* Destinations Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDestinationsOpen(true)}
                onMouseLeave={() => setDestinationsOpen(false)}
              >
                <button
                  onClick={() => setDestinationsOpen(!destinationsOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    pathname.startsWith('/destinations') ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                  aria-expanded={destinationsOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Destinations</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} />
                </button>

                {destinationsOpen && (
                  <div className="absolute top-full left-0 w-80 p-2 bg-white rounded-2xl shadow-xl border border-slate-200 grid grid-cols-1 gap-1 animate-fade-in z-50">
                    {COUNTRIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/destinations/${c.slug}`}
                        className="p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{c.flag}</span>
                          <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                            {c.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                          {c.tag}
                        </span>
                      </Link>
                    ))}
                    <div className="p-2 border-t border-slate-100 mt-1">
                      <Link
                        href="/destinations"
                        className="text-xs font-bold text-brand-blue hover:text-blue-800 flex items-center justify-center py-1 gap-1"
                      >
                        <span>View All Destination Guides</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Universities */}
              <Link 
                href="/universities" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/universities' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Universities
              </Link>

              {/* Services */}
              <Link 
                href="/services" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/services' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Services
              </Link>

              {/* Student Decision Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    pathname === '/tools' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                  aria-expanded={toolsOpen}
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-500" />
                  <span>Student Tools</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
                </button>

                {toolsOpen && (
                  <div className="absolute top-full left-0 w-84 p-2 bg-white rounded-2xl shadow-xl border border-slate-200 grid grid-cols-1 gap-1 animate-fade-in z-50">
                    <Link
                      href="/tools"
                      className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <Sparkles className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
                          60s Eligibility Evaluator
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Instant admission & scholarship probability
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/tools"
                      className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <Calculator className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
                          Cost & Solvency Calculator
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Live FX to BDT + 28-day maintenance funds
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/tools"
                      className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <Calendar className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
                          Intake Timeline Planner
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Sep/Jan/May milestone deadlines
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/tools"
                      className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3 group"
                    >
                      <FileCheck className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-800 group-hover:text-brand-blue block">
                          Visa Document Checklist
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Printable checklist for UKVI, AU, CA & USA
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Success Stories */}
              <Link 
                href="/success-stories" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/success-stories' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Success Stories
              </Link>

              {/* About */}
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/about' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              {/* Contact */}
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                  pathname === '/contact' ? 'text-brand-blue bg-blue-50/80 font-extrabold' : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>

            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => openModal()}
                className="btn-amber text-xs py-2.5 px-4 font-bold shadow-xs hover:shadow-md flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Assessment</span>
              </button>
            </div>

            {/* Mobile Menu Button & Clean Action */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => openModal()}
                className="py-2 px-3.5 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-[11px] font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Free Assessment</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-brand-blue hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white border-b border-slate-200 shadow-2xl p-4 max-h-[80vh] overflow-y-auto z-40 animate-fade-in">
          <div className="flex flex-col space-y-1">
            <Link 
              href="/" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              🏠 Home
            </Link>
            <Link 
              href="/destinations" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              🌍 Study Destinations
            </Link>
            <Link 
              href="/universities" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              🏛️ Partner Universities
            </Link>
            <Link 
              href="/services" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              ✨ Admissions & Visa Services
            </Link>
            <Link 
              href="/tools" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              🧮 Student Decision Tools
            </Link>
            <Link 
              href="/success-stories" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              🏆 Verified Success Stories
            </Link>
            <Link 
              href="/about" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              ℹ️ About AS Education
            </Link>
            <Link 
              href="/contact" 
              className="p-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              📍 Dhanmondi Head Office & Contact
            </Link>

            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full btn-primary py-3 text-xs font-bold justify-center"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Book Free Profile Assessment
              </button>

              <a
                href="tel:01927353600"
                className="w-full btn-secondary py-2.5 text-xs font-bold justify-center"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Hotline: +880 1927-353600
              </a>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
