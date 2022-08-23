import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const usePictureStore = defineStore('picture', () => {
  
  const pictureContentList = ref(state);

  function editPictureList(uploaedImg) {
    pictureContentList.value.PICTURE1.imageList.filter(image => { 
      if (image.key === uploaedImg.key) { 
        image.imgName = uploaedImg.imgName;
       } 
    });
  }
  
  const getDataAll = computed(() =>  pictureContentList.value);
  const getPicture1 = computed(() =>  pictureContentList.value.PICTURE1);
  const getPicture2 = computed(() =>  pictureContentList.value.PICTURE2);

  return { 
    pictureContentList, 
    editPictureList, 
    getDataAll,
    getPicture1,
    getPicture2
  };

});