<script>
import service from '@/api/service'

export default {
  name: 'SwaggyNavigation',

  methods: {
    push (item) {
      this.$router.push(item.to)
    },

    isCurrent (item) {
      const path = this.$route.path
      return item.to === path
    }
  },

  async created () {
    this.loading = true

    this.tags = await service.getAllTag()
    this.tags = this.tags.map(v => {
      v.notification = 0 // 나중에 알림 API 생기면 수정
      v.to = `/tag/${v.idx}`
      return v
    })

    this.loading = false
  },

  data () {
    return {
      tags: [],
      loading: false,
      menus: [
        {
          name: '구독 태그 전체',
          notification: 0,
          to: '/tag/subscribed'
        },
        {
          name: '태그 전체',
          notification: 0,
          to: '/tag/all'
        },
        {
          name: '클립한 글',
          notification: 0,
          to: '/post/cliped'
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="nav">
    <div class="nav__item__box">
      <div
        :key="`item-${i}`"
        v-for="(item, i) in [...menus, ...tags]"
        :class="{
          'nav__item': true,
          'nav__item-current': isCurrent(item)
        }"
        @click="push(item)"
      >
        <div
          v-if="item.notification"
          :class="{
            'nav__item__badge': true,
            'nav__item__badge-current': isCurrent(item)
          }"
        >
          <span class="nav__item__badge__text">
            {{ item.notification }}
          </span>
        </div>
        <span class="nav__item__title">
          {{ item.name }}
        </span>
      </div>
      <content-placeholders
        v-if="loading"
        class="nav__item"
        :rounded="true"
      >
        <content-placeholders-text :lines="5" />
      </content-placeholders>
    </div>
    <div
      @click="push('/page/all')"
      class="nav__all-page"
    >
      구독 태그 전체 보기
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
    cursor: pointer;
    padding: 10px 0 10px 15px;
    color: $dark-gray;
    width: 85%;

    &-current {
      background-color: $brand;

      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;

      color: $white;

      transition: all 0.5s;
    }

    &__box {
      padding-bottom: 16px;
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
