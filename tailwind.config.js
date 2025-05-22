import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primaryBlue: {
          50: "#ebf1fb", // Light
          100: "#e2e9f8", // Light :hover
          200: "#c2d2f1", // Light :active
          300: "#3b6ed3", // Normal
          400: "#3563be", // Normal :hover
          500: "#2f58a9", // Normal :active
          600: "#2c539e", // Dark
          700: "#232f47", // Dark :hover
          800: "#1b315f", // Dark :active
          900: "#15274a", // Darker
        },
        secondaryBlue: {
          50: "#f1f5fd", // Light
          100: "#e9f0fd", // Light :hover
          200: "#d2e0fa", // Light :active
          300: "#6e9aef", // Normal
          400: "#638bd7", // Normal :hover
          500: "#587bbf", // Normal :active
          600: "#5374b3", // Dark
          700: "#425c8f", // Dark :hover
          800: "#31456c", // Dark :active
          900: "#273654", // Darker
        },
        backgroundBlue: {
          50: "#ebf1f6", // Light
          100: "#e1e6f2", // Light :hover
          200: "#c0cce3", // Light :active
          300: "#355ba5", // Normal
          400: "#305295", // Normal :hover
          500: "#2a4984", // Normal :active
          600: "#28447c", // Dark
          700: "#203763", // Dark :hover
          800: "#18294a", // Dark :active
          900: "#13203a", // Darker
        },
        gray: {
          50: "#ffffff", // Light
          100: "#ffffff", // Light :hover
          200: "#ffffff", // Light :active
          300: "#ffffff", // Normal
          400: "#ebebeb", // Normal :hover
          500: "#cccccc", // Normal :active
          600: "#bfbfbf", // Dark
          700: "#999999", // Dark :hover
          800: "#737373", // Dark :active
          900: "#4d4d4d", // Darker
        },
        black: {
          50: "#e6e6e6", // Light
          100: "#d9d9d9", // Light :hover
          200: "#b0b0b0", // Light :active
          300: "#000000", // Normal
          400: "#000000", // Normal :hover
          500: "#000000", // Normal :active
          600: "#000000", // Dark
          700: "#000000", // Dark :hover
          800: "#000000", // Dark :active
          900: "#000000", // Darker
        },
        error: {
          50: "#fbe8e8", // Light
          100: "#f9dcdc", // Light :hover
          200: "#f2b7b8", // Light :active
          300: "#d51619", // Normal
          400: "#c01417", // Normal :hover
          500: "#aa1214", // Normal :active
          600: "#a01113", // Dark
          700: "#800d0f", // Dark :hover
          800: "#6a0b0b", // Dark :active
          900: "#4b0809", // Darker
        },
        success: {
          50: "#ecf7f0", // Light
          100: "#e2f3e8", // Light :hover
          200: "#c3e5cf", // Light :active
          300: "#3eac65", // Normal
          400: "#389b5b", // Normal :hover
          500: "#328a51", // Normal :active
          600: "#2c814c", // Dark
          700: "#25674d", // Dark :hover
          800: "#1c4d2d", // Dark :active
          900: "#163c23", // Darker
        },
        warning: {
          50: "#fcf9ed", // Light
          100: "#faf5e4", // Light :hover
          200: "#f5ebc7", // Light :active
          300: "#dfbe49", // Normal
          400: "#c9ab42", // Normal :hover
          500: "#b2983a", // Normal :active
          600: "#a78737", // Dark
          700: "#866c2c", // Dark :hover
          800: "#6d4221", // Dark :active
          900: "#4e421a", // Darker
        },
        sectionBg: {
          50: "#fefeff", // Light
          100: "#fdfeff", // Light :hover
          200: "#fbfbff", // Light :active
          300: "#f1f5fe", // Normal
          400: "#d9dde5", // Normal :hover
          500: "#c1c4cb", // Normal :active
          600: "#b5b8bf", // Dark
          700: "#919398", // Dark :hover
          800: "#6c6e72", // Dark :active
          900: "#545659", // Darker
        },
        shadowBlue: {
          50: "#eae3f3", // Light
          100: "#dfe4ed", // Light :hover
          200: "#bdc7da", // Light :active
          300: "#2b4b87", // Normal
          400: "#27447a", // Normal :hover
          500: "#223c6c", // Normal :active
          600: "#203865", // Dark
          700: "#1a2d51", // Dark :hover
          800: "#13223d", // Dark :active
          900: "#0f1a2f", // Darker
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              50: "#fcf9ed", // Light
              100: "#faf5e4", // Light :hover
              200: "#f5ebc7", // Light :active
              300: "#dfbe49", // Normal
              400: "#c9ab42", // Normal :hover
              500: "#b2983a", // Normal :active
              600: "#a78737", // Dark
              700: "#866c2c", // Dark :hover
              800: "#6d4221", // Dark :active
              900: "#4e421a", // Darker
            },
            secondary: {},
            success: {},
            danger: {},
            warning: {},
          },
        },
      },
    }),
  ],
};

module.exports = config;
