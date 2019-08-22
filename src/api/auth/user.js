import axios from 'axios'
import { Token } from '@/api/struct'

export default {
  async Login (form) {
    const { data: tokens } = await axios.post('/auth', form)
    return Token(tokens)
  },

  async refreshAccessToken (refreshToken) {
    const { data: { token: accessToken } } =
      await axios.post('/auth/token/refresh', {}, {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
    return accessToken
  },

  async getUserInfo () {
    const { data: userInfo } = await axios.get('/user/jwt')
    return userInfo
  }
}
