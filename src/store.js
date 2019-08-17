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
    userInfo: {},
    accessToken: null
  },
  mutations: {
    async login (state, { accessToken, refreshToken }) {
      const decoded = jwtDecode(accessToken)
      state.userInfo = decoded.identity[0]
      state.accessToken = accessToken

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    },

    logout (state) {
      state.userInfo = {}
      state.accessToken = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')

      delete axios.defaults.headers.common['Authorization']
    }
  },
  actions: {
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
  },
  getters: {
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
})
