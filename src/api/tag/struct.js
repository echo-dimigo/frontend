export const Tag = tag => ({
  idx: tag['idx'],
  name: tag['name'],
  owner: tag['owner'],
  createdDate: tag['created_date'],
  description: tag['description'],
  joinOption: tag['join_option']
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
