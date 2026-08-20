'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const REELS = [
  { 
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2232269580897765%2F&show_text=false&width=357&t=0", 
    country: 'UK Visa', 
    title: 'University of Hertfordshire Offer',
    student: 'Rafiqul Islam'
  },
  { 
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2548282062357181%2F&show_text=false&width=355&t=0", 
    country: 'Australia Visa', 
    title: 'Western Sydney Univ. Spouse Visa',
    student: 'Tasnim Akter'
  },
  { 
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1330477235507859%2F&show_text=false&width=267&t=0", 
    country: 'Canada Visa', 
    title: 'Algonquin College PGWP Pathway',
    student: 'Mehedi Hasan'
  },
];

export default function VideoReelsSection({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Minimal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-800 text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Verified Video Experiences
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Real Journeys.<br/>
            <span className="text-slate-300 font-medium">Real Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Watch unscripted interviews and visa grant celebrations straight from our students.
          </p>
        </motion.div>

        {/* Staggered Phone Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12 pb-12">
          {REELS.map((reel, idx) => {
            const isMiddle = idx === 1;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: isMiddle ? 32 : 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`flex flex-col group max-w-[300px] mx-auto w-full ${isMiddle ? 'md:translate-y-12' : ''}`}
              >
                
                {/* 3D Phone Mockup Container */}
                <div className="relative w-full h-[492px] bg-slate-900 rounded-[2.5rem] p-2 border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.15)] group-hover:shadow-[0_30px_60px_rgba(37,99,235,0.2)] group-hover:-translate-y-3 transition-all duration-700 ease-out">
                  
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-end justify-center pb-2">
                    <div className="w-12 h-1 bg-black/50 rounded-full" />
                  </div>

                  {/* Inner Screen */}
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative z-10 flex flex-col items-center justify-center">
                    <iframe
                      src={reel.src}
                      width="100%"
                      height="476"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={reel.title}
                      className="w-full h-[476px] object-cover scale-[1.01]"
                    />
                  </div>
                  
                  {/* Phone Rim Highlight */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />
                </div>

                {/* Minimal Text Below Phone */}
                <div className="mt-8 px-2 text-center md:text-left transition-transform duration-500 group-hover:translate-x-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-blue transition-colors duration-500" />
                    <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                      {reel.country}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                    {reel.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {reel.student}
                  </p>
                </div>
                
              </motion.div>
            );
          })}
        </div>
        
        {/* Watch All on Facebook Link */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.facebook.com/aseducationbd/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-brand-blue transition-colors"
          >
            <span className="pb-1 border-b-2 border-slate-900 group-hover:border-brand-blue transition-colors">
              Watch All Video Interviews on Facebook
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
