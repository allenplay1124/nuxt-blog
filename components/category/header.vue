<template>
    <div class="relative">
        <img :src="category.src" class="object-cover" :alt="category.title" />
        <div class="absolute top-4 left-4 bg-gray-100 p-2 rounded shadow">
            <h1 class="text-2xl">{{ category.title }}</h1>
            <div class="text-gray-500 py-2">
                <nuxt-content :document="category" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['category'],
}
</script>
