<template>
  <div id="app">
    <HelloWorld />
    <button @click="mostrarAbout = true">Mostrar About</button>
    <ImageComponent v-if="mostrarAbout" />
  </div>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
import { ref, defineAsyncComponent } from 'vue'

const mostrarAbout = ref(false)
const ImageComponent = defineAsyncComponent(() => import('./ImageComponent.vue'))
</script>
