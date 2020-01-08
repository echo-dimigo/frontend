<script>
import { DimigoInService } from '@/api/service'

export default {
  name: 'Afterschool',

  async created () {
    this.afscs = await DimigoInService.getTodayAfterschools()
  },

  methods: {
    getTimeText (time) {
      return `방과 후 ${time.join(', ')}타임`
    },
    openWindow () {
      window.location.href = 'https://dimigo.in/request/afterschool'
    }
  },

  data () {
    return {
      afscs: {}
    }
  }
}
</script>

<template>
  <div class="afsc">
    <div class="afsc__header">
      <h3 class="afsc__header__title">
        <i class="afsc__icon icon-ball" />오늘의 방과 후 수업
        <span
          @click="openWindow"
          class="afsc__header__request"
        >
          <i class="icon-long-arrow-right" />
          신청하러 가기
        </span>
      </h3>
    </div>
    <div class="afsc__list">
      <div
        :key="`afsc-${i}`"
        v-for="(afsc, i) in afscs"
        class="afsc__list__item"
      >
        <span class="afsc__list__item__title">
          {{ getTimeText(afsc.time) }}
        </span>
        <span class="afsc__list__item__info">
          {{ afsc.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.afsc {
  padding: 6px 15px;

  &__icon {
    margin-right: 8px;
  }

  &__header {
    padding: 15px 0;

    &__title {
      display: inline;
    }

    &__request {
      color: $dark-gray;
      cursor: pointer;
      font-size: 0.7rem;
    }
  }

  &__list {
    border-top: solid 1.5px rgba(21, 19, 19, 0.1);

    &__item {
      padding: 10px 0;

      &:not(:last-of-type) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.1);
      }
      &:last-of-type {
        padding-bottom: 5px;
      }

      &__title {
        font-weight: bold;
        line-height: 2;
        display: inline;
      }

      &__info {
        color: $dark-gray;
        width: 100%;
        line-height: 1.5;
      }
    }
  }
}
</style>
