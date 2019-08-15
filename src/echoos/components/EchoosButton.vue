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
    v-ripple="'rgba(255, 255, 255, .2)'"
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
@import '../../scss/colors.scss';

.button {

  display: inline-block;

  border: 0;
  border-radius: 30px;

  background-color: $brand;
  color: white;

  transition: 0.5s background-color ease;

  padding: 0.5rem 1rem;

  outline: none;

  &-disabled {
    cursor: not-allowed;
  }
}
</style>
