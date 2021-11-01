<template>
    <section class="bg-indigo-300 dark:bg-blue-900 p-10">
        <h3 class="text-center text-5xl dark:text-gray-100 py-5">最新文章</h3>
        <div class="lg:container m-auto py-5">
            <div
                class="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
            >
                <div
                    v-for="(item, index) in newPosts"
                    :key="index"
                    class="
                        group
                        bg-gray-100
                        dark:bg-gray-600
                        rounded-lg
                        shadow-md
                        relative
                        hover:shadow-2xl
                        transform
                        hover:-translate-y-1
                        hover:scale-110
                    "
                >
                    <nuxt-link :to="item.path">
                        <img
                            class="object-cover rounded-t-md"
                            :src="item.image"
                            :alt="item.title"
                        />
                    </nuxt-link>
                    <div
                        class="
                            w-40
                            p-2
                            text-center
                            rounded-full
                            absolute
                            bg-blue-500
                            text-gray-100
                            top-5
                            left-5
                            group-hover:bg-opacity-75
                            dark:group-hover:bg-yellow-600
                        "
                    >
                        <fa :icon="['fas', 'calendar-alt']" />
                        {{ item.createdAt.substring(0, 10) }}
                    </div>
                    <div class="px-5 py-5">
                        <h3
                            class="
                                text-left
                                lg:text-2xl
                                md:text-2xl
                                xs:text-2xl
                                text-blue-500
                                font-medium
                                dark:text-yellow-500
                                group-hover:border-b-2
                            "
                        >
                            <nuxt-link :to="item.path">
                                {{ item.title }}
                            </nuxt-link>
                        </h3>

                        <div class="py-3 dark:text-gray-100 text-justify">
                            {{ item.summary }}
                        </div>

                        <div
                            class="
                                text-justify
                                flex flex-wrap
                                gap-x-2 gap-y-1
                                text-xs
                                mt-3
                            "
                        >
                            <div
                                v-for="(tag, index2) in item.tags"
                                :key="index2"
                                class="
                                    bg-blue-400
                                    dark:bg-yellow-500
                                    text-gray-100
                                    p-2
                                    rounded-full
                                "
                            >
                                <nuxt-link :to="tag.path">
                                    {{ tag.title }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center py-10">
                <a
                    class="
                        bg-blue-200
                        text-gray-500
                        dark:bg-yellow-600
                        dark:text-gray-100
                        p-5
                        mt-3
                        rounded-full
                    "
                    href="#"
                >
                    全部文章
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['newPosts'],
}
</script>
