<template>
  <div class="row">
    <div class="row" v-if="infoPartida.iniciada">
      <div class="col">
        <h3 class="text-warning">Tiempo restante:</h3>
        <CronometroGame :time="palabraStore.time" />
      </div>
      <div class="col-md-auto">
        <MostrarIntentos :intentos="palabraStore.intentos" />
      </div>
    </div>
    <MostrarPuntaje :puntaje="infoPartida.puntos" v-if="infoPartida.iniciada" />
    <MostrarImagen
      :intentos="palabraStore.intentos"
      :partida="palabraStore.partida"
      v-if="
        palabraStore.intentos > 0 ||
        (palabraStore.time.minutos === 0 &&
          palabraStore.time.segundos === 0 &&
          palabraStore.partida.perdida)
      "
    />
    <MostrarPalabra :palabra="palabraStore.palabraOculta" />
    <div class="row" v-if="infoPartida.perdida">
      <h1 class="d-inline p-2 text-center text-warning">
        {{ palabraStore.palabra }}
      </h1>
    </div>
    <MostrarGanar :estado="infoPartida" />
  </div>
  <div
    class="row"
    v-if="!infoPartida.ganada && !infoPartida.perdida && infoPartida.iniciada"
  >
    <TecladoJuego :abecedario="palabraStore.abecedario" />
  </div>
  <div class="row mt-2">
    <ButtonGame
      v-if="!infoPartida.iniciada"
      msg="Comenzar juego"
      @click="iniciarPartida"
    />
    <ButtonGame
      v-if="infoPartida.finalizada"
      msg="Nuevo juego"
      @click="reiniciarPartida"
    />
  </div>
</template>
<script setup>
import { usePalabraStore } from "../stores/palabra";
import ButtonGame from "@/components/ButtonGame.vue";
import MostrarPalabra from "@/components/MostrarPalabra.vue";
import MostrarIntentos from "@/components/MostrarIntentos.vue";
import MostrarPuntaje from "@/components/MostrarPuntaje.vue";
import MostrarGanar from "@/components/MostrarGanar.vue";
import MostrarImagen from "@/components/MostrarImagen.vue";
import CronometroGame from "@/components/CronometroGame.vue";
import TecladoJuego from "@/components/TecladoJuego.vue";
const palabraStore = usePalabraStore();
const infoPartida = palabraStore.partida;
const iniciarPartida = () => {
  palabraStore.generatePartida();
  palabraStore.timeOut();
};
const reiniciarPartida = () => {
  palabraStore.timeOut();
  palabraStore.resetPartida();
  palabraStore.generatePartida();
};
</script>
