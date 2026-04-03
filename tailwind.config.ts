import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B90007',
        accent: '#B90007',
        'primary-dark': '#9A0006',
        'primary-light': '#D4000A',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
