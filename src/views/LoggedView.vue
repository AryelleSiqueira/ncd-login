<script setup lang="ts">

import useStore from "../store";
import router from "../router";
import { computed } from "vue";
import NCDButton from "../components/NCDButton.vue";
import User from "../types/User.ts";

const store = useStore();

const loggedUser = computed((): User | undefined => store.loggedUser);

async function logout() {
  store.logout();
  await router.push({ name: "LoginView" });
}
</script>

<template>
  <div class="logged-view d-flex flex-column align-items-center justify-content-center w-100 h-100 p-0 m-0">
    <img class="mx-auto p-5" alt="" src="../assets/ola.jpg">

    <p>Nome: {{loggedUser?.name}} </p>
    <p>Email: {{loggedUser?.email}} </p>
    <p>CPF: {{loggedUser?.cpf}} </p>

    <NCDButton text="Logout" style-class="btn-outline-pink" @click="logout"/>
  </div>
</template>