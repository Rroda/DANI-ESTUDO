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
        background: "#09090b", // grafite bem escuro
        foreground: "#fafafa",
        primary: {
          DEFAULT: "#FF5A00", // laranja queimado
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#39FF14", // verde neon discreto
          foreground: "#09090b",
        },
        card: {
          DEFAULT: "#121214",
          foreground: "#fafafa",
        },
        border: "#27272a",
        muted: "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
};
export default config;
