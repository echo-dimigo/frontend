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
    async login (state, accessToken) {
      state.isAuth = true
      state.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

      const decoded = jwtDecode(accessToken)
      state.userInfo = decoded.identity[0]
    },

    logout (state) {
      state.isAuth = false
      state.accessToken = null
      localStorage.removeItem('accessToken')
      axios.defaults.headers.common['Authorization'] = null
      state.userInfo = {}
    }
  },
  actions: {
    async login (state, form) {
      const tokens = await service.Login(form)
      if (tokens.token) {
        this.commit('login', tokens.token)
        return true
      }
      return false
    },

    logout (state) {
      state.commit('logout')
    },

    async refreshAccessToken (state, refreshToken) {
      this.commit('login', refreshToken)
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
