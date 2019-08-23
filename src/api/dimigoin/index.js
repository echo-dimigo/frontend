import axios from 'axios'

export default {
  async getTodayMeal () {
    const { data: meal } = await axios.get('/dimibobs/today')
    return meal
  }
}
