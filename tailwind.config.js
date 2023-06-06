/** @type {import('tailwindcss').Config} */
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
      },
      lineHeight: {
        'extra-tight': '1.1',
        '12': '3rem',
      },
      animation: {
        button_click: 'wiggle 200ms ease-in-out',
        slideIn: 'slideIn 0.3s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}

