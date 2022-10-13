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

  // 데이터 찾기 
  function findTexts(name) {
    let list = {}
    Object.entries(textContentList.value).map(x => {
      if (x[0] === name) {
        list = {
          id: "TextLayouts",
          name: name,
          textList: x[1].textList,
          buttonList: {}.propertyIsEnumerable.call(x[1], 'buttonList') ? x[1].buttonList : {},
          iconList: {}.propertyIsEnumerable.call(x[1], 'iconList') ? x[1].iconList : {},
          layoutAttribute: x[1].layoutAttribute,
        };
      }
    })
    return list;
  }

  function setSavedTextsCSS(cssValue) {
    Object.entries(textContentList.value).map(x => {
      if (x[0] === cssValue.name) {
        x[1].textList = cssValue.textList
        x[1].layoutAttribute = cssValue.layoutAttribute
        if(x[1].buttonList) x[1].buttonList = cssValue.buttonList
        if(x[1].iconList) x[1].iconList = cssValue.iconList
      }
    })
  }
    

  const getDataAll = computed(() =>  textContentList.value);
  const getTextLayout1 = computed(() =>  textContentList.value.TextLayout1);
  const getTextLayout2 = computed(() =>  textContentList.value.TextLayout2);
  const getTextLayout3 = computed(() =>  textContentList.value.TextLayout3);

  return { 
    textContentList, 
    editTextList,
    findTexts,
    setSavedTextsCSS,
    getDataAll,
    getTextLayout1,
    getTextLayout2,
    getTextLayout3
  };

});