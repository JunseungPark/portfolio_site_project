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

  // 데이터 찾기 
  function findPictures(name) {
    let list = {}
    Object.entries(pictureContentList.value).map(x => {
      if (x[0] === name) {
        list = {
          name: name,
          imageList: x[1].imageList,
          buttonList: {}.propertyIsEnumerable.call(x[1], 'buttonList') ? x[1].buttonList : {},
          iconList: {}.propertyIsEnumerable.call(x[1], 'iconList') ? x[1].iconList : {},
        };
      }
    })
    return list;
  }
  
  const getDataAll = computed(() =>  pictureContentList.value);
  const getPictureLayout1 = computed(() =>  pictureContentList.value.PictureLayout1);
  const getPictureLayout2 = computed(() =>  pictureContentList.value.PictureLayout1);

  return { 
    pictureContentList, 
    editPictureList,
    findPictures,
    getDataAll,
    getPictureLayout1,
    getPictureLayout2
  };

});