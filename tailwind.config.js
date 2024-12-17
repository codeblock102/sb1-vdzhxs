/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00274D',
        secondary: '#00A9E0',
        light: '#F5F5F5',
      },
    },
  },
  plugins: [],
};