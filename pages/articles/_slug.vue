<template>
    <div class="p-10 bg-blue-100 dark:bg-gray-800">
        <div class="lg:container m-auto py-5">
            <div class="lg:flex lg:gap-12">
                <div class="w-full lg:w-9/12">
                    <h1 class="text-3xl dark:text-gray-300">
                        {{ postData.title }}
                    </h1>

                    <hr class="mt-10" />
                    <div class="mb-10 mt-3 dark:text-gray-50">
                        <fa :icon="['far', 'calendar']" />
                        
                        {{
                            postData.createdAt
                                .substring(0, 19)
                                .replace('T', ' ')
                        }}
                        
                        &nbsp;&nbsp;

                        <fa :icon="['far', 'folder-open']" />

                        <nuxt-link :to="postData.category.path">
                            {{ postData.category.title }}
                        </nuxt-link>
                    </div>

                    <img
                        class="w-full rounded-lg object-cover m-auto"
                        :src="postData.image"
                        :alt="postData.title"
                    />

                    <div
                        class="dark:bg-gray-600 dark:text-gray-100 m-10 p-10 rounded-lg"
                    >
                        {{ postData.summary }}
                    </div>

                    <div
                        class="
                          border-purple-300
                            border-2 
                            shadow-lg
                            rounded-lg 
                            bg-gray-50 
                            dark:bg-gray-700 
                            dark:text-gray-100 
                            p-5 
                            my-10
                            w-full
                            block
                            lg:hidden
                            "
                    >
                        <h3 class="text-center text-xl pb-5">文章段落</h3>
                        <hr />
                        <div class="mt-5">
                            <nav>
                                <ul>
                                    <li
                                        v-for="(item, index) in postData.toc"
                                        :key="index"
                                        class="py-2"
                                    >
                                        <nuxt-link
                                            :to="`#${item.id}`"
                                            class="
                                                text-blue-500 
                                                dark:text-blue-300 
                                                hover:text-indigo-400 
                                                dark:hover:text-purple-300"
                                        >
                                            {{ item.text }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="dark:text-gray-100">
                        <nuxt-content :document="postData" />
                    </div>

                    <div>
                        <ul class="clear-both">
                            <li
                                v-for="(item, index) in postData.tags"
                                :key="index"
                                class="
                                    float-left 
                                    p-1 mx-2 
                                    rounded-lg 
                                    dark:bg-blue-800 
                                    dark:text-gray-50
                                "
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div class="clear-both py-10  dark:text-blue-200">
                        <ul>
                            <li
                                class="float-left p-3 dark:bg-blue-600 rounded-lg"
                                v-if="perv != null"
                            >
                                <nuxt-link :to="perv.path">
                                    👈 {{ perv.title }}
                                </nuxt-link>
                            </li>
                            <li
                                class="float-right p-3 dark:bg-blue-600 rounded-lg"
                                v-if="next != null"
                            >
                                <nuxt-link :to="next.path">
                                    {{ next.title }} 👉
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-5">
                        <Disqus />
                    </div>
                </div>

                <div class="w-full hidden lg:block lg:w-3/12 ">
                    <div
                        class="
                            border-purple-300 
                            border-2 
                            shadow-lg 
                            rounded-lg 
                            bg-gray-50 
                            dark:bg-gray-700 
                            dark:text-gray-100 
                            p-5 
                            my-10
                            sticky
                            top-0
                        "
                    >
                        <div class="text-center text-2xl pb-5">文章段落</div>
                        <hr />
                        <div class="mt-5">
                            <nav>
                                <ul>
                                    <li
                                        v-for="item in postData.toc"
                                        :key="item.id"
                                        class="py-2 hover:border-gray-500"
                                    >
                                        <nuxt-link
                                            :to="`#${item.id}`"
                                            class="
                                                text-blue-500 
                                                dark:text-blue-300 
                                                hover:text-indigo-400 
                                                dark:hover:text-purple-300
                                            "
                                        >
                                            {{ item.text }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const postData = await $content('articles', params.slug).fetch()
        const [perv, next] = await $content('articles')
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        var md5 = require('md5')
        for (var index in postData.body.children) {
            if (postData.body.children[index].tag == 'h2') {
                postData.body.children[index].props.id = md5(
                    postData.body.children[index].props.id
                )
            }
        }

        for (var index in postData.toc) {
            postData.toc[index].id = md5(postData.toc[index].id)
        }
        postData.category = await $content(
            'categories',
            postData.category
        ).fetch()

        console.log(postData)
        return {
            postData,
            perv,
            next,
        }
    },
}
</script>
