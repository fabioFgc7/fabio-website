/** @type {import('tailwindcss').Config} */
import animatedCss from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animatedCss],
};
