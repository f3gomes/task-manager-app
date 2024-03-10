import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tm-white": "#ffffff",
        "tm-gray-100": "#f2f2f2",
        "tm-gray-200": "#d9d9d9",
        "tm-gray-300": "#808080",
        "tm-gray-400": "#333333",
        "tm-gray-500": "#262626",
        "tm-gray-600": "#1a1a1a",
        "tm-gray-700": "#0d0d0d",

        "tm-purple-100": "#8284fa",
        "tm-purple-200": "#5e60ce",

        "tm-blue-100": "#4ea8de",
        "tm-blue-200": "#1e6f9f",

        "tm-red-200": "#e25858",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
