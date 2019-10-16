<script>
import { TagService } from '@/api/service'
import SwaggyTag from '@/components/SwaggyTag.vue'

export default {
  name: 'TagList',
  components: { SwaggyTag },
  data () {
    return {
      loading: false,
      tags: []
    }
  },
  async created () {
    this.loading = true
    this.tags = await TagService.getAllTag()
    this.loading = false
  }
}
</script>

<template>
  <div class="tag-list">
    <template v-if="loading">
      <content-placeholders
        :key="`placeholder-${i}`"
        v-for="(_, i) in 10"
        class="tag-list__placeholder"
        :rounded="true"
      >
        <content-placeholders-heading />
        <content-placeholders-text :lines="1" />
      </content-placeholders>
    </template>
    <template v-else>
      <swaggy-tag
        :key="`tag-${i}`"
        v-for="(tag, i) in tags"
        class="tag-list__tag"
        :tag="tag"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.tag-list {
  &__tag {
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }

  &__placeholder {
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }
}
</style>
