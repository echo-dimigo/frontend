<script>
import { DimigoInService } from '@/api/service'

export default {
  name: 'Timetable',

  async created () {
    this.afscs = await DimigoInService.getTodayAfterschools()
    this.afscs = this.afscs.map(afsc => ({
      title: afsc.name,
      teacher: afsc.teacher,
      time: `방과 후 ${afsc.time.join(', ')}`
    }))

    this.subjects = [
      {
        title: '국어',
        teacher: '김태철',
        time: 1
      },
      {
        title: '수학',
        teacher: '장문석',
        time: 2
      },
      {
        title: '영어',
        teacher: '김효은',
        time: 3
      },
      {
        title: '통합사회',
        teacher: '이민주',
        time: 4
      },
      {
        title: '통합과학',
        teacher: '김종수',
        time: 5
      },
      {
        title: '프로그래밍',
        teacher: '함지연',
        time: 6
      },
      {
        title: '컴퓨터 시스템 일반',
        teacher: '이진석',
        time: 7
      }
    ]
  },

  data () {
    return {
      afscs: [],
      subjects: []
    }
  }
}
</script>

<template>
  <div class="time-table">
    <div class="time-table__header">
      <h3 class="time-table__header__title">
        <i class="time-table__icon icon-book-sm" />오늘의 시간표
      </h3>
    </div>
    <div class="time-table__list">
      <div
        :key="`item-${i}`"
        v-for="(item, i) in [...subjects, ...afscs]"
        class="time-table__list__subject"
      >
        <span class="time-table__list__subject__title">
          {{ item.time }}교시 {{ item.title }}
        </span>
        <span class="time-table__list__subject__teacher">
          {{ item.teacher }} 선생님
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.time-table {
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

    &__subject {
      padding: 10px 0;

      &:not(:last-of-type) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.1);
      }
      &:last-of-type {
        padding-bottom: 5px;
      }

      &__title {
        display: inline;
        font-weight: bold;
        line-height: 2;
      }

      &__teacher {
        color: $dark-gray;
        width: 100%;
        line-height: 1.5;
      }
    }
  }
}
</style>
