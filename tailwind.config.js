/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // Official Facebook Page Branding: AS EDUCATION
          blue:        '#17438C',
          'blue-dark': '#0E2A5C',
          'blue-vibrant': '#2563EB',
          'blue-light':'#EFF6FF',
          'blue-subtle': '#DBEAFE',
          
          // Official Golden Amber Accent
          amber:       '#F59E0B',
          'amber-hover':'#D97706',
          'amber-light':'#FEF3C7',
          'amber-dark':'#B45309',

          // Official Social & Trust Colors
          facebook:    '#1877F2',
          whatsapp:    '#25D366',
          emerald:     '#10B981',
          'emerald-light': '#ECFDF5',

          // Clean Luxury White Surfaces
          bg:          '#FFFFFF',
          surface:     '#F8FAFC',
          'surface-card': '#FFFFFF',
          muted:       '#F1F5F9',
          border:      '#E2E8F0',
          'border-dark': '#CBD5E1',

          // High-End Typography
          navy:        '#0F2444',
          text:        '#0F172A',
          body:        '#334155',
          subtle:      '#64748B',
          faint:       '#94A3B8',
        }
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-heading)', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 4px 25px -4px rgba(23, 67, 140, 0.08), 0 2px 10px -2px rgba(15, 23, 42, 0.04)',
        'luxury-hover': '0 20px 40px -10px rgba(23, 67, 140, 0.16), 0 8px 20px -4px rgba(15, 23, 42, 0.06)',
        'btn-blue': '0 4px 16px rgba(23, 67, 140, 0.28)',
        'btn-amber': '0 4px 16px rgba(245, 158, 11, 0.32)',
        'btn-green': '0 4px 16px rgba(37, 211, 102, 0.28)',
        'card': '0 1px 3px rgba(15, 23, 42, 0.05), 0 10px 25px -5px rgba(15, 23, 42, 0.04)',
      },
      borderRadius: {
        'sm':  '0.375rem',
        'md':  '0.5rem',
        'lg':  '0.75rem',
        'xl':  '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16,1,0.3,1)',
        'fade-up': 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
