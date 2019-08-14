<script>
import EchoHeader from '@/components/EchoHeader.vue'
import SwaggyProfile from '@/components/SwaggyProfile.vue'
import SwaggyNavigation from '@/components/SwaggyNavigation.vue'
import SwaggyNotification from '@/components/SwaggyNotification.vue'

export default {
  name: 'App',
  components: { EchoHeader,
    SwaggyProfile,
    SwaggyNavigation,
    SwaggyNotification }
}
</script>

<template>
  <div id="app" class="app">
    <echo-header />
    <div class="app__container">
      <div class="app__menu">
        <swaggy-profile
          class="app__menu__profile"
        />
        <swaggy-navigation
          class="app__menu__navigation"
        />
      </div>
      <router-view
        class="app__content"
      />
      <swaggy-notification
        class="app__notification"
      />
    </div>
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

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }

  &__menu {
    width: 220px;

    @media (max-width: 900px) {
      width: 100%;
    }

    &__profile,
    &__navigation {
      margin-bottom: 15px;
    }
  }

  &__content {
    width: 60%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      width: 100%;
      order: 1;
    }
  }

  &__notification {
    width: 250px;
    height: 100%;
    margin-bottom: 15px;

    @media (max-width: 900px) {
      width: 100%;
    }
  }
}
</style>
