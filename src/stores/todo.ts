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
    // 数量统计
    // 总数
    const totalCount = computed(() => todos.value.length);
    // 待办数
    const pendingCount = computed(() => pendingTodos.value.length);
    // 已完成数
    const completedCount = computed(() => completedTodos.value.length);
    // 完成率
    const completionRate = computed(() => {
        if (totalCount.value === 0) return '0%';
        return (
            Math.round((completedCount.value / totalCount.value) * 100) + '%'
        );
    });

    // 公用方法
    // 增加待办
    const addTodo = (title: string) => {
        todos.value.push({ id: Date.now(), title: title, completed: false });
    };
    // 删除待办
    const removeTodo = (id: number) => {
        const index = todos.value.findIndex((item) => item.id === id);
        if (index !== -1) {
            todos.value.splice(index, 1);
        }
    };

    return {
        todos,
        pendingTodos,
        completedTodos,
        totalCount,
        pendingCount,
        completedCount,
        completionRate,
        addTodo,
        removeTodo,
    };
});
