import { createWebHistory, createRouter } from 'vue-router';
// import FormView from '@/views/FormView/index.vue';
// import ProfileView from '@/views/ProfileView/index.vue';
// import TodoView from '@/views/TodoView/index.vue';

const routes = [
    { path: '/', redirect: '/todo' },
    { path: '/todo', component: () => import('@/views/TodoView/index.vue') },
    { path: '/form', component: () => import('@/views/FormView/index.vue') },
    {
        path: '/profile',
        component: () => import('@/views/ProfileView/index.vue'),
    },
    {
        path: '/user',
        component: () => import('@/views/UserInfo/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
