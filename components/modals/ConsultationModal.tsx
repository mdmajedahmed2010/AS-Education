'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  Calendar as CalendarIcon, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Building,
  Video,
  ChevronRight,
  CalendarCheck,
  Share2,
  Check
} from 'lucide-react';
import { triggerConfetti } from '@/lib/confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry?: string;
  defaultService?: string;
}

const COUNSELORS = [
  { id: 'sajal', name: 'A.S. Sajal', title: 'Founder & Chief Counselor', role: '10+ Yrs Experience • British Council Certified' },
  { id: 'uk_lead', name: 'Senior UK Admissions Lead', title: 'UKVI & CAS Specialist', role: 'MOI Waivers & 24h Priority Visas' },
  { id: 'aus_lead', name: 'Australia & Canada Specialist', title: 'Visa & GTE/GS Analyst', role: 'Spouse Visas & 28-Day Bank Audit' },
];

const TIME_SLOTS = [
  { id: '10:30', time: '10:30 AM', period: 'Morning Session' },
  { id: '12:00', time: '12:00 PM', period: 'Midday Slot' },
  { id: '14:30', time: '02:30 PM', period: 'Afternoon Session' },
  { id: '16:00', time: '04:00 PM', period: 'Late Afternoon' },
  { id: '17:30', time: '05:30 PM', period: 'Evening Session' },
];

