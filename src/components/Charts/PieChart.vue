<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { PIE_CHART_COLORS, PIE_CHART_LABELS } from '@/constants'
import { getResultsFromStorage } from '@/helpers'

ChartJS.register(ArcElement, Tooltip, Legend)

const result = getResultsFromStorage()[0]

const data = {
  labels: PIE_CHART_LABELS,
  datasets: [
    {
      backgroundColor: PIE_CHART_COLORS,
      data: [result?.correct, result?.incorrect, result?.skipped],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<template>
  <Pie :data="data" :options="options" />
</template>
