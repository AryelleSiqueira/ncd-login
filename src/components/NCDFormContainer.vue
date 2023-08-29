<template>
  <form class="d-flex flex-column justify-content-center align-items-center rounded shadow w-100 h-100 p-0 m-0">
    <div class="img-container">
      <img class="img-fluid w-100 h-100" src="../assets/NCD.svg" alt="ncd-logo">
    </div>

    <slot name="content"></slot>
  </form>
</template>

<style lang="scss" scoped>
form {
  background-color: #f9f9f9ff;
  gap: 20px;
  box-sizing: border-box;
  min-width: 350px;

  .img-container {
    width: 50%;
    height: auto;

    @media (min-width: 500px) {
      width: 40%;
    }
  }
}
</style>