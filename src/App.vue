<script setup lang="ts">

import {onBeforeMount} from "vue";
import useStore from "./store";

const store = useStore();

onBeforeMount(() => {
  store.load();
});
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
