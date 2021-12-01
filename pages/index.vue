<template>
    <div>
        <carousel :categories="categories"></carousel>
        <!-- <featured :top-data="topData"></featured> -->
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
        let carouselData = await $content('articles')
            .only(['title', 'summary', 'image'])
            .where({
                isSlider: true,
                isOnline: true,
            })
            .sortBy('createdAt', 'desc')
            .fetch()

        let posts = await $content('articles')
            .only(['title', 'summary', 'tags', 'image'])
            .where({
                isTop: true,
                isOnline: true,
            })
            .sortBy('createdAt', 'desc')
            .limit(2)
            .fetch()

        let topData = []
        for (var item of posts) {
            var post = new Object()

            post.title = await item.title
            post.summary = await item.summary
            post.image = await item.image
            post.slug = await item.slug
            post.path = await item.path
            post.createdAt = await item.createdAt

            post.tags = []

            for (var tag of item.tags) {
                const tagItem = await $content('tags', tag).fetch()

                post.tags.push(tagItem)
            }

            topData.push(post)
        }

        posts = await $content('articles')
            .only(['title', 'createdAt', 'summary', 'tags', 'image', 'slug', 'category'])
            .where({
                isOnline: true,
            })
            .sortBy('createdAt', 'desc')
            .limit(8)
            .fetch()

        let newPosts = []
        for (var item of posts) {
            var post = new Object()
            console.log(item);
            post.title = await item.title
            post.summary = await item.summary
            post.image = await item.image
            post.slug = await item.slug
            post.path = await item.path
            post.createdAt = await item.createdAt

            post.tags = []
            for (var tag of item.tags) {
                const tagItem = await $content('tags', tag).fetch()

                post.tags.push(tagItem)
            }
            post.category = await $content('categories', item.category).fetch()
            newPosts.push(post)
        }

        let categories = await $content('categories').fetch()

        store.commit('setLoading', false)
        return {
            carouselData,
            topData,
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
