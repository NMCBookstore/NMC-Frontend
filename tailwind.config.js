/** @type {import('tailwindcss').Config} */
module.exports = {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        colors: {
            'primary': '#0F3BB0',
            'orange-orange-4':'#FFDE87',
            'orange-orange-6':'#FFCA41',
            'accent':'#D41A1A',
            'backdrop':'rgba(38, 38, 38, 0.90)'
        },
    },
    plugins: [],
}
