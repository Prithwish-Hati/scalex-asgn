import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "414px",
      md: "700px",
      lg: "950px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        yellow: "#FFC621",
        blue: "#0067DE",
        green: "#25AB75",
        dark: "#FFFFFF1A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "20px 30px 84px 0px rgba(0, 103, 222, 0.60)",
      },
      fontSize: {
        "head-1": [
          "36px",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
        "head-2": [
          "30px",
          {
            lineHeight: "140%",
            fontWeight: "600",
          },
        ],
        "head-3": [
          "24px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
        "head-4": [
          "20px",
          {
            lineHeight: "140%",
          }
        ]
      },
    },
  },
  plugins: [],
};
export default config;
