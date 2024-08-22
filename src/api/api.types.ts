export type GetQuestionsDto = {
  categoryId: string
  difficulty: string
  amount: string
  token?: string
}

export type SessionTokenDto = {
  response_code: number
  response_message: string
  token: string
}

export type RefreshedTokenDto = Omit<SessionTokenDto, 'response_message'>

export type CategoryItem = {
  id: number
  name: string
}

export type CategoriesDto = {
  trivia_categories: CategoryItem[]
}
