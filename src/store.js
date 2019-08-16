import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/api/service'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex)

const enhanceAccessToken = () => {
  const { accessToken } = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}
enhanceAccessToken()

export default new Vuex.Store({
  state: {
    isAuth: false,
    userInfo: {},
    accessToken: null
  },
  mutations: {
    async login (state, tokens) {
      state.isAuth = true
      state.accessToken = tokens.token
      localStorage.setItem('accessToken', tokens.token)
      localStorage.setItem('refreshToken', tokens.refresh_token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${tokens.token}`

      const decoded = jwtDecode(tokens.token)
      state.userInfo = decoded.identity[0]
    },

    logout (state) {
      state.isAuth = false
      state.accessToken = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      axios.defaults.headers.common['Authorization'] = null
      state.userInfo = {}
    }
  },
  actions: {
    async login (state, form) {
      const tokens = await service.Login(form)
      if (tokens.token) {
        this.commit('login', tokens)
        return true
      }
      return false
    },

    logout (state) {
      state.commit('logout')
    },

    async refreshAccessToken (state, refreshToken) {
      const refreshedToken = await service.refreshAccessToken(refreshToken)
      state.commit('login', refreshedToken)
    }
  },
  getters: {
    user (state) {
      return state.userInfo
    },
    isAuth (state) {
      return state.isAuth
    }
  }
})
