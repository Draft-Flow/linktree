module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/_data/settings.json',
    './src/_data/links.json',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'df-blue': '#121E44',
      },
      colors: {
        'df-tan': {
          DEFAULT: '#f0eee3',
        }
      },
      fontFamily: {
        base: ['Arial', 'sans-serif'],
        df: ['Norwester', 'Arial', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
