<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
  id: string
  label: string
  type: string
  modelValue: string
  placeholder?: string
  required?: boolean
  pattern?: RegExp
  invalidMessage?: string
}>(), {
  placeholder: '',
  required: false,
});

const emit = defineEmits(['validated', 'update:modelValue']);

const isValid = ref(true);

function validate() {
  if (props.pattern) {
    isValid.value = !props.modelValue || props.pattern.test(props.modelValue);
    emit('validated', isValid.value);
  }
}
</script>

<template>
  <div class="form-floating">
    <input
        class="form-control shadow border-0"
        :class="{ 'is-invalid': !isValid }"
        @focusout="validate"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
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