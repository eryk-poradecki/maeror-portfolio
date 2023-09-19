<template>
    <div class="custom-background">
    <main>
      <!-- <Navbar /> -->
      <NavbarSimple />
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import NavbarSimple from './components/NavbarSimple.vue';

</script>

<style scoped>
.custom-background {
  min-height: 100vh;
  background-image: url("/bg.png");
  background-size: contain;
  background-repeat: repeat-x repeat-y;
}

</style>
