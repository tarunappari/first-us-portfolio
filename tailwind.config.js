/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'clash': ['var(--font-clash)', 'sans-serif'],
          'satoshi': ['var(--font-satoshi)', 'sans-serif'],
          'manrope': ['var(--font-manrope)', 'sans-serif'],
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0px", opacity: "0" },
            to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
            to: { height: "0px", opacity: "0" },
          },
          spotlight: {
            "0%": {
              opacity: 0,
              transform: "translate(-72%, -62%) scale(0.5)",
            },
            "100%": {
              opacity: 1,
              transform: "translate(-50%,-40%) scale(1)",
            },
          },
          "slide-horizontal": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-50%)",
            },
          },
          "slide-vertical": {
            "0%": {
              transform: "translateY(0)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.6s ease-out", // Increased from 0.3s
          "accordion-up": "accordion-up 0.6s ease-in", // Increased from 0.3s
          spotlight: "spotlight 2s ease .75s 1 forwards",
          "slide-horizontal": "slide-horizontal 25s linear infinite",
          "slide-vertical": "slide-vertical 25s linear infinite",
        },
      },
    },
    plugins: [],
  };
  