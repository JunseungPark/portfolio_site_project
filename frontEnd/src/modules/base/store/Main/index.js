import { defineStore } from 'pinia';
import { ref, computed } from "vue";
import { getGoogleFonts } from '../../api/index.js'

//pinia
import { useHeaderStore } from '@/modules/base/store/modules/Header';
import { usePictureStore } from '@/modules/base/store/modules/PictureContent';
import { usePictureTextStore } from '@/modules/base/store/modules/PictureTextContent';
import { useTextStore } from '@/modules/base/store/modules/TextContent';

export const useMainStore = defineStore('Main', () => {
  //pinia
  const header = useHeaderStore();
  const pictureConent = usePictureStore();
  const PictureTextContent = usePictureTextStore();
  const textContent = useTextStore();
  
  const newLayout = ref([]);

  const isOpendAnyModal = ref(false);
  let googleFontsList = [];

  ///////////////////////////////////////////////////////////////////
  //////////////////////////// W A T C H ////////////////////////////
  ///////////////////////////////////////////////////////////////////
  if (localStorage.getItem("newLayout")) {
    newLayout.value = JSON.parse(localStorage.getItem("newLayout"));
  }

  if (localStorage.getItem("newLayoutCSS")) {
    let listCSS = JSON.parse(localStorage.getItem("newLayoutCSS"));
    listCSS.map((x) => {
      switch (x.id) {
        case "HeaderLayouts":
          header.setSavedHeaderCSS(x);
          break;
        case "PictureLayouts":
          pictureConent.setSavedPicturesCSS(x);
          break;
        case "PictureTextLayouts":
          PictureTextContent.setSavedPictureTextsCSS(x);
          break;
        case "TextLayouts":
          textContent.setSavedTextsCSS(x);
          break;
          /* falls through */
      }  
    });
  }


  // watch(
  //   newLayout,
  //   (newLayoutVal) => {
  //     localStorage.setItem("newLayout", JSON.stringify(newLayoutVal))
  //   },
  //   {deep: true}
  // );

  ///////////////////////////////////////////////////////////////////
  //////////////////////////// M E T H O D //////////////////////////
  ///////////////////////////////////////////////////////////////////
  function changeState() {
    if(isOpendAnyModal.value) isOpendAnyModal.value = false
    else isOpendAnyModal.value = true
  }

  function initializationData() {
    if(newLayout.value.length) {
      if (localStorage.getItem("newLayout")) {
        localStorage.removeItem("newLayout");
        newLayout.value = [];
      }
      if (localStorage.getItem("newLayoutCSS")) {
        localStorage.removeItem("newLayoutCSS");
      }
      alert("데이터초기화!")
    } else {
      alert("저장된 레이아웃이 없습니다.")
    }

  }
  
  function saveTemp() {
    if(newLayout.value.length) {
      localStorage.setItem("newLayout", JSON.stringify(newLayout.value))
      saveTempCSS ()
      alert("임시저장완료!")
    } else {
      alert("저장할 레이아웃이 없습니다.")
    }
  }

  function saveTempCSS () {
    let list = newLayout.value;
    let saveList = [];
    if (list.length) {
      list.map((x) => {
        switch (x.subject) {
          case "HeaderLayouts":
            saveList.push(header.findHeaders(x.name));
            break;
          case "PictureLayouts":
            saveList.push(pictureConent.findPictures(x.name));
            break;
          case "PictureTextLayouts":
            saveList.push(PictureTextContent.findPictureTexts(x.name));
            break;
          case "TextLayouts":
            saveList.push(textContent.findTexts(x.name));
            break;
            /* falls through */
        }
        localStorage.setItem("newLayoutCSS", JSON.stringify(saveList))   
      });
    }
  }

  async function getGoogle() {
    // 구글 폰트 가져옴 
    if (!googleFontsList.length) { 
      await getGoogleFonts().then(value => {
        googleFontsList =value
      });
      googleFontsList.forEach((font) => {
        const regularPosition = font.variants.indexOf('regular')
        let t = new FontFace(font.family, `url(${font.files[font.variants[regularPosition+1]]})`);
        t.load().then(function(loadedFont){
          document.fonts.add(loadedFont)
        }, (err) => {
          throw {type: "font_loading_err", fontName: font.family, DOMException: err}
        })
      })

      //디폴트값 설정
      googleFontsList.unshift(
        {
          "family": "DungGeunMo",
          "variants": [
              "300",
              "regular",
          ],
          "subsets": [
              "greek",
              "latin",
              "latin-ext"
          ],
          "version": "v18",
          "lastModified": "2022-04-20",
          "files": {
              "300": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff",
              "500": "hhttps://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff",
              "regular": "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff"
          },
          "category": "sans-serif",
          "kind": "webfonts#webfont"
        }
      )
    }
  }
  ///////////////////////////////////////////////////////////////////
  //////////////////////////// C O M P U T E D //////////////////////
  ///////////////////////////////////////////////////////////////////
  const getModalState = computed(() => isOpendAnyModal);
  const getNewLayout = computed(() => newLayout);
  const getGoogleFontsList = computed(() =>  googleFontsList);

  return { 
    isOpendAnyModal,
    changeState,
    getGoogle,
    saveTemp,
    saveTempCSS,
    initializationData,
    getModalState,
    getNewLayout,
    getGoogleFontsList,
  };
});