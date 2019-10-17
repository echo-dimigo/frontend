<script>
import Brand from '@/assets/images/logo.png'
import { mapGetters } from 'vuex'

export default {
  name: 'EchoHeader',

  computed: {
    ...mapGetters(
      ['isAuth']
    )
  },

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
    </div>
  </router-link>
  <div class="header__search">
    <echoos-input
      v-if="isAuth"
      class="header__search__input"
      placeholder="🔎 작성자, 게시물을 검색해보세요"
    />
  </div>
</header>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

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

    // &__name {
    //   color: $brand;
    //   user-select: none;

    //   margin-top: 0.3rem;
    //   margin-left: 0.3em;

    //   font-family: 'Black Han Sans', sans-serif;
    //   font-size: 1.5em;
    // }
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
