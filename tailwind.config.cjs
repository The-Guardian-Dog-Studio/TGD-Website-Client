/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      display: ["Orbitron"],
    },
    colors: {
      "brand-red": "#bf013d",
      "brand-blue": "#184287",
    },
    extend: {},
  },
  plugins: [],
};
