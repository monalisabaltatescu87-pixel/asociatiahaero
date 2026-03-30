/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        haero: {
          'yellow-50': '#FFFDE7',
          'yellow-100': '#FFF9C4',
          'yellow-200': '#FFF59D',
          'yellow-300': '#FFF176',
          'yellow-400': '#FFEE58',
          yellow: '#FBC02D',
          'yellow-600': '#F9A825',
          'yellow-700': '#F57F17',
          cream: '#FFFEF5',
          dark: '#2D2926',
          'gray-700': '#44403C',
          'gray-500': '#78716C',
          'gray-300': '#D6D3D1',
          'gray-100': '#F5F5F4',
          red: '#D32F2F',
          blue: '#1976D2',
        }
      },
      boxShadow: {
        'raised': '0 1px 3px rgba(45,41,38,0.08)',
        'lifted': '0 4px 12px rgba(45,41,38,0.10)',
        'floating': '0 8px 24px rgba(45,41,38,0.12)',
      },
    },
  },
  plugins: [],
}
