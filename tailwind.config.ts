import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "modern-negra": ["Modern Negra", "sans-serif"],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#00809D",
        yellow: "#e7d393",
      },
    },
  },
  plugins: [],
} satisfies Config;
