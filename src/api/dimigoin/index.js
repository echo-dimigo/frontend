import AfterschoolService from './services/afterschool'
import IngangService from './services/ingang'
import MealService from './services/meal'

export default {
  ...AfterschoolService,
  ...IngangService,
  ...MealService
}
