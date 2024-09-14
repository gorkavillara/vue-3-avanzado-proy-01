<template>
  <div>
    <p v-if="isAuthenticated">Welcome back, user!</p>
    <p v-else>Please log in.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isAuthenticated = ref(false);
</script>
