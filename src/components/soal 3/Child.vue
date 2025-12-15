<script setup>
import { useUser } from '@/composables/useUser'
import { watch } from 'vue'

const props = defineProps(['userId'])
const { user, isLoading, error, fetchUser } = useUser()

watch(
  () => props.userId,
  async (newId) => {
    if (newId) {
      await fetchUser(newId)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div style="border: 1px solid #ccc; padding: 20px; margin-top: 10px">
    <h2>Detail User</h2>
    <div v-if="isLoading">Loading data dari server... ⏳</div>
    <div v-else-if="user">
      <h3>{{ user.name }}</h3>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
    </div>
    <div v-else>Klik nama user di kiri untuk melihat detail</div>
  </div>
</template>
