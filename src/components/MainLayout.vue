<script setup lang="ts">
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

// tab路由联动
const activeName = computed({
    get() {
        if (route.path === '/profile') return 'third';
        if (route.path === '/form') return 'second';
        if (route.path === '/user') return 'fourth';
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
        case 'fourth':
            router.push('/user');
            break;
    }
};
// 侧边栏路由联动
const activeMenu = computed(() => {
    if (route.path === '/form') return '2';
    if (route.path === '/profile') return '3';
    if (route.path === '/user') return '4';
    return '1';
});
const handerMenuSelect = (index: string) => {
    switch (index) {
        case '1':
            router.push('/todo');
            break;
        case '2':
            router.push('/form');
            break;
        case '3':
            router.push('/profile');
            break;
        case '4':
            router.push('/user');
            break;
    }
};
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <!-- 侧边栏 -->
                <h3 class="mb-2">ToDoList</h3>
                <el-menu
                    :default-active="activeMenu"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handerMenuSelect"
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
                    <el-menu-item index="3">
                        <el-icon><document /></el-icon>
                        <span>已完成</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon><setting /></el-icon>
                        <span>个人中心</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <!-- Tab 导航代码 -->
                    <el-tabs
                        v-model="activeName"
                        class="demo-tabs"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane label="待办清单" name="first">
                            <slot name="todo"></slot>
                        </el-tab-pane>
                        <el-tab-pane label="表单填写" name="second">
                            <slot name="form"></slot
                        ></el-tab-pane>
                        <el-tab-pane label="已完成" name="third"
                            ><slot name="profile"></slot></el-tab-pane
                        ><el-tab-pane label="个人中心" name="fourth"
                            ><slot name="user"></slot></el-tab-pane
                    ></el-tabs>
                </el-header>
                <el-main>
                    <!-- 核心：挖个坑，让具体页面填内容 -->
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style></style>
