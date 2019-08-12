<script>
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
    },
    value: {
      type: [ String, Number ],
      default: null
    }
  },

  data () {
    return {
      inputValue: null
    }
  },

  watch: {
    value (v) {
      this.inputValue = v
    },
    inputValue (v) {
      this.$emit('input', v)
    }
  },

  methods: {
    emitEnter () {
      this.$emit('enter')
    }
  }
}
</script>

<template>
<input
  class="input"
  v-model="inputValue"
  :type="type"
  :placeholder="placeholder"
  @keyup.enter="emitEnter"
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
