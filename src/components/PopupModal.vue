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

const props = defineProps(["closeModal", "selectedProject"]);
const popoutComponent = ref(null);

const closeAndNotifyParent = () => {
  props.closeModal();
};

watch(
  () => props.selectedProject,
  (newProject) => {
    if (newProject) {
      const { type } = newProject;
      
      if (type == "game") {
        popoutComponent.value = markRaw(PopupGame);
      } 
    }
  },
  { immediate: true }
);
</script>
