import axios from 'axios'
import { Ingang } from '@/api/struct'
import deliverier from '@/api/deliverier'

export default {
  async getTodayIngangRooms () {
    let { data: ingangs } = await axios.get('/ingang')
    ingangs = ingangs['ingangs'].map(Ingang)
    return ingangs
  },
  async requestIngang (idx) {
    await deliverier(() => axios.post(`/ingang/${idx}`), {
      403: '인강실 티켓이 없습니다.',
      404: '해당 인강실이 존재하지 않습니다.',
      405: '신청 기간이 아닙니다.',
      406: '인강실 블랙리스트입니다.',
      409: '잔여 좌석이 없습니다.'
    })
  },
  async cancelIngang (idx) {
    await deliverier(() => axios.delete(`/ingang/${idx}`), {
      404: '해당 인강실이 존재하지 않습니다.',
      405: '취소 기한이 지났습니다.'
    })
  }
}
