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
  },

  async getAllInvitations () {
    const { data: { tags } } =
      await axios.get('/echo/user_tag/my/invitations')
    return tags.map(Tag)
  },

  async getSubscriptionRequests () {
    const { data: { tags } } =
      axios.get(`/echo/user_tag/my/requests`)
    return tags.map(Tag)
  },

  async requestSubscription (idx) {
    await axios.post(`/echo/user_tag/my/request/${idx}`)
  },

  async cancelSubscriptionRequest (idx) {
    await axios.delete(`/echo/user_tag/my/${idx}`)
  }
}
