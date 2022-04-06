<template>
    <div
        class="flex flex-col h-full justify-between bg-sky-100 dark:bg-gray-800"
    >
        <div class="w-full lg:container mx-auto my-8 px-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div
                    class="
                        md:col-span-8
                        bg-gray-100
                        dark:bg-gray-700
                        shadow
                        rounded
                        p-3
                    "
                >
                    <h2 class="text-2xl dark:text-sky-300 my-2">全部文章</h2>

                    <hr />

                    <div v-for="(item, index) in postLists" :key="index">
                        <PostBlock :post="item" />
                    </div>
                </div>

                <div
                    class="
                        md:col-span-4
                        bg-gray-100
                        dark:bg-gray-700 dark:text-gray-100
                        shadow
                        rounded
                        p-3
                    "
                >
                    <CategorySidebar :categories="categories" />

                    <TagSidebar :tags="tags" />
                </div>
            </div>
        </div>

        <Footbar />
    </div>
</template>

<script>
import Footbar from '~/components/home/footbar'
import PostBlock from '~/components/articles/post-block'
import TagSidebar from '~/components/sidebar/tag-list'
import CategorySidebar from '~/components/sidebar/category-list'
export default {
    components: {
        TagSidebar,
        CategorySidebar,
        PostBlock,
        Footbar,
    },
    async asyncData({ $content }) {
        const posts = await $content('articles')
            .where({ status: true })
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
            post.path = await item.path

            post.category = await $content('categories', item.category).fetch()
            post.tags = []

            for (var tag of item.tags) {
                const tagItem = await $content('tags', tag).fetch()

                post.tags.push(tagItem)
            }

            postLists.push(post)
        }

        const tags = await $content('tags').sortBy('createdAt', 'desc').fetch()
        const categories = await $content('categories')
            .sortBy('createdAt', 'desc')
            .fetch()

        return {
            postLists,
            tags,
            categories,
        }
    },
}
</script>
