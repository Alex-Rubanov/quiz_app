<template>
  <footer>
    <p>&copy; Created by Alex Rubanov</p>
    <a href="https://github.com/Alex-Rubanov">
      <img src="@/assets/icons/github.svg" alt="github-icon" />
    </a>
  </footer>
</template>

<style scoped>
footer {
  flex-shrink: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-weight: 600;

  border: 1px solid transparent;
  border-top-color: #4caf50;
}

@media (max-width: 600px) {
  footer {
    font-size: 14px;
  }
}
</style>
