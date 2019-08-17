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

    Promise.all(this.posts.map(v => {
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
    <template v-if="loading">
      <content-placeholders
        :key="`placeholder-${i}`"
        v-for="(_, i) in 10"
        class="home__post__placeholder"
        :rounded="true"
      >
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="5" />
      </content-placeholders>
    </template>
    <template v-else>
      <swaggy-post
        :key="`post-${i}`"
        v-for="(post, i) in posts"
        class="home__post"
        :post="post"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__post {
    &__placeholder {
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
