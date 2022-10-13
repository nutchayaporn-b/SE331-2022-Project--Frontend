<script setup>
import Navbar from "./layouts/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="flex w-screen justify-center py-8">
    <router-view />
  </div>
</template>
