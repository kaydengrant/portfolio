/** @type {import('tailwindcss').Config} */
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
      gray: '#848FA5',
      green: '#197E59',
      lightGreen: '#53C69C',
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
      fontFamily: {
        rubik: 'Rubik',
      },
    },
  },
  plugins: [],
};
