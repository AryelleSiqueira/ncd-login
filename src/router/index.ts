import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from "../views/RegisterView.vue";
import LoggedView from "../views/LoggedView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/logged'
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/logged',
        name: 'LoggedView',
        component: LoggedView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;