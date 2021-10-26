module.exports = {
    purge: [
        './dist/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width : {
                '96' : '24rem',
            }
        },
    },
    variants: {},
    plugins: [],
}