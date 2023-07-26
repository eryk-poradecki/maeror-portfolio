<template>
    <div class="popout-modal" @click="closeAndNotifyParent">
      <div class="popout-content bg-neutral-800" @click.stop>
        <h1 class="text-5xl font-bold mt-4">{{ selectedProject.name }}</h1>
  
        <p class="text-lg mt-10">{{ selectedProject.shortDescription }}</p>
  
        <div v-if="selectedProject.spotifyLink" class="mt-6">
          <a
            class="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 inline-block"
            :href="selectedProject.spotifyLink"
            target="_blank"
          >
            Listen on Spotify
          </a>
        </div>
  
        <div v-if="selectedProject.soundcloudLink" class="mt-6">
          <iframe
            class="mt-6 px-4 py-2 mb-5 bg-orange-500 text-white rounded hover:bg-orange-600"
            width="100%"
            height="100%"
            :src="getSoundCloudEmbedLink()"
            frameborder="0"
            allow="autoplay"
            allowfullscreen
          ></iframe>
          <a
            class="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 inline-block"
            :href="selectedProject.soundcloudLink"
            target="_blank"
          >
            Listen on SoundCloud
          </a>
        </div>
  
        <div v-if="selectedProject.spotifyId" class="mt-6">
          <iframe
            style="border-radius: 12px"
            :src="getSpotifyEmbedLink()"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
  
        <button
          class="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          @click="closeModal()"
        >
          Close
        </button>
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
