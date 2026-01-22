<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTodoStore } from '@/stores/todo';
import TodoInput from '@/views/TodoView/components/TodoInput.vue';
import MainLayout from '@/components/MainLayout.vue';

const todoStore = useTodoStore();
const router = useRouter();

const handleAdd = (title: string) => {
    // 存到公共仓库
    todoStore.addTodo(title);
    // 跳回列表页看结果
    router.push('/todo');
};
</script>

<template>
    <MainLayout>
        <template #form>
            <!-- 监听@add事件，触发handleAdd（子传父） -->
            <TodoInput @add="handleAdd" />
        </template>
    </MainLayout>
</template>
