import axios from 'axios'
import { format } from 'date-fns'
import { Ingang, Afterschool } from '@/api/struct'

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
  },

  async getTodayAfterschools () {
    let { data: afterschools } = await axios.get('/afterschools/student/today')
    afterschools = afterschools['afterschools'].map(Afterschool)
    return afterschools
  }
}
