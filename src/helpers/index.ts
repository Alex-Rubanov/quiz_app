type QuizApiDto = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

type StorageTransferDto = {
  date: number
  correct: number
  incorrect: number
  skipped: number
  time: string[]
}

export const normalizeFormat = (arr: QuizApiDto[]) => {
  return arr.map((item, index) => {
    return {
      id: index + 1,
      category: decodeURIComponent(item.category),
      difficulty: decodeURIComponent(item.difficulty),
      question: decodeURIComponent(item.question),
      correct_answer: decodeURIComponent(item.correct_answer),
      answer_options: item.incorrect_answers
        .map((answer) => decodeURIComponent(answer))
        .concat(decodeURIComponent(item.correct_answer)),
    }
  })
}

export const formatTime = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / (1000 * 60)) % 60)

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export const saveResultsToStorage = (result: Omit<StorageTransferDto, 'date'>) => {
  const existedStorage: StorageTransferDto[] = JSON.parse(localStorage.getItem('results') ?? '[]')

  const data = {
    ...result,
    date: Date.now(),
  }

  const json = JSON.stringify([data, ...existedStorage])

  localStorage.setItem('results', json)
}

export const getResultsFromStorage = (): StorageTransferDto[] => {
  return JSON.parse(localStorage.getItem('results') ?? '[]')
}
