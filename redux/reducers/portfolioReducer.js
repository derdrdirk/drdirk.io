import portfolio from '../../components/portfolioList'
import { COMPANY, RESET } from '../types'

export default (state = portfolio , action) => {
  switch(action.type) {
    case COMPANY:
      return portfolio.filter((entry) => entry.company === action.name)
    case RESET:
      return portfolio
    default:
      return state
  }
}
