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
                showFAQ: {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                hideFAQ: {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                hide: "hide 100ms ease-in",
                slideInUp: "slideInUp 200ms cubic-bezier(0.16, 1, 0.3, 1)",
                swipeOut: "swipeOut 100ms ease-out",
                showFAQ: "showFAQ 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                hideFAQ: "hideFAQ 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
        },
    },
    plugins: [],
};
