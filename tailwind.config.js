module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,mdx}",
        "./public/**/*.{html,js,jsx,mdx}"
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ['OpenSans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', 'sans-serif'],
        },
        extend: {
            colors: {},
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/line-clamp"),
    ],
}
