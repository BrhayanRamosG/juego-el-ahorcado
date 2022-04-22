<template>
  <div>
    <h1 class="text-center">Tus estad&iacute;sticas</h1>
    <h3 class="p-2">
      Puntaje total: <strong> {{ stats.puntos }}</strong>
    </h3>
    <h3 class="p-2">
      N&uacute;mero de partidas: <strong>{{ stats.numeroPartidas }}</strong>
    </h3>
    <h3 class="p-2">
      Ganadas: <strong>{{ stats.numeroGanadas }}</strong>
    </h3>
    <h3 class="p-2">
      Perdidas: <strong>{{ stats.numeroPerdidas }}</strong>
    </h3>
  </div>
</template>
<script setup>
defineProps({
  stats: {
    type: Object,
    required: true,
  },
});
</script>
