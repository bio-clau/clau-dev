module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      // violeta:
      'lm-primary': '#6200ee',
      // azul:
      'lm-primaryVariant': '#3700b3',
      // verded:
      'lm-secondary': '#03dac6',
      // verde mas obscuro:
      'lm-secondaryVariant': '#018786',
      // blaco:
      'lm-background': '#ffffff',
      // blanco:
      'lm-surface': '#ffffff',
      // rojo:
      'lm-error': '#b00020',
      // tipografia blanco:
      'lm-onPrimary': '#ffffff',
      // tipografia negro:
      'lm-onSecondary': '#000000',
      //tipografia negra:
      'lm-onBackground':'#000000',
      //tipografia negra:
      'lm-onSurface':'#000000',
      //tipografia blaca:
      'lm-onError':'#ffffff',

      //lila
      'dm-primary':'#bb86fc',
      //azul
      'dm-primaryVariant':'#3700b3',
      //verde
      'dm-secondary':'#03dac6',
      //gris super obscuro
      'dm-background':'#121212',
      //gris super obscuro
      'dm-suface':'#121212',
      //rosa
      'dm-error':'#cf6679',
      // tipografia negra:
      'dm-onPrimary': '#000000',
      // tipografia negro:
      'dm-onSecondary': '#000000',
      //tipografia blanca:
      'dm-onBackground':'#ffffff',
      //tipografia blanco:
      'dm-onSurface':'#ffffff',
      //tipografia negra:
      'dm-onError':'#000000',
      //gris1
      'dm-overlay1':'#272727',
      'dm-overlay2':'#222222',
      'dm-overlay3':'#2c2c2c',
      'dm-overlay4':'#373737',
      'dm-shadow':'#b5bdab',
      'dm-hover': '#2c2c2cb3'
    },
    extend: {
      backgroundImage:{
      
        "Poke": "url('https://res.cloudinary.com/tropura/image/upload/v1654188012/Portfolio/Poke/landing_cmoik6.png')",
        "Poke-hover": "url('https://res.cloudinary.com/tropura/image/upload/v1654188012/Portfolio/Poke/landing-hover_umb641.png')",
        "Home": "url('https://res.cloudinary.com/tropura/image/upload/v1654188084/Portfolio/mc/home_ptxcom.png')",
        "Home-hover": "url('https://res.cloudinary.com/tropura/image/upload/v1654188085/Portfolio/mc/home-hover_yrpzkh.png')",
      },
    },

  },
  plugins: [],
}
