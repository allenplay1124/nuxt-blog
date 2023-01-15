<template>
    <section
        class="
            bg-gradient-to-b
            dark:bg-gradient-to-r
            from-blue-500
            via-sky-500
            to-teal-400
            dark:from-cyan-900 dark:via-sky-600 dark:to-purple-600
            p-10
        "
    >
        <h3 class="text-center text-3xl text-gray-100 py-5">最新文章</h3>
        <div class="lg:container m-auto py-5 lg:px-10">
            <div
                class="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
            >
                <div
                    v-for="(item, index) in newPosts"
                    :key="index"
                    class="
                        group
                        bg-gray-100
                        dark:bg-gray-700
                        rounded-lg
                        shadow-md
                        relative
                        hover:shadow-2xl
                        transform
                        hover:-translate-y-1 hover:scale-110
                    "
                >
                    <div
                        class="
                            text-center
                            absolute
                            top-0
                            right-0
                            font-extrabold
                            bg-sky-500
                            text-gray-100
                            group-hover:bg-opacity-75
                            m-auto
                            rounded-tr-md rounded-bl-xl
                            p-2
                        "
                    >
                        <nuxt-link :to="item.category.path">
                            {{ item.category.title }}
                        </nuxt-link>
                    </div>
                    <nuxt-link :to="'/articles/' + item.slug">
                        <img
                            class="object-cover rounded-t-md"
                            :src="item.image"
                            :alt="item.title"
                        />
                    </nuxt-link>
                    <div
                        class="
                            w-40
                            p-1
                            text-center
                            mt-2
                            ml-2
                            rounded-full
                            bg-sky-500
                            text-gray-100
                            top-40
                            left-2
                            group-hover:bg-opacity-75
                            dark:group-hover:bg-sky-400
                            text-sm
                        "
                    >
                        <font-awesome-icon :icon="['fas', 'fa-calendar-alt']" />

                        &nbsp;&nbsp;

                        {{ item.pubDate | dateFormat }}
                    </div>
                    <div class="px-5 py-5">
                        <nuxt-link :to="'/articles/' + item.slug">
                            <h3
                                class="
                                    text-left
                                    lg:text-xl
                                    md:text-xl
                                    xs:text-xl
                                    text-sky-500
                                    font-medium
                                    group-hover:border-b
                                    border-sky-500
                                    transition
                                    group-hover:ease-in-out
                                    group-hover:duration-150
                                "
                            >
                                {{ item.title }}
                            </h3>
                        </nuxt-link>
                        <div
                            class="py-3 dark:text-sky-100 text-justify text-sm"
                        >
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
                                    bg-gray-200
                                    text-gray-500
                                    p-1
                                    text-xs
                                    rounded
                                    hover:bg-sky-500 hover:text-gray-100
                                    dark:bg-sky-500
                                    dark:hover:bg-gray-100
                                    dark:text-gray-100
                                    dark:hover:text-sky-500
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
            <div class="text-center py-10 mt-2">
                <nuxt-link
                    class="bg-sky-500 text-gray-100 p-5 mt-3 rounded-full"
                    to="/articles"
                >
                    全部文章
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['newPosts'],
    filters: {
        dateFormat(value) {
            return value.substring(0, 10)
        },
    },
}
</script>
