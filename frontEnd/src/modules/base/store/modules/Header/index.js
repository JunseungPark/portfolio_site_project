import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const useHeaderStore = defineStore('header', () => {
  
  const headerList = ref(state);

  function editHeaderList(editedText) {
    headerList.value.HEADER1.textList.filter(text => { 
      if (text.key === editedText.key) { 
        text.key = editedText.key
        text.value = editedText.value;
      } 
    });
  }

  const getDataAll = computed(() =>  headerList.value);
  const getHeadr1 = computed(() =>  headerList.value.HEADER1);
  const getHeadr2 = computed(() =>  headerList.value.HEADER2);

  return { 
    headerList, 
    editHeaderList, 
    getDataAll,
    getHeadr1,
    getHeadr2
  };

});