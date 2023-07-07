/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                blue: {
                    200: "#A9CAFF", 
                }
            },
            keyframes: {
                hide: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                slideInUp: {
                    from: { transform: "translateY(calc(100% + var(--viewport-padding)))" },
                    to: { transform: "translateY(0)" },
                },
                swipeOut: {
                    from: { transform: "translateY(var(--radix-toast-swipe-end-x))" },
                    to: { transform: "translateY(calc(100% + var(--viewport-padding)))" },
                },
            },
            animation: {
                hide: "hide 100ms ease-in",
                slideInUp: "slideInUp 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                swipeOut: "swipeOut 100ms ease-out",
            },
        },
    },
    plugins: [],
};
