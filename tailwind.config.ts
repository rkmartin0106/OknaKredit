import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:     "#606d9b",
          blueDark: "#210706",
          blueLight:"#868C9C",
          red:      "#891D1A",
          redLight: "#A75653",
          cream:    "#F1E6D2",
          gray:     "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(96,109,155,0.10)",
        cardHover: "0 8px 32px rgba(96,109,155,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
