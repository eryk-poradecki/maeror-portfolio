<template>
    <nav class=" p-4">
      <div class="flex items-center justify-between">
        <router-link :to="{name: 'home'}" class="text-neutral-200 text-xl ml-10">Projects</router-link>
        <div>
          <router-link :to="{name: 'resume'}" class="text-neutral-200 text-xl mr-10">Resume</router-link>
          <router-link :to="{name: 'about'}" class="text-neutral-200 text-xl mr-10">About</router-link>
        </div>
      </div>
    </nav>
  </template>