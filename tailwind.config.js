/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)", bg2: "var(--bg2)", surface: "var(--surface)", "surface-2": "var(--surface-2)",
        ink: "var(--ink)", muted: "var(--muted)",
        line: "var(--line)", accent: "var(--accent)", "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)", "accent-2": "var(--accent-2)",
        success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)",
        "pdv-yellow": "rgb(var(--pdv-yellow-rgb) / <alpha-value>)", "pdv-yellow-ink": "var(--pdv-yellow-ink)",
        "pdv-surface": "var(--pdv-surface)", "pdv-surface-2": "var(--pdv-surface-2)",
      },
      fontFamily: { display: "var(--font-display)", body: "var(--font-body)" },
      fontSize: {
        display: ["clamp(2.75rem, 6vw + 1rem, 6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        h1: ["clamp(2.25rem, 4vw + 1rem, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 2.5vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.25rem, 0.6vw + 1rem, 1.5rem)", { lineHeight: "1.25" }],
        lead: ["clamp(1.0625rem, 0.4vw + 1rem, 1.3125rem)", { lineHeight: "1.6" }],
      },
      borderRadius: { ui: "var(--radius)", "ui-lg": "calc(var(--radius) * 1.6)" },
      boxShadow: { ui: "var(--shadow)" },
      maxWidth: { page: "80rem" },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-in-right": "slide-in-right 0.3s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-left": "slide-in-left 0.3s cubic-bezier(0.16,1,0.3,1) both",
        "slide-up": "slide-up 0.3s cubic-bezier(0.16,1,0.3,1) both",
        "scale-in": "scale-in 0.2s ease-out both",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 3s linear infinite",
      },
    },
  },
  plugins: [],
}
