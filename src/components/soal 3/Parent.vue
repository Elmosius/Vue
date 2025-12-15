<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const selectedUserId = ref(null)

// Daftar User Dummy untuk diklik
const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
]
</script>

<template>
  <div style="display: flex; gap: 20px; font-family: sans-serif">
    <div style="width: 200px">
      <h3>Daftar User</h3>
      <ul>
        <li v-for="user in users" :key="user.id" style="margin-bottom: 10px">
          <button @click="selectedUserId = user.id" style="cursor: pointer">
            Lihat {{ user.name }}
          </button>
        </li>
      </ul>
    </div>

    <div style="flex: 1">
      <Child :user-id="selectedUserId" />
    </div>
  </div>
</template>
