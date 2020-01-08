import Vue from 'vue'

export default async (action, handlers = {}) => {
  try {
    return (await action()).data
  } catch (error) {
    const status = error.response.status

    const message = Object.keys(handlers).includes(String(status))
      ? handlers[status] : '작업을 수행하던 중 에러가 발생했습니다.'

    Vue.$toast.error(message)

    return Promise.reject(error)
  }
}
