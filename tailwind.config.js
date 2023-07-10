/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        mainBg: '#4A55A2',
        secBg: '#7895CB',
        thBg: '#A0BFE0',
        fthBg: '#C5DFF8'
      }
    },
  },
  plugins: [],
}

