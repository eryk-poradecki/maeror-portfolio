<template>
  <div>
    <button
      @click="openResume"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
    >
      Open Resume
    </button>
    <div
      v-if="showResume"
      class="fixed top-0 left-0 w-screen h-screen bg-black opacity-100 flex items-center justify-center"
    >
      <button
        @click="closeResume"
        class="absolute top-14 left-6 py-2 px-4 rounded text-white text-5xl bg-gray-700"
      >
        Close
      </button>
      <iframe :src="resumeUrl" class="w-full h-full"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeUrl: "src/assets/Eryk Poradecki.pdf",
      showResume: false,
    };
  },
  methods: {
    openResume() {
      this.showResume = true;
    },
    closeResume() {
      this.showResume = false;
    },
  },
};
</script>

<style>
iframe {
  border: none;
}
</style>
