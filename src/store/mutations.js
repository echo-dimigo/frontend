import jwtDecode from 'jwt-decode'
import { User } from '@/api/struct'
import axios from 'axios'

export default {
  async login (state, { accessToken, refreshToken }) {
    const decoded = jwtDecode(accessToken)
    state.userInfo = User(decoded.identity[0])
    state.accessToken = accessToken

    localStorage.setItem('refreshToken', refreshToken)

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },

  logout (state) {
    state.userInfo = {}
    state.accessToken = null

    localStorage.removeItem('refreshToken')

    delete axios.defaults.headers.common['Authorization']
  }
}
