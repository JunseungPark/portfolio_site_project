import { defineStore } from 'pinia';
import { ref, computed } from "vue";
import { getGoogleFonts } from '../../api/index.js'

export const useMainStore = defineStore('Main', () => {
  
  const isOpendAnyModal = ref(false);
  const googleFontsList = ref(null);

  function changeState() {
    isOpendAnyModal.value = !isOpendAnyModal.value;
  }

  function getGoogle() {
    googleFontsList.value = getGoogleFonts();
  }
  
  const getModalState = computed(() =>  isOpendAnyModal.value);

  return { 
    isOpendAnyModal, 
    changeState,
    getGoogle,
    getModalState,
  };
});