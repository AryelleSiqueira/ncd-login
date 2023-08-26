<script setup lang="ts">

import FormInput from "../components/FormInput.vue";
import NCDButton from "../components/NCDButton.vue";

</script>

<template>
  <div id="login-view">
    <div class="container d-flex flex-column justify-content-center rounded shadow">
      <img src="../assets/NCD.png" alt="">
      <form class="d-flex flex-column" >

        <FormInput id="login-email"
                   label="Email"
                   type="email"
                   :required=true
                   :pattern="new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')"
                   invalid-message="Email inválido!"
        />
        <FormInput id="login-password"
                   label="Senha"
                   type="password"
                   :required=true
                   :pattern="new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$')"
                   invalid-message="Senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial!"
        />

        <a href="#">Esqueci minha senha</a>

        <div class="form-buttons">
          <NCDButton type="submit" text="Fazer login" style-class="btn-pink" />
          <NCDButton type="button" text="Cadastre-se" style-class="btn-outline-pink" />
        </div>

      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

#login-view {
  background-color: #e8d0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  min-height: fit-content;
  min-width: fit-content;
  margin: auto;

  .container {
    background-color: #f9f9f9ff;
    margin: 0;
    width: 40rem;
    height: 35rem;
    padding: 0 40px;

    img {
      width: 200px;
      margin-bottom: 40px;
      align-self: center;
    }

    .form-floating {
      margin: 15px 0;
    }

    a {
      align-self: end;
    }

    .form-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 200px;
        margin: 8px 0;
      }
    }
  }
}
</style>