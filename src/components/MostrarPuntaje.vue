<template>
  <h1 class="d-inline p-2 text-center">Tu puntaje: {{ puntaje }}</h1>
</template>
<script setup>
defineProps({
  puntaje: {
    type: Number,
    required: true,
  },
});
</script>
