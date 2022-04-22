<template>
  <div class="col">
    <div class="d-grid">
      <button type="button" class="btn-game btn btn-danger text-uppercase">
        {{ msg }}
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.btn-game {
  font-size: 2rem;
}
</style>
