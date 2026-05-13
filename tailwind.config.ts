import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ["'Great Vibes'", "cursive"],
        sans: ["'Poppins'", "sans-serif"],
      },
      colors: {
        blueberry: {
          light: "#87CEEB",
          DEFAULT: "#4A90D9",
          dark: "#2E5A88",
          bg: "#5BA3E0",
        },
        lemon: {
          light: "#FFF176",
          DEFAULT: "#F5D547",
          dark: "#C9A030",
          bg: "#E8C840",
        },
        matcha: {
          light: "#81C784",
          DEFAULT: "#4CAF50",
          dark: "#2E7D32",
          bg: "#3D8B40",
        },
      },
    },
  },
  plugins: [],
};

export default config;
