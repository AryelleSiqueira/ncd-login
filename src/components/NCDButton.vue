<script setup lang="ts">

defineProps<{
  text: string
  type?: "button" | "submit" | "reset"
  styleClass?: "btn-pink" | "btn-outline-pink"
}>();
</script>

<template>
  <button
      class="btn p-2 shadow-sm"
      :type="type"
      :class="styleClass"
  >
    {{text}}
  </button>
</template>

<style scoped lang="scss">
.btn-pink {
  --bs-btn-color: #fff;
  --bs-btn-bg: #a41c5c;
  --bs-btn-border-color: #a41c5c;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #931953;
  --bs-btn-hover-border-color: #83164a;
  --bs-btn-focus-shadow-rgb: 49,132,253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #83164a;
  --bs-btn-active-border-color: #731341;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-outline-pink {
  --bs-btn-color: #a41c5c;
  --bs-btn-bg: transparent;
  --bs-btn-border-color: #a41c5c;
  --bs-btn-hover-color: #8c1b50ff;
  --bs-btn-hover-bg: #e8d0e0;
  --bs-btn-hover-border-color: #a41c5c;
  --bs-btn-focus-shadow-rgb: 49,132,253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #a41c5c;
  --bs-btn-active-border-color: #a41c5c;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
</style>