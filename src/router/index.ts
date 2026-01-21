import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/todo', component: () => import('@/views/todo/index.vue') },
        { path: '/form', component: () => import('@/views/form/index.vue') },
        {
            path: '/profile',
            component: () => import('@/views/profile/index.vue'),
        },
    ],
});

export default router;
