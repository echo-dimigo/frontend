<script>
export default {
  name: 'Login',

  methods: {
    async login () {
      if (!this.form.id || !this.form.password) {
        this.$toast.error('모든 입력란을 채워주세요.')
        return
      }
      this.pending = true
      try {
        await this.$store.dispatch('login', this.form)
        this.$router.push('/')
      } catch (e) {
        this.$toast.error('로그인을 실패했습니다.')
      }
      this.pending = false
    }
  },

  data () {
    return {
      pending: false,
      form: {
        id: null,
        password: null
      }
    }
  }
}
</script>

<template>
  <div class="login">
    <h1>로그인</h1>
    <div class="login__form">
      <echoos-input
        placeholder="아이디를 입력하세요"
        @enter="login"
        class="login__form__input"
        v-model="form.id"
      />
      <echoos-input
        placeholder="비밀번호를 입력하세요"
        @enter="login"
        type="password"
        class="login__form__input"
        v-model="form.password"
      />
      <echoos-button
        @click="login"
        :disabled="pending"
      >
        로그인
      </echoos-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.login {
  align-self: center;
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 50vh;
  max-width: 650px;

  &__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__input {
      width: 50%;
      margin-bottom: 15px;

      @media (max-width: 900px) {
        width: 85%;
      }
    }
  }
}
</style>
