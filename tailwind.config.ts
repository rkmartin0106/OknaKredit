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
          navy:    "#1a3c5e",
          navyDark:"#112840",
          navyLight:"#2a5480",
          gold:    "#c9a84c",
          goldLight:"#e0c068",
          cream:   "#f8f5f0",
          gray:    "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(26,60,94,0.10)",
        cardHover: "0 8px 32px rgba(26,60,94,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
