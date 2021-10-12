<template>
    <div>
        <carousel :data="carouselData"></carousel>
        <featured></featured>
        <new-post></new-post>
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
        console.log(carouselData);
        return {
            carouselData
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
