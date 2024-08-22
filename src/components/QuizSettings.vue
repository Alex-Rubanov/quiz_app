<script setup lang="ts">
import { ref, watch } from 'vue'
import { DIFFICULTY_OPTIONS, QUANTITY_OPTIONS } from '@/constants'
import { Select, Button, Loader, Container } from '@/components'
import { useFetchCategories } from '@/composables'
import { useQuizStore } from '@/stores'

const { data, isLoading } = useFetchCategories()

const quiz = useQuizStore()
const isButtonDisabled = ref(true)

const onCategoryChange = (categoryId: string) => {
  quiz.setCategoryId(categoryId)
}
const onDifficultyChange = (difficultyLevel: string) => {
  quiz.setDifficulty(difficultyLevel)
}
const onQtyChange = (qty: string) => {
  quiz.setQuantity(qty)
}

watch(
  () => quiz.isSettingsSelected,
  () => {
    isButtonDisabled.value = false
  }
)
</script>

<template>
  <Container class="container">
    <template v-if="data">
      <h1>Choose settings</h1>
      <Select
        id="categories"
        name="categories"
        label="Choose category"
        default-value="Select your category"
        :options="data?.trivia_categories"
        value="id"
        @on-change="onCategoryChange"
      />

      <Select
        id="mode"
        name="mode"
        label="Choose difficulty level"
        default-value="Difficulty level"
        :options="DIFFICULTY_OPTIONS"
        value="name"
        @on-change="onDifficultyChange"
      />

      <Select
        id="qty"
        name="qty"
        label="Choose number of questions"
        default-value="Total number of questions"
        :options="QUANTITY_OPTIONS"
        value="name"
        @on-change="onQtyChange"
      />

      <Button :disabled="isButtonDisabled" @click="quiz.updateStatus">Start!</Button>
    </template>

    <Loader :isLoading="isLoading" />
  </Container>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 25px 15px;
  max-width: 500px;
  min-height: 300px;
}

h1 {
  text-align: center;
}

div {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

button {
  align-self: end;
}

@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }

  .container {
    font-size: 14px;
  }

  button {
    font-size: 16px;
  }
}
</style>
