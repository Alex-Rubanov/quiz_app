<script setup lang="ts">
import { RouterView } from 'vue-router'
import { BaseLayout } from '@/layouts'
import { Header, Footer } from '@/components'
</script>

<template>
  <BaseLayout>
    <template #header>
      <Header />
    </template>

    <template #default>
      <RouterView />
    </template>

    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>
