<script>
export default {
  name: 'NotFound'
}
</script>

<template>
  <div class="notfound">
    <span class="notfound__icon icon-alert" />
    <h2>존재하지 않는 페이지입니다.</h2>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.notfound {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    display: block;
    font-size: 4.5rem;
  }
}
</style>
