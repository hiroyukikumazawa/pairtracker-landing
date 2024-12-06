/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepSpace: '#0D1117',
        electricBlue: '#3B82F6',
        neonGreen: '#10B981',
        slateGray: '#64748B',
        vibrantPink: '#EC4899',
        brightYellow: '#F59E0B',
        purpleHaze: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backdropBlur: {
        xs: '4px',
      },
      boxShadow: {
        neon: '0 0 10px rgba(59, 130, 246, 0.7)',
      },
    },
  },
  plugins: [],
};
