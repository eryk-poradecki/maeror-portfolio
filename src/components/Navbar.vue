<template>
  <nav class="p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <a href="/portfolio/" class="flex items-center">
          <img class="w-16 h-16 md:w-24 md:h-24 rounded-full" src="/maeror-avatar.jpg" alt="" />
          <p class="text-neutral-200 text-base md:text-xl ml-2 md:ml-4 leading-tight">
            Maeror<br />
            Sound<br />
            Design
          </p>
        </a>
      </div>

      <div class="md:hidden">
        <button @click="menuOpen = !menuOpen" class="text-neutral-200 focus:outline-none">
          <svg class="w-8 h-8 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="hidden md:flex space-x-6">
        <router-link :to="{ name: 'game_dev' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Game Dev</span>
        </router-link>

        <router-link :to="{ name: 'sound_design' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Sound Design</span>
        </router-link>

        <router-link :to="{ name: 'music' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Music</span>
        </router-link>

        <router-link :to="{ name: 'about' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">About me</span>
        </router-link>

      </div>
    </div>

    <transition name="fade-slide">
      <div v-if="menuOpen"
        class="mt-4 md:hidden flex flex-col space-y-2 text-neutral-200 text-lg transition-all duration-300 ease-in-out items-end text-right pr-2">
        <router-link :to="{ name: 'game_dev' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Game Dev</span>
        </router-link>

        <router-link :to="{ name: 'sound_design' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Sound Design</span>
        </router-link>

        <router-link :to="{ name: 'music' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">Music</span>
        </router-link>

        <router-link :to="{ name: 'about' }" class="text-neutral-200 text-xl relative px-2 py-1 transition">
          <span class="absolute inset-0 rounded-md bg-white/10 blur-sm opacity-100"></span>
          <span class="relative z-10">About me</span>
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>