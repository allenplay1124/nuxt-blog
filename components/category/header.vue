<template>
    <div class="relative">
        <img :src="category.src" class="object-cover" :alt="category.title" />
        <div
            class="
                absolute
                top-2
                left-6
                md:top-4 md:left-4
                lg:top-6 lg:left-6
                bg-[rgba(255,255,255,0.3)]
                backdrop-blur-sm
                p-1
                rounded
                text-gray-900
                shadow
            "
        >
            <h1 class="text-2xl">{{ category.title }}</h1>
            <div class="py-1">
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
