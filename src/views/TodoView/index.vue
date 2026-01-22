<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import TodoList from './components/TodoList.vue';
import MainLayout from '@/components/MainLayout.vue';

const todoStore = useTodoStore();
const { pendingTodos, totalCount, pendingCount, completedCount } =
    storeToRefs(todoStore);
</script>

<template>
    <MainLayout>
        <template #todo>
            <div class="start-bar">
                <span>总计：{{ totalCount }}</span>
                <el-divider direction="vertical" />
                <span>待办：{{ pendingCount }}</span>
                <el-divider direction="vertical" />
                <span>已完成：{{ completedCount }}</span>
            </div>
            <!-- 传递list数据 -->
            <TodoList :list="pendingTodos" />
        </template>
    </MainLayout>
</template>

<style>
.start-bar {
    margin-bottom: 20px;
}
</style>
