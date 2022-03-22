<template>
    <div>
        <h2 class="text-2xl text-rose-500">標籤：{{ tag.title }}</h2>
        <hr class="my-4" />
    </div>
</template>

<script>
export default {
    props: ['tag'],
}
</script>
