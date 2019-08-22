import axios from 'axios'
import { Comment, CreateComment } from '@/api/struct'

export default {
  async addComment (comment) {
    comment = CreateComment(comment)
    await axios.post('/echo/comment', comment)
  },

  async deleteComment (idx) {
    await axios.delete(`/echo/comment/${idx}`)
  },

  async editComment (idx, comment) {
    comment = CreateComment(comment)
    await axios.put(`/echo/comment/${idx}`, comment)
  },

  async getCommentNotice () {
    const { data: { comments } } =
      await axios.get('/echo/comment/notices')
    return comments.map(Comment)
  }
}
