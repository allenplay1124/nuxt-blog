<template>
    <div>
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
                class="
                    float-left
                    p-1
                    mx-2
                    shadow
                    rounded
                    bg-gray-200
                    text-gray-600
                    hover:bg-sky-500 hover:text-gray-50
                    dark:bg-sky-500
                    dark:text-gray-50
                    dark:hover:bg-gray-100
                    dark:hover:text-sky-600
                    hover:shadow-xl
                "
                v-for="(item, index) in tags"
                :key="index"
            >
                <nuxt-link :to="item.path">
                    {{ item.title }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['tags'],
}
</script>
