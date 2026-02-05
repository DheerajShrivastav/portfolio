import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium terminal palette
        bg: {
          primary: "#0a0a0b",
          secondary: "#111113",
          tertiary: "#1a1a1d",
          glass: "rgba(17, 17, 19, 0.7)",
        },
        text: {
          primary: "#e6edf3",
          secondary: "#8b949e",
          muted: "#6e7681",
        },
        accent: {
          green: "#4AF626",      // Terminal green
          blue: "#58a6ff",       // Web3 blue
          purple: "#a371f7",
          yellow: "#d29922",
          red: "#f85149",
          cyan: "#56d4dd",
        },
        syntax: {
          key: "#58a6ff",        // JSON keys
          string: "#4AF626",     // JSON strings
          bracket: "#8b949e",    // Brackets
          colon: "#6e7681",      // Punctuation
        },
        border: {
          DEFAULT: "#30363d",
          glow: "#4AF626",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(74, 246, 38, 0.3)",
        "glow-sm": "0 0 10px rgba(74, 246, 38, 0.2)",
        "glow-blue": "0 0 20px rgba(88, 166, 255, 0.3)",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "typewriter": "typewriter 2s steps(20) forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
