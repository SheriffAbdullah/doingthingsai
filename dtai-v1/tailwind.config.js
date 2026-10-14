/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light':   '#F2F0ED',
        'bg-dark':    '#0E1A2B',
        'bg-dark-2':  '#162236',
        'accent':     '#F05A28',
        'navy':       '#0E1A2B',
        'navy-mid':   '#1F3552',
        'cream':      '#F9F9F9',
        'footer-from':'#E8E2D9',
        'footer-to':  '#F2F0EC',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill':   '12px',
        'inset':  '12px',
        'card':   '12px',
        'card-lg':'12px',
        'tag':    '6px',
      },
      boxShadow: {
        'card':   '0 8px 32px rgba(14,26,43,0.10)',
        'fan':    '0 20px 60px rgba(14,26,43,0.22)',
        'orange': '0 8px 24px rgba(240,90,40,0.30)',
        'lift':   '0 4px 20px rgba(14,26,43,0.12)',
      },
      letterSpacing: {
        'tight-sm': '-0.01em',
        'tight':    '-0.02em',
        'tight-lg': '-0.03em',
        'wide': '0.08em',
      },
      lineHeight: {
        'display': '1.05',
        'heading': '1.12',
      },
      animation: {
        'marquee':  'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'fade-up':  'fadeUp 0.6s cubic-bezier(0.19,1,0.22,1) forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
