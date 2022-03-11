<template>
    <div>
        <div class="lg:p-10 p-3 bg-sky-100 dark:bg-gray-800">
            <div class="lg:container m-auto">
                <div class="lg:flex lg:gap-12"></div>
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
    async asyncData({ $content, params }) {
        const posts = await $content('articles')
            .where({ category: params.slug })
            .sortBy('createdAt', 'desc')
            .fetch()

        const postLists = []

        for (var item of posts) {
            var post = new Object()
            post.title = await item.title
            post.summary = await item.summary
            post.image = await item.image
            post.slug = await item.slug
            post.createdAt = await item.createdAt
            post.category = await $content('categories', post.category).fetch()
            post.tags = []

            for (var tag of item.tags) {
                const tagItem = await $content('tags', tag).fetch()

                post.tags.push(tagItem)
            }

            postLists.push(post)
        }

        const categories = await $content('categories')
            .sortBy('createdAt', 'desc')
            .fetch()

        console.log(postLists, categories)

        return {
            postLists,
            categories,
        }
    },
}
</script>
