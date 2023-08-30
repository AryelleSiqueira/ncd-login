<template>
  <form class="d-flex flex-column justify-content-center align-items-center rounded shadow w-100 h-100 m-0">
    <div class="form-content d-flex flex-column justify-content-center align-items-center">
      <div class="img-container">
        <img class="img-fluid w-100 h-100" src="../assets/NCD.svg" alt="ncd-logo">
      </div>

      <slot name="content"></slot>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  background-color: #f9f9f9ff;
  padding: 50px 0 !important;
  box-sizing: border-box;
  min-height: fit-content;

  .form-content {
    width: 100%;
    min-width: fit-content;
    min-height: fit-content;
    box-sizing: border-box;
    gap: 20px;

    .img-container {
      width: 40%;
      height: auto;
      box-sizing: border-box;
      margin-bottom: 20px;

      @media (max-width: 500px) {
        width: 50%;
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>