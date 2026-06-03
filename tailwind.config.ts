import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D08A',
          dark: '#A0622A',
        },
        navy: {
          DEFAULT: '#1A2340',
          light: '#1E2A4A',
          card: '#243058',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#F0EBE3',
        },
        taupe: {
          DEFAULT: '#E8E0D4',
        },
      },
      fontFamily: {
        heebo: ['var(--font-heebo)', 'sans-serif'],
        assistant: ['var(--font-assistant)', 'sans-serif'],
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

