<script setup lang="ts">
import { computed, ref, watch } from "vue";

import FormInput from "../components/FormInput.vue";
import NCDButton from "../components/NCDButton.vue";
import NCDFormContainer from "../components/NCDFormContainer.vue";

import router from "../router";
import { register } from "../services/Auth.ts";

let name = '';
const email = ref('');
const password = ref('');
const cpf = ref('');

watch(cpf, () => {
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += ".";
  } else if (cpf.value.length == 11) {
    cpf.value += "-";
  }
});

const fieldsValidation = ref([] as boolean[]);

const isFormValid = computed((): boolean => fieldsValidation.value.every(value => value));

function handleValidated(i: number, value: boolean) {
  fieldsValidation.value[i] = value;
}

async function registerUser() {
  if (isFormValid.value) {
    await register({
      name,
      email: email.value,
      password: password.value,
      cpf: cpf.value,
    }).then(() => router.push('/login'))
        .catch(err => {
          alert(err.message);
        });
  } else {
    alert("Preencha todos os campos corretamente!");
  }
}
</script>

<template>
  <div id="register-view" class="w-100 h-100 p-0 d-flex justify-content-center align-items-center">

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
            @validated="handleValidated(1, $event)"
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
            @validated="handleValidated(2, $event)"
            class="form-input"
            v-model="cpf"
            id="register-cpf"
            label="CPF"
            type="text"
            :required=true
            :pattern="new RegExp('^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$')"
            invalid-message="CPF inválido!"/>
        <FormInput
            @validated="handleValidated(3, $event)"
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
  .form-container {
    max-width: 35rem;
    height: 95% !important;
    min-height: 650px !important;

    @media (max-width: 700px) {
      width: 95% !important;
      height: 90% !important;
    }

    .form-input {
      width: 80%;

      @media (max-width: 700px) {
        width: 90%;
      }
    }

    .link {
      color: #83164a;
    }

    .form-button {
      width: calc(50% - 60px) !important;
      min-width: 150px;
    }
  }
}
</style>