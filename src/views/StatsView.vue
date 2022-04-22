<template>
  <div
    class="row"
    v-if="palabraStore.time.segundos > 0 && palabraStore.partida.iniciada"
  >
    <h3 class="text-info">Tienes un juego en curso</h3>
    <CronometroGame :time="palabraStore.time" />
  </div>
  <div class="row">
    <MostrarEstadisticas :stats="palabraStore.partida" />
  </div>
</template>
<script setup>
import { usePalabraStore } from "../stores/palabra";
import MostrarEstadisticas from "@/components/MostrarEstadisticas.vue";
import CronometroGame from "@/components/CronometroGame.vue";
const palabraStore = usePalabraStore();
</script>
