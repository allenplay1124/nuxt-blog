<template>
    <div
        class="flex flex-col h-full justify-between bg-sky-100 dark:bg-gray-800"
    >
        <div class="w-full lg:container mx-auto my-8 px-4 h-screen">
            <h1 class="text-2xl dark:text-sky-500">
                {{ profile.title }}
            </h1>

            <div class="my-4">
                <nuxt-content
                    :document="profile"
                    class="prose dark:prose-invert"
                />
            </div>

            <h2 class="text-2xl dark:text-sky-500">
                {{ site.title }}
            </h2>

            <div class="my-4">
                <nuxt-content
                    :document="site"
                    class="prose dark:prose-invert"
                />
            </div>
        </div>
        <Footbar />
    </div>
</template>
<script>
import Footbar from '~/components/home/footbar'
export default {
    components: {
        Footbar,
    },
    async asyncData({ $content }) {
        const profile = await $content('abount', 'profile').fetch()

        const site = await $content('abount', 'site').fetch()

        return {
            profile,
            site,
        }
    },
}
</script>

<style scoped>
code {
    color: brown;
}
</style>
