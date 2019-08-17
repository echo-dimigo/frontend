import axios from 'axios'
import { Tag } from '@/api/struct'

export default {
  async getAllTag () {
    const { data: { tags } } = await axios.get('/echo/tags')
    return tags.map(Tag)
  }
}
