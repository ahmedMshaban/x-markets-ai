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
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk, sans-serif"],
        syne: ["Syne, sans-serif"],
      },
      spacing: {
        "19": "4.875rem",
      },
      fontSize: {
        "15px": "15px",
        "20px": "20px",
        "48px": "48px",
      },
      lineHeight: {
        "120": "120%",
        "160": "160%",
      },
      letterSpacing: {
        "5.4": "5.4px",
        "1.44": "1.44px",
      },
      maxWidth: {
        "421": "421px",
        "400": "400px",
        "518": "518px",
        "1226": "1226px",
      },
    },
    container: {
      center: true,
    },

    colors: {
      customGray: {
        light: "#F1F0F7",
        medium: "#333333",
        dark: "#292929",
      },
    },
  },
  plugins: [],
};
export default config;
