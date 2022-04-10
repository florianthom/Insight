module.exports = {
    content: [
        // Example content paths...
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                "main-color": {
                    DEFAULT: "#1B262C",
                },
                "main-color-light": {
                    DEFAULT: "#313b41",
                },
            },
            letterSpacing: {
                headline: "0.5em",
                "headline-mobile": "0.35em",
            },
        },
    },
    plugins: [],
};
