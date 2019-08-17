import axios from 'axios'
import { CreateComment } from '@/api/struct'

export default {
  async addComment (comment) {
    comment = CreateComment(comment)
    await axios.post('/echo/comment', comment)
  },

  async deleteComment (idx) {
    await axios.delete(`/echo/comment/${idx}`)
  }
}
