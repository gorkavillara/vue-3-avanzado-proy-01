<template>
    <div v-if="age > 0">
      <p>Your age is: {{ age }}</p>
    </div>
    <div v-else>
      <p>Invalid age</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    age: {
        type: Number,
        required: true,
        validator: (value: number) => value > 0
    }
  })
  </script>
  