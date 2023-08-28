<script setup lang="ts">

import router from "../router";

import NCDFormContainer from "../components/NCDFormContainer.vue";
import FormInput from "../components/FormInput.vue";
import NCDButton from "../components/NCDButton.vue";
import { ref } from "vue";
import {authenticate} from "../services/Auth.ts";

let email = ref('');
let password = ref('');

function login() {
  authenticate(email.value, password.value)
      .then(() => router.push('/'))
      .catch(err => {
        password.value = "";
        alert(err);
      });
}

</script>

<template>
  <div id="login-view">
    <NCDFormContainer class="form-container" @submit.prevent="login">

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

        <a href="#">Esqueci minha senha</a>

        <div class="form-buttons">
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
      </template>

    </NCDFormContainer>
  </div>
</template>

<style lang="scss" scoped>

#login-view {
  background-color: #e8d0e0;
  height: 100vh;
  width: 100vw;
  min-height: 40rem;
  min-width: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .form-container {
    width: 35rem;
    height: fit-content;

    a {
      margin: 0 0 10px auto;
      color: #83164a;
    }

    .form-input {
      margin-bottom: 20px;
    }

    .form-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      * {
        width: 200px;
        margin: 8px 0;
      }
      *:last-child {
        margin-bottom: 50px;
      }
    }
  }
}
</style>