<template>
  <div class="flex flex-col items-center">
    <div class="header my-8 text-6xl font-bold text-neutral-200">About me</div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div
      class="shadow-lg rounded-xl w-[60%] mt-[2%] flex flex-col items-center justify-center"
    >
      <div class="pb-[2%]">
        <!-- TEXT ON THE RIGHT OF THE AVATAR -->
        <!-- <div class="flex items-center">
          <img
            class="w-24 h-24 rounded-full mx-auto"
            src="src/assets/maeror-avatar.png"
            alt=""
            width="384"
            height="512"
          />
          <h1 class="text-4xl font-bold text-white ml-4">Maeror</h1>
        </div> -->
        <div class="flex flex-col items-center">
          <img
            class="w-36 h-36 rounded-full"
            src="src/assets/maeror-avatar.png"
            alt=""
            width="384"
            height="512"
          />
          <h1 class="text-4xl font-bold text-center text-white mt-4">
            Hubert Łabuda
          </h1>
        </div>
        <div class="mt-8 text-center">
          <p class="max-w-[60%] mx-auto text-neutral-200 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            lacus vitae porttitor venenatis, massa tortor bibendum purus, a
            tempor ligula risus ut mi. Quisque efficitur eros vel massa
            bibendum, sit amet pharetra neque feugiat. Integer convallis congue
            metus, vel commodo velit volutpat eu. Etiam eget ipsum ut eros
            elementum rhoncus. Phasellus pharetra consectetur felis eget
            sagittis. Suspendisse a rhoncus tortor. Duis ac lacus ut metus
            posuere cursus non quis tortor. Sed eget feugiat ipsum.
          </p>
        </div>
        <div>
          <div class="flex items-center justify-center mt-5">
            <button
              @click="openResume"
              class="custom-resume-button-bg text-white font-bold py-2 px-4 rounded"
            >
              Open Resume
            </button>
            <div
              v-if="showResume"
              class="fixed top-0 left-0 w-screen h-screen bg-black opacity-100 flex items-center justify-center"
            >
              <button
                @click="closeResume"
                class="absolute top-14 right-14 py-2 px-4 rounded text-white text-5xl custom-resume-button-bg"
              >
                &times;
              </button>
              <iframe :src="resumeUrl" class="w-full h-full"></iframe>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <a
            href="https://github.com/Maerorr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/svg/github-mark.svg"
              alt="GitHub"
              class="w-8 h-8 mt-5"
            />
          </a>
          <a
            href="https://open.spotify.com/artist/1qBtLLu4Z7x3Dar7iiNR39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/svg/spotify-mark.svg"
              alt="Spotify"
              class="w-8 h-8 mt-5 ml-4"
            />
          </a>
          <a
            href="https://soundcloud.com/maerormusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/svg/soundcloud-mark.svg"
              alt="Soundcloud"
              class="w-8 h-8 mt-5 ml-4"
            />
          </a>
          <a
            href="https://maerormusic.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/svg/bandcamp-mark.svg"
              alt="Bandcamp"
              class="w-8 h-8 mt-5 ml-4"
            />
          </a>
        </div>
        
      </div>
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

.custom-resume-button-bg {
  background-color: #323639;
}
</style>
