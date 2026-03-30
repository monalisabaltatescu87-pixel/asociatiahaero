/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haero: {
          red: '#D32F2F',
          yellow: '#FBC02D',
          blue: '#1976D2',
          dark: '#2D2D2D',
        }
      }
    },
  },
  plugins: [],
}
