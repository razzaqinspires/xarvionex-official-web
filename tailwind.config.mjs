/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Deep cyber dark
        foreground: "#EAEAEA",
        primary: {
          DEFAULT: "#00F0FF", // Futuristic Cyan
          dim: "rgba(0, 240, 255, 0.2)",
        },
        accent: {
          DEFAULT: "#7000FF", // Deep Cyber Purple
          dim: "rgba(112, 0, 255, 0.2)",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'cyber-grid': 'linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
      },
      backdropBlur: {
        'glass': '12px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'], // For tech logs & stats
      }
    },
  },
  plugins: [],
};
