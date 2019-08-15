<script>
export default {
  name: 'EchoosLoader'
}
</script>

<template>
  <div class="loader" />
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  border: 5px solid $white;
  border-top: 5px solid $brand;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
}
</style>
