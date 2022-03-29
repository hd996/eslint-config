<template>
  <div class="app">
    <template
      v-for="item in list"
      :key="item.name"
    >
      <div v-if="item.isShow">
        Name: {{ item.name }}
      </div>
      <div v-if="item.isShow">
        Age: {{ item.age }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { List } from './Model'

const list = ref<List[]>([
  {
    name: 'Hd',
    age: 18,
    isShow: true
  },
  {
    name: 'Rebeca',
    age: 16,
    isShow: false
  },
])
</script>
