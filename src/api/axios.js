import axios from 'axios'
import store from '@/store'

export default {
  Config () {
    axios.defaults.baseURL = 'https://dev-api.dimigo.in'
    axios.interceptors.response.use(response => {
      return response
    }, async error => {
      if (error.response.status === 401) {
        await store.dispatch('refreshAccessToken', localStorage.refreshToken)
        error.config.headers = {
          Authorization: `Bearer ${store.getters.accessToken}`
        }
        return axios.request(error.config)
      } else {
        return Promise.reject(error)
      }
    })
  }
}
