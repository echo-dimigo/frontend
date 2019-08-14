<script>
export default {
  name: 'SwaggyNavigation',

  methods: {
    push (val) {
      this.current = val
      this.$router.push(this.menus[val].to)
    },

    isCurrent (val) {
      const path = this.$route.path

      return path === '/' && val === this.current
    }
  },

  data () {
    return {
      current: 0,
      menus: [
        {
          title: '구독 페이지 전체',
          notification: 2,
          to: '/'
        },
        {
          title: '페이지 전체',
          notification: 0,
          to: '/'
        },
        {
          title: '클립한 글',
          notification: 0,
          to: '/'
        },
        {
          title: 'JnJ 일반 동아리',
          notification: 10,
          to: '/'
        },
        {
          title: 'IT 학생회',
          notification: 4,
          to: '/'
        },
        {
          title: '대나무숲',
          notification: 2,
          to: '/'
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="nav">
    <div
      :key="`item-${i}`"
      v-for="(item, i) in menus"
      :class="{
        'nav__item': true,
        'nav__item-current': isCurrent(i)
      }"
      @click="push(i)"
    >
      <div
        v-if="item.notification"
        :class="{
          'nav__item__badge': true,
          'nav__item__badge-current': isCurrent(i)
        }"
      >
        <span class="nav__item__badge__text">
          {{ item.notification }}
        </span>
      </div>
      <span class="nav__item__title">
        {{ item.title }}
      </span>
    </div>
    <div
      @click="push('/page/all')"
      class="nav__all-page"
    >
      구독 페이지 전체 보기
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.nav {
  background-color: $white;
  padding: 1em 0 0;

  border-radius: 6px;
  border: solid 1.5px rgba(21, 19, 19, 0.05);

  &__item {
    padding: 10px 0 10px 15px;
    color: $dark-gray;
    width: 85%;

    &-current {
      background-color: $brand;

      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;

      color: $white;
    }

    &__title {
      user-select: none;
    }

    &__badge {
      height: 1.5rem;
      width: 1.5rem;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      margin-right: 5px;
      background-color: $banana;

      &-current {
        background-color: $white;
        opacity: 1;
      }

      &__text {
        color: $dark-gray;
        font-size: 0.8rem;

        &-current {
          color: $brand;
        }
      }
    }
  }

  &__all-page {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1.5px rgba(21, 19, 19, 0.05);
    user-select: none;
    padding: 1em 0;
  }
}
</style>
