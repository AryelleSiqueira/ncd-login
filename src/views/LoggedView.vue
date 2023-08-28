<script setup lang="ts">

import store from "../store";
import router from "../router";
import { computed } from "vue";
import NCDButton from "../components/NCDButton.vue";

const loggedUser = computed(() => store.getters.loggedUser);

async function logout() {
  await store.dispatch('logout');
  await router.push({ name: "LoginView" });
}

</script>

<template>
  <div class="logged-view">
    <p>Nome: {{loggedUser?.name}} </p>
    <p>Email: {{loggedUser?.email}} </p>

    <NCDButton text="Logout" style-class="btn-outline-pink" @click="logout"/>
  </div>
</template>

<style scoped lang="scss">

.logged-view {
  background-color: #e8d0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

</style>