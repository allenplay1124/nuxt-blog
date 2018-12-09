<template>
  <mu-row gutter>
    <mu-col class="hidden-sm-and-down" span="2" md="2" lg="2" xl="2">
      <sidebar></sidebar>
    </mu-col>
    <mu-col>
    </mu-col>
  </mu-row>
</template>

<script>
import {mapGetters} from 'vuex'
import sidebar from '~/components/sidebar'
export default {
  components: {
    sidebar
  },
  head() {
    return {
      title: this.siteName,
      meta: [
        {hid: 'description', name: 'description', content: this.siteDescription}
      ]
    }
  },
  computed: {
    ...mapGetters({
      siteName: 'siteName',
      siteDescription: 'siteDescription'
    })
  }
}
</script>

<style>

</style>
