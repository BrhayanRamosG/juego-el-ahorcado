<template>
  <h3 class="d-inline p-2 text-center text-info" v-if="estado.perdida">
    Has perdido :(
  </h3>
  <h3 class="d-inline p-2 text-center text-info" v-if="estado.ganada">
    Felicidades ganaste :D !!!
  </h3>
</template>
<script setup>
defineProps({
  estado: {
    type: Object,
    required: true,
  },
});
</script>
