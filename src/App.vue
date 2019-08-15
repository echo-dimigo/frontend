<script>
import EchoHeader from '@/components/EchoHeader.vue'
import EchoWrapper from '@/components/EchoWrapper.vue'
import EchoFooter from '@/components/EchoFooter.vue'

export default {
  name: 'App',
  components: { EchoHeader,
    EchoWrapper,
    EchoFooter }
}
</script>

<template>
  <div id="app" class="app">
    <echo-header />
    <echo-wrapper>
      <router-view class="app__content" />
    </echo-wrapper>
    <echo-footer />
  </div>
</template>

<style lang="scss">
@import './scss/normalize.css';
@import './scss/colors.scss';
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

* {
  font-family: 'Spoqa Han Sans', 'Sans-serif';
}

.app {
  min-height: 100vh;
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
