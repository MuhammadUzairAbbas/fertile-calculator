/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(0deg, rgba(32,166,106,1) 0%, rgba(247,255,41,0.9753151260504201) 100%)",
                "custom-radial-gradient":
                    "radial-gradient(circle, rgba(63,251,94,1) 0%, rgba(245,252,70,1) 100%)",
            },
        },
    },
    plugins: [],
};
