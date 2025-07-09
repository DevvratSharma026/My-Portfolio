/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '.light'],
  theme: {
    extend: {
      colors: {
        space: {
          50: 'var(--space-50)',
          100: 'var(--space-100)',
          200: 'var(--space-200)',
          300: 'var(--space-300)',
          400: 'var(--space-400)',
          500: 'var(--space-500)',
          600: 'var(--space-600)',
          700: 'var(--space-700)',
          800: 'var(--space-800)',
          900: 'var(--space-900)',
          950: 'var(--space-950)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.5)',
      },
    },
  },
  plugins: [],
};