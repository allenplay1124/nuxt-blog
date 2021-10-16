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
            divideColor: ['group-hover', 'hover'],
            backgroundColor: ['group-hover', 'hover'],
            boxShadow: ['group-hover', 'hover'],
            fontSize: ['group-hover', 'hover'],
            backgroundSize: ['group-hover', 'hover'],
            scale: ['group-hover', 'hover'],
            backgroundPosition: ['group-hover', 'hover'],
            transition: ['group-hover', 'hover'],
            translate: ['group-hover', 'hover'],
        },
    },
    plugins: [],
    purge: {
        content: [
            'content/**/**.md'
        ]
    }
}
