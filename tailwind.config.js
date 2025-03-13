/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primario': '#272727',
        'Secundario': '#313133',
        'Terciario': '#4f4f4f',
        'Negro': '#000000',
        'Blanco': 'ffffff',
      }
    },
  },
  plugins: [],
}

