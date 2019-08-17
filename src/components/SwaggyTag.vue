<script>
export default {
  name: 'SwaggyTag',

  props: {
    tag: {
      type: Object,
      required: true
    }
  },

  computed: {
    joinOption () {
      const option = this.tag.joinOption

      if (option === 'free_for_all') {
        return '가입 가능'
      } if (option === 'request') {
        return '승인 후 가입 가능'
      }
      return '비공개 태그'
    },

    joinMessage () {
      const option = this.tag.joinOption

      if (option === 'free_for_all') {
        return '가입하기'
      } if (option === 'request') {
        return '가입 신청하기'
      }
      return '신청 불가'
    },

    joinIcon () {
      const option = this.tag.joinOption

      if (option === 'free_for_all') {
        return 'plus'
      } if (option === 'request') {
        return 'request-sm'
      }
      return 'cross'
    }
  }
}
</script>

<template>
  <div class="tag">
    <div class="tag__info">
      <h3 class="tag__info__name">
        {{ tag.name }}
      </h3>
      <span class="tag__info__option">
        {{ joinOption }},
      </span>
      <span class="tag__info__owner">
        관리자 {{ tag.owner.name }}
      </span>
    </div>
    <span class="tag__description">
      {{ tag.description }}
    </span>
    <div
      :class="{
        'tag__join': true,
        'tag__join-private': joinOption === '비공개 태그'
      }"
    >
      <span
        :class="`icon-${joinIcon}`"
      />
      {{ joinMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.tag {
  border-radius: 6px;
  border: solid 1.5px rgba(21, 19, 19, 0.05);
  background-color: $white;
  padding: 15px 10px;

  &__info {
    &__name {
      margin-top: 0;
      display: inline-block;
    }

    &__option {
      color: $dark-gray;
      font-size: 0.8rem;
    }

    &__owner {
      color: $dark-gray;
      font-size: 0.8rem;
    }
  }

  &__join {
    float: right;
    height: 100%;

    &-private {
      color: $red;
      cursor: not-allowed;
    }
  }
}
</style>
