/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/Components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),

  ],
}
