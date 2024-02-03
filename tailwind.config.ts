import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blank: "#f5f7fa",
        grey: "#cfe2f3",
        noire: "#02020c",
        bleu: "#1891db",
      },
    },
  },
  plugins: [],
};
export default config;
