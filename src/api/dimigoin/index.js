import axios from 'axios'
import { format } from 'date-fns'
import { Ingang } from '@/api/struct'

export default {
  async getTodayMeal () {
    const today = format(new Date(), 'YYYYMMDD')
    const { data: meal } = await axios.get(`/dimibobs/${today}`)
    return meal
  },

  async getTodayIngangRooms () {
    let { data: ingangs } = await axios.get('/ingang')
    ingangs = ingangs['ingangs'].map(Ingang)
    return ingangs
  }
}
