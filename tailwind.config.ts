import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/hero-bg.png')",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk, sans-serif"],
      },
      spacing: {
        "19": "4.875rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
