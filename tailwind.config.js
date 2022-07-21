const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './frontend/**/*.{js,ts,jsx,tsx}'],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        primary: {
          pink5: '#FFF5FB',
          pink4: '#1A000F',
          pink3: '#4D002C',
          main: '#D7007B',
        },
        secondary: {
          main: '#BF00FF',
        },
        grey: {
          4: '#131820',
          3: '#253041',
          2: '#384861',
          1: '#4A5F82',
          main: '#5D77A2',
          m_1: '#7D92B5',
          m_2: '#9EAEC7',
          m_3: '#BEC9DA',
          m_4: '#EFF1F6',
          bg: '#343333',
        },
        green: {
          main: '#55C388',
        },
        yellow: {
          main: '#EFC906',
        },
        red: {
          main: '#D73333',
        },
        bg: {
          main: '#00113C',
          main_nav: '#060D33',
        },
      },
      fontSize: {
        56: '56px',
        42: '42px',
        32: '32px',
        15: '15px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      inset: {
        350: '350px',
        400: '400px',
      },
    },
  },
  plugins: [],
};
