import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const usePictureTextStore = defineStore('pictureText', () => {
  
  const pictureTextContentList = ref(state);

  function editPictureList(target, uploaedImg) {
    target.imageList.filter(image => { 
      if (image.key === uploaedImg.key) { 
        image.imgName = uploaedImg.imgName;
       } 
    });
  }

  function editTextList(target, editedText) {
    target.textList.filter(text => { 
      if (text.key === editedText.key) { 
        text.key = editedText.key
        text.value = editedText.value;
      } 
    });
  }

  // function editButtonList(target, editedButton) {
  //   target.buttonList.filter(button => { 
  //     if (button.key === editedButton.key) { 
  //       button.key = editedButton.key
  //       button.value = editedButton.value;
  //     } 
  //   });
  // }
  
  const getDataAll = computed(() =>  pictureTextContentList.value);
  const getPictureTextLayout1 = computed(() =>  pictureTextContentList.value.PictureTextLayout1);
  const getPictureTextLayout2 = computed(() =>  pictureTextContentList.value.PictureTextLayout2);
  const getPictureTextLayout3 = computed(() =>  pictureTextContentList.value.PictureTextLayout3);
  const getPictureTextLayout4 = computed(() =>  pictureTextContentList.value.PictureTextLayout4);
  const getPictureTextLayout5 = computed(() =>  pictureTextContentList.value.PictureTextLayout5);

  return { 
    pictureTextContentList, 
    editPictureList,
    editTextList,
    getDataAll,
    getPictureTextLayout1,
    getPictureTextLayout2,
    getPictureTextLayout3,
    getPictureTextLayout4,
    getPictureTextLayout5
  };

});