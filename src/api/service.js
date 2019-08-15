import axios from 'axios'
import { Post, Tag, CreateComment } from './struct'

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
  },

  async getAllTag () {
    const { data: { tags } } = await api.get('/echo/tags')
    return tags.map(Tag)
  },

  async addComment (comment) {
    comment = CreateComment(comment)
    await api.post('/echo/comment', comment)
  },

  async deleteComment (idx) {
    await api.delete(`/echo/comment/${idx}`)
  }
}
