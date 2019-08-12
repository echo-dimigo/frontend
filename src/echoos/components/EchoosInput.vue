<script>
// todo: emit enter and v-model

export default {
  name: 'EchoosInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    }
  }
}
</script>

<template>
<input
  class="input"
  :type="type"
  :placeholder="placeholder"
>
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.input {
  border: 0;
  border-radius: 30px;

  background-color: $gray;

  height: 2rem;
  padding-left: 1rem;

  outline: none;

  font-weight: 200;
}
</style>
