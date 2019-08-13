<script>
import EchoHeader from '@/components/EchoHeader.vue'

export default {
  name: 'App',
  components: { EchoHeader }
}
</script>

<template>
  <div id="app">
    <echo-header />
    <router-view />
  </div>
</template>

<style lang="scss">
@import './scss/normalize.css';
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);

* {
  font-family: 'Spoqa Han Sans', 'Sans-serif';
}
</style>
