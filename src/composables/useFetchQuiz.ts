import { useQuery } from '@tanstack/vue-query'
import { normalizeFormat } from '@/helpers'
import { useQuizStore } from '@/stores'
import { getQuizQuestions } from '@/api'
import type { GetQuestionsDto } from '@/api/api.types'

export const useFetchQuiz = ({ categoryId, difficulty, amount, token }: GetQuestionsDto) => {
  const quiz = useQuizStore()

  const response = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuizQuestions({ categoryId, difficulty, amount, token }),
    select: (data) => {
      const formattedData = normalizeFormat(data.results)

      quiz.setQuizData(formattedData)

      return formattedData
    },
    refetchOnWindowFocus: false,
  })

  return { ...response }
}
