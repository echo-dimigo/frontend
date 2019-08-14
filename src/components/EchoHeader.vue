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
  <router-link to="/">
    <div class="header__brand">
      <img
        class="header__brand__logo"
        :src="Brand"
      >
      <span class="header__brand__name">
        ECHO
      </span>
    </div>
  </router-link>
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

a {
  text-decoration: none;
}

.header {
  height: 4.5rem;
  padding: 0 3rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
    height: 3rem;
  }

  display: flex;
  align-items: center;

  background-color: $light-gray;

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16);

  &__brand {
    height: 3rem;

    @media (max-width: 900px) {
      height: 2rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    &__logo {
      height: 3rem;

      @media (max-width: 900px) {
        height: 2rem;
      }
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

    /** todo: 모바일용 검색창 */
    @media (max-width: 900px) {
      display: none;
    }

    &__input {
      width: 20rem;
    }
  }
}
</style>
