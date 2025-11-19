<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import z from 'zod';

const loginSchema = toTypedSchema(
  z.object({
    email: z.email('Email must be valid'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    age: z.number().min(18, 'Age must be at least 18').max(100, 'Age must be less than 100'),
  })
);

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: loginSchema,
  initialValues: {
    email: '',
    password: '',
    age: 0,
  },
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [age, ageAttrs] = defineField('age');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <h3>Login Page</h3>
  <form @submit.prevent="onSubmit">
    <label for="email">
      <input type="email" placeholder="Input Email" v-model="email" v-bind="emailAttrs" />

      <p v-if="errors.email">
        {{ errors.email }}
      </p>
    </label>

    <label for="password">
      <input type="password" placeholder="Input Password" v-model="password" v-bind="passwordAttrs" />

      <p v-if="errors.password">
        {{ errors.password }}
      </p>
    </label>

    <label for="age">
      <input type="number" placeholder="Input Age" v-model="age" v-bind="ageAttrs" />

      <p v-if="errors.age">
        {{ errors.age }}
      </p>
    </label>

    <button type="submit">Login</button>
  </form>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>
