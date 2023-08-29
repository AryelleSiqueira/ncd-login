import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store";
import router from "./router";

router.beforeEach((to, from, next) => {
    const isAuthenticated: boolean = store.getters.isAuthenticated;

    console.log(isAuthenticated, to.name, typeof isAuthenticated);

    if (!isAuthenticated && to.name !== 'LoginView' && to.name !== 'RegisterView') {
        next({ name: 'LoginView' });
    } else if (isAuthenticated && to.name !== 'LoggedView') {
        next({ name: 'LoggedView' });
    } else {
        next();
    }
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
