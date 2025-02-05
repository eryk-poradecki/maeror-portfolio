<template>
  <div class="flex flex-col items-center">
    <div class="header my-2 text-7xl font-bold text-neutral-200">Sound Design</div>
  </div>

  <div v-for="(categoryName, categoryKey) in categories" :key="categoryKey">
    <template v-if="hasProjectsInCategory(categoryKey)">
      <h1 class="text-4xl font-normal text-center text-neutral-200">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-neutral-200">{{ categoryName }}</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 p-8 w-[75%] mx-auto">
        <div v-for="project in filteredProjects(categoryKey)" :key="project.id">
          <div class="aspect-square leading-tight relative overflow-hidden max-w-xs mx-auto rounded-xl hover:scale-110 transition-all"
            style="cursor: pointer;" @click="handleTileClick(project)">
            <div class="group">
              <div class="px-3 py-3 relative z-10 opacity-0 group-hover:opacity-100">
                <div class="flex mb-2">
                  <h1 class="font-normal text-4xl md:text-3xl text-white mt-5" :class="{
                    'text-3xl': project.name.length > 20,
                    'text-4xl': project.name.length > 15 && project.name.length <= 20,
                    'text-5xl': project.name.length <= 15,
                  }">
                    {{ project.name }}
                  </h1>
                </div>
                <div class="flex">
                  <p class="text-lg text-white">
                    {{ project.shortDescription }}
                  </p>
                </div>
              </div>
              <div class="absolute inset-0 rounded-t-xl group-hover:opacity-20" :style="{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"></div>
              <img :src="project.image" :alt="project.name" class="opacity-0 h-36 object-cover"
                style="visibility: hidden" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <teleport to="body">
    <PopupModal v-if="isModalOpen" :closeModal="closeModal" :selectedProject="selectedProject" />
  </teleport>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import projectsJson from "/src/projects.json";
import PopupModal from "../components/PopupModal.vue";

const categories = {
  released: "Released Games",
  game: "Unreleased/WIP Games",
  sound_design: "Sound Designs",
  asset: "Assets",
  sound_redesign: "Sound Redesign"
};

const projects = ref([]);

onMounted(() => {
  projects.value = projectsJson;
});

const isModalOpen = ref(false);
const selectedProject = ref(null);
const noPopupCategories = ["sound_redesign", "asset"];

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const hasProjectsInCategory = (category) => {
  return projects.value.some((project) => project.categories.includes(category));
};

const filteredProjects = (category) => {
  return projects.value.filter((project) => project.categories.includes(category));
};

const handleTileClick = (project) => {
  if (noPopupCategories.some((cat) => project.categories.includes(cat))) {
    window.open(project.link, "_blank");
  } else {
    openModal(project);
  }
};

watch(isModalOpen, (newValue) => {
  document.body.classList.toggle("modal-open", newValue);
});
</script>

<style>
.modal-open {
  overflow: hidden;
}
</style>
