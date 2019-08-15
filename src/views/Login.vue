<script>
import service from '@/api/service'

export default {
  name: 'Login',

  methods: {
    login () {
      service.Login(this.form)
        .then(() => {
          this.$router.push('/')
        })
    }
  },

  data () {
    return {
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
        class="login__form__input"
        v-model="form.id"
      />
      <echoos-input
        placeholder="비밀번호를 입력하세요"
        type="password"
        class="login__form__input"
        v-model="form.password"
      />
      <echoos-button
        @click="login"
      >
        로그인
      </echoos-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.login {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 50vh;

  &__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__input {
      width: 50%;

      @media (max-width: 900px) {
        width: 85%;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
