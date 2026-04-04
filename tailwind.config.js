/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        // Primary — warm golden honey
        primary: {
          50: '#fef9ec',
          100: '#fceec5',
          200: '#f8dfa0',
          300: '#f0cb6a',
          400: '#e4b544',
          500: '#c9952e',
          600: '#9a7023',
          700: '#6b4e1a',
        },
        // Secondary — warm plum
        secondary: {
          50: '#f5f0f6',
          100: '#e4d5e8',
          200: '#cbaed3',
          300: '#af87ba',
          400: '#9668a2',
          500: '#7a5186',
          600: '#5c3d65',
          700: '#3e2944',
        },
        // Accent — muted sage teal (healthcare trust)
        accent: {
          50: '#eef6f6',
          100: '#c9e4e6',
          200: '#9dcdd1',
          300: '#72b3b9',
          400: '#5a9da4',
          500: '#467b81',
          600: '#345c60',
          700: '#233f42',
        },
        // Warm neutrals
        neutral: {
          50: '#fdfcfa',
          100: '#f7f5f0',
          200: '#ede9e0',
          300: '#ddd6c9',
          400: '#b8ae9e',
          500: '#958b7b',
          600: '#6e6558',
          700: '#4a4338',
          800: '#2d2822',
          900: '#1a1714',
        },
        // Semantic
        error: {
          light: '#fdf0ef',
          DEFAULT: '#c44d45',
          dark: '#943a34',
        },
        success: {
          light: '#eef7ee',
          DEFAULT: '#3a7d3a',
        },
        // Legacy aliases for compatibility
        haero: {
          'yellow-50': '#fef9ec',
          'yellow-100': '#fceec5',
          'yellow-200': '#f8dfa0',
          'yellow-300': '#f0cb6a',
          'yellow-400': '#e4b544',
          yellow: '#e4b544',
          'yellow-600': '#c9952e',
          'yellow-700': '#9a7023',
          cream: '#fdfcfa',
          dark: '#2d2822',
          'gray-700': '#4a4338',
          'gray-500': '#958b7b',
          'gray-300': '#ddd6c9',
          'gray-100': '#f7f5f0',
          red: '#c44d45',
          blue: '#467b81',
        }
      },
      boxShadow: {
        'raised': '0 1px 4px rgba(45,40,34,0.06)',
        'lifted': '0 4px 16px rgba(45,40,34,0.08)',
        'floating': '0 8px 30px rgba(45,40,34,0.12)',
        'glow-primary': '0 4px 20px rgba(228,181,68,0.20)',
        'glow-accent': '0 4px 20px rgba(90,157,164,0.15)',
        'inner-soft': 'inset 0 2px 4px rgba(45,40,34,0.04)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
