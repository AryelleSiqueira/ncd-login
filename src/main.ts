import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store";
import router from "./router";

router.beforeEach((to, from) => {
    const isAuthenticated = store.getters.isAuthenticated;
    console.log(isAuthenticated, to.name, from.name);

    if (!isAuthenticated && to.name !== 'LoginView' && to.name !== 'RegisterView') console.log("Não autenticado");

    if (!isAuthenticated && to.name !== 'LoginView' && to.name !== 'RegisterView') return { name: 'LoginView' };
    if (isAuthenticated && to.name!== 'LoggedView') return { name: 'LoggedView' };
});

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
