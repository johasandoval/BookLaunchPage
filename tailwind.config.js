/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "476px",
        // => @media (min-width: 476px) { ... }
      },
      colors: {
        primaryB: "#13222c", // Azul oscuro
        primaryD: "#0C1915", // Azul verde Oscuro
        gold: "#B5AE8F", // Dorado
        background: "#517A8B", // Gris Claro azulado
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
