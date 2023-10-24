/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DotGothic16': ['DotGothic16', 'sans-serif'],
        'Hero' : ['Sedgwick Ave Display', 'cursive']
      }
    },
  },
  plugins: [],
}