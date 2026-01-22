import { defineStore } from 'pinia';
import { computed } from 'vue';
import { ref } from 'vue';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', () => {
    // 大家一起用的 todos
    const todos = ref<Todo[]>([
        { id: 1, title: '学习 Pinia', completed: false },
    ]);
    // 过滤出未完成的列表
    const pendingTodos = computed(() => {
        return todos.value.filter((item) => !item.completed);
    });
    // 过滤出已完成的列表
    const completedTodos = computed(() => {
        return todos.value.filter((item) => item.completed);
    });

    // 公用方法
    const addTodo = (title: string) => {
        todos.value.push({ id: Date.now(), title: title, completed: false });
    };

    return {
        todos,
        pendingTodos,
        completedTodos,
        addTodo,
    };
});
