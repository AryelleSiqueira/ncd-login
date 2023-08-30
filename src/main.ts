import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import useStore from "./store";
import router from "./router";

//@ts-ignore
router.beforeEach((to, from, next) => {
    const isAuthenticated: boolean = useStore().isAuthenticated;

    if (!isAuthenticated && to.name !== 'LoginView' && to.name !== 'RegisterView') {
        next({ name: 'LoginView' });
    } else if (isAuthenticated && to.name !== 'LoggedView') {
        next({ name: 'LoggedView' });
    } else {
        next();
    }
});

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app');
