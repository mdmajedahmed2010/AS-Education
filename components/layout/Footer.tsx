'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, ShieldCheck, Award,
  Sparkles, ArrowRight, MessageCircle, Facebook,
  CheckCircle2, Globe
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About AS Education', href: '/about' },
  { label: 'Admissions & Visa Services', href: '/services' },
  { label: 'Partner Universities', href: '/universities' },
  { label: 'Student Decision Tools', href: '/tools' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Contact Us', href: '/contact' },
];

const DESTINATIONS = [
  { label: 'Study in UK', href: '/destinations/study-in-uk', flag: '🇬🇧' },
  { label: 'Study in Australia', href: '/destinations/study-in-australia', flag: '🇦🇺' },
  { label: 'Study in Canada', href: '/destinations/study-in-canada', flag: '🇨🇦' },
  { label: 'Study in USA', href: '/destinations/study-in-usa', flag: '🇺🇸' },
  { label: 'Study in Malaysia', href: '/destinations/study-in-malaysia', flag: '🇲🇾' },
  { label: 'Study in Europe', href: '/destinations/study-in-europe', flag: '🇪🇺' },
];

export default function Footer() {
  const { openModal } = useConsultationModal();

  return (
    <footer className="relative font-sans bg-slate-950 text-white border-t border-slate-800/80">
      
      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Col 1: Brand & Consultation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-700 shadow-md group-hover:scale-105 transition-transform shrink-0">
                <Image src="/logo.jpg" alt="AS Education" fill className="object-contain p-0.5" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight leading-none flex items-center gap-1">
                  AS <span className="text-brand-blue-vibrant">EDUCATION</span>
                </span>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-[0.18em] leading-none block mt-1">
                  Fly With Your Dream
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Official British Council certified education consultancy in Dhanmondi, Dhaka. Fast-track admissions & visa support with <strong className="text-white">100% zero file opening fees</strong>.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal()}
                className="btn-amber py-2.5 px-4 text-xs font-bold shadow-md inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Free Assessment
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://wa.me/8801927353600"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://www.facebook.com/aseducationbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold text-blue-400 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 transition-colors inline-flex items-center gap-1.5"
              >
                <Facebook className="w-3.5 h-3.5" />
                Facebook
              </motion.a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {QUICK_LINKS.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {DESTINATIONS.map((d, i) => (
                <li key={i}>
                  <Link
                    href={d.href}
                    className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                  >
                    <span className="text-sm">{d.flag}</span>
                    <span>{d.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dhanmondi Head Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Dhanmondi Office
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Level 1, 67/B, Dhanmondi 15/A (New 8/A), Satmasjid Road, Dhaka-1209
                  <span className="block text-[11px] text-slate-500 mt-0.5">(Opposite Ibn Sina Hospital)</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-blue-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <a href="tel:01927353600" className="hover:text-amber-300 transition-colors">
                  +880 1927-353600
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:apply.asedu@gmail.com" className="hover:text-white transition-colors">
                  apply.asedu@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sat – Thu: 10:00 AM – 6:30 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Clean Copyright Bar ── */}
      <div className="border-t border-slate-900 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
            <span>© {new Date().getFullYear()} AS Education Global. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-slate-500">British Council Reg. GAL-2023</span>
            <span className="text-slate-700">·</span>
            <a
              href="https://www.facebook.com/aseducationbd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              facebook.com/aseducationbd
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
