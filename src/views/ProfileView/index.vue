<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import TodoList from '@/views/TodoView/components/TodoList.vue';
import MainLayout from '@/components/MainLayout.vue';

const todoStore = useTodoStore();
const { completedTodos } = storeToRefs(todoStore);
</script>

<template>
    <MainLayout>
        <template #profile>
            <!-- 传递list数据 -->
            <TodoList :list="completedTodos" />
        </template>
    </MainLayout>
</template>
