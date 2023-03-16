/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3461FF',
        secondary: '#FAFAFA',
        accent: '#FF2A48',
        neutral: '#25222A',
        'base-100': '#ffffff',
        info: '#1139cc',
        success: '#49cd56',
        warning: '#ffd60a',
        error: '#F24A6E',
      }
    }
  },
  plugins: [],
}