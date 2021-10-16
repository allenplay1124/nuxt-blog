<template>
    <div class="p-10 bg-blue-100 dark:bg-gray-800">
        <div class="lg:container m-auto py-5">
            <div class="grid grid-cols-1 lg:grid-col-2 gap-4">
                <div>
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
            <div class="border-purple-300 border-2 shadow-lg rounded-lg bg-gray-50 p-5 my-10">
                <div class="text-center text-2xl pb-5">文章段落</div>
                <hr />
                <div class="mt-5">
                    <nav>
                        <ul>
                            <li v-for="(item, index) in postData.toc"
                                :key="item.id"
                                class="py-2 hover:border-gray-500"
                            >
                                <nuxt-link :to="`#${item.id}`" class="text-blue-500">
                                    {{ item.text }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </div>
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