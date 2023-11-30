/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#EBEBEB',
      offwhite: '#e6e2dc',
      black: '#141414',
      darkGray: '#282828',
      green: '#53C69C',
      darkGreen: '#358f80',
      gray: '#858585',
      error: '#CC0000',
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', fontFamily.sans],
      },
    },
  },
  plugins: [],
};
