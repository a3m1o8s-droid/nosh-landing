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
          orange: "#FF6B35",
          "orange-dark": "#E55A28",
          green: "#2D5016",
          "green-light": "#3D6B20",
          cream: "#FFF8F0",
          "cream-dark": "#FFF0E0",
          yellow: "#FFB800",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "swipe-right": {
          "0%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateX(120%) rotate(12deg)", opacity: "0" },
        },
        "swipe-left": {
          "0%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateX(-120%) rotate(-12deg)", opacity: "0" },
        },
        "card-enter": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "swipe-right": "swipe-right 0.5s ease-in forwards",
        "swipe-left": "swipe-left 0.5s ease-in forwards",
        "card-enter": "card-enter 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
