import { toDate } from 'date-fns'

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
