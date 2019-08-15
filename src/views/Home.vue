<script>
import SwaggyPost from '@/components/SwaggyPost.vue'
import service from '@/api/service'

export default {
  name: 'Home',
  components: { SwaggyPost },
  data () {
    return {
      loading: false,
      posts: []
    }
  },
  methods: {
    async getPostInfo (idx) {
      return service.getPostById(idx)
    }
  },
  async created () {
    this.loading = true
    this.posts = await service.getBriefPosts()

    Promise.all(this.posts.map(async v => {
      return service.getPostById(v.idx)
    })).then(posts => {
      this.posts = posts
      this.loading = false
    })
  }
}
</script>

<template>
  <div class="home">
    <div
      v-if="loading"
      class="home__loader"
    >
      <echoos-loader
        class="home__loader__circle"
      />
    </div>
    <swaggy-post
      v-else
      :key="`post-${i}`"
      v-for="(post, i) in posts"
      class="home__post"
      :post="post"
    />
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__loader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__post {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
