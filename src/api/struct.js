import { toDate } from 'unix-timestamp'

export const Post = post => ({
  idx: post['idx'],
  title: post['title'],
  date: toDate(post['posted_date']),
  content: post['content'],
  tags: post['post_tags'],
  comments: post['comments'].map(Comment),
  writer: post['writer']
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
