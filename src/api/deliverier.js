import Vue from 'vue'

export default async (action, handlers = {}) => {
  try {
    const response = await action()
    const status = response.status
    if (Object.keys(handlers).includes(String(status))) {
      Vue.$swal('성공!', handlers[status], 'success')
    }

    return response.data
  } catch (error) {
    const status = error.response.status
    if (Object.keys(handlers).includes(String(status))) {
      Vue.swal('이런!', handlers[status], 'error')
    }
    return Promise.reject(error)
  }
}
