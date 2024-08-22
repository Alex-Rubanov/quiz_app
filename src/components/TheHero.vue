<script setup lang="ts">
import { Button } from '@/components'
import { useQuizStore } from '@/stores'
import { useFetchToken } from '@/composables'

useFetchToken()

const quiz = useQuizStore()
</script>

<template>
  <div class="hero">
    <h1>Are you ready for new challenge?!</h1>

    <div class="info">
      <ul>
        <li>Different categories</li>
        <li>Different difficulty modes</li>
        <li>Choose your optimal number of questions</li>
        <li>Check your stats</li>
      </ul>
    </div>

    <Button class="btn" @click="quiz.updateStatus">Try it out!</Button>
  </div>
</template>

<style scoped>
.hero {
  height: 100%;
  margin-top: 25px;
  padding: 15px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.info {
  width: clump(300px, 500px, 650px);
  min-height: 300px;
  padding: 15px;

  border-radius: 16px;
  background: #8ecf90;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  padding: 15px;
}
div {
  height: 100%;
}

img {
  display: block;
  border-radius: 50%;
}

.btn {
  align-self: end;
}

@media (max-width: 600px) {
  h1 {
    font-size: 20px;
  }

  ul {
    font-size: 15px;
  }

  .btn {
    font-size: 16px;
  }
}
</style>
