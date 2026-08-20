'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div 
      id="floating-speed-dial" 
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 font-sans select-none"
    >
      {/* Action Buttons Staggered Upwards */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-end gap-3.5"
          >
            {/* 1. Facebook Messenger (Blue) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              transition={{ duration: 0.25, delay: 0.12 }}
              className="flex items-center gap-2.5 group"
            >
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Facebook Messenger
              </span>
              <a
                href="https://m.me/aseducationbd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0084FF] hover:bg-[#0072de] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-blue-500/30 transition-transform hover:scale-110 border-2 border-white"
                aria-label="Chat on Facebook Messenger"
              >
                {/* Official Messenger SVG Icon */}
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.517 3.736 7.202V22l3.39-1.86c.91.252 1.875.388 2.874.388 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.042 12.443l-2.67-2.846-5.213 2.846 5.736-6.088 2.738 2.846 5.145-2.846-5.736 6.088z"/>
                </svg>
              </a>
            </motion.div>

            {/* 2. Direct Call (Green) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              transition={{ duration: 0.25, delay: 0.06 }}
              className="flex items-center gap-2.5 group"
            >
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                Call Hotline: +880 1927-353600
              </span>
              <a
                href="tel:+8801927353600"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#10B981] hover:bg-[#059669] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-transform hover:scale-110 border-2 border-white"
                aria-label="Call AS Education Hotline"
              >
                <Phone className="w-6 h-6 fill-white" />
              </a>
            </motion.div>

            {/* 3. WhatsApp (Vibrant Green) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              transition={{ duration: 0.25, delay: 0 }}
              className="flex items-center gap-2.5 group"
            >
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp Counselor
              </span>
              <a
                href="https://wa.me/8801927353600?text=Hello%20AS%20Education,%20I%20would%20like%20to%20get%20study%20abroad%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-green-500/30 transition-transform hover:scale-110 border-2 border-white"
                aria-label="Chat on WhatsApp"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-colors duration-300 border-2 border-white relative ${
          open ? 'bg-[#15803D]' : 'bg-[#16A34A] hover:bg-[#15803D]'
        }`}
        aria-label="Open Contact Options"
      >
        {/* Soft Pulse Ring when Closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none" />
        )}

        {open ? (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-7 h-7 stroke-[2.5]" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {/* Exactly matches the 3-dots chat icon in the user's screenshot */}
            <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
