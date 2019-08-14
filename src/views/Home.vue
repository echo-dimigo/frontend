<script>
import SwaggyPost from '@/components/SwaggyPost.vue'
import service from '@/api/service'

export default {
  name: 'Home',
  components: { SwaggyPost },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPostInfo (idx) {
      return service.getPostById(idx)
    }
  },
  async created () {
    this.posts = await service.getBriefPosts()

    Promise.all(this.posts.map(async v => {
      return service.getPostById(v.idx)
    })).then(posts => {
      this.posts = posts
    })
  }
}
</script>

<template>
  <div class="home">
    <swaggy-post
      :key="`post-${i}`"
      v-for="(post, i) in posts"
      class="home__post"
      :post="post"
    />
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__post {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
