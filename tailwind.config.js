module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            //小手機
            'xs': '576px',
            //大螢幕手機
            'sm': '640px',
            //平板
            'md': '768px',
            //一般螢幕
            'lg': '992px',
            //大螢幕
            'xl': '1200px',
            //高解析度螢幕
            '2xl': '1400px',
        },
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
