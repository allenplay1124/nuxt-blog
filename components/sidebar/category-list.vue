<template>
    <div>
        <div
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
            分類
        </div>

        <div class="p-3">
            <ul>
                <nuxt-link
                    v-for="(item, index) in categories"
                    :key="index"
                    :to="item.path"
                >
                    <li
                        class="
                            p-2
                            my-2
                            rounded
                            shadow
                            hover:bg-gradient-to-r
                            from-cyan-500
                            via-sky-500
                            to-lime-500
                            hover:text-gray-100
                            dark:hover:from-cyan-500 dark:hover:to-blue-500
                        "
                    >
                        {{ item.title }}
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['categories'],
}
</script>
