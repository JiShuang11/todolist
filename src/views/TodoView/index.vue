<script setup>
import { ref } from 'vue';
const activeName = ref('first');
const handleClick = (tab, event) => {
    console.log(tab, event);
};
</script>

<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="待办清单" name="first">待办清单</el-tab-pane>
        <el-tab-pane label="表单填写" name="second"></el-tab-pane>
        <el-tab-pane label="已完成" name="third"></el-tab-pane>
        <el-tab-pane label="个人中心" name="fourth"></el-tab-pane>
    </el-tabs>
</template>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
