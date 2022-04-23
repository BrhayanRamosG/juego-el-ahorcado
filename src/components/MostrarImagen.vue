<template>
  <div class="text-center">
    <img
      class="figure-img img-fluid rounded mx-auto d-block"
      :src="`https://raw.githubusercontent.com/BrhayanRamosG/juego-el-ahorcado/main/src/assets/images/imagen${
        partida.perdida ? '13' : intentos
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
  partida: {
    type: Object,
    required: true,
  },
});
</script>
