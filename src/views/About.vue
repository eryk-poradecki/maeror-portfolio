<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div
      class="border-3 custom-border-gradient shadow-lg rounded-xl w-[60%] min-h-[40vh] flex flex-col items-center justify-center"
    >
      <div class="pb-[15%]">
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
            class="w-24 h-24 rounded-full"
            src="src/assets/maeror-avatar.png"
            alt=""
            width="384"
            height="512"
          />
          <h1 class="text-4xl font-bold text-neutral-200 mt-4">Maeror</h1>
        </div>

        <div class="flex mt-5 justify-center items-center">
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
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-border-gradient {
  border-image: linear-gradient(135deg, #28313b 100%, #485461 100%);
  border-image-slice: 1;
}
</style>