export default function ConsultationModal({ isOpen, onClose, defaultCountry = 'United Kingdom', defaultService }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<'in-person' | 'virtual'>('in-person');
  const [selectedCounselor, setSelectedCounselor] = useState(COUNSELORS[0].id);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0].id);
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: defaultCountry,
    studyLevel: 'Postgraduate (Masters)',
    englishTest: 'Medium of Instruction (MOI)',
    cgpa: '3.25',
    service: defaultService || '',
  });

  // Generate next 5 available days (Saturday to Thursday)
  const [availableDates, setAvailableDates] = useState<{ dateStr: string; label: string; dayName: string }[]>([]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let dayOffset = 0;

    while (count < 5) {
      const d = new Date(today);
      d.setDate(today.getDate() + dayOffset);
      const dayNum = d.getDay(); // 0 is Sunday, 5 is Friday

      // Friday (5) is closed
      if (dayNum !== 5) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const label = count === 0 ? 'Today' : count === 1 ? 'Tomorrow' : `${dayNames[dayNum]}, ${monthNames[d.getMonth()]} ${d.getDate()}`;
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        
        dates.push({
          dateStr,
          label,
          dayName: dayNames[dayNum],
        });
        count++;
      }
      dayOffset++;
    }

    setAvailableDates(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].dateStr);
    }
  }, [isOpen]);

  useEffect(() => {
    if (defaultCountry) {
      setFormData(prev => ({ ...prev, country: defaultCountry }));
    }
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultCountry, defaultService]);

  // Reset modal on open/close
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { 
      document.removeEventListener('keydown', onKey); 
      document.body.style.overflow = ''; 
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    
    const randomRef = `ASE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
    setStep(4);
    triggerConfetti({ particleCount: 90, spread: 80 });
  };

  const selectedDateObj = availableDates.find(d => d.dateStr === selectedDate);
  const selectedSlotObj = TIME_SLOTS.find(s => s.id === selectedSlot);
  const selectedCounselorObj = COUNSELORS.find(c => c.id === selectedCounselor);

  const handleWhatsApp = () => {
    const text = `*New 1-on-1 Consultation Appointment*
Ref: ${bookingRef}
Mode: ${mode === 'in-person' ? 'In-Person (Dhanmondi Office, 1st Floor, 67/B Satmasjid Rd, Opp Ibn Sina)' : 'Virtual VIP Session (Google Meet / WhatsApp Video)'}
Counselor: ${selectedCounselorObj?.name}
Date: ${selectedDateObj?.label} (${selectedDate})
Time: ${selectedSlotObj?.time} (${selectedSlotObj?.period})
Student: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Target Country: ${formData.country}
Study Level: ${formData.studyLevel}
English Status: ${formData.englishTest}
CGPA: ${formData.cgpa}
${formData.service ? `Notes: ${formData.service}` : ''}`;
    
    window.open(`https://wa.me/8801927353600?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full sm:max-w-xl rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200 animate-fade-in">
        
        {/* Header */}
        <div className="bg-slate-50/90 p-5 sm:p-6 border-b border-slate-200/80 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs">
                <Image
                  src="/logo.jpg"
                  alt="AS Education"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                  Book Free 1-on-1 Consultation
                </h2>
                <div className="flex items-center gap-1.5 text-[11px] text-brand-blue font-bold mt-0.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>British Council Certified (Reg. GAL-2023) • 0৳ File Opening Fee</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Indicator */}
          {step < 4 && (
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-200/60 text-xs">
              {[
                { num: 1, label: 'Mode & Advisor' },
                { num: 2, label: 'Date & Time' },
                { num: 3, label: 'Profile' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= s.num ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {s.num}
                  </div>
                  <span className={`font-semibold hidden sm:inline ${
                    step >= s.num ? 'text-slate-900 font-bold' : 'text-slate-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Counseling Mode & Advisor Selection */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Mode Picker */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  1. Choose Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('in-person')}
                    className={`p-4 rounded-3xl text-left border transition-all flex flex-col justify-between space-y-2 ${
                      mode === 'in-person'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Building className="w-5 h-5 text-brand-blue" />
                      {mode === 'in-person' && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block">In-Person Head Office</span>
                      <span className={`text-[11px] block mt-0.5 ${mode === 'in-person' ? 'text-slate-300' : 'text-slate-500'}`}>
                        Dhanmondi 15/A, Satmasjid Rd (Opp Ibn Sina)
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMode('virtual')}
                    className={`p-4 rounded-3xl text-left border transition-all flex flex-col justify-between space-y-2 ${
                      mode === 'virtual'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Video className="w-5 h-5 text-brand-blue" />
                      {mode === 'virtual' && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm block">Virtual VIP Session</span>
                      <span className={`text-[11px] block mt-0.5 ${mode === 'virtual' ? 'text-slate-300' : 'text-slate-500'}`}>
                        Direct Google Meet / WhatsApp HD Video
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Counselor Selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  2. Select Dedicated Counselor
                </label>
                <div className="space-y-2">
                  {COUNSELORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCounselor(c.id)}
                      className={`w-full p-4 rounded-3xl text-left border transition-all flex items-center justify-between ${
                        selectedCounselor === c.id
                          ? 'bg-blue-50/70 border-brand-blue/40 text-slate-900'
                          : 'bg-slate-50/60 border-slate-200/60 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-slate-900">{c.name}</span>
                          <span className="text-[10px] font-bold text-brand-blue bg-blue-100/60 px-2 py-0.5 rounded-full">
                            {c.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">{c.role}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        selectedCounselor === c.id ? 'border-brand-blue bg-brand-blue text-white' : 'border-slate-300'
                      }`}>
                        {selectedCounselor === c.id && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Select Date & Time Slot (Step 2)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

          {/* STEP 2: Date & Slot Selection */}
          {step === 2 && (
            <div className="space-y-6">
              
              {/* Date Selector */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Select Date (Dhanmondi Office: Sat – Thu)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableDates.map((d) => (
                    <button
                      key={d.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(d.dateStr)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedDate === d.dateStr
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-bold text-xs block">{d.label}</span>
                      <span className={`text-[10px] block mt-0.5 ${selectedDate === d.dateStr ? 'text-slate-300' : 'text-slate-400'}`}>
                        {d.dayName}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Available Time Slots (1-on-1 Guaranteed)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSlot(s.id)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedSlot === s.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      <span className="font-bold text-xs block">{s.time}</span>
                      <span className={`text-[10px] block mt-0.5 ${selectedSlot === s.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                        ● Available
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 px-8 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Student Information (Step 3)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Student Information Form */}
          {step === 3 && (
            <form onSubmit={handleConfirmBooking} className="space-y-4">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mahmodul Hasan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01712345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. student@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Target Destination</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  >
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="United States">United States (USA)</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Europe / Finland">Europe (Finland/Malta/Denmark)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">Study Level</label>
                  <select
                    value={formData.studyLevel}
                    onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  >
                    <option value="Postgraduate (Masters)">Postgraduate (Masters)</option>
                    <option value="Undergraduate (Bachelor)">Undergraduate (Bachelor)</option>
                    <option value="PhD / Doctorate">PhD / Doctorate</option>
                    <option value="Diploma / Foundation">Diploma / Foundation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">English Status</label>
                  <select
                    value={formData.englishTest}
                    onChange={(e) => setFormData({ ...formData, englishTest: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  >
                    <option value="Medium of Instruction (MOI)">MOI from Bangladeshi University</option>
                    <option value="IELTS Overall 6.5+">IELTS Overall 6.5+</option>
                    <option value="IELTS Overall 6.0">IELTS Overall 6.0</option>
                    <option value="PTE Academic">PTE Academic</option>
                    <option value="No English test yet">Need IELTS Waiver / Planning Test</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800 block">CGPA / GPA</label>
                  <input
                    type="text"
                    placeholder="e.g. 3.20"
                    value={formData.cgpa}
                    onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-hidden focus:border-brand-blue"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-8 rounded-full bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirm Free Appointment &rarr;</span>
                </button>
              </div>

            </form>
          )}

          {/* STEP 4: Confirmed Voucher & WhatsApp Action */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              
              {/* Confirmed Card */}
              <div className="p-8 rounded-[2.5rem] bg-slate-950 text-white space-y-4 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4" />
                  Appointment Confirmed
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                    Booking Reference
                  </span>
                  <div className="text-3xl font-black text-white font-mono tracking-wider">
                    {bookingRef}
                  </div>
                </div>

                {/* Appointment Snapshot */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-left space-y-2">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Counselor:</span>
                    <span className="font-bold text-white">{selectedCounselorObj?.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Date & Time:</span>
                    <span className="font-bold text-white">{selectedDateObj?.label} at {selectedSlotObj?.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400">Format:</span>
                    <span className="font-bold text-white">
                      {mode === 'in-person' ? 'Dhanmondi Office (1st Fl, 67/B Satmasjid Rd)' : 'Virtual HD Video'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Student:</span>
                    <span className="font-bold text-white">{formData.name} ({formData.country})</span>
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation to Counselor on WhatsApp &rarr;</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
                >
                  Close & Return to Website
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
