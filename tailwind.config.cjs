import colors from "tailwindcss/colors";
delete colors.lightBlue;
delete colors.blueGray;
delete colors.coolGray;
delete colors.trueGray;
delete colors.warmGray;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Nunito", "sans-serif"],
			display: ["Orbitron"],
		},
		colors: {
			...colors,
			"brand-red": "#bf013d",
			"brand-blue": "#184287",
		},
		extend: {},
	},
	plugins: [],
};
