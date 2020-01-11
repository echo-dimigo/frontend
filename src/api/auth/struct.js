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
