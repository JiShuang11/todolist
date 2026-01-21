<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="todo-item">
    <input type="checkbox" />
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.todo-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
