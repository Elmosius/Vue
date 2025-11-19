<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { ErrorMessage, Field, Form } from 'vee-validate';
import z from 'zod';

const loginSchema = toTypedSchema(
  z.object({
    email: z.email('Email must be valid'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    age: z.number().min(18, 'Age must be at least 18').max(100, 'Age must be less than 100'),
  })
);

const handleSubmit = (values: z.infer<typeof loginSchema>) => {
  console.log(values);
};
</script>

<template>
  <h3>Login Page</h3>
  <Form @submit="handleSubmit" :validation-schema="loginSchema">
    <label for="email">
      <Field type="email" placeholder="Input Email" name="email" />
      <ErrorMessage name="email" />
    </label>

    <label for="password">
      <Field type="password" placeholder="Input Password" name="password" />
      <ErrorMessage name="password" />
    </label>

    <label for="age">
      <Field type="number" placeholder="Input Age" name="age" />
      <ErrorMessage name="age" />
    </label>

    <button type="submit">Login</button>
  </Form>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
</style>
