import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-light': '#f0ebe6',
        'brand-accent': {
          DEFAULT: '#3a5f6e',
          dark: '#2c4a57'
        },
      },
    },
  },
  plugins: [],
};
export default config;