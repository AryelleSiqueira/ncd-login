<script setup lang="ts">
import { ref, watch } from "vue";

import FormInput from "../components/FormInput.vue";
import NCDButton from "../components/NCDButton.vue";
import NCDFormContainer from "../components/NCDFormContainer.vue";

import router from "../router";
import {register} from "../services/Auth.ts";

let name = '';
let email = '';
let password = '';

const cpf = ref('');

watch(cpf, () => {
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += ".";
  } else if (cpf.value.length == 11) {
    cpf.value += "-";
  }
});

async function registerUser() {
  await register({
    name,
    email,
    password,
    cpf: cpf.value,
  }).then(() => router.push('/login'))
      .catch(err => {
        alert(err.message);
      });
}
</script>

<template>
  <div id="register-view">

    <NCDFormContainer class="form-container" @submit.prevent="registerUser">
      <template #content>
        <FormInput
            class="form-input"
            v-model="name"
            id="register-name"
            label="Nome"
            type="text"
            :required=true
        />
        <FormInput
            class="form-input"
            v-model="email"
            id="register-email"
            label="Email"
            type="email"
            :required=true
            :pattern="new RegExp('[-A-Za-z0-9!#$%&\'*+/=?^_`{|}~]+(?:\\.[-A-Za-z0-9!#$%&\'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?')"
            invalid-message="Email inválido!"
        />
        <FormInput
            class="form-input"
            v-model="cpf"
            id="register-cpf"
            label="CPF"
            type="text"
            :required=true
            :pattern="new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$')"
            invalid-message="CPF inválido!"/>
        <FormInput
            class="form-input"
            v-model="password"
            id="login-password"
            label="Senha"
            type="password"
            :required=true
            :pattern="new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$')"
            invalid-message="Senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial!"
        />

        <NCDButton class="form-button" type="submit" text="Efetuar cadastro" style-class="btn-pink" />

        <router-link class="link" to="/login">Já possuo cadastro</router-link>
      </template>
    </NCDFormContainer>

  </div>
</template>

<style lang="scss" scoped>

#register-view {
  background-color: #e8d0e0;
  height: 100vh;
  width: 100vw;
  min-height: 45rem;
  min-width: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .form-container {
    width: 35rem;
    height: fit-content;

    .form-input {
      margin: 15px 0;
    }

    .link {
      margin: 0 auto 50px;
      color: #83164a;
    }

    .form-button {
      width: 200px;
      margin: 25px auto 8px;
    }
  }
}
</style>