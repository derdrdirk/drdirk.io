import portfolio from '../../components/portfolioList'
import { COMPANY, RESET, TAG, TITLE } from '../types'

export default (state = portfolio , action) => {
  switch(action.type) {
    case COMPANY:
      return portfolio.filter((entry) => entry.company === action.name)
    case TAG:
      return portfolio.filter((entry) => {
        for(const tag of action.tags) {
          if(!entry.tags || !entry.tags.includes(tag)) return false
        }
        return true
      })
    case TITLE:
      return portfolio.filter((entry) => entry.title === action.name)
    case RESET:
      return portfolio
    default:
      return state
  }
}
