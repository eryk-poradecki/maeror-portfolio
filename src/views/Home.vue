<!-- IMAGE IN THE BACKGROUND -->

<template>
  <div v-for="category in categories" :key="category" class="pt-10">
    <h1
      v-if="hasProjectsInCategory(category)"
      class="text-3xl font-bold text-center text-neutral-200"
    >
      {{ categoryNames[categories.indexOf(category)] }}
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 p-8 max-w-[85%] mx-auto"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="relative overflow-hidden max-w-md mx-auto rounded-xl"
        @click="openModal(project)"
        style="cursor: pointer"
      >
        <div v-if="project.category === category">
          <div>
            <div
              class="absolute inset-0 rounded-t-xl hover:opacity-30"
              :style="{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <img
              :src="project.image"
              :alt="project.name"
              class="opacity-0 h-36 object-cover"
              style="visibility: hidden"
            />
            <div class="px-3 py-3 relative z-10">
              <div class="flex justify-center items-center mb-2">
                <h1 class="font-bold text-5xl text-white">
                  {{ project.name }}
                </h1>
              </div>
              <p class="text-lg text-white">{{ project.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <PopupModal
      v-if="isModalOpen"
      :closeModal="closeModal"
      :selectedProject="selectedProject"
    />
  </teleport>
</template>

<!-- IMAGE ABOVE TEXT -->

<!-- <template>
  <div v-for="category in categories" :key="category" class="pt-10">
    <h1 v-if="hasProjectsInCategory(category)" class="text-3xl font-bold text-center text-neutral-200">
      {{ categoryNames[categories.indexOf(category)] }}
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 p-8 max-w-[85%] mx-auto">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-neutral-400 shadow-lg rounded-xl max-w-md mx-auto min-h-full"
      >
        <div v-if="project.category === category">
          <img
            :src="project.image"
            :alt="project.name"
            class="rounded-t-xl w-full h-72 object-cover"
            @click="openModal(project)"
            style="cursor: pointer"
          />
          <div class="px-3 py-3">
            <div class="flex justify-center items-center mb-1">
              <h1 class="font-bold text-2xl">{{ project.name }}</h1>
            </div>
            <p class="text-lg text-gray-900">{{ project.shortDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
      <PopupModal v-if="isModalOpen" :closeModal="closeModal" :selectedProject="selectedProject" />
  </teleport>
</template> -->

<script setup>
import { ref, onMounted, watch } from "vue";
import projectsJson from "../assets/projects.json";
import PopupModal from "../components/PopupModal.vue";

const categories = ["game", "music", "asset"];
const categoryNames = ["Games", "Music", "Assets"];

const projects = ref([]);

onMounted(() => {
  projects.value = projectsJson;
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
  return projects.value.some((project) => project.category === category);
};

watch(isModalOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
});
</script>
<style>
.modal-open {
  overflow: hidden;
}
</style>
