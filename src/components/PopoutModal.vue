<template>
  <div class="popout-modal" @click="closeAndNotifyParent">
    <div class="popout-content bg-neutral-800" @click.stop>
      <div class="flex justify-center items-center">
        <h1 class="text-5xl font-bold mt-4">{{ selectedProject.name }}</h1>
      </div>

      <div v-if="selectedProject.youtubeLink" class="youtube-video">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            class="w-full h-full mt-8 rounded-md"
            :src="getYouTubeEmbedLink(selectedProject.youtubeLink)"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>


      <p class="text-lg mt-10">{{ selectedProject.shortDescription }}</p>

      <div v-if="selectedProject.technologies">
        <h2 class="text-xl font-bold mt-4">Technologies:</h2>
        <ul class="list-disc list-inside">
          <li v-for="tech in selectedProject.technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </div>

      <div v-if="selectedProject.liveDemoLink" class="mt-6">
        <a
          class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          :href="selectedProject.liveDemoLink"
          target="_blank"
        >
          Live Demo
        </a>
      </div>

      <div v-if="selectedProject.githubLink" class="mt-6">
        <a
          class="mt-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          :href="selectedProject.githubLink"
          target="_blank"
        >
          GitHub
        </a>
      </div>

      <button
        class="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        @click="closeModal()"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["closeModal", "selectedProject"]);

const closeAndNotifyParent = () => {
  props.closeModal();
};

const getYouTubeEmbedLink = (youtubeLink) => {
  const videoId = youtubeLink.split("v=")[1].split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};
</script>

<style>
.popout-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.popout-content {
  width: 60%;
  max-height: 90%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.youtube-video {
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
}

.youtube-video iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

iframe {
  display: block;
  margin: 0 auto;
}
</style>
