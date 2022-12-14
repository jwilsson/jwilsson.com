module.exports = {
    content: ['./pages/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#6e7dab',
                secondary: '#e4ebf0',
                hover: '#575366',
            },
            animation: {
                'fade-in': 'fade-in 1s ease-in-out 0s 1 normal forwards running',
                'fade-slide': 'fade-slide 1s ease-in-out 0s 1 normal forwards running',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'fade-slide': {
                    '0%': { opacity: '0', transform: 'translateY(25px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
        fontFamily: {
            sans: ['"Source Sans Pro"', 'sans-serif'],
        },
        fontSize: {
            '2xl': '1.5rem',
            '4xl': '2.5rem',
        },
    },
    plugins: [],
};
