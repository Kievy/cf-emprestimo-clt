import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#92D6F2",
          500: "#24ACE4",
        },
        secondary: {
          300: "#FFBF70",
          400: "#FFA333",
        },
        grays: {
          300: "#FFFFFF",
          350: "#E9F2F7",
          600: "#303A3E",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1216px",
      },
      fontSize: {
        "heading-48": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-20": ["20px", { lineHeight: "1.4", fontWeight: "400" }],
        "body-12": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
        "caption-14": ["14px", { lineHeight: "1.4", fontWeight: "600" }],
        "btn-18": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
