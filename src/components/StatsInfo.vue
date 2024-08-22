<script setup lang="ts">
import { PieChart, TabsChart, Button } from '@/components'
import { NAVIGATION_LINKS } from '@/constants'
import { getResultsFromStorage } from '@/helpers'
import { useQuizStore } from '@/stores'
import { useRouter } from 'vue-router'

const router = useRouter()
const quiz = useQuizStore()

function startQuiz() {
  quiz.updateStatus()

  router.push({ path: NAVIGATION_LINKS.HOME })
}

const data = getResultsFromStorage()
</script>

<template>
  <template v-if="data?.length">
    <h1>Stats for your last try</h1>
    <div>
      <PieChart />
    </div>

    <div>
      <TabsChart />
    </div>

    <Button @click="startQuiz">Start new quiz</Button>
  </template>

  <template v-else>
    <h1>No data</h1>
  </template>
</template>

<style scoped>
h1 {
  margin-top: 25px;
  text-align: center;
}

div {
  margin-top: 20px;
}
button {
  margin-top: 25px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
}
</style>
