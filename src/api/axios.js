import axios from 'axios'
import store from '@/store'

import Vue from 'vue'
import VueToast from 'vue-toast-notification'

Vue.use(VueToast, {
  position: 'top-right'
})

export const configAxios = () => {
  axios.defaults.baseURL = process.env.VUE_APP_ECHO_API_URL
  axios.interceptors.response.use(response => {
    return response
  }, async error => {
    try {
      if (error.response.status === 401) {
        try {
          await store.dispatch('refreshAccessToken', localStorage.refreshToken)
          error.config.headers = {
            Authorization: `Bearer ${store.getters.accessToken}`
          }
          return axios.request(error.config)
        } catch (e) {
          Vue.$toast.error('리프레시 토큰이 만료되어 재로그인이 필요합니다.')
        }
      } else if (error.response.status !== 404) {
        Vue.$toast.error('작업을 수행하던 중 에러가 발생했습니다.')
        return Promise.reject(error)
      }
    } catch (e) {
      Vue.$toast.error('네트워크 연결을 확인해 주세요.')
      return Promise.reject(error)
    }
  })
}
