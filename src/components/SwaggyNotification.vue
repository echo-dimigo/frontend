<script>
export default {
  name: 'SwaggyNotification',

  props: {
    noties: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    toggleExpand () {
      this.expand = !this.expand
    },

    push (to) {
      this.$router.push(to)
    }
  },

  data () {
    return {
      expand: true
    }
  }
}
</script>

<template>
  <div class="noti">
    <div
      class="noti__header"
      @click="toggleExpand"
    >
      <h3 class="noti__header__title">
        <i class="noti__icon icon-notice" />알림 모음
        ({{ noties.length }})
      </h3>
      <div class="noti__header__expand">
        <span :class="{
          'noti__header__expand__icon': true,
          'icon-arrow-up': expand,
          'icon-arrow-down': !expand
        }" />
      </div>
    </div>
    <transition-group name="expand-toggle">
      <template v-if="expand">
        <div
          v-if="noties.length"
          key="noti-list"
          class="noti__list"
        >
          <div
            :key="`noti-${i}`"
            v-for="(noti, i) in noties"
            class="noti__list__item"
          >
            <span class="noti__list__item__title">
              {{ noti.title }}
            </span>
            <span class="noti__list__item__content">
              {{ noti.content }}
            </span>
          </div>
        </div>

        <div
          v-else
          key="noti-list"
          class="noti__list noti__list-empty"
        >
          아직 도착한 알림이 없습니다.
        </div>

        <div
          @click="push('/notification')"
          key="noti-button"
          class="noti__button"
        >
          알림 모아보기
        </div>
      </template>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.noti {
  border-radius: 6px;
  border: solid 1.5px rgba(21, 19, 19, 0.05);

  background-color: $white;

  padding: 6px 15px;

  &__icon {
    margin-right: 8px;
  }

  &__header {
    padding: 15px 0;

    &__title {
      display: inline;
    }

    &__expand {
      float: right;

      &__icon {
        color: $dark-gray;
        font-size: 1.2rem;
      }
    }
  }

  &__list {
    border-top: solid 1.5px rgba(21, 19, 19, 0.05);
    border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);

    &-empty {
      padding: 20px 0;
    }

    &__item {
      padding: 18px 0;

      &:not(:last-child) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);
      }

      &__title {
        display: block;
        font-weight: bold;
        margin-bottom: 10px;
      }

      &__content {
        color: $dark-gray;
      }
    }
  }

  &__button {
    cursor: pointer;
    padding: 1em 0;

    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    font-weight: 600;
  }
}

.expand-toggle-enter-active, .expand-toggle-leave-active {
  transition: all 400ms ease;
}

.expand-toggle-enter, .expand-toggle-leave-to {
  line-height: 0;
  padding: 0;
  overflow: hidden;
}

</style>
