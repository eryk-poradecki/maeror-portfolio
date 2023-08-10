<template>
  <nav class="p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <a href="/" class="flex items-center">
        <img
          class="w-24 h-24 rounded-full"
          src="../assets/maeror-avatar.png"
          alt=""
          width="384"
          height="512"
        />
        <p class="text-neutral-200 text-xl ml-4">
          Maeror<br />
          Sound<br />
          Design<br />
        </p>
      </a>
      </div>

      <div>
        <router-link :to="{name: 'home'}" class="text-neutral-200 text-xl mr-10"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'works' }"
          class="text-neutral-200 text-xl mr-10"
          >Works</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="text-neutral-200 text-xl mr-10"
          >About me</router-link
        >
      </div>
    </div>
  </nav>
</template>