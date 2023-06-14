/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#151515',
      darkGray: '#212121',
      gray: '#858585',
      green: '#197E59',
      lightGreen: '#53C69C',
      red: '#CC0000',
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
