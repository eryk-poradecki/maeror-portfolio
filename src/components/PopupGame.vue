<template>
  <div class="popout-modal" @click="closeAndNotifyParent">
    <div class="popout-content bg-neutral-800" @click.stop>
      <iframe
        class="rounded-md md:w-[40%] md:h-[25vh] md:float-right md:mt-5 md:mx-3 w-full h-full"
        :src="getYouTubeEmbedLink(selectedProject.youtubeLink)"
        allowfullscreen
      ></iframe>
      <div class="flex items-center">
        <h1 class="text-5xl font-bold mt-5 mb-10 mr-10 hover:text-gray-700">
          {{ selectedProject.name }}
        </h1>

        <div class="flex items-center space-x-4">
          <a
            v-if="selectedProject.liveDemoLink"
            :href="selectedProject.liveDemoLink"
            target="_blank"
          >
            <img
              src="/src/assets/svg/itchio-badge.svg"
              alt="Live Demo"
              class="h-8 w-auto cursor-pointer mb-3"
            />
          </a>

          <a
            v-if="selectedProject.githubLink"
            :href="selectedProject.githubLink"
            target="_blank"
          >
            <img
              src="/src/assets/svg/github-mark.svg"
              alt="GitHub"
              class="h-8 w-auto cursor-pointer bg-white rounded-full mb-3"
            />
          </a>
        </div>
      </div>

      <div>
        <div v-html="renderedDescription" class="text-lg"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { marked } from "marked";

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
  background-image: url("src/assets/bg-brighter.png");
}
</style>
