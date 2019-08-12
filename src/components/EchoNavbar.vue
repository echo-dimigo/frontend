<script>
import Brand from '@/assets/logo.png'

export default {
  name: 'EchoNavbar',
  data () {
    return {
      Brand
    }
  }
}
</script>

<template>
<nav class="navbar">
  <div class="navbar__brand">
    <img
      class="navbar__brand__logo"
      :src="Brand"
    >
    <span class="navbar__brand__name">
      ECHO
    </span>
  </div>
  <div class="navbar__search">
    <echoos-input
      class="navbar__search__input"
      placeholder="작성자, 게시물을 검색해보세요"
    />
  </div>
</nav>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';
@import url('https://fonts.googleapis.com/css?family=Jua&display=swap');

.navbar {
  min-height: 4.5rem;
  padding: 0 3rem;

  display: flex;
  align-items: center;

  background-color: $light-gray;

  &__brand {
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    &__logo {
      height: 3rem;
    }

    &__name {
      color: $brand;
      user-select: none;

      margin-left: 0.3em;

      font-family: 'Jua', sans-serif;
      font-size: 1.5em;
    }
  }

  &__search {
    margin-left: auto;

    &__input {
      width: 20rem;
    }
  }
}
</style>
