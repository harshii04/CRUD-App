/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brandBlue: "#141E35",
      brandLightBlue: "#1363DF",
      blueGray50: "#F8FAFC",
      blueGray100: "#F1F5F9",
      blueGray200: "#E1E7EF",
      blueGray400: "#9EACC0",
      blueGray500: "#65758B",
      blueGray700: "#344256",
      blueGray900: "#141E35",
      hilightGreen: "#16A249",
      hilightMetal: "#334256",
      pillLightGreen: "#B7EDC8",
      pillTextGreen: "#295D3E",
      pillLightRed: "#F8E3DF",
      pillTextRed: "#8F2325",
      iconActive: "#F8FAFC",
      iconDefault: "#9EACC0",
    },
    extend: {
      boxShadow: {
        subtle: "0px 1px 2px 0px rgba(14, 24, 41, 0.05)",
        solidGrey: "0px 0px 0px 1px rgba(158, 172, 192, 1);",
      },
    },
  },
  plugins: [],
};
