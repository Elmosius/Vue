<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

const props = defineProps(['userId']) // ID didapat dari parent

const userStore = useUserStore()
const { activeUser, isLoading } = storeToRefs(userStore)

// Setiap kali props ID berubah, panggil API via store
watch(() => props.userId, (newId) => {
  if (newId) {
    userStore.fetchUserDetail(newId)
  }
}, { immediate: true })
</script>

<template>
  <div class="card">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="activeUser">
      <h1>{{ activeUser.name }}</h1>
      <p>Email: {{ activeUser.email }}</p>
    </div>
    <div v-else>Pilih user dulu</div>
  </div>
</template>