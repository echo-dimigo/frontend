<script>
export default {
  name: 'SwaggyProfile'
}
</script>

<template>
  <div class="profile">
    <div class="profile__info__image" />
    <div class="profile__info">
      <span class="profile__info__name">
        엄서훈
      </span>
      <span class="profile__info__class">
        1학년 5반
      </span>
    </div>
    <div class="profile__tool">
      <i class="profile__tool__icon fas fa-power-off" />
      <i class="profile__tool__icon fas fa-cog" />
      <i class="profile__tool__icon fas fa-pencil-alt" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: solid 1px rgba(21, 19, 19, 0.05);

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  /** 임시; 나중에 레이아웃 짜면 고칠 거임 */
  height: 15rem;
  width: 15rem;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__name {
      display: block;
      font-size: 1.5rem;
      margin-bottom: 7px;
    }

    &__class {
      color: $dark-gray;
    }

    &__image {
      width: 5rem;
      height: 5rem;

      background-image: url('https://api.dimigo.hs.kr/user_photo/photo1_002108_uhmtoto_TffqRB.jpg');
      background-size: cover;
      border: 2px solid $gray;
      border-radius: 50%;
    }
  }

  &__tool {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    &__icon {
      font-size: 1.3rem;
    }
  }
}
</style>
