import AuthService from './auth'
import PostService from './post'
import TagService from './tag'
import CommentService from './comment'

export default {
  ...AuthService,
  ...PostService,
  ...TagService,
  ...CommentService
}
