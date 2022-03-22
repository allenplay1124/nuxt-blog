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
                    <CateHeader :category="category" />

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
                </div>
            </div>
        </div>
        <Footbar />
    </div>
</template>
<script>
import CateHeader from '~/components/category/header'
import PostBlock from '~/components/articles/post-block'
import CategorySidebar from '~/components/sidebar/category-list'
import Footbar from '~/components/home/footbar'
export default {
    components: {
        CateHeader,
        PostBlock,
        CategorySidebar,
        Footbar,
    },
    async asyncData({ $content, params }) {
        const posts = await $content('articles')
            .where({ category: params.slug })
            .sortBy('createdAt', 'desc')
            .fetch()

        const category = await $content('categories', params.slug).fetch()

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

        const categories = await $content('categories')
            .sortBy('createdAt', 'desc')
            .fetch()

        return {
            postLists,
            categories,
            category,
        }
    },
}
</script>
