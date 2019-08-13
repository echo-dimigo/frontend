<script>
import Brand from '@/assets/logo.png'

export default {
  name: 'EchoHeader',
  data () {
    return {
      Brand
    }
  }
}
</script>

<template>
<header class="header">
  <div class="header__brand">
    <img
      class="header__brand__logo"
      :src="Brand"
    >
    <span class="header__brand__name">
      ECHO
    </span>
  </div>
  <div class="header__search">
    <echoos-input
      class="header__search__input"
      placeholder="🔎 작성자, 게시물을 검색해보세요"
    />
  </div>
</header>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';
@import url('https://fonts.googleapis.com/css?family=Jua&display=swap');

.header {
  min-height: 4.5rem;
  padding: 0 3rem;

  display: flex;
  align-items: center;

  background-color: $light-gray;

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16);

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
