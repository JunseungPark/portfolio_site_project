import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const useHeaderStore = defineStore('header', () => {
  
  const headerList = ref(state);

  function editTextList(target, editedText) {
    target.textList.filter(text => { 
      if (text.key === editedText.key) { 
        text.key = editedText.key
        text.value = editedText.value;
      } 
    });
  }

  const getDataAll = computed(() =>  headerList.value);
  const getHeaderLayout1 = computed(() =>  headerList.value.HeaderLayout1);
  const getHeaderLayout2 = computed(() =>  headerList.value.HeaderLayout2);

  return { 
    headerList, 
    editTextList, 
    getDataAll,
    getHeaderLayout1,
    getHeaderLayout2
  };

});