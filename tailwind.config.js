const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        font: 'var(--font-color)',
        bg: 'var(--bg-color)',
        'bg-light': 'var(--bg-light-color)'
      },
      fontFamily: {
        all: ['Alaska', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
