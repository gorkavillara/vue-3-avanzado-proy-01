<template>
  <picture>
    <source :srcset="imageSrcSet.large" media="(min-width: 800px)" />
    <source :srcset="imageSrcSet.medium" media="(min-width: 400px)" />
    <img :src="defaultImage" alt="Descripción de la imagen" />
  </picture>
</template>

<script setup lang="ts">
import { ref } from "vue";

const imageSrcSet = {
  large: "800w.png",
  medium: "400w.png",
};

const defaultImage = ref("default.png");
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
