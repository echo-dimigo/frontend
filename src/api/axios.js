import axios from 'axios'
import store from '@/store'

import Vue from 'vue'

export const configAxios = () => {
  axios.defaults.baseURL = process.env.VUE_APP_ECHO_API_URL
  axios.interceptors.response.use(response => {
    return response
  }, async error => {
    if (error.response.status === 401) { // token refresh
      try {
        await store.dispatch('refreshAccessToken', localStorage.refreshToken)
        error.config.headers = {
          Authorization: `Bearer ${store.getters.accessToken}`
        }
        return axios.request(error.config)
      } catch (_error) {
        Vue.$toast.error('리프레시 토큰이 만료되어 재로그인이 필요합니다.')
      }
    } else {
      throw error
    }
  })
}
