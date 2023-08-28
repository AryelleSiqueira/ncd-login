<template>
  <div class="container d-flex flex-column justify-content-center rounded shadow">
    <img src="../assets/NCD.png" alt="ncd-logo">
    <form class="d-flex flex-column" @submit.stop="$emit('submit', $event)">

      <slot name="content"></slot>

    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: #f9f9f9ff;
  margin: 0;
  height: 100%;
  width: 100%;
  min-width: 35rem;
  min-height: fit-content;
  padding: 0 50px;

  img {
    width: 200px;
    margin: 50px 0;
    align-self: center;
  }
}
</style>