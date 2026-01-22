<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const route = useRoute();
const router = useRouter();

const activeName = computed({
    get() {
        if (route.path === '/profile') return 'third';
        if (route.path === '/form') return 'second';
        return 'first';
    },
    set() {},
});

const handleClick = (tab: { props: { name: string } }) => {
    console.log(tab.props.name);

    switch (tab.props.name) {
        case 'first':
            router.push('/todo');
            break;
        case 'second':
            router.push('/form');
            break;
        case 'third':
            router.push('/profile');
            break;
    }
};
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <h3 class="mb-2">ToDoList</h3>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-menu-item index="1">
                        <template #title>
                            <el-icon><location /></el-icon>
                            <span>待办清单</span>
                        </template>                                           
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>表单填写</span>
                    </el-menu-item>
                    <el-menu-item index="3" >
                        <el-icon><document /></el-icon>
                        <span>已完成</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-tabs
                        v-model="activeName"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            label="待办清单"
                            name="first"
                        ></el-tab-pane>
                        <el-tab-pane
                            label="表单填写"
                            name="second"
                        ></el-tab-pane>
                        <el-tab-pane
                            label="已完成"
                            name="third"
                        ></el-tab-pane></el-tabs
                ></el-header>
                <el-main>待办清单</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>
