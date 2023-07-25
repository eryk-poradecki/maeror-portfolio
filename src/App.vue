<template>
    <div class="custom-background">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-background{
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  min-height: 100vh;
}

</style>
