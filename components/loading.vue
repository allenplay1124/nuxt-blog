<template>
  <div class="loading-page" v-if="loading">
    <div>Loading...</div>
  </div>
</template>
<script>
export default {
  computed: {
    loading: {
      get() {
        return this.$store.state.loading
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFF;
  color:black;
  font-size: 12pt;
  z-index: 99999;
}
</style>
