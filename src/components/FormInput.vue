<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
  id: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  pattern?: RegExp
  invalidMessage?: string
}>(), {
  placeholder: '',
  required: false,
});

let value = '';

const isValid = ref(true);

function validate() {
  if (props.pattern) {
    isValid.value = !value || props.pattern.test(value);
  }
}
</script>

<template>
  <div class="form-floating">
    <input class="form-control shadow border-0"
           v-model="value"
           @focusout="validate"
           :class="{'is-invalid': !isValid}"
           :id="id"
           :type="type"
           :placeholder="placeholder"
           :required="required"
    >
    <label :for="id">{{label}}</label>

    <template v-if="invalidMessage">
      <div class="invalid-feedback">
        {{invalidMessage}}
      </div>
    </template>
  </div>
</template>