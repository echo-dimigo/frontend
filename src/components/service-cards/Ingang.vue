<script>
import { DimigoInService } from '@/api/service'

export default {
  name: 'Ingang',

  async created () {
    this.refresh()
  },

  methods: {
    async refresh () {
      this.ingangs = await DimigoInService.getTodayIngangRooms()
    },

    async toggleIngang (ingang) {
      if (ingang.status) {
        await DimigoInService.cancelIngang(ingang)
      } else {
        await DimigoInService.requestIngang(ingang)
      }
      await this.refresh()
    }
  },

  data () {
    return {
      ingangs: {}
    }
  }
}
</script>

<template>
  <div class="ingang">
    <div class="ingang__header">
      <h3 class="ingang__header__title">
        <i class="ingang__icon icon-internet-class" />오늘의 인강실
      </h3>
    </div>
    <div class="ingang__list">
      <div
        :key="`ingang-${i}`"
        v-for="(ingang, i) in ingangs"
        class="ingang__list__item"
      >
        <span class="ingang__list__item__title">
          {{ ingang.title }}
        </span>
        <span class="ingang__list__item__info">
          현원 {{ ingang.present }}명 / 총원 {{ ingang.maxUser }}명
        </span>

        <span
          @click="toggleIngang(ingang)"
          :class="{
            'ingang__list__item__button': true,
            'ingang__list__item__button-applied': ingang.status,
            'ingang__list__item__button-request': !ingang.status
          }"
        >
          {{ ingang.status ? '취소하기' : '신청하기' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/colors.scss';

.ingang {
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

    &__item {
      padding: 10px 0;
      display: flex;
      flex-direction: column;

      &:not(:last-of-type) {
        border-bottom: solid 1.5px rgba(21, 19, 19, 0.1);
      }
      &:last-of-type {
        padding-bottom: 5px;
      }

      &__title {
        display: block;
        font-weight: bold;
        line-height: 2;
      }

      &__info {
        color: $dark-gray;
        display: inline-block;
        width: 100%;
        line-height: 1.5;
      }

      &__button{
        align-self: flex-end;
        color: $dark-gray;

        &-request,
        &-applied {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
