<template>
    <div>
        <carousel :categories="categories"></carousel>
        <new-post :new-posts="newPosts"></new-post>
        <footbar></footbar>
    </div>
</template>

<script>
import carousel from '~/components/home/carousel'
import featured from '~/components/home/featured'
import newPost from '~/components/home/newPost'
import footbar from '~/components/home/footbar'

export default {
    async asyncData({ $content, store }) {
        store.commit('setLoading', true)

        let posts = await $content('articles')
            .only([
                'title',
                'createdAt',
                'pubDate',
                'summary',
                'tags',
                'image',
                'slug',
                'category',
            ])
            .sortBy('pubDate', 'desc')
            .limit(8)
            .fetch()

        let newPosts = []
        for (var item of posts) {
            var post = new Object()

            post.title = await item.title
            post.summary = await item.summary
            post.image = await item.image
            post.slug = await item.slug
            post.path = await item.path
            post.pubDate = await item.pubDate

            post.tags = []
            for (var tag of item.tags) {
                const tagItem = await $content('tags', tag).fetch()

                post.tags.push(tagItem)
            }
            post.category = await $content('categories', item.category).fetch()
            newPosts.push(post)
        }

        let categories = await $content('categories')
            .sortBy('sort', 'asc')
            .fetch()

        store.commit('setLoading', false)
        return {
            newPosts,
            categories,
        }
    },
    components: {
        carousel,
        featured,
        newPost,
        footbar,
    },
}
</script>
