<template>
  <div class="popout-modal" @click="closeAndNotifyParent">
    <div class="popout-content bg-neutral-800" @click.stop>
      <div class="flex items-center space-x-4">
        <h1 class="text-5xl font-bold mt-5 mb-10 hover:text-gray-700">
          {{ selectedProject.name }}
        </h1>
        <a
          v-if="selectedProject.spotifyLink"
          :href="selectedProject.spotifyLink"
          target="_blank"
        >
          <img
            src="/svg/spotify-mark.svg"
            alt="Live Demo"
            class="h-8 w-auto cursor-pointer mb-3"
          />
        </a>

        <a
          v-if="selectedProject.soundcloudLink"
          :href="selectedProject.soundcloudLink"
          target="_blank"
        >
          <img
            src="/svg/soundcloud-mark.svg"
            alt="GitHub"
            class="h-8 w-auto cursor-pointer bg-neutral-300 rounded-full mb-3"
          />
        </a>
      </div>
      <p class="text-lg mt-10">{{ selectedProject.shortDescription }}</p>

      <div v-if="selectedProject.soundcloudLink" class="mt-6">
        <iframe
        style="border-radius: 12px"
          :src="getSoundCloudEmbedLink()"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <div v-if="selectedProject.spotifyId" class="mt-6">
        <iframe
          style="border-radius: 12px"
          :src="getSpotifyEmbedLink()"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const closeAndNotifyParent = () => {
  props.closeModal();
};

const props = defineProps(["selectedProject", "closeModal"]);
const soundcloudId = props.selectedProject.soundcloudId;

const getSoundCloudEmbedLink = () => {
  return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}`;
};

const getSpotifyEmbedLink = () => {
  return `https://open.spotify.com/embed/track/${spotifyId}`;
};

const spotifyId = props.selectedProject.spotifyId;
</script>
