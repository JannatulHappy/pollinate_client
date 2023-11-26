/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif", // Adds a new `font-display` class
      },
      colors: {
        primary: "#5f63ff",
        secondary: "#1d1d36",
      },
      maxWidth: {
        "7xl": "1320px",
      },
    },
  },
  plugins: [],
};
