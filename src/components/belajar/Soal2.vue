<script setup lang="ts">
const { isSubscribed } = defineProps<{ isSubscribed: boolean }>()
const emit = defineEmits(['isSubscribed'])

const handleClick = () => {
  emit('isSubscribed')
}
</script>

<template>
  <button @click="handleClick">
    {{ isSubscribed ? 'Unsubscribe' : 'Subscribe' }}
  </button>
</template>
