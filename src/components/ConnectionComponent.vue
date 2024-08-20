<template>
  <img :src="imageSrc" alt="Descripción de la imagen" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const imageSrc = ref("");

const setImageSrc = () => {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  if (connection) {
    imageSrc.value =
      connection.effectiveType === "4g"
        ? "high-res.png"
        : "low-res.png";
  } else {
    imageSrc.value = "low-res.png"; // Valor por defecto
  }
};

onMounted(() => {
  setImageSrc();
});
</script>
