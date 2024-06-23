/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        // => @media (min-width: 476px) { ... }
      },
      colors: {
        primaryBlue: "#13222c", // Azul oscuro
        gold: "#B5AE8F", // Dorado
        secundaryGray: "#517A8B", // Gris Claro azulado
        light: "#FFE684", // amarillo
        text: "#FFFFFF", // blanco
        action: "#fdb44d", // dorado
      },
      fontFamily: {
        cinzel: ["Cinzel Decorative", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "bg-pattern": "url('src/assets/images/backgroundStars.jpg')",
        "backg-pattern": "url('src/assets/images/backgOnlyStars.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
