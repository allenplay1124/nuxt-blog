module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
        theme: {
            backgroundSize: {
                auto: 'auto',
                cover: 'cover',
                contain: 'contain',
            },
        },
    },
    variants: {
        extend: {
            divideColor: ['group-hover'],
            backgroundColor: ['group-hover'],
            boxShadow: ['group-hover'],
            fontSize: ['group-hover'],
            backgroundSize: ['group-hover'],
            scale: ['group-hover'],
            backgroundPosition: ['group-hover'],
            transition: ['group-hover'],
            translate: ['group-hover'],
        },
    },
    plugins: [],
}
