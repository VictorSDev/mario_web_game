import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'pipe-run': 'pipe-run 1.5s infinite linear',
        'mario-jump': 'mario-jump 500ms ease-out',
        'clouds-fly': 'clouds-fly 10s infinite linear',
      },
      keyframes: {
        'pipe-run': {
          '0%': { right: '-10%' },
          '100%': { right: '100%' },
        },
        'mario-jump': {
          '0%': { bottom: '0' },
          '40%': { bottom: '150px' },
          '60%': { bottom: '150px' },
          '100%': { bottom: '0' },
        },
        'clouds-fly': {
          '0%': { rigth: '-400px' },
          '100%': { right: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        marioFont: ['custom', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
