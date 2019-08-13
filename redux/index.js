import { createStore } from 'redux'
import reducer from './reducers'
import portfolio from '../components/portfolioList'

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState)
}
