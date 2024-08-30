<template>
  <div @click="closeAndNotifyParent">
    <div @click.stop>
        <div v-if="selectedProject">
          <component
            :is="popoutComponent"
            :selectedProject="selectedProject"
            :closeModal="closeModal"
          />
        </div>
    </div>
  </div>
</template>

<script setup>
import { markRaw, ref } from "vue";
import PopupGame from "./PopupGame.vue";
import PopupMusic from "./PopupMusic.vue";
import PopupAsset from "./PopupAsset.vue";

const props = defineProps(["closeModal", "selectedProject"]);
const popoutComponent = ref(null);

const closeAndNotifyParent = () => {
  props.closeModal();
};

if (props.selectedProject) {
  if (props.selectedProject.category === "game" || props.selectedProject.category === "released") {
    popoutComponent.value = markRaw(PopupGame);
  } else if (props.selectedProject.category === "music") {
    popoutComponent.value = markRaw(PopupMusic);
  }
}
</script>
