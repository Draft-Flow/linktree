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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
