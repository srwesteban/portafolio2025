import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        pressstart: ["var(--font-pressstart)", "monospace"],
        retro: ["var(--font-vt323)", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
