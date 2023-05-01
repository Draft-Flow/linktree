module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.njk',
    './src/**/*.md',
    './src/_data/settings.json',
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
        df: ['Norwester', 'Arial', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
