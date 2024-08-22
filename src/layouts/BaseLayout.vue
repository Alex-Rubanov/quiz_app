<script setup lang="ts"></script>

<template>
  <slot name="header"></slot>

  <main>
    <slot></slot>
  </main>

  <slot name="footer"></slot>
</template>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
