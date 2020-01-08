import axios from 'axios'
import { format } from 'date-fns'

export default {
  async getTodayMeal () {
    const today = format(new Date(), 'YYYYMMDD')
    const { data: meal } = await axios.get(`/dimibobs/${today}`)
    return meal
  }
}
