<template>
    <div class="flex flex-col items-center">
      <div class="header my-2 text-7xl font-bold text-neutral-200">Music</div>
    </div>
  
    <div v-if="filteredPersonalMusicProjects.length">
      <h1 class="text-4xl font-normal text-center text-neutral-200">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-neutral-200">Personal Music</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 p-8 w-[75%] mx-auto">
        <div v-for="project in filteredPersonalMusicProjects" :key="project.id">
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
    </div>
  
    <div v-if="filteredReleasedMusicProjects.length">
      <h1 class="text-4xl font-normal text-center text-neutral-200">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-neutral-200">Released Games</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 p-8 w-[75%] mx-auto">
        <div v-for="project in filteredReleasedMusicProjects" :key="project.id">
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
    </div>
  
    <div v-if="filteredUnreleasedMusicProjects.length">
      <h1 class="text-4xl font-normal text-center text-neutral-200">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-neutral-200">Unreleased/WIP Games</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 p-8 w-[75%] mx-auto">
        <div v-for="project in filteredUnreleasedMusicProjects" :key="project.id">
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
    </div>
  
    <teleport to="body">
      <PopupModal v-if="isModalOpen" :closeModal="closeModal" :selectedProject="selectedProject" />
    </teleport>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from "vue";
  import projectsJson from "/src/projects.json";
  import PopupModal from "../components/PopupModal.vue";
  
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
  
  const filteredPersonalMusicProjects = computed(() => {
    return projects.value.filter(project => project.categories.length === 1 && project.categories.includes('music'));
  });
  
  const filteredReleasedMusicProjects = computed(() => {
    return projects.value.filter(project => project.categories.includes('music') && project.categories.includes('released'));
  });
  
  const filteredUnreleasedMusicProjects = computed(() => {
    return projects.value.filter(project => project.categories.includes('music') && project.categories.includes('game'));
  });
  
 const handleTileClick = (project) => {
  if (project.categories.length === 1 && project.categories.includes('music') && project.link) {
    window.open(project.link, '_blank');
  } else {
    openModal(project);
  }
}; 
  </script>
  