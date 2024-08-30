/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.252rem',
      '6xl': '3.815rem',
      '7xl': '4.768rem',
      '8xl': '6.445rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}