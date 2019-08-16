import axios from 'axios'
import { Post, Tag, CreateComment, CreatePost } from './struct'

export default {
  async Login (form) {
    const { data: tokens } = await axios.post('/auth', form)
    return tokens
  },

  async getUserInfo () {
    const { data: userInfo } = await axios.get('/user/jwt')
    return userInfo
  },

  async getBriefPosts () {
    const { data: { posts } } = await axios.get('/echo/posts/brief')
    return posts
  },

  async getPostById (idx) {
    const { data: post } = await axios.get(`/echo/post/${idx}`)
    return Post(post)
  },

  async getAllTag () {
    const { data: { tags } } = await axios.get('/echo/tags')
    return tags.map(Tag)
  },

  async addComment (comment) {
    comment = CreateComment(comment)
    await axios.post('/echo/comment', comment)
  },

  async deleteComment (idx) {
    await axios.delete(`/echo/comment/${idx}`)
  },

  async addPost (post) {
    post = CreatePost(post)
    await axios.post('/echo/post', post)
  }
}
