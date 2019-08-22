import axios from 'axios'
import { InvitateUser } from '@/api/struct'

export default {
  async invitateUser (invitateForm) {
    invitateForm = InvitateUser(invitateForm)
    axios.post('/echo/user_tag/invitation', invitateForm)
  }

  /** [GET] /echo/user_tag/tag/{tag_idx}/requests
   * API 완성되면 개발
  */
}
