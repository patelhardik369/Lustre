/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: "#F5F3EF", 100: "#FBFAF8", 200: "#ECE8E1", 300: "#E2DCD1" },
        ink: { DEFAULT: "#17150F", soft: "#3B372F" },
        muted: { DEFAULT: "#5C584F", light: "#847F75" },
        line: { DEFAULT: "#E5E0D6", dark: "#D5CEC1" },
        flame: { DEFAULT: "#E5481F", 600: "#C23A12", 400: "#F26A40", 100: "#FBE4DC" },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"Space Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { "8xl": "90rem" },
      boxShadow: {
        soft: "0 1px 2px rgba(23,21,15,0.04), 0 14px 34px -16px rgba(23,21,15,0.16)",
        lift: "0 2px 4px rgba(23,21,15,0.05), 0 30px 64px -22px rgba(23,21,15,0.26)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 70s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
