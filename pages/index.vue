<template>
    <div>
        <carousel :data="carouselData"></carousel>
        <featured :top-data="topData"></featured>
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
    async asyncData({ $content }) {
        const carouselData = await $content('articles')
            .only(['title', 'summary', 'image'])
            .where({
                isSlider: true,
                isOnline: true,
            })
            .sortBy("createdAt", "desc")
            .fetch();

        const topData = await $content('articles')
            .only(['title', 'summary', 'tags', 'image'])
            .where({
                isTop: true,
                isOnline: true
            })
            .sortBy('createdAt', 'desc')
            .limit(2)
            .fetch()
        
        const newPosts = await $content('articles')
            .only(['title', 'createdAt', 'summary', 'tags', 'image'])
            .where({
                isOnline: true
            })
            .sortBy('createdAt', 'desc')
            .limit(8)
            .fetch()
        console.log(newPosts);
        return {
            carouselData,
            topData,
            newPosts
        }
    },
    components: {
        carousel,
        featured,
        newPost,
        footbar
    },

}
</script>
