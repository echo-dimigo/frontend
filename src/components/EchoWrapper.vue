<script>
import { mapGetters } from 'vuex'

import SwaggyProfile from '@/components/SwaggyProfile.vue'
import SwaggyNavigation from '@/components/SwaggyNavigation.vue'
import SwaggyNotification from '@/components/SwaggyNotification.vue'

export default {
  name: 'EchoWrapper',
  components: { SwaggyProfile,
    SwaggyNavigation,
    SwaggyNotification },
  computed: {
    ...mapGetters([
      'isAuth'
    ])
  }
}
</script>

<template>
  <div class="container">
    <div class="container__left">
      <swaggy-profile
        v-show="isAuth"
        class="container__left__profile"
      />
      <swaggy-navigation
        v-show="isAuth"
        class="container__left__navigation"
      />
    </div>
    <slot />
    <div class="container__right">
      <swaggy-notification
        v-show="isAuth"
        class="container__right__notification"
      />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;

  &__left {
    width: 220px;

    @media (max-width: 900px) {
      width: 100%;
    }

    &__profile,
    &__navigation {
      margin-bottom: 15px;
    }
  }

  &__right {
    width: 250px;
    height: 100%;
    margin-bottom: 15px;

    @media (max-width: 900px) {
      width: 100%;
    }
  }
}
</style>
