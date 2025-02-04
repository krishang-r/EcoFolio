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
        background: "#f2e8cf",
        foreground: "var(--foreground)",
        clrbtn: "#00c681",
        secondary: "#59e49f",
      },
    },
  },
  plugins: [],
} satisfies Config;
