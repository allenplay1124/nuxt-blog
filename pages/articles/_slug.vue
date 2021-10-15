<template>
    <div class="p-10 bg-blue-100 dark:bg-gray-800">
        <div class="lg:container m-auto py-5">
            
            <h1 class="text-3xl dark:text-gray-300">
                {{ postData.title }}
            </h1>
            
            <hr class="my-10" />

            <img class="rounded-lg object-cover m-auto" :src="postData.image" :alt="postData.title" />

            <div class="dark:bg-gray-600 dark:text-gray-100 m-10 p-10 rounded-lg">
                {{ postData.summary }}
            </div>
            
            <div class="dark:text-gray-100">
                <nuxt-content
                    :document="postData" />
            </div>

        </div>
    </div>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const postData = await $content('articles', params.slug).fetch()
        console.log(postData);
        return {
            postData
        }
    }
}
</script>