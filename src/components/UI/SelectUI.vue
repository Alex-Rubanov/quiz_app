<script setup lang="ts">
import { defineProps } from 'vue'

type OptionType = {
  id: number
  name: string
}

defineProps<{
  label: string
  defaultValue: string
  value: 'id' | 'name'
  id: string
  name: string
  options: OptionType[]
}>()
</script>

<template>
  <div>
    <label v-if="label" for="id">{{ label }}</label>

    <select
      :id="id"
      :name="name"
      @change="(event: Event) => $emit('onChange', event.target?.value)"
    >
      <option disabled value="" selected>{{ defaultValue }}</option>

      <option v-for="option in options" :key="option.id" :value="option[value]">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
div {
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
select {
  border: 1px solid #4caf50;

  padding: 10px 14px;
  border-radius: 10px;
  outline: none;
}

select:focus-visible {
  border: none;
  outline: 2px solid #4caf50;
}
</style>
