module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        yellow: '#f0aa07',
        dark: '#0e153a'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      backgroundImage: {
        "exercise-image": "url('/img/exercise-timer-app-home.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },

}
