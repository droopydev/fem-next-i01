const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        textColor: {
            black: 'hsl(228, 39%, 23%)',
            white: 'hsl(0, 0%, 100%)',
            gray: 'hsl(227, 12%, 61%)',
            red: 'hsl(12, 88%, 59%)',
        },
        extend: {
            colors: {
                'dark-blue': 'hsl(228, 39%, 23%)',
                'dark-grayish-blue': 'hsl(227, 12%, 61%)',
                'very-dark-blue': 'hsl(233, 12%, 13%)',
                'very-pale-red': 'hsl(13, 100%, 96%)',
                'very-light-gray': 'hsl(0, 0%, 95%)',
                red: {
                    full: 'hsl(12, 88%, 59%)',
                    hover: 'hsl(12, 100%, 70%)',
                    light: '#f9dcd6',
                },
            },
            fontFamily: {
                sans: ['var(--font-viet-sans)', ...fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
