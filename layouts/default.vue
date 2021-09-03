<template>
    <div>
        <topBar></topBar>
        <Nuxt />
    </div>
</template>

<script>
import topBar from '~/components/home/topbar'
export default {
    components: {
        topBar
    }
}
</script>