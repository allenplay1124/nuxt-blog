<template>
    <nav class="w-full h-16 bg-gray-100 dark:bg-gray-700">
        <div class="lg:container mx-auto pt-3 flex justify-between px-4">
            <h1 class="text-3xl dark:text-gray-100 site-title">
                <a href="/">
                    {{ this.$nuxt.$options.head.title }}
                </a>
            </h1>

            <div class="lg:hidden">
                <button
                    class="
                        bg-gray-200
                        text-2xl
                        px-3
                        py-2
                        rounded-full
                        hover:shadow
                    "
                    @click="toggleBarMenu()"
                >
                    ☰
                </button>
            </div>

            <ul class="hidden lg:flex gap-5 text-blue-500 dark:text-yellow-500">
                <li
                    v-for="(item, index) in menus"
                    :key="index"
                    class="
                        px-2
                        pt-4
                        rounded
                        hover:shadow hover:bg-blue-200
                        dark:hover:bg-gray-900
                    "
                >
                    <a :href="item.route" :target="item.target">
                        {{ item.name }}
                    </a>
                </li>
            </ul>

            <div
                v-show="isShowBarMenu"
                class="
                    w-full
                    h-full
                    flex flex-col
                    mx-0
                    fixed
                    z-10
                    top-10
                    left-0
                    bg-gray-100
                    dark:bg-gray-700
                "
            >
                <button
                    type="button"
                    class="text-right mr-3 text-xl dark:text-gray-50"
                    @click="toggleBarMenu()"
                >
                    ྾
                </button>

                <div class="divide-y-2 divide-gray-500 mt-2">
                    <h1 class="text-3xl text-center mb-2 dark:text-gray-50">
                        {{ this.$nuxt.$options.head.title }}
                    </h1>
                </div>

                <ul class="flex flex-col text-center text-xl gap-y-4 mt-10">
                    <li
                        v-for="(item, index) in menus"
                        :key="index"
                        class="
                            text-gray-600
                            hover:bg-gray-700 hover:text-gray-200
                            dark:text-yellow-500 dark:hover:bg-gray-200
                        "
                    >
                        <a :href="item.route" :target="item.target">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            menus: [
                { name: '首頁', route: '/', target: '_self' },
                { name: '文章列表', route: '/articles', target: '_self' },
                { name: '關於我', route: '/abount', target: '_self' },
            ],
            isShowBarMenu: false,
        }
    },
    methods: {
        toggleBarMenu() {
            this.isShowBarMenu = this.isShowBarMenu ? false : true
        },
    },
}
</script>
<style scoped>
.site-title {
    width: 150px;
    height: 50px;
    background-image: url(/images/logo.png);
    white-space: nowrap;
    color: transparent;
}

.dark .site-title {
    background-image: url(/images/logo-light.png);
}
</style>
