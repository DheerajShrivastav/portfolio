import type { Config } from "tailwindcss";

// Swiss poster system: paper, ink, one cobalt field. Cobalt is reserved for the claim and for things you can act on.
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f6f6f3",
        ink: {
          DEFAULT: "#0d0d0d",
          2: "#3d3d3a", // secondary text on paper (10:1)
          3: "#66665f", // tertiary text on paper (5.3:1)
        },
        cobalt: {
          DEFAULT: "#1f3bff",
          deep: "#1730d6", // pressed / hover on cobalt
          soft: "#dde2ff", // secondary text on cobalt (5.2:1)
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        // display steps for the poster scale; body stays at the 1rem / 1.125rem defaults
        "display-xl": ["clamp(2.75rem, min(1.4rem + 4.6vw, 9.5vh), 5.25rem)", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.25rem, 1.5rem + 2.8vw, 3.75rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(1.75rem, 1.35rem + 1.4vw, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        page: "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
