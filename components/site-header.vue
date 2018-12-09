<template lang="html">
<header>
<mu-appbar style="width: 100%;" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
  {{siteName}}-
  <small>{{siteDescription}}</small>
</mu-appbar>

</header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    siteName: String,
    siteDescription: String
  }
}
</script>

<style lang="css">
</style>
