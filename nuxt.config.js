import getRoutes from './utils/getRoutes'
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
        script: [{
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7267777415172382',
          crossorigin: 'anonymous'
        }],
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    '一個生活在高雄的地方程式設計師，喜歡研究Web方面新技術，歡迎同好一起討論',
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    env: {
        title: '艾玩不累格',
        host: 'allenplay.net',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: '~/assets/scss/index.scss', lang: 'scss' },
        { src: '~/assets/scss/nuxt-content.scss', lang: 'scss' },
        { src: '@fortawesome/fontawesome-svg-core/styles.css', lang: 'css' },
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // https://github.com/surmon-china/vue-awesome-swiper
        // https://github.com/surmon-china/surmon-china.github.io/tree/source/projects/vue-awesome-swiper/nuxt
        { src: '~/plugins/carousel', ssr: false },

        { src: '~/plugins/disqus', ssr: true },

        { src: '~/plugins/fontawesome.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://github.com/nuxt-community/color-mode-module
        '@nuxtjs/color-mode',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        //https://github.com/ivodolenc/nuxt-gsap-module
        'nuxt-gsap-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots'],

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

    gsap: {
        /* Module Options */
    },

    sitemap: {
        hostname: 'https://allenplay.net',
        routes() {
            return getRoutes()
        },
    },

    robots: {
        UserAgent: '*',
        Allow: '/',
        Sitemap: 'https://allenplay.net/sitemap.xml',
    },
}
