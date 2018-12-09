<template>
  <mu-container :fluid="true">
    <site-header
      :site-name="siteName"
      :site-description="siteDescription">
    </site-header>
    <div>
      <nuxt/>
    </div>
  </mu-container>
</template>

<script>
import {mapGetters} from 'vuex'
import SiteHeader from '~/components/site-header'
export default {
  components: {
    SiteHeader
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
