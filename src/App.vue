<script setup lang="ts">

import {onBeforeMount} from "vue";
import store from "./store";

onBeforeMount(() => {
  store.dispatch('load');
});
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
