import axios from 'axios'
import deliverier from '@/api/deliverier'
import { Afterschool } from '@/api/struct'

export default {
  async getTodayAfterschools () {
    let { afterschools } = await deliverier(() => axios.get('/afterschools/student/today'))
    return afterschools.map(Afterschool)
  }
}
