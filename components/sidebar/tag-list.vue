<template>
    <div>
        <h2
            class="
                text-xl text-center
                p-2
                bg-sky-500
                text-gray-100
                dark:bg-gray-600
                rounded
                shadow
            "
        >
            標籤
        </h2>
        <div class="py-8">
            <span v-for="(item, index) in tags" :key="index">
                <nuxt-link
                    :to="item.path"
                    class="
                        p-2
                        my-2
                        rounded
                        shadow
                        hover:bg-gradient-to-r
                        from-sky-500
                        to-lime-500
                        hover:text-gray-100
                        dark:hover:from-cyan-500 dark:hover:to-blue-500
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
