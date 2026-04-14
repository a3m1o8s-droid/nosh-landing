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
        dark: {
          950: "#141418",
          900: "#181820",
          800: "#1E1E24",
          700: "#282830",
          600: "#32323C",
          surface: "#1E1E24",
        },
        gold: {
          DEFAULT: "#D4A843",
          light: "#E8C36A",
          dark: "#B8912E",
          50: "#FDF8ED",
          100: "#F9ECCC",
          200: "#F0D48E",
          300: "#E8C36A",
          400: "#D4A843",
          500: "#B8912E",
          600: "#96741F",
          700: "#745A18",
          800: "#524012",
          900: "#30260B",
        },
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "swipe-hint": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(20px) rotate(2deg)" },
          "75%": { transform: "translateX(-20px) rotate(-2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "city-glow": {
          "0%, 100%": { color: "rgba(255,255,255,0.3)" },
          "50%": { color: "#E8C36A", textShadow: "0 0 20px rgba(212,168,67,0.4)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "swipe-hint": "swipe-hint 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 4s ease-in-out infinite",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "city-glow": "city-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
