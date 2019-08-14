<script>
export default {
  name: 'Profile'
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
            'background-image': `url('https://api.dimigo.hs.kr/user_photo/photo1_002108_uhmtoto_TffqRB.jpg')`
          }"
        />
        <span class="profile__info__user__text">
          <span>이름 엄서훈</span>
          <span>소속 1학년 5반</span>
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
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 50%;
        border: solid 1px rgba(21, 19, 19, 0.05);
        margin-right: 7px;
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
