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
  
  // 데이터 찾기 
  function findHeaders(name) {
    let list = {}
    Object.entries(headerList.value).map(x => {
      if (x[0] === name) {
        list = {
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

  const getDataAll = computed(() =>  headerList.value);
  const getHeaderLayout1 = computed(() =>  headerList.value.HeaderLayout1);
  const getHeaderLayout2 = computed(() =>  headerList.value.HeaderLayout2);

  return { 
    headerList, 
    editTextList,
    findHeaders,
    getDataAll,
    getHeaderLayout1,
    getHeaderLayout2
  };

});