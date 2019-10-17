import AuthService from './auth/user'
import PostService from './post/user'
import TagService from './tag/user'
import CommentService from './comment/user'
import DimigoInService from './dimigoin'

import PostManagerService from './post/manager'
import TagManagerService from './tag/manager'
import CommentManagerService from './comment/manager'

export default {
  ...AuthService,
  ...PostService,
  ...TagService,
  ...CommentService,
  ...DimigoInService,
  ...PostManagerService,
  ...TagManagerService,
  ...CommentManagerService
}
