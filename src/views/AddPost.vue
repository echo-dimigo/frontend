<script>
import { TagService, PostService } from '@/api/service'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'AddPost',

  components: {
    VueEditor
  },

  async created () {
    this.tags = await TagService.getAllTag()
  },

  methods: {
    async addPost () {
      if (!this.form.title || !this.form.content) {
        this.$swal('이런!', '제목과 내용을 채워주세요.', 'error')
        return
      }
      this.pending = true
      await PostService.addPost(this.form)
      this.pending = false
      this.$router.push('/')
    }
  },

  data () {
    return {
      pending: false,
      form: {
        title: null,
        content: null,
        tags: []
      }
    }
  }
}
</script>

<template>
  <div class="post">
    <h1>새 글 등록</h1>
    <echoos-input
      placeholder="새 글 제목"
      class="post__input"
      v-model="form.title"
    />
    <div class="post__input post__input-large">
      <vue-editor v-model="form.content" />
    </div>
    <span class="post__input post__input__helper">
      태그 기능은 준비 중입니다.
    </span>
    <echoos-button
      @click="addPost"
      class="post__button"
      :pending="pending"
    >
      등록하기
    </echoos-button>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.post {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  height: 100%;

  &__input {
    display: block;
    margin-bottom: 20px;

    &-large {
      width: 100%;
      height: 300px;
    }

    &__helper {
      margin-top: 30px;
    }
  }

  &__button {
    float: right;
  }
}
</style>
