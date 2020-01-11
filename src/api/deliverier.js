import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  confirmButtonColor: '#5fae9f',
  confirmButtonText: '확인',
  cancelButtonColor: '#c5593b',
  cancelButtonText: '취소',
  animation: false
})

export default async (action, handlers = {}) => {
  try {
    const response = await action()
    const status = response.status
    if (Object.keys(handlers).includes(String(status))) {
      Toast.fire('성공!', handlers[status], 'success')
    }

    return response.data
  } catch (error) {
    const status = error.response.status
    if (Object.keys(handlers).includes(String(status))) {
      Toast.fire('이런!', handlers[status], 'error')
    }
    return Promise.reject(error)
  }
}
