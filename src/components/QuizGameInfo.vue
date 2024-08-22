<script setup lang="ts">
import { defineProps } from 'vue'
import { QuizTimer } from '@/components'

defineProps<{
  category: string
  difficulty: string
  totalQuestions: number
}>()
</script>

<template>
  <div class="info">
    <p><span class="category">Category:</span> {{ category }}</p>
    <p><span class="category">Difficulty:</span> {{ difficulty }}</p>
    <p><span class="category">Total Questions:</span> {{ totalQuestions }}</p>

    <QuizTimer />
  </div>
</template>

<style scoped>
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;

  font-weight: 600;
}

.category {
  color: #024204;
  text-decoration: underline;
}
</style>
