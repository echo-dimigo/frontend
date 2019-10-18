import axios from 'axios'
import { InviteUser } from '@/api/struct'

export default {
  async inviteUser (inviteForm) {
    inviteForm = InviteUser(inviteForm)
    axios.post('/echo/user_tag/invitation', inviteForm)
  }

  /** [GET] /echo/user_tag/tag/{tag_idx}/requests
   * API 완성되면 개발
  */
}
