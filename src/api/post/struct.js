import { toDate } from 'date-fns'

export const Post = post => ({
  idx: post['idx'],
  title: post['title'],
  date: toDate(post['posted_date']),
  content: post['content'],
  tags: post['post_tags'],
  comments: post['comments'].map(Comment),
  writer: post['writer']
})

const CreateTagOption = tag => ({
  'tag_idx': tag.tagIdx,
  'option': tag.option
})

export const CreatePost = post => ({
  'title': post.title,
  'content': post.content,
  'tags': post.tags.map(CreateTagOption)
})
