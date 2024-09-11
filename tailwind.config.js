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
                whiteText:"#F4F4F4",
                blackText:"#2C2C2C"
            },
            fontFamily: {
                syne: "Syne",
                lora: "Lora"
            },
            fontSize: {
                base: "0.938rem",
                lg: "1.125rem",
                "3xl": "1.813rem",
                "4xl": "2.5rem"
            },
            backgroundImage: {
                'popcorn': "url('./assets/popcorn-background.jpg')"
            },
            borderRadius: {
                sm: "0.313rem"
            }
        },
    },
    plugins: [],
}

