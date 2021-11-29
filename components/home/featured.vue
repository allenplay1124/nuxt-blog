<template>
    <section class="text-center p-10 bg-blue-100 dark:bg-gray-800">
        <h2 class="text-5xl py-10 dark:text-gray-100">精選文章</h2>
        <div class="lg:container m-auto py-5 lg:px-10">
            <div
                class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20"
            >
                <div
                    v-for="(item, index) in topData"
                    :key="index"
                    class="
                        bg-gray-100
                        dark:bg-gray-600
                        rounded-lg
                        shadow-lg
                        transform
                        hover:-translate-y-1
                        hover:scale-110
                    "
                >
                    <nuxt-link :to="item.path">
                        <img class="rounded-t-lg object-cover" :src="item.image" :alt="item.title" />
                    </nuxt-link>

                    <div class="px-5 py-5">
                        <h3
                            class="
                                text-left
                                lg:text-3xl
                                md:text-2xl
                                xs:text-2xl
                                font-medium
                                dark:text-yellow-500
                            "
                        >
                            <nuxt-link :to="item.path">
                                {{ item.title }}
                            </nuxt-link>
                        </h3>
                        <div class="text-justify py-5 dark:text-gray-100">
                            {{ item.summary }}
                        </div>
                        <div
                            class="text-justify flex flex-wrap gap-x-2 gap-y-1"
                        >
                            <div
                                v-for="(item2, index2) in item.tags"
                                :key="index2"
                                class="
                                    bg-blue-400
                                    dark:bg-yellow-500
                                    text-gray-100
                                    p-2
                                    rounded-full
                                "
                            >
                                <nuxt-link :to="item2.path">
                                    {{ item2.title }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['topData'],
}
</script>
