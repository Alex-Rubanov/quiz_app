<script setup lang="ts"></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: #4caf50;
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  border-radius: 7px;

  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #87cf8b;
  color: #3e3c3c;
}

button:disabled {
  background-color: #8a8b8a;
  color: #3e3c3c;
  cursor: not-allowed;
}
</style>
