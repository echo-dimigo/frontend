import Vue from 'vue'

export default async (action, handlers = {}) => {
  let status; let message = ''

  try {
    const response = await action()

    status = response.status
    if (Object.keys(handlers).includes(String(status))) {
      message = handlers[status]
    }

    if (message) Vue.$toast.success(message)

    return response.data
  } catch (error) {
    if (message) Vue.$toast.error(message)

    return Promise.reject(error)
  }
}
