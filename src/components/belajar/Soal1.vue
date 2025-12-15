<template>
  {{ status }}
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

// 1. State Suhu
const temperature = ref(25)

// 2. Status (Computed)
// Logic: <20 Dingin, 20-30 Normal, >30 Panas
const status = computed(() => {
  if (temperature.value < 20) return 'Dingin ❄️'
  if (temperature.value <= 30) return 'Normal 😐'
  return 'Panas 🔥'
})

// 3. Alarm Bahaya (Watch)
// Tugas: Pantau perubahan 'temperature'.
// Jika nilai BARU > 40, cetak "BAHAYA! MESIN OVERHEAT!"
watch(temperature, (newVal) => {
  if (newVal > 40) {
    console.log('BAHAYA! MESIN OVERHEAT! 🚨')
  }
})
</script>
