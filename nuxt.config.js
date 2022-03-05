export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    loading: {
        color: '#FF00CC',
        height: '5px',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '艾玩不累格',
        htmlAttrs: {
            lang: 'zh-Hant-TW',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: '~/assets/scss/index.scss', lang: 'scss' },
        { src: '~/assets/scss/nuxt-content.scss', lang: 'scss' },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // https://github.com/surmon-china/vue-awesome-swiper
        // https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt
        { src: '~/plugins/carousel', ssr: false },

        { src: '~/plugins/disqus', ssr: true },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://github.com/nuxt-community/color-mode-module
        '@nuxtjs/color-mode',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // https://github.com/nuxt-community/fontawesome-module#readme
        '@nuxtjs/fontawesome',
        //https://github.com/ivodolenc/nuxt-gsap-module
        'nuxt-gsap-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxt/content'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        jit: true,
        // add '~tailwind.config` alias
        exposeConfig: true,
        configPath: 'tailwind.config.js',
    },

    colorMode: {
        classSuffix: '',
    },

    fontawesome: {
        component: 'fa',
        icons: {
            solid: true,
            brands: true,
            regular: true,
        },
    },

    gsap: {
        /* Module Options */
    },
}
