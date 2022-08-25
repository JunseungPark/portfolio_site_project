import { defineStore } from 'pinia';
import { ref, computed } from "vue";

export const useRootStore = defineStore('Root', () => {
  
  const isOpendAnyModal = ref(false);

  function changeState() {
    isOpendAnyModal.value = !isOpendAnyModal.value;
  }
  
  const getModalState = computed(() =>  isOpendAnyModal.value);

  return { 
    isOpendAnyModal, 
    changeState,
    getModalState,
  };

});