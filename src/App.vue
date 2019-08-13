<script>
import EchoNavbar from '@/components/EchoNavbar.vue'

export default {
  name: 'App',
  components: { EchoNavbar }
}
</script>

<template>
  <div id="app">
    <echo-navbar />
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
