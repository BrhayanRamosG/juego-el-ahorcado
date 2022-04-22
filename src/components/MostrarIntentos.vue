<template>
  <h3 class="d-inline text-center">
    <span :class="`${intentos === 13 ? 'text-warning' : 'text-info'}`">{{
      intentos
    }}</span>
    de <span class="text-warning">13</span> intentos
  </h3>
</template>
<script setup>
defineProps({
  intentos: {
    type: Number,
    required: true,
  },
});
</script>
