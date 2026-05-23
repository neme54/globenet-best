import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', 'Raleway', 'sans-serif'],
        display: ['var(--font-raleway)', 'Raleway', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A56DB',
          dark: '#1035A0',
          light: '#3B82F6',
        },
        logo: '#2B7FFF',
        glow: '#60A5FA',
        accent: '#2563EB',
        brand: {
          bg: '#F0F7FF',
          surface: '#FFFFFF',
          text: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
          footer: '#1A56DB',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #F0F7FF 0%, #DBEAFE 50%, #EFF6FF 100%)',
        'blue-gradient':
          'linear-gradient(135deg, #1A56DB 0%, #2B7FFF 50%, #2563EB 100%)',
      },
      boxShadow: {
        logo: '0 8px 32px rgba(43, 127, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
