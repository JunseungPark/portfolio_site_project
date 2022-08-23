import { defineStore } from 'pinia';
import state from './state';
import { ref, computed } from "vue";

export const useHeaderStore = defineStore('header', () => {
  
  const headerList = ref(state);
  const test = ref();

  function addList(param) {
    test.value = param;
  }

  const getDataAll = computed(() =>  headerList.value);
  const getHeadr1 = computed(() =>  headerList.value.HEADER1);
  const getHeadr2 = computed(() =>  headerList.value.HEADER2);

  return { 
    headerList, 
    addList, 
    getDataAll,
    getHeadr1,
    getHeadr2
  };

});