import axios from 'axios'
import { Post, CreatePost } from '@/api/struct'

export default {
  async getBriefPosts () {
    const { data: { posts } } = await axios.get('/echo/posts/brief')
    return posts
  },

  async getPostById (idx) {
    const { data: post } = await axios.get(`/echo/post/${idx}`)
    return Post(post)
  },

  async addPost (post) {
    post = CreatePost(post)
    await axios.post('/echo/post', post)
  }
}
