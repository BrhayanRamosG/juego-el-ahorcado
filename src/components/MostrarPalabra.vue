<template>
  <h1 class="d-inline p-2 text-center">{{ palabra }}</h1>
</template>
<script setup>
defineProps({
  palabra: {
    type: String,
    required: true,
  },
});
</script>
