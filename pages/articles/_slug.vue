<template>
    <div>
        <div class="lg:p-10 p-3 bg-sky-100 dark:bg-gray-800">
            <div class="lg:container m-auto">
                <div class="lg:flex lg:gap-12">
                    <div
                        class="
                            w-full
                            lg:w-9/12
                            bg-gray-50
                            dark:bg-gray-700 dark:shadow-gray-900
                            my-5
                            p-5
                            shadow-md
                            rounded
                        "
                    >
                        <h1 class="text-3xl dark:text-gray-300">
                            {{ postData.title }}
                        </h1>

                        <hr class="my-5" />

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
                            class="w-full shadow-md rounded object-cover m-auto"
                            :src="postData.image"
                            :alt="postData.title"
                        />

                        <div
                            class="
                                dark:bg-gray-600 dark:text-gray-100
                                my-10
                                p-3
                                bg-gray-100
                                text-gray-600
                                rounded-lg
                            "
                        >
                            {{ postData.summary }}
                        </div>

                        <div
                            class="
                                shadow-md
                                rounded
                                bg-gray-50
                                dark:bg-gray-700 dark:text-gray-100
                                p-5
                                my-10
                                w-full
                                block
                                lg:hidden
                            "
                        >
                            <h3
                                class="
                                    text-center text-xl
                                    pb-5
                                    dark:text-yellow-500
                                "
                            >
                                文章段落
                            </h3>
                            <hr />
                            <div class="mt-5">
                                <nav>
                                    <ul>
                                        <li
                                            v-for="(
                                                item, index
                                            ) in postData.toc"
                                            :key="index"
                                            class="py-2"
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

                        <div class="dark:text-gray-100 my-3">
                            <nuxt-content
                                :document="postData"
                                class="prose dark:prose-invert"
                            />
                        </div>
                        <hr />
                        <div class="my-3">
                            <ul class="clear-both">
                                <li
                                    class="
                                        float-left
                                        p-1
                                        mx-2
                                        shadow
                                        rounded
                                        bg-gray-800
                                        dark:bg-gray-800
                                        text-gray-100
                                    "
                                >
                                    Tags:
                                </li>
                                <li
                                    v-for="(item, index) in postData.tags"
                                    :key="index"
                                    class="
                                        float-left
                                        p-1
                                        mx-2
                                        shadow
                                        rounded
                                        bg-gray-200
                                        text-gray-600
                                        hover:bg-sky-500 hover:text-gray-50
                                        dark:bg-sky-500 dark:text-gray-50
                                    "
                                >
                                    <nuxt-link :to="item.path">
                                        {{ item.title }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>

                        <div class="clear-both py-10 dark:text-blue-200">
                            <ul>
                                <li
                                    class="
                                        float-left
                                        p-3
                                        dark:bg-gray-600
                                        rounded
                                        shadow-md
                                        mx-1
                                    "
                                    v-if="perv != null"
                                >
                                    <nuxt-link :to="perv.path">
                                        ◀︎ {{ perv.title }}
                                    </nuxt-link>
                                </li>
                                <li
                                    class="
                                        float-right
                                        p-3
                                        dark:bg-gray-600
                                        rounded
                                        shadow-md
                                        w-1/2
                                        mx-1
                                    "
                                    v-if="next != null"
                                >
                                    <nuxt-link :to="next.path">
                                        {{ next.title }} ▶︎
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <Disqus />
                        </div>
                    </div>

                    <div class="w-full hidden lg:block lg:w-3/12">
                        <div
                            class="
                                shadow-md
                                rounded
                                bg-gray-50
                                dark:bg-gray-700 dark:shadow-gray-900
                                p-5
                                my-10
                                sticky
                                top-0
                            "
                        >
                            <div
                                class="
                                    text-center text-2xl
                                    pb-5
                                    dark:text-yellow-500
                                "
                            >
                                文章段落
                            </div>
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
        <Footbar />
    </div>
</template>

<script>
import Footbar from '~/components/home/footbar'

export default {
    components: {
        Footbar,
    },
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

        let tags = []

        for (var item of postData.tags) {
            let tag = await $content('tags', item).fetch()

            tags.push(tag)
        }

        postData.tags = await tags

        return {
            postData,
            perv,
            next,
        }
    },
    head() {
        return {
            title: this.postData.title + ' - ' + process.env.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.postData.summary,
                },
            ],
        }
    },
}
</script>
