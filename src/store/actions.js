import service from '@/api/service'

export default {
  async login (state, form) {
    try {
      const tokens = await service.Login(form)
      this.commit('login', tokens)
    } catch (e) {
      throw e
    }
  },

  logout (state) {
    state.commit('logout')
  },

  async refreshAccessToken (state, refreshToken) {
    const refreshedToken = await service.refreshAccessToken(refreshToken)
    state.commit('login', {
      accessToken: refreshedToken,
      refreshToken: refreshToken
    })
  }
}
