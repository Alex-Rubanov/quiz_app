<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Container, Button, Loader, QuizGameInfo, QuizAnswerOptions } from '@/components'
import { useFetchQuiz } from '@/composables'
import { useQuizStore } from '@/stores'
import { NAVIGATION_LINKS } from '@/constants'
import { saveResultsToStorage } from '@/helpers'

const router = useRouter()

const quiz = useQuizStore()
const start = ref(Date.now())

const { isLoading } = useFetchQuiz({
  categoryId: quiz.state.settings.categoryId as string,
  difficulty: quiz.state.settings.difficulty as string,
  amount: quiz.state.settings.amount as string,
  token: sessionStorage.getItem('token') ?? '',
})

function onChange(value: string) {
  const dedicatedTime = Date.now() - start.value

  const answer = {
    id: quiz.state.step,
    answer: value,
    isCorrect: value === quiz.state.data[quiz.state.step].correct_answer,
    time: quiz.state.answers[quiz.state.step]?.time + dedicatedTime || dedicatedTime,
  }

  quiz.addAnswer(answer)
}

function getQuizResults() {
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

watch(
  () => quiz.state.step,
  () => {
    start.value = Date.now()
  }
)
</script>

<template>
  <Container class="container">
    <div v-if="quiz.state.data[quiz.state.step]" class="quiz">
      <QuizGameInfo
        :category="quiz.state.data[quiz.state.step]?.category"
        :difficulty="quiz.state.data[quiz.state.step]?.difficulty"
        :totalQuestions="quiz.state.data.length"
      />

      <div class="question">
        <h3>{{ quiz.state.data[quiz.state.step]?.question }}</h3>
      </div>

      <QuizAnswerOptions
        :options="quiz.state.data[quiz.state.step]?.answer_options"
        class="answers"
        @on-change="onChange"
      />

      <div class="actions">
        <Button v-if="quiz.state.step > 0" @click="quiz.stepBack">Prev</Button>
        <Button v-if="quiz.state.step < quiz.state.data.length - 1" @click="quiz.stepUp">
          Next</Button
        >
        <Button v-if="quiz.state.step === quiz.state.data.length - 1" @click="getQuizResults">
          Finish</Button
        >
      </div>

      <div class="progress">
        <p>
          Completed:
          <b>{{ Object.keys(quiz.state.answers).length }} / {{ quiz.state.data.length }}</b>
        </p>
      </div>
    </div>

    <Loader :isLoading="isLoading" />
  </Container>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 800px;
  min-height: 450px;
  margin: 25px auto;
  padding: 25px 15px;
}

.question {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  min-height: 120px;
  padding: 0 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.actions {
  width: 180px;
  display: flex;
  justify-content: space-between;
}

.progress {
  margin-top: 15px;
  display: flex;
  justify-content: end;
}

.progress p {
  justify-self: flex-end;
}

@media (max-width: 600px) {
  .container {
    padding-top: 75px;
  }

  .question h3 {
    font-size: 16px;
  }
}
</style>
