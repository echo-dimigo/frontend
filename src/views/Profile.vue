<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  computed: {
    ...mapGetters([
      'user'
    ])
  }
}
</script>

<template>
  <div class="profile">
    <h1>프로필 관리</h1>
    <div class="profile__info">
      <h3>기본 정보</h3>
      <div class="profile__info__user">
        <div
          class="profile__info__user__photo"
          :style="{
            'background-image': `url('https://api.dimigo.hs.kr/user_photo/${user.photo}')`
          }"
        />
        <span class="profile__info__user__text">
          <span>이름 {{ user.name }}</span>
          <span>소속 {{ user.grade }}학년 {{ user.klass }}반</span>
        </span>
      </div>

      <h3>연락처</h3>
      <div class="profile__info__contact">
        <echoos-input
          placeholder="전화번호를 입력하세요"
        />
      </div>
    </div>

    <h3>내 댓글 관리</h3>
    <div class="profile__comment">
      작업 중
    </div>

    <echoos-button
      class="profile__apply"
      disabled
    >
      적용하기
    </echoos-button>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.profile {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  height: 100%;

  &__info {
    &__user {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      &__text {
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__photo {
        width: 5rem;
        height: 5rem;
        display: inline-block;
        border-radius: 50%;
        border: solid 1px rgba(21, 19, 19, 0.05);
        margin-right: 7px;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

    &__contact {
      margin-top: 15px;
    }
  }

  &__apply {
    float: right;
  }
}
</style>
