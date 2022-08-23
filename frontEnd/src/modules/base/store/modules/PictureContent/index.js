import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const usePictureStore = defineStore('picture', () => {
  
  const pictureContentList = ref(state);
  const test = ref();

  function addList(param) {
    test.value = param;
  }

  const getDataAll = computed(() =>  pictureContentList.value);
  const getPicture1 = computed(() =>  pictureContentList.value.HEADER1);
  const getPicture2 = computed(() =>  pictureContentList.value.HEADER2);

  return { 
    pictureContentList, 
    addList, 
    getDataAll,
    getPicture1,
    getPicture2
  };

});