import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import LoginView from '../views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;