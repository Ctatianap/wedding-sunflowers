/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8A9A5B',  // Verde oliva (hojas)
          200: '#4F6D49',  // Verde oscuro (tallos)
          300: '#4b634e',  // Verde oscuro (tallos)
          400: '#d5d7c7',  // Marrón tierra
          default: '#4F6D49', // Verde oscuro
        },
        secondary: {
          100: '#F4C542',  // Amarillo cálido (pétalos)
          200: '#E28F41',  // Naranja suave
          300: '#8B5E3C',  // Marrón tierra
        },
        tertiary: {
          100: '#F7E6C4',  // Beige claro
          200: '#F4C542',  // Amarillo cálido
        },
        gray: {
          10: '#F9F9F9',
          100: '#f7fafc',
          400: '#77797e',
          900: '#1a202c',
        },
        cream: {
          50: '#fdfaf7',
          100:' #efede7',  
          200:'#faf7f3',// Beige claro
          300: '#ebebe8',  // Beige claro

          default: '#fdfaf7',  // Beige claro para fondo
        },
        purple: {
          default: '#b29db2'
        },
        yellow: {
          default: '#F4C542', // Amarillo cálido
          10: '#F7E6C4',     // Beige claro
          100: '#e8c17a', 
          50: '#a09f7de6',    // Amarillo cálido
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
    },
  },
  plugins: [],
}