<script>
import { mapGetters } from 'vuex'

import EchoHeader from '@/components/EchoHeader.vue'
import EchoFooter from '@/components/EchoFooter.vue'
import SwaggyProfile from '@/components/SwaggyProfile.vue'
import SwaggyNavigation from '@/components/SwaggyNavigation.vue'
import SwaggyNotification from '@/components/SwaggyNotification.vue'

export default {
  name: 'EchoWrapper',
  components: { EchoHeader,
    SwaggyProfile,
    SwaggyNavigation,
    SwaggyNotification,
    EchoFooter
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
    isPost () {
      const path = this.$route.path

      return path === '/' ||
        path.includes('/post') ||
        path.includes('/page')
    }
  }
}
</script>

<template>
  <div class="wrapper">
  <echo-header />
  <div class="container">
    <div class="container__left">
      <swaggy-profile
        v-if="isAuth"
        class="container__left__profile"
      />
      <swaggy-navigation
        v-if="isAuth && isPost"
        class="container__left__navigation"
      />
    </div>
    <slot />
    <div class="container__right">
      <swaggy-notification
        v-if="isAuth"
        class="container__right__notification"
      />
    </div>
  </div>
  <echo-footer />
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;

  &__left {
    width: 230px;

    @media (max-width: 900px) {
      width: 100%;
    }

    &__profile,
    &__navigation {
      margin-bottom: 15px;
    }
  }

  &__right {
    width: 230px;
    height: 100%;
    margin-bottom: 15px;

    @media (max-width: 900px) {
      width: 100%;
    }
  }
}
</style>
