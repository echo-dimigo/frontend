import axios from 'axios'
import { Tag } from '@/api/struct'

export default {
  async getAllTag () {
    const { data: { tags } } = await axios.get('/echo/tags')
    return tags.map(Tag)
  },

  async getTagByIdx (idx) {
    const { data: tag } = await axios.get(`/echo/tag/${idx}`)
    return Tag(tag)
  },

  async deleteTag (idx) {
    await axios.delete(`/echo/tag/${idx}`)
  }
}
