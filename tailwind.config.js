/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#9C8BD9",
                secondary: "#5C51A6",
                accent: "#F2622E",
                bgPurple: "#160826",
                whiteText:"#E1E2DE",
                blackText:"#2C2C2C"
            },
            fontFamily: {
                syne: "Syne",
                lora: "Lora"
            },
            fontSize: {
                base: "0.938rem",
                "3xl": "1.813rem",
                "4xl": "2.5rem"
              }
        },
    },
    plugins: [],
}

