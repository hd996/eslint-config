<template>
  <div>
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

interface List {
  name: string
  age: number
  isShow: boolean
}

const list = ref<List[]>([
  {
    name: 'Johnson',
    age: 18,
    isShow: true
  },
  {
    name: 'Rebeca',
    age: 16,
    isShow: false
  }
])
</script>
