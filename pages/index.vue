<template>
    <div>
        <carousel></carousel>
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
    components: {
        carousel,
        featured,
        newPost,
        footbar
    },
}
</script>
