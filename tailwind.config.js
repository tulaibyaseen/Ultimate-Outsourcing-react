/** @type {import('tailwindcss').Config} */
import colors from "./src/assets/theme/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"], // Inter font
        serif: "serif",
        lato: ["Lato", "sans-serif"], // Lato font add kiya
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
