import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const usePictureStore = defineStore('picture', () => {
  
  const pictureContentList = ref(state);

  function editPictureList(target, uploaedImg) {
    target.imageList.filter(image => { 
      if (image.key === uploaedImg.key) { 
        image.imgName = uploaedImg.imgName;
       } 
    });
  }
  
  const getDataAll = computed(() =>  pictureContentList.value);
  const getPictureLayout1 = computed(() =>  pictureContentList.value.PictureLayout1);
  const getPictureLayout2 = computed(() =>  pictureContentList.value.PictureLayout1);

  return { 
    pictureContentList, 
    editPictureList,
    getDataAll,
    getPictureLayout1,
    getPictureLayout2
  };

});