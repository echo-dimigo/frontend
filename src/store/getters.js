export default {
  user (state) {
    return state.userInfo
  },
  isAuth (state) {
    return !!(state.accessToken && state.userInfo)
  },
  accessToken (state) {
    return state.accessToken
  }
}
