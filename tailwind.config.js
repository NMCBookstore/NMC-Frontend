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
            'white':'#fff',
            'backdrop':'rgba(38, 38, 38, 0.90)'
        },
        screens: {
            '3xl': {'max': '1535px'},

            '2xl': {'max': '1440px'},
      
            'xl': {'max': '1200px'},
      
            'lg': {'max': '920px'},
      
            'md': {'max': '768px'},
      
            'sm': {'max': '425px'},
        }
    },
    plugins: [],
}
