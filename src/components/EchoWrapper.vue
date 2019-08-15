<script>
import SwaggyProfile from '@/components/SwaggyProfile.vue'
import SwaggyNavigation from '@/components/SwaggyNavigation.vue'
import SwaggyNotification from '@/components/SwaggyNotification.vue'

export default {
  name: 'EchoWrapper',
  components: { SwaggyProfile,
    SwaggyNavigation,
    SwaggyNotification }
}
</script>

<template>
  <div class="container">
    <div class="menu">
      <swaggy-profile
        class="menu__profile"
      />
      <swaggy-navigation
        class="menu__navigation"
      />
    </div>
    <slot />
    <swaggy-notification
      class="notification"
    />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.menu {
  width: 220px;

  @media (max-width: 900px) {
    width: 100%;
  }

  &__profile,
  &__navigation {
    margin-bottom: 15px;
  }
}

.notification {
  width: 250px;
  height: 100%;
  margin-bottom: 15px;

  @media (max-width: 900px) {
    width: 100%;
  }
}
</style>
