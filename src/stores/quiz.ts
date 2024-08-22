import { QUIZ_GAME_STATUS } from '@/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

type QuizItemType = {
  id: number
  category: string
  difficulty: string
  question: string
  correct_answer: string
  answer_options: string[]
}

type QuizAnswerType = Record<number, { answer: string; isCorrect: boolean; time: number }>

type QuizSettingsType = {
  categoryId: string | null
  difficulty: string | null
  amount: string | null
}

type QuizStatusType = 'idle' | 'config' | 'play'

type QuizStoreType = {
  data: QuizItemType[]
  answers: QuizAnswerType
  status: QuizStatusType
  step: number
  settings: QuizSettingsType
}

const initialStoreState: QuizStoreType = {
  data: [],
  answers: {},
  status: 'idle',
  step: 0,
  settings: {
    categoryId: null,
    difficulty: null,
    amount: null,
  },
}

export const useQuizStore = defineStore('quiz', () => {
  const state = ref({
    ...initialStoreState,
  })

  const isSettingsSelected = computed(() => {
    return Object.values(state.value.settings).every(Boolean)
  })

  const correctAnswersTotal = computed(() => {
    return Object.values(state.value.answers)?.filter((answer) => answer.isCorrect).length
  })

  const incorrectAnswersTotal = computed(() => {
    return Object.values(state.value.answers)?.filter((answer) => !answer.isCorrect).length
  })

  const skippedAnswersTotal = computed(() => {
    return state.value.data?.length - Object.keys(state.value.answers)?.length
  })

  const reset = () => {
    state.value.answers = {}
    state.value.data = []
    state.value.status = 'idle'
    state.value.step = 0
    state.value.settings = {
      categoryId: null,
      difficulty: null,
      amount: null,
    }
  }

  const stepUp = () => {
    state.value.step++
  }

  const stepBack = () => {
    state.value.step--
  }

  const updateStatus = () => {
    switch (state.value.status) {
      case QUIZ_GAME_STATUS.IDLE: {
        state.value.status = QUIZ_GAME_STATUS.CONFIG
        return
      }
      case QUIZ_GAME_STATUS.CONFIG: {
        state.value.status = QUIZ_GAME_STATUS.PLAY
        return
      }

      case QUIZ_GAME_STATUS.PLAY: {
        state.value.status = QUIZ_GAME_STATUS.IDLE
        return
      }
      default: {
        state.value.status = QUIZ_GAME_STATUS.IDLE
      }
    }
  }

  const addAnswer = (answer: { id: number; answer: string; isCorrect: boolean; time: number }) => {
    const { id, ...details } = answer
    state.value.answers[id] = { ...details }
  }

  const setQuizData = (items: QuizItemType[]) => {
    state.value.data = items
  }

  const setCategoryId = (id: string) => {
    state.value.settings.categoryId = id
  }

  const setDifficulty = (difficulty: string) => {
    state.value.settings.difficulty = difficulty
  }

  const setQuantity = (questionsAmount: string) => {
    state.value.settings.amount = questionsAmount
  }

  return {
    state,
    reset,
    isSettingsSelected,
    incorrectAnswersTotal,
    correctAnswersTotal,
    skippedAnswersTotal,
    updateStatus,
    stepUp,
    stepBack,
    addAnswer,
    setQuizData,
    setCategoryId,
    setDifficulty,
    setQuantity,
  }
})
