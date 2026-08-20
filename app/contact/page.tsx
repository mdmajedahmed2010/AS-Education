'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useConsultationModal } from '@/components/providers/ModalContext';
import { triggerConfetti } from '@/lib/confetti';

export default function ContactPage() {
  const { openModal } = useConsultationModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    targetCountry: 'United Kingdom',
    studyLevel: 'Masters',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
    triggerConfetti({ particleCount: 70, spread: 60 });
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Contact Inquiry (AS Education)*
Name: ${formData.name}
Phone: ${formData.phone}
Target Country: ${formData.targetCountry}
Level: ${formData.studyLevel}
Message: ${formData.message}`;
    window.open(`https://wa.me/8801927353600?text=${encodeURIComponent(text)}`, '_blank');
  };

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
                Dhanmondi Head Office, Dhaka
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Get in Touch.<br />
                <span className="text-slate-300 font-medium">Direct Counselor Advisory.</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
                Visit our flagship Dhanmondi office or schedule a complimentary consultation with a certified education counselor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Office Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-950 text-white rounded-[2.5rem] p-8 sm:p-10 space-y-8 shadow-xl">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Dhaka Flagship Office
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open Today
                  </span>
                </div>

                <div className="space-y-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold text-xs">Office Address:</span>
                      <p className="leading-relaxed text-white font-medium mt-1">
                        Level 1, 67/B, Dhanmondi 15/A (New 8/A), Satmasjid Road, Dhaka-1209 (Opposite Ibn Sina Hospital)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold text-xs">Direct Hotlines:</span>
                      <div className="space-y-1 mt-1">
                        <a href="tel:01927353600" className="text-white hover:text-brand-blue font-bold block">+880 1927-353600</a>
                        <a href="tel:01826619151" className="text-white hover:text-brand-blue font-bold block">+880 1826-619151</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold text-xs">Admissions Email:</span>
                      <a href="mailto:apply.asedu@gmail.com" className="text-white hover:text-brand-blue font-medium block mt-1">
                        apply.asedu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold text-xs">Consultation Hours:</span>
                      <p className="text-white font-medium mt-1">Saturday – Thursday: 10:00 AM – 6:30 PM</p>
                      <span className="text-xs text-slate-400">Friday: Closed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="https://maps.google.com/?q=Dhanmondi+15/A+Satmasjid+Road+Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 text-brand-blue" />
                    <span>Open in Google Maps &rarr;</span>
                  </a>
                </div>

              </div>

            </div>

            {/* Right Col: Minimal Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/80 rounded-[2.5rem] p-8 sm:p-12">
                
                {submitted ? (
                  <div className="p-8 text-center flex flex-col items-center justify-center gap-4 min-h-[360px]">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-slate-500 mt-2 max-w-md">
                        Your inquiry has been received. Our senior counselor desk will reach out to you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
                      </p>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Confirm via WhatsApp &rarr;</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">
                        Free Profile Evaluation
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        Send Direct Admission Inquiry
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill in your profile details and our counselors will respond within 2 business hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tanvir Hasan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +880 17XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">Target Country</label>
                        <select
                          value={formData.targetCountry}
                          onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-hidden focus:border-brand-blue"
                        >
                          <option value="United Kingdom">United Kingdom (UK)</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="United States">United States (USA)</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Europe">Europe / Finland</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-800 block">Study Level</label>
                        <select
                          value={formData.studyLevel}
                          onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-hidden focus:border-brand-blue"
                        >
                          <option value="Masters">Postgraduate (Masters)</option>
                          <option value="Bachelor">Undergraduate (Bachelor)</option>
                          <option value="PhD">PhD / Research</option>
                          <option value="Foundation">Foundation / Diploma</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-800 block">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. student@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-800 block">Your Question or Academic Background</label>
                      <textarea
                        rows={3}
                        placeholder="Mention your CGPA, study gap, or specific university preferences..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-brand-blue"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 text-center flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Profile for Free Evaluation &rarr;</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
