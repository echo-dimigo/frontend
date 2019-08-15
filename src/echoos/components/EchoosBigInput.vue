<script>
export default {
  name: 'EchoosBigInput',
  props: {
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
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
  <textarea
    class="input"
    v-model="inputValue"
    :placeholder="placeholder"
    @keyup.enter="emitEnter"
  />
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.input {
  border: 0;
  border-radius: 15px;
  line-height: 23px;

  background-color: $gray;

  padding: 1rem;

  outline: none;
}
</style>
