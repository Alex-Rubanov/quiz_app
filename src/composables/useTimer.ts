import { ref, onMounted, onUnmounted } from 'vue'
import { saveResultsToStorage } from '@/helpers'
import { useQuizStore } from '@/stores'
import { useRouter } from 'vue-router'
import { NAVIGATION_LINKS } from '@/constants'

export function useTimer(deadline: number = 60000) {
  const timer = ref(deadline)
  const start = ref(Date.now())

  let timerId: ReturnType<typeof setInterval>

  const quiz = useQuizStore()

  const router = useRouter()

  function onTimerExpiration() {
    saveResultsToStorage({
      correct: quiz.correctAnswersTotal,
      incorrect: quiz.incorrectAnswersTotal,
      skipped: quiz.skippedAnswersTotal,
      time: Object.values(quiz.state.answers).map((result) => (result.time / 1000).toFixed(2)),
    })

    quiz.updateStatus()

    quiz.reset()

    router.push({ path: NAVIGATION_LINKS.STATS })
  }

  onMounted(() => {
    timerId = setInterval(() => {
      if (timer.value <= 0) {
        clearInterval(timerId)

        onTimerExpiration()
        return
      }

      const timePassed = Date.now() - start.value

      timer.value = Math.max(0, deadline - timePassed)
    }, 500)
  })

  onUnmounted(() => clearInterval(timerId))

  return { timer }
}
