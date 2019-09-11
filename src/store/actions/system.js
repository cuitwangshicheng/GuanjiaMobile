import { LANGUAGE } from '../constants/system'

export const getLanguage = () => {
  console.log('进入action')
  return {
    type: LANGUAGE
  }
}