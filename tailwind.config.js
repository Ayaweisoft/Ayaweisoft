/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark':"#2D2D2D",
        'grey':"#516371",
        'grey-light':"#8FA0AD",
        'grey-lighter':"#A7ABB6",
        'green':"#00AC47",
        'grey2':"#f7f7f7",
        'off-white':"#D1D4DC",
        'blue':"#4A8CFF",
        'ash': '#B3B3B3'
      },
      padding: {
        'main': '7rem',
        'sub': '10.5rem',
        'sub2': '12rem'
      },  
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        asap: ['Asap', 'sans-serif'],
      },
      backgroundImage: {
        'bg1': "url('src/assets/bg.svg')",
        'img1': "url('src/assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg')",
        'img2': "url('src/assets/agung-raharja-urbSCgUxfQ0-unsplash.jpg')",
        'img3': "url('src/assets/anthony-garand-5sT07dJl65s-unsplash.jpg')",

      },
      lineHeight: {
        'extra-tight': '1.1',
        '12': '3rem',
      },
      animation: {
        button_click: 'wiggle 200ms ease-in-out',
        slideIn: 'slideIn 0.3s linear infinite',
        animate: 'animate 15s linear infinite',
        'animate-rev': 'animate-rev 15s linear infinite',
        zoom: 'zoom 0.3s linear',
      }
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}

