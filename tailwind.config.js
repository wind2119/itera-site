/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        neonBlue: '#00F2FF',
        neonPurple: '#7000FF',
      },
    },
  },
  plugins: [],
}
