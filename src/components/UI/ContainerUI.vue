<script setup lang="ts"></script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.51);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  transition: all 0.3s ease-in;
}
</style>
