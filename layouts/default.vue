<template>
    <div>
        <header>
            <topBar></topBar>
            <navbar></navbar>
        </header>

        <Nuxt />
    </div>
</template>

<script>
import topBar from '~/components/home/topbar'
import navbar from '~/components/home/navbar'
export default {
    components: {
        topBar,
        navbar
    }
}
</script>