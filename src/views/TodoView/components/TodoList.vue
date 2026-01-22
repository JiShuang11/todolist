<script setup lang="ts">
import type { Todo } from '@/stores/todo';
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { InfoFilled } from '@element-plus/icons-vue';
import { id } from 'element-plus/es/locales.mjs';

const clicked = ref(false);
function onCancel() {
    clicked.value = true;
}
// 接收父组件给我的数据'list'
defineProps<{ list: Todo[] }>();

const todoStore = useTodoStore();
const handleDelete = (id: number) => {
    todoStore.removeTodo(id);
};
</script>

<template>
    <div class="todo-list">
        <!-- v-for 循环 list -->
        <div v-for="item in list" :key="item.id" class="item">
            <el-checkbox v-model="item.completed">
                <span :class="{ completed: item.completed }">{{
                    item.title
                }}</span>
            </el-checkbox>

            <!-- 删除按钮 -->
            <el-popconfirm
                width="150"
                :icon="InfoFilled"
                icon-color="#626AEF"
                title="你确定要删除这个待办事项吗?"
                @confirm="handleDelete(item.id)"
                @cancel="onCancel"
                confirm-button-text="确定"
                cancel-button-text="取消"
            >
                <template #reference>
                    <el-button  style="height: 24px; padding: 0 8px; margin-left:20px" 
                        >删除</el-button
                    >
                </template>
            </el-popconfirm>
        </div>

        <!-- 空状态提示 -->
        <div v-if="list.length === 0">暂无待办事项</div>
    </div>
</template>

<style>
.completed {
    text-decoration: line-through; /* 完成了就划掉 */
    color: #999;
}
.item {
    margin-bottom: 10px;
}
</style>
