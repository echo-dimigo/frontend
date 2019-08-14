<script>
export default {
  name: 'AddPost',
  data () {
    return {
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
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.post {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  height: 100%;
}
</style>
