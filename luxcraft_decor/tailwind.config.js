/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'decor':{
          100: '#C3E2C2',
          200: '#EAECCC',
          300: '#DBCC95',
          400: '#CD8D7A'
        }
      }
    },
  },
  plugins: [],
}

