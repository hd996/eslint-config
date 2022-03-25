<template>
  <div class="app">
    {{ state }}
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const state = ref(1)

const changeState = () => {
  state.value = 2
}

onMounted(() => {
  changeState()
})
</script>
