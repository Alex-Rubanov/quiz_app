<script setup lang="ts">
import { useTimer } from '@/composables'
import { formatTime } from '@/helpers'
import { useQuizStore } from '@/stores'
import { TIME_PER_QUESTION } from '@/constants'

const quiz = useQuizStore()

const timerDeadline =
  quiz.state.settings.amount * TIME_PER_QUESTION[quiz.state.settings.difficulty] * 1000

const { timer } = useTimer(timerDeadline)
</script>

<template>
  <div class="timer">
    <span> {{ formatTime(timer) }}</span>
  </div>
</template>

<style scoped>
.timer {
  position: absolute;
  top: -50px;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;
  border-radius: 50%;

  background-color: #87cf8b;
  color: #fff;

  font-size: 30px;
}

span {
  width: 80px;
}
</style>
