import Vue from 'vue'

export default async (action, handlers = {}) => {
  try {
    const response = await action()
    const status = response.status
    if (Object.keys(handlers).includes(String(status))) {
      Vue.$toast.success(handlers[status])
    }

    return response.data
  } catch (error) {
    const status = error.response.status
    if (Object.keys(handlers).includes(String(status))) {
      Vue.$toast.error(handlers[status])
    }
    return Promise.reject(error)
  }
}
