import axios from 'axios'
import { Ingang } from '@/api/dimigoin/struct'
import deliverier from '@/api/deliverier'

export default {
  async getTodayIngangRooms () {
    let { ingangs } = await deliverier(() => axios.get('/ingang'))
    return ingangs.map(Ingang)
  },
  async requestIngang (ingang) {
    await deliverier(() => axios.post(`/ingang/${ingang.idx}`), {
      200: `오늘의 ${ingang.time}타임 인강실을 신청했습니다.`,
      403: '인강실 티켓이 없습니다.',
      404: '해당 인강실이 존재하지 않습니다.',
      405: '신청 기간이 아닙니다.',
      406: '인강실 블랙리스트입니다.',
      409: '잔여 좌석이 없습니다.'
    })
  },
  async cancelIngang (ingang) {
    await deliverier(() => axios.delete(`/ingang/${ingang.idx}`), {
      200: `오늘의 ${ingang.time}타임 인강실을 취소했습니다.`,
      404: '해당 인강실이 존재하지 않습니다.',
      405: '취소 기한이 지났습니다.'
    })
  }
}
