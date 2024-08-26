import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#272826",
			secondary: "#C1FF83",
			tertiary: "#2D2E30",
			gray: "#222321",
			white: "#FFFBED",
			black: "#18191B",
		},
		fontFamily: {
			display: ["BomstadDisplay-Regular"],
			sans: ["BlauerNue-Regular"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
