export default {
  user (state) {
    return state.userInfo
  },
  isAuth (state) {
    return Boolean(state.accessToken && state.userInfo)
  },
  accessToken (state) {
    return state.accessToken
  }
}
