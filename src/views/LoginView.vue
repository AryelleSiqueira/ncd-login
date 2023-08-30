<script setup lang="ts">

import router from "../router";

import NCDFormContainer from "../components/NCDFormContainer.vue";
import FormInput from "../components/FormInput.vue";
import NCDButton from "../components/NCDButton.vue";
import { ref } from "vue";
import { authenticate } from "../services/Auth.ts";

let email = ref('');
let password = ref('');

async function login() {
  await authenticate(email.value, password.value)
      .then(() => router.push('/logged'))
      .catch(err => {
        password.value = "";
        alert(err.message);
      });
}
</script>

<template>
  <div id="login-view" class="w-100 h-100 p-0 d-flex justify-content-center align-items-center">
    <NCDFormContainer class="form" @submit.prevent="login">
      <template #content>
        <FormInput
            class="form-input"
            v-model="email"
            id="login-email"
            label="Email"
            type="email"
            :required=true
            :pattern="new RegExp('[-A-Za-z0-9!#$%&\'*+/=?^_`{|}~]+(?:\\.[-A-Za-z0-9!#$%&\'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?')"
            invalid-message="Email inválido!"
        />
        <FormInput
            class="form-input"
            v-model="password"
            id="login-password"
            label="Senha"
            type="password"
            :required=true
            invalid-message="Senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial!"
        />

        <div class="form-buttons d-flex flex-column align-items-center w-100">
          <NCDButton type="submit" text="Fazer login" style-class="btn-pink" class="form-button"/>

          <router-link to="/register" custom v-slot="{ navigate }">
            <NCDButton
                type="button"
                text="Cadastre-se"
                style-class="btn-outline-pink"
                @click="navigate"
                class="form-button"
            />
          </router-link>
        </div>
        <a href="#">Esqueci minha senha</a>
      </template>
    </NCDFormContainer>
  </div>
</template>

<style lang="scss" scoped>

#login-view {
  .form {
    max-width: 35rem;
    height: fit-content !important;

    @media (max-width: 700px) {
      width: 95% !important;
      min-width: fit-content !important;
    }

    a {
      margin: 0 auto;
      color: #83164a;
      text-align: center;
    }

    .form-input {
      width: calc(100% - 60px) !important;

      @media (max-width: 600px) {
        width: 90%;
        min-width: 250px;
      }
    }

    .form-buttons {
      gap: 10px;
      box-sizing: border-box;
      padding-top: 20px;

      button {
        width: calc(50% - 100px);
        min-width: 150px;
      }
    }
  }
}
</style>