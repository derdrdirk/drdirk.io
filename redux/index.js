import { createStore } from 'redux'
import reducer from './reducers'
import portfolio from '../components/portfolioList'

export const initStore = (initialState = {counter: 0, portfolio}) => {
  return createStore(reducer, initialState)
}
