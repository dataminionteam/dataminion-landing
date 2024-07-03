/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grayOverlay: "#22222266",
      // Imported from main app
      black: "#000000",
      white: "#ffffff",
      whiteOverlay: "#f0f0f0db",
      gray: "#efeeee",
      slate: "#c5c6c8",
      purple: "#6e55f4",
      purple2: "#77459A",
      purpleDark: "#4f42d3",
      aqua: "#00b9d5",
      darkOverlay: "#000000aa",
      darkBlueOverlay: "#081123bf",
      red: "#ce0052",
      orange: "#faa919",
      blue: "#1e88e5",
    },
    backgroundImage: {
      "color-pattern": "url('/background.jpg')",
    },
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        publicSansItalic: ["Public Sans Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
