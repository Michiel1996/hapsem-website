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
        /* Rustige medische kleurenpalet — premium privékliniek */
        medical: {
          50: "#f4f9fc",
          100: "#e8f2f8",
          200: "#c5dde9",
          300: "#9fc4d8",
          400: "#6fa3be",
          500: "#4a849f",
          600: "#3a6a82",
          700: "#2f5568",
          800: "#284556",
          900: "#233a48",
        },
        cream: {
          50: "#fdfcfa",
          100: "#f9f7f3",
        },
        gold: {
          400: "#c9a962",
          500: "#b8954a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(42, 85, 104, 0.08)",
        card: "0 8px 32px -8px rgba(42, 85, 104, 0.12)",
        glow: "0 0 40px -10px rgba(74, 132, 159, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
