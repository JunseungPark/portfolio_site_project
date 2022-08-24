import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const useTextStore = defineStore('text', () => {
  
  const textContentList = ref(state);

  function editTextList(target, editedText) {
    target.textList.filter(text => { 
      if (text.key === editedText.key) { 
        text.key = editedText.key
        text.value = editedText.value;
      } 
    });
  }

  const getDataAll = computed(() =>  textContentList.value);
  const getTextLayout1 = computed(() =>  textContentList.value.TextLayout1);
  const getTextLayout2 = computed(() =>  textContentList.value.TextLayout2);

  return { 
    textContentList, 
    editTextList, 
    getDataAll,
    getTextLayout1,
    getTextLayout2
  };

});