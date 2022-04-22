<template>
  <div class="d-inline p-2 text-center">
    <button
      v-for="(letra, index) in abecedario"
      class="btn btn-secondary fs-4 mt-3 ms-2"
      type="button"
      @click="palabraStore.checkPalabra(letra)"
      :key="index"
      :disabled="palabraStore.disableLetra(letra)"
    >
      {{ letra }}
    </button>
  </div>
</template>
<script setup>
import { usePalabraStore } from "../stores/palabra";
defineProps({
  abecedario: {
    type: Array,
    required: true,
  },
});
const palabraStore = usePalabraStore();
</script>
