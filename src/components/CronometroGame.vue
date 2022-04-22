<template>
  <h3 class="text-warning">
    {{
      `${time.minutos > 9 ? time.minutos : "0" + time.minutos}:${
        time.segundos > 9 ? time.segundos : "0" + time.segundos
      }`
    }}
  </h3>
</template>

<script setup>
defineProps({
  time: {
    type: Object,
    required: true,
  },
});
</script>
