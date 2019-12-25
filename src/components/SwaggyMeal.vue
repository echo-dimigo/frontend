<script>
import { DimigoInService } from '@/api/service'

export default {
  name: 'SwaggyMeal',

  async created () {
    this.meal = await DimigoInService.getTodayMeal()
  },

  methods: {
    toggleExpand () {
      this.expand = !this.expand
    }
  },

  filters: {
    separateMeal (val) {
      if (!val) return '식단 정보가 학교 홈페이지에 업로드되어 있지 않습니다.'
      return val.replace(/\//gi, ' | ')
    }
  },

  data () {
    return {
      expand: true,
      meal: {
        breakfast: '',
        lunch: '',
        dinenr: ''
      },
      mealItems: [
        { name: '아침', code: 'breakfast' },
        { name: '점심', code: 'lunch' },
        { name: '저녁', code: 'dinner' }
      ]
    }
  }
}
</script>

<template>
  <div class="meal">
    <div
      class="meal__header"
      @click="toggleExpand"
    >
      <h3 class="meal__header__title">
        <i class="meal__icon icon-school-meal" />오늘의 급식
      </h3>
      <div class="meal__header__expand">
        <span :class="{
          'meal__header__expand__icon': true,
          'icon-arrow-up': expand,
          'icon-arrow-down': !expand
        }" />
      </div>
    </div>
    <template v-if="expand">
      <div class="meal__list">
        <div
          :key="`meal-${i}`"
          v-for="(item, i) in mealItems"
          class="meal__list__item"
        >
          <span class="meal__list__item__title">
            {{ item.name }}
          </span>
          <span class="meal__list__item__content">
            {{ meal[item.code] | separateMeal }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.meal {
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

    &__item {
      padding: 10px 0;

      &:not(:last-of-type) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.05);
      }

      &__title {
        display: inline;
        font-weight: bold;
      }

      &__content {
        color: $dark-gray;
        line-height: 20px;
      }
    }
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
