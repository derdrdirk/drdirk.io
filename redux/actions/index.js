import { COMPANY, RESET, TAG, TITLE } from '../types'

export const company = (name) => ({ type: COMPANY, name })
export const tag = (tags) => ({ type: TAG, tags })
export const title = (name) => ({ type: TITLE, name })
export const reset = {type: RESET}
