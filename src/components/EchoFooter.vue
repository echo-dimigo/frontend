<script>
export default {
  name: 'EchoFooter'
}
</script>

<template>
<footer class="footer">
  <span class="footer__text">한국디지털미디어고등학교 SNS 서비스, 에코</span>
  <span class="footer__text">©2019 JnJ Communication</span>
</footer>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.footer {
  height: 5rem;
  padding: 1rem 2rem;
  background-color: $footer;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &__text {
    line-height: 30px;
  }
}
</style>
