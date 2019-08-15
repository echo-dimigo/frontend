import axios from 'axios'
import { Post } from './struct'

const api = axios.create({
  baseURL: 'https://dev-api.dimigo.in',
  headers: {
    common: {
      authorization: `Bearer ${localStorage.token}`
    }
  }
})
// authorization in common header

export default {
  async Login (form) {
    const { data: tokens } = await api.post('/auth', form)
    localStorage.token = tokens.token
  },

  async getBriefPosts () {
    const { data: { posts } } = await api.get('/echo/posts/brief')
    return posts
  },

  async getPostById (idx) {
    const { data: post } = await api.get(`/echo/post/${idx}`)
    return Post(post)
  }
}
