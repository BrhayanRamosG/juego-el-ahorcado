<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>
  <main class="py-4">
    <div class="container mt-3 text-white">
      <RouterView />
    </div>
  </main>
</template>
<style>
body {
  min-height: 100vh;
  transition: color 0.5s, background-color 0.5s;
}
</style>
