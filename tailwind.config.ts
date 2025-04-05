import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#181255",
        secondary: "#FF9D3D",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "980px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
