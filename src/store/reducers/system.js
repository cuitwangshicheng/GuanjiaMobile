import sys from '../../units/system.js'
import { LANGUAGE } from '../constants/system'

const INITIAL_STATE = {
  lang: sys.getLanguage()
}

export default function system (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LANGUAGE:
      return state.lang
    default:
      return state
  }
}