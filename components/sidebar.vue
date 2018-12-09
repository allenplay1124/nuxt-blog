<template lang="html">
<aside>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <div>
      <mu-appbar color="teal">
        最新文章
      </mu-appbar>
      <mu-list>
        <mu-list-item href v-for="item in lastPosts">
          <mu-list-item-title>
              <a :href="item.link">{{item.title.rendered}}</a>
          </mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </div>
  </mu-paper>
</aside>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  name: 'sidebar',
  props: {

  },
  data() {
    return {
      lastPosts: []
    }
  },
  created() {
    this.getLastPosts()
  },
  methods: {
    async getLastPosts() {
      const res = await axios.get('wp/v2/posts')
      this.lastPosts = res.data
      console.log(res.data)
    }
  }
}
</script>

<style lang="css">
</style>
