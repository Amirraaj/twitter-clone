/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1375px',
      xl: '1440px',
    },
    colors: {
      'dark': '#000',
      'light':'#fff',
      'hover-white': '#4E5479',
      'blue': '#1C9BF0',
      'dark-blue':'#1087D6',
      'hover-dark':"#242222",
      'divider-color':'#666363',
    },
    extend: {},
  },
  plugins: [],
}