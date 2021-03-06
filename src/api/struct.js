import { toDate } from 'unix-timestamp'

const CreateTagOption = tag => ({
  'tag_idx': tag.tagIdx,
  'option': tag.option
})

export const Token = tokens => ({
  accessToken: tokens['token'],
  refreshToken: tokens['refresh_token']
})

export const User = user => ({
  idx: user['idx'],
  type: user['user_type'],
  email: user['email'],
  id: user['id'],
  name: user['name'],
  grade: user['grade'],
  klass: user['klass'],
  number: user['number'],
  photo: user['photo'],
  serial: user['serial'],
  ssoToken: user['sso_token']
})

export const Post = post => ({
  idx: post['idx'],
  title: post['title'],
  date: toDate(post['posted_date']),
  content: post['content'],
  tags: post['post_tags'],
  comments: post['comments'].map(Comment),
  writer: post['writer']
})

export const CreatePost = post => ({
  'title': post.title,
  'content': post.content,
  'tags': post.tags.map(CreateTagOption)
})

export const Tag = tag => ({
  idx: tag['idx'],
  name: tag['name'],
  owner: tag['owner'],
  createdDate: tag['created_date'],
  description: tag['description'],
  joinOption: tag['join_option']
})

export const Comment = comment => ({
  idx: comment['idx'],
  targetType: comment['target_type'],
  targetIdx: comment['target_idx'],
  status: comment['status'],
  content: comment['content'],
  writer: comment['writer'],
  wroteDate: toDate(comment['wrote_date'])
})

export const CreateComment = comment => ({
  'post_idx': comment.postIdx,
  'target_type': comment.targetType,
  'target_idx': comment.targetIdx,
  'content': comment.content
})

export const InviteUser = form => ({
  'user_idx': form.userIdx,
  'tag_idx': form.tagIdx,
  'admin': form.isAdmin,
  'modification_allowed': form.permission.modification,
  'invitation_allowed': form.permission.invitation,
  'post_allowed': form.permission.post,
  'acceptance_allowed': form.permission.acceptance
})

export const Ingang = ingang => ({
  idx: ingang['idx'],
  day: ingang['day'],
  title: ingang['title'],
  time: ingang['time'],
  startDate: toDate(ingang['request_start_date']),
  endDate: toDate(ingang['request_end_date']),
  status: ingang['status'],
  present: ingang['present'],
  maxUser: ingang['max_user']
})

export const Afterschool = afsc => ({
  idx: afsc['idx'],
  name: afsc['name'],
  startDate: afsc['request_start_date'],
  endDate: afsc['request_end_date'],
  day: afsc['day'],
  time: afsc['time'],
  targetGrade: afsc['target_grade'],
  maxCount: afsc['max_of_count'],
  requestCount: afsc['all_request_count'],
  status: afsc['status'],
  teacher: afsc['teacher_name']
})
