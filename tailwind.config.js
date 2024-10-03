/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                "color-text": "#0A0908",
                background: "#EAE0D5",
                primary: "#22333B",
                secondary: "#C6AC8F",
                accent: "#5E503F",
            },
            fontSize: {
                "display-1": "48px",
                "display-2": "40px",
                "display-3": "34px",
                "display-4": "28px",
                "display-5": "23px",
                "display-6": "19px",
                body: "16px",
                "body-small": "14px",
                "body-xs": "12px",
            },
        },
    },
    plugins: [],
};
