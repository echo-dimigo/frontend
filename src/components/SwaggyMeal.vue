<script>
import service from '@/api/service'

export default {
  name: 'SwaggyMeal',

  async created () {
    this.meal = await service.getTodayMeal()
  },

  methods: {
    toggleExpand () {
      this.expand = !this.expand
    }
  },

  filters: {
    separateMeal (val) {
      return val.replace(/\//gi, ' | ')
    }
  },

  data () {
    return {
      expand: true,
      meal: {}
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
        <div class="meal__list__item">
          <span class="meal__list__item__title">
            아침
          </span>
          <span class="meal__list__item__content">
            {{ meal.breakfast | separateMeal }}
          </span>
        </div>

        <div class="meal__list__item">
          <span class="meal__list__item__title">
            점심
          </span>
          <span class="meal__list__item__content">
            {{ meal.lunch | separateMeal }}
          </span>
        </div>

        <div class="meal__list__item">
          <span class="meal__list__item__title">
            저녁
          </span>
          <span class="meal__list__item__content">
            {{ meal.dinner | separateMeal }}
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
</style>
