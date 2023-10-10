/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    // "Source Sans",
                    // "DM Sans",
                    "-apple-system",
                    "system-ui",
                    "BlinkMacSystemFont",
                    "Inter",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
};
