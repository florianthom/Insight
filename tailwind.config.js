const defaultTheme = require("tailwindcss/defaultTheme");

const custom_colors = {
    ...defaultTheme.colors,
    ...{
        "main-color": {
            DEFAULT: "#1B262C",
        },
        "main-color-light": {
            DEFAULT: "#313b41",
        },
    },
};

const customTracking = {
    ...defaultTheme.letterSpacing,
    ...{
        headline: "0.5em",
        "headline-mobile": "0.35em",
    },
};

module.exports = {
    purge: {
        content: ["./src/**/*.{tsx,js}"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: custom_colors,
        letterSpacing: customTracking,
    },
    variants: {
        backgroundColor: ["responsive", "hover", "focus", "active"],
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"],
        },
    },
    plugins: [],
};
