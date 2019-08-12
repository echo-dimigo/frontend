<script>
// touch effect

export default {
  name: 'EchoosButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<template>
  <button
    :class="{
      'button': true,
      'button-disabled': disabled
    }"
    @click="emitClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @import '../../scss/colors.scss';

  border: 0;
  border-radius: 30px;

  background-color: $brand;
  color: white;

  padding: 0.5rem 2rem;

  outline: none;

  &-disabled {
    cursor: not-allowed;
  }
}
</style>
