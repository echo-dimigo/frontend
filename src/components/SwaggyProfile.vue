<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SwaggyProfile',

  computed: {
    ...mapGetters([
      'user'
    ]),
    photoURI () {
      return process.env.VUE_APP_DIMIGO_API_URL +
        `/user_photo/${this.user.photo}`
    }
  },

  methods: {
    push (to) {
      this.$router.push(to)
    },

    logout () {
      this.$store.dispatch('logout')
      this.push('/auth/login')
    }
  }
}
</script>

<template>
  <div class="profile">
    <div class="profile__info__image"
      :style="{ 'background-image': `url(${photoURI})` }"
    />
    <div class="profile__info">
      <span class="profile__info__name">
        {{ user.name }}
      </span>
      <span
        v-if="user.type === 'S'"
        class="profile__info__class"
      >
        {{ user.grade }}학년
        {{ user.klass }}반
      </span>

      <span
        v-else
        class="profile__info__class"
      >
        선생님
      </span>
    </div>
    <div class="profile__tool">
      <i
        @click="push('/post/new')"
        class="profile__tool__icon icon-edit"
      />
      <i
        @click="push('/profile')"
        class="profile__tool__icon icon-setting"
      />
      <i
        @click="logout"
        class="profile__tool__icon icon-logout"
      />
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

  background-color: $white;
  padding: 25px;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__name {
      display: block;
      font-size: 1.5rem;
      margin-bottom: 7px;
      font-weight: 700;
    }

    &__class {
      color: $dark-gray;
    }

    &__image {
      width: 5rem;
      height: 5rem;
      margin-bottom: 10px;

      border: 2px solid $gray;
      border-radius: 50%;

      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &__tool {
    cursor: pointer;
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
