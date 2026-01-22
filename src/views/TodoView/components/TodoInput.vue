<script setup lang="ts">
// import { Todo } from '@/services/todo';
import { ref } from 'vue';
const emit = defineEmits<{ (e: 'add', title: string): void }>();

// 输入框里的字
const inputValue = ref('');

const handleKeyup = () => {
    // 非空校验
    if (!inputValue.value.trim) return;
    // 把 inputValue.value 扔给父亲
    emit('add', inputValue.value);
    // 清空输入框
    inputValue.value = ''
};
</script>

<template>
    <div>
        <el-input v-model="inputValue" placeholder="请输入待办事项，按回车添加" @keyup.enter="handleKeyup">
        </el-input>
    </div>
</template>

<style></style>
