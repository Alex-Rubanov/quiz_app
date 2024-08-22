import { API_URL } from '@/constants'
import type {
  CategoriesDto,
  GetQuestionsDto,
  RefreshedTokenDto,
  SessionTokenDto,
} from './api.types'

export const getToken = (): Promise<SessionTokenDto> => {
  return fetch(API_URL.GET_TOKEN)
    .then((res) => res.json())
    .catch(console.error)
}

export const refreshToken = (token: string): Promise<RefreshedTokenDto> => {
  return fetch(API_URL.REFRESH_TOKEN(token))
    .then((res) => res.json())
    .catch(console.error)
}

export const getAllCategories = (): Promise<CategoriesDto> => {
  return fetch(API_URL.GET_ALL_CATEGORIES)
    .then((res) => res.json())
    .catch(console.error)
}

export const getQuizQuestions = ({ categoryId, difficulty, amount, token }: GetQuestionsDto) => {
  return fetch(API_URL.GET_QUESTIONS({ categoryId, difficulty, amount, token }))
    .then((res) => res.json())
    .catch(console.error)
}
