import axios from 'axios'
import { Post } from './struct'

const api = axios.create({
  baseURL: 'https://dev-api.dimigo.in/echo'
})
// authorization in common header

export default {
  async getBriefPosts () {
    const { data: { posts } } = await api.get('/posts/brief')
    return posts
  },

  async getPostById (idx) {
    const { data: post } = await api.get(`/post/${idx}`)
    return Post(post)
  }
}
