<template>
    <div>
        <h1>Componente de rendimiento</h1>
        <p>Total: {{ total }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const items = ref([1, 2, 3, 4, 5]);

const total = computed(() => items.value.reduce((acc, val) => acc + val, 0));
</script>