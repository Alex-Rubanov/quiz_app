import type { GetQuestionsDto } from '@/api/api.types'

const BASE_API_URL = 'https://opentdb.com' as const

export const API_URL = {
  GET_ALL_CATEGORIES: `${BASE_API_URL}/api_category.php/api_category.php`,
  GET_TOKEN: `${BASE_API_URL}/api_token.php?command=request`,
  GET_QUESTIONS({ categoryId, difficulty, amount }: GetQuestionsDto) {
    return `${BASE_API_URL}/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple&encode=url3986`
  },
  REFRESH_TOKEN(token: string) {
    return `${BASE_API_URL}/api_token.php?command=reset&token=${token}`
  },
} as const
