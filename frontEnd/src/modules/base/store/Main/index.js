import { defineStore } from 'pinia';
import { ref, computed } from "vue";
import { getGoogleFonts } from '../../api/index.js'

export const useMainStore = defineStore('Main', () => {
  
  const isOpendAnyModal = ref(false);
  let googleFontsList = [];

  function changeState() {
    isOpendAnyModal.value = !isOpendAnyModal.value;
  }

  function getGoogle() {
    getGoogleFonts().then(value => {
      googleFontsList =value
    });
  }
  
  const getModalState = computed(() =>  isOpendAnyModal.value);
  const getGoogleFontsList = computed(() =>  googleFontsList);

  return { 
    isOpendAnyModal, 
    changeState,
    getGoogle,
    getModalState,
    getGoogleFontsList,
  };
});