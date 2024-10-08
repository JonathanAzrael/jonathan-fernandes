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
          bgOrange: '#FF6600',
      },
      fontFamily: {
        'protest': ['Protest Guerrilla', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
