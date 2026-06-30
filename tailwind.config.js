import { createTailwindPreset } from '@sudobility/design';

/** @type {import('tailwindcss').Config} */
export default {
  // Maps the design system's semantic tokens (bg-primary, border-input, ...) to
  // hsl(var(--primary)) etc. The variable values come from index.css (:root /
  // .dark), so the design components are theme-aware and flip light/dark.
  presets: [createTailwindPreset()],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sudobility/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sudobility/building_blocks/**/*.{js,ts,jsx,tsx}',
    './node_modules/@sudobility/design/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
