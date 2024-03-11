/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      

      colors: {
        background: "#090E16",
        roxo: "#7B4AE2"
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif']
      },
      
      
    },
  },
  plugins: [],
}

