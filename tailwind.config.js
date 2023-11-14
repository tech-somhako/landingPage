/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "1rem"
		},
		fontWeight: {
			thin: "50",
			hairline: "100",
			extralight: "150",
			light: "200",
			normal: "250",
			medium: "300",
			semibold: "450",
			bold: "400",
			extrabold: "500",
			"extra-bold": "600",
			black: "700"
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins"]
			},
			colors: {
				// primary: "#5500FF",
				primary: "#0066ff",
				// secondary: "#6433c5",
				secondary: "#3358c5",
				lightBlue: "#F5F8FA",
				lightGray: "#BEBEBE",
				darkGray: "#727272",
				// gradLightBlue: "#9290FC",
				gradLightBlue: "#90b6fc",
				// gradDarkBlue: "#6A67EA",1
				gradDarkBlue: "#67a0ea",
				// gradDarkBlue: "#4E76DC",
				borderColor: "#e5e7eb"
			},
			boxShadow: {
				normal: "0 0 10px rgba(0, 0, 0, 0.1)",
				highlight: "0 5px 10px rgba(0, 0, 0, 0.2)"
			},
			borderRadius: {
				normal: "12px",
				large: "26px"
			}
		}
	},
	plugins: [require("@tailwindcss/forms")]
};
