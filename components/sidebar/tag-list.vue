<template>
    <div class="shadow rounded dark:bg-gray-600 p-2 m-2">
        <h2 class="text-2xl text-center">標籤</h2>
        <div class="py-4">
            <span v-for="(item, index) in tags" :key="index">
                <nuxt-link
                    :to="item.path"
                    class="
                        dark:bg-sky-500
                        dark:text-gray-100
                        dark:hover:bg-gray-100
                        dark:hover:text-sky-600
                        hover:shadow-xl
                        mx-1
                        p-2
                        rounded
                        shadow
                    "
                >
                    {{ item.title }}
                </nuxt-link>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['tags'],
}
</script>
