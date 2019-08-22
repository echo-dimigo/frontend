import AuthService from './auth/user'
import PostService from './post/user'
import TagService from './tag/user'
import CommentService from './comment/user'

export default {
  ...AuthService,
  ...PostService,
  ...TagService,
  ...CommentService
}
