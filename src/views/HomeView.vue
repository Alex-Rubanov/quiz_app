<script setup lang="ts">
import { Hero, QuizSettings, QuizGame } from '@/components'
import { QUIZ_GAME_STATUS } from '@/constants'
import { useQuizStore } from '@/stores'

const quiz = useQuizStore()
</script>

<template>
  <Hero v-if="quiz.state.status === QUIZ_GAME_STATUS.IDLE" />

  <QuizSettings v-if="quiz.state.status === QUIZ_GAME_STATUS.CONFIG" />

  <QuizGame v-if="quiz.state.status === QUIZ_GAME_STATUS.PLAY" />
</template>
