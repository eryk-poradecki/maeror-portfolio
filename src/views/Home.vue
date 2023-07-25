<!-- IMAGE IN THE BACKGROUND -->

<!-- <template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white shadow-lg rounded-lg max-w-md mx-auto relative overflow-hidden min-h-[300px]"
      >
        <div
          class="absolute inset-0 rounded-t-lg"
          :style="{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
        ></div>
  
        <div class="px-3 py-3 relative z-10">
          <h3 class="font-bold text-white text-xl">{{ project.name }}</h3>
          <p class="text-sm text-white">{{ project.shortDescription }}</p>
        </div>
      </div>
    </div>
</template> -->

<template>
  <div v-for="category in categories" :key="category">
    <h1 class="text-3xl font-bold text-center pt-10">
      {{ categoryNames[categories.indexOf(category)] }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 max-w-[85%] mx-auto">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-neutral-400 shadow-lg rounded-xl max-w-md mx-auto"
      >
        <div v-if="project.category == category">
          <img
            :src="project.image"
            :alt="project.name"
            class="rounded-t-xl w-full h-72 object-cover"
          />
          <div class="px-3 py-3">
            <h1 class="font-bold text-xl">{{ project.name }}</h1>
            <p class="text-md text-gray-900">{{ project.shortDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import projectsJson from "../assets/projects.json";

const categories = ["game", "music", "asset"];
const categoryNames = ["Games", "Music", "Assets"];
const projects = ref([]);

onMounted(() => {
  projects.value = projectsJson;
});
</script>
