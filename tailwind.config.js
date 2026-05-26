/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7c3aed",
                    hover: "#6d28d9",
                    light: "#c4b5fd",
                },
                slate: {
                    850: "#1e293b",
                    950: "#0b0f19",
                }
            },
            fontFamily: {
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
                display: ["Outfit", "sans-serif"],
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            spacing: {
                68: '17rem',
            },
            fontSize: {
                '2xs': '0.65rem',
            },
        },
    },
    plugins: [],
};
