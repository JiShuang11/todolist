<script setup lang="ts">
import type { Todo } from '@/stores/todo';

// 接收父组件给我的数据'list'
defineProps<{ list: Todo[] }>();
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
