<template>
  <div class="popout-modal" @click="closeAndNotifyParent">
    <div class="popout-content bg-neutral-800" @click.stop>
      <iframe
        class="rounded-md md:w-[40%] md:h-[25vh] md:float-right md:mt-5 md:mx-3 w-full h-full"
        :src="getYouTubeEmbedLink(selectedProject.youtubeLink)"
        allowfullscreen
      ></iframe>
      <h1 class="text-5xl font-bold mt-5 mb-10 hover:text-gray-700">
        {{ selectedProject.name }}
      </h1>

      <div>
        <div v-html="renderedDescription" class="text-lg"></div>

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
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { marked } from 'marked';

const props = defineProps(["closeModal", "selectedProject"]);

const closeAndNotifyParent = () => {
  props.closeModal();
};

const getYouTubeEmbedLink = (youtubeLink) => {
  const videoId = youtubeLink.split("v=")[1].split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const markdownToHTML = (content) => {
  return marked(content);
};

const renderedDescription = ref(0);

onMounted(async () => {
  try {
    const response = await fetch(props.selectedProject.longDescription);
    const markdownContent = await response.text();
    renderedDescription.value = markdownToHTML(markdownContent);
  } catch (error) {
    console.error("Error loading markdown:", error);
    renderedDescription.value = "Error loading markdown content.";
  }
});
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
  width: 50%;
  max-height: 90%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
</style>
