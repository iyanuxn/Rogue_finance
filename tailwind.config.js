/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Plus Jakarta Sans",
        secondary: "Chakra Petch",
      },
    },
  },
  plugins: [],
};
