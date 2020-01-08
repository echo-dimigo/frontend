import AfterschoolService from './afterschool'
import IngangService from './ingang'
import MealService from './meal'

export default {
  ...AfterschoolService,
  ...IngangService,
  ...MealService
}
