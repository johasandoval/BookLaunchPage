/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryD: '#0C1915',      // Azul Oscuro
        gold: '#B5AE8F',    // Dorado
        background: '#517A8B',   // Gris Claro
        light: '#FFE684',        // Blanco
        text: '#FFFFFF'          // Color del texto
      },
      fontFamily: {
        cinzel: ['Cinzel Decorative', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
