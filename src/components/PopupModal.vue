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
import { markRaw, ref, watch } from "vue";
import PopupGame from "./PopupGame.vue";
import PopupMusic from "./PopupMusic.vue";
import PopupAsset from "./PopupAsset.vue";

const props = defineProps(["closeModal", "selectedProject"]);
const popoutComponent = ref(null);

const closeAndNotifyParent = () => {
  props.closeModal();
};

watch(
  () => props.selectedProject,
  (newProject) => {
    if (newProject) {
      const { categories } = newProject;
      
      if (categories.includes("game") || categories.includes("released")) {
        popoutComponent.value = markRaw(PopupGame);
      } else if (categories.length === 1 && categories.includes("music")) {
        popoutComponent.value = markRaw(PopupMusic);
      } else {
        popoutComponent.value = markRaw(PopupAsset);
      }
    }
  },
  { immediate: true }
);
</script>
