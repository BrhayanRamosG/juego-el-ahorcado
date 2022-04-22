<template>
  <div class="text-center">
    <img
      class="figure-img img-fluid rounded mx-auto d-block"
      :src="`../src/assets/images/imagen${
        time.minutos === 0 && time.segundos === 0 ? '13' : intentos
      }.jpg`"
      alt="Dibujo ahorcado"
      width="350"
    />
  </div>
</template>
<script setup>
defineProps({
  intentos: {
    type: Number,
    required: true,
  },
  time: {
    type: Object,
    required: true,
  },
});
</script>
