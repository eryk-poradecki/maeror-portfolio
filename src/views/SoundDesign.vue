<template>
  <div class="flex flex-col items-center">
    <div class="header my-2 text-4xl md:text-7xl font-bold text-neutral-200">Sound Design</div>
  </div>

  <div v-for="category in categories" :key="category">
    <template v-if="hasProjectsInCategory(category)">
      <h1 class="text-2xl md:text-4xl font-normal text-center text-neutral-200">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-neutral-200">{{
            categoryNames[categories.indexOf(category)]
          }}</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 p-8 w-[75%] mx-auto">
        <div v-for="project in filteredProjects(category)" :key="project.id">
          <div
            class="aspect-square leading-tight relative overflow-hidden max-w-xs mx-auto rounded-xl hover:scale-110 transition-all"
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

const categories = ["released", "wip", "asset", "sound_redesign"];
const categoryNames = [
  "Released Sound Design",
  "Unreleased/WIP Sound Design",
  "Assets",
  "Sound Redesign"
];

const noPopupCategories = ["asset", "sound_redesign"];

const projects = ref([]);

onMounted(() => {
  projects.value = projectsJson.filter(project =>
    project.categories.some(cat => ["sound_design", "music", "sound_redesign", "asset"].includes(cat))
  );
});

const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const hasProjectsInCategory = (category) => {
  if (category === "asset" || category === "sound_redesign") {
    return projects.value.some(project => project.categories.includes(category));
  }
  return projects.value.some(project => project.status === category);
};

watch(isModalOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
});

const filteredProjects = (category) => {
  if (category === "asset" || category === "sound_redesign") {
    return projects.value.filter(project => project.categories.includes(category));
  }
  return projects.value.filter(project => project.status === category);
};

const handleTileClick = (project) => {
  if (project.categories.some(cat => noPopupCategories.includes(cat))) {
    window.open(project.link, "_blank");
  } else {
    openModal(project);
  }
};
</script>
<style>
.modal-open {
  overflow: hidden;
}
</style>
