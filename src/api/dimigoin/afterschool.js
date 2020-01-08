import axios from 'axios'
import { Afterschool } from '@/api/struct'

export default {
  async getTodayAfterschools () {
    let { data: afterschools } = await axios.get('/afterschools/student/today')
    afterschools = afterschools['afterschools'].map(Afterschool)
    return afterschools
  }
}
