<script lang="ts" setup>
import {reactive, ref} from "vue";
import {VForm} from "vuetify/components";

type User = {
  email: string,
  password: string
}

const user = reactive<User>({
  email: "",
  password: ""
})

const formRef = ref<VForm | null>(null)

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
];

const passwordRules = [
  (v: string) => !!v || "Password is required",
  (v: string) => v.length >= 6 || "Password must be at least 6 characters"
];

const onSubmit = async () => {
  const {valid} = await formRef.value!.validate()

  if (!valid) return;
  console.info(user)
}

</script>

<template>
  <VContainer class="h-screen  d-flex justify-center align-center">
    <VCard class="pa-5 w-50 rounded-lg" subtitle="Welcome to Login Page!" title="Login">
      <VCardItem>
        <VForm ref="formRef" class="d-flex flex-column ga-4" @submit="onSubmit" @submit.prevent>
          <VTextField v-model="user.email" :rules="emailRules" label="Email" type="email"
                      variant="outlined"/>
          <VTextField v-model="user.password" :rules="passwordRules" label="Password" type="password"
                      variant="outlined"/>

          <VBtn class="rounded-lg text-black text-sm-subtitle-2" type="submit" variant="outlined">Submit</VBtn>
        </VForm>
      </VCardItem>
    </VCard>
  </VContainer>
</template>

<style scoped>
</style>
