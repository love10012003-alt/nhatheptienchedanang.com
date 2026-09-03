import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F2B46",
        orange: "#FF6B35",
        bgsoft: "#F8FAFC"
      },
      borderRadius: { card: "16px" }
    }
  },
  plugins: []
};
export default config;
