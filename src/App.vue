<script>
import EchoWrapper from '@/components/EchoWrapper.vue'

export default {
  name: 'App',
  components: { EchoWrapper }
}
</script>

<template>
  <div id="app" class="app">
    <echo-wrapper>
      <router-view class="app__content" />
    </echo-wrapper>
  </div>
</template>

<style lang="scss">
@import './scss/normalize.css';
@import './scss/colors.scss';
@import './scss/font-faces';

* {
  font-family: 'NanumSquare', sans-serif;
}

.app {
  background-color: $gray;

  &__content {
    width: 60%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      width: 100%;
      order: 1;
    }
  }
}
</style>
