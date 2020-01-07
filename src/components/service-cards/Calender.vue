<script>
import { format } from 'date-fns'
import locale from 'date-fns/locale/ko'

export default {
  name: 'Ingang',

  async created () {
    this.events = [
      {
        title: '제16회 졸업식',
        desc: '16기 선배들의 졸업식입니다.',
        date: new Date()
      },
      {
        title: '개학식 & 입학식',
        desc: '2, 3학년의 개학과 1학년의 입학이 이루어집니다.',
        date: new Date()
      }
    ]
  },

  filters: {
    formatDate (val) {
      return format(val, 'YYYY년 M월 D일', { locale })
    }
  },

  data () {
    return {
      events: {}
    }
  }
}
</script>

<template>
  <div class="calender">
    <div class="calender__header">
      <h3 class="calender__header__title">
        <i class="calender__icon icon-sun" />학사일정
      </h3>
    </div>
    <div class="calender__list">
      <div
        :key="`event-${i}`"
        v-for="(event, i) in events"
        class="calender__list__event"
      >
        <span class="calender__list__event__date">
          {{ event.date | formatDate }}
        </span>
        <span class="calender__list__event__title">
          {{ event.title }}
        </span>
        <span class="calender__list__event__desc">
          {{ event.desc }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.calender {
  padding: 6px 15px;

  &__icon {
    margin-right: 8px;
  }

  &__header {
    padding: 15px 0;

    &__title {
      display: inline;
    }
  }

  &__list {
    border-top: solid 1.5px rgba(21, 19, 19, 0.1);

    &__event {
      padding: 10px 0;
      display: flex;
      flex-direction: column;

      &:not(:last-of-type) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.1);
      }
      &:last-of-type {
        padding-bottom: 5px;
      }

      &__date {
        display: block;
        font-weight: bold;
        line-height: 2;
      }

      &__title {
        line-height: 2;
      }

      &__desc {
        color: $dark-gray;
        display: inline-block;
        width: 100%;
        line-height: 1.5;
      }
    }
  }
}
</style>
