<script>
// touch effect

export default {
  name: 'EchoosButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick () {
      if (this.disabled || this.pending) return
      this.$emit('click')
    }
  }
}
</script>

<template>
  <button
    v-if="disabled"
    class="button button-disabled"
    @click="emitClick"
  >
    <slot />
  </button>

  <button
    v-else-if="pending"
    class="button button-pending"
    @click="emitClick"
  >
    <slot />
  </button>

  <button
    v-else
    v-ripple="'rgba(255, 255, 255, .2)'"
    class="button"
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
  cursor: pointer;

  &-disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &-pending {
    cursor: wait;
    opacity: 0.6;
  }
}
</style>
