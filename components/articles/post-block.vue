<template>
    <div
        class="
            bg-gray-100
            dark:bg-gray-600 dark:text-gray-100
            shadow
            rounded
            w-full
            columns-1
            lg:columns-2
            gap-4
            my-4
            p-4
        "
    >
        <div class="w-full">
            <nuxt-link :to="post.path">
                <img
                    class="
                        rounded
                        shadow
                        object-cover
                        h-[280px]
                        hover:shadow-xl
                        w-full
                    "
                    :src="post.image"
                    :alt="post.title"
                />
            </nuxt-link>
        </div>
        <div class="mt-2 w-full">
            <nuxt-link :to="post.path">
                <h2 class="text-2xl">{{ post.title }}</h2>
            </nuxt-link>

            <div class="mb-10 mt-3 dark:text-gray-50">
                📅 &nbsp;&nbsp;

                {{ post.createdAt.substring(0, 19).replace('T', ' ') }}

                &nbsp;&nbsp; 📂 &nbsp;&nbsp;

                <nuxt-link :to="post.category.path">
                    {{ post.category.title }}
                </nuxt-link>
            </div>

            <div class="h-32 overflow-hidden">
                {{ post.summary }}
            </div>

            <div>
                <TagList :tags="post.tags" />
            </div>

            <div class="text-right">
                <div>
                    <nuxt-link
                        class="
                            hover:bg-gradient-to-r
                            from-cyan-500
                            via-sky-500
                            to-lime-500
                            hover:text-gray-100
                            dark:hover:from-cyan-500 dark:hover:to-blue-500
                            p-3
                            hover:rounded hover:shadow
                        "
                        :to="post.path"
                    >
                        More ...
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TagList from './tag-block'
export default {
    props: ['post'],
    components: {
        TagList,
    },
}
</script>
