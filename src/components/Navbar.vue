<template>
  <nav class="p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <a href="/portfolio/" class="flex items-center">
          <img class="w-24 h-24 rounded-full" src="/maeror-avatar.jpg" alt="" width="384" height="512" />
          <p class="text-neutral-200 text-xl ml-4">
            Maeror<br />
            Sound<br />
            Design<br />
          </p>
        </a>
      </div>

      <div>
        <router-link :to="{ name: 'game_dev' }" class="text-neutral-200 text-2xl mr-10">Game Dev</router-link>
        <router-link :to="{ name: 'sound_design' }" class="text-neutral-200 text-2xl mr-10">Sound Design</router-link>
        <router-link :to="{ name: 'music' }" class="text-neutral-200 text-2xl mr-10">Music</router-link>
        <router-link :to="{ name: 'about' }" class="text-neutral-200 text-2xl mr-10">About me</router-link>
      </div>
    </div>
  </nav>
</template>