export const theme = Object.freeze({
	colors: {
		white: "#ffffff",
		grey: "#4d5d53",
		greyBg: "#eee8cd",
		greyOpacity: "rgba(47, 48, 58, 0.1)",
		green: "#4caf50",
		red: "#f44336",
		tableHead: "#423a8a",
		primaryText: "#2b2b2b",
		secondaryText: "#757575",
		tableText: "#afb1b8",
		boxShadow:
			"0px 1px 3px rgba(0, 0, 0, 0.32), 0px 2px 2px rgba(0, 0, 0, 0.34), 0px 2px 1px rgba(0, 0, 0, 0.42)",
	},
	fonts: {
		secondary: "'Work Sans', sans-serif",
	},
	spacing: (value) => `${4 * value}px`,
});
