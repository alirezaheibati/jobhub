import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "-translate-x-[0vw]",
    "-translate-x-[100vw]",
    "-translate-x-[200vw]",
    "-translate-x-[300vw]",
    "-translate-x-[400vw]",
    "md:-translate-x-[33vw]",
    "md:-translate-x-[66vw]",
    "md:-translate-x-[99vw]",
    "md:-translate-x-[132vw]",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#181255",
        secondary: "#FF9D3D",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(9,9,121,0) 20%, rgba(4,124,197,0) 80%, rgba(255,255,255,1) 100%)",
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
