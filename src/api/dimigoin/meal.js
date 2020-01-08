import axios from 'axios'
import deliverier from '@/api/deliverier'
import { format } from 'date-fns'

export default {
  async getTodayMeal () {
    const today = format(new Date(), 'YYYYMMDD')
    const meal = await deliverier(() => axios.get(`/dimibobs/${today}`))
    return meal
  }
}
