<script setup lang="ts">
import { getResultsFromStorage } from '@/helpers'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const result = getResultsFromStorage()[0]

const data = {
  labels: Array(result?.correct + result?.incorrect)
    .fill(0)
    ?.map((_, index) => `Question ${index + 1}`),
  datasets: [
    {
      label: 'Time dedicated per question (seconds)',
      backgroundColor: '#f87979',
      data: result.time,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<template>
  <Bar :data="data" :options="options" />
</template>
