<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { useQuizStore } from '@/stores'
import { OPTION_LABELS } from '@/constants'

defineProps<{
  options: string[]
}>()

const quiz = useQuizStore()
const picked = ref('')

watch(
  () => quiz.state.step,
  () => {
    const previousAnswer = quiz.state.answers[quiz.state.step]?.answer ?? ''

    picked.value = previousAnswer
  }
)
</script>

<template>
  <div class="answers">
    <template v-for="(answer, index) in options" :key="answer">
      <input
        type="radio"
        :id="answer"
        :value="answer"
        v-model="picked"
        @change="$emit('onChange', picked)"
      />

      <label :for="answer">
        <span>{{ OPTION_LABELS[index] }}</span>
        {{ answer }}
      </label>
    </template>
  </div>
</template>

<style scoped>
.answers {
  margin: 25px auto;
  width: 100%;
}

label {
  display: flex;
  align-items: center;
  justify-self: center;
  align-self: start;

  min-height: 30px;
  min-width: 300px;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 7px;
}

input[type='radio'] {
  display: none;
}

input[type='radio']:checked + label {
  border: none;
  outline-offset: 5px;
  outline: 2px solid #4ab84f;
}

label:hover {
  cursor: pointer;
}

label span {
  display: block;
  padding: 10px;
  margin-right: 15px;
  background-color: #87cf8b;
  border-radius: 7px;
  color: #fff;
}

@media (max-width: 600px) {
  label {
    min-height: 15px;
    font-size: 14px;
  }
}
</style>
