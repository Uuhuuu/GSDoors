/* eslint-disable import/no-extraneous-dependencies, global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    "./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // keeps dark mode toggle working
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // ← main brand blue (buttons, links)
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#110350ff",
        },
        ramka: {
          100: "#22c5b8ff", // ← ramka around main image
        },
        danger: {
          500: "#ef4444",
          600: "#dc2626",
        },
        cyan: {
          400: "#3eb8ffff", // ← link hover
        },
        slate: {
          800: "#1b3247ff", // ← Product window bg
          100: "#f1f5f9",
        },
        // Default
        gray: {
          50: "#ffffffff", // ← text white default
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#fcfcfcff", // ← white text "If you...""
          800: "#1f2937",
          900: "#111827", // body bg
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
