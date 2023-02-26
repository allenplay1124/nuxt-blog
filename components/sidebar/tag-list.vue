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
                <nuxt-link :to="item.path" class="p-2 m-3 inline-block rounded shadow tag">
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
<style scoped>
.tag:hover {
    background: linear-gradient(
        145deg,
        rgba(77, 121, 207, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
}
</style>
