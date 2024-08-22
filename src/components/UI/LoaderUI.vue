<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  isLoading: boolean
}>()
</script>

<template>
  <div v-if="isLoading" class="loader"></div>
</template>

<style scoped>
.loader {
  width: 16px;
  height: 16px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #4caf50;
  box-shadow:
    32px 0 #4caf50,
    -32px 0 #4caf50;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #a3cfa4;
    box-shadow:
      32px 0 #a3cfa4,
      -32px 0 #4caf50;
  }
  50% {
    background-color: #4caf50;
    box-shadow:
      32px 0 #a3cfa4,
      -32px 0 #a3cfa4;
  }
  100% {
    background-color: #a3cfa4;
    box-shadow:
      32px 0 #4caf50,
      -32px 0 #a3cfa4;
  }
}
</style>
