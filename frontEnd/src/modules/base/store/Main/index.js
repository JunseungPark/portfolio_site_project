import { defineStore } from 'pinia';
import { ref, computed } from "vue";
import { getGoogleFonts } from '../../api/index.js'

export const useMainStore = defineStore('Main', () => {
  
  const isOpendAnyModal = ref(false);
  let googleFontsList = [];

  function changeState() {
    if(isOpendAnyModal.value) isOpendAnyModal.value = false
    else isOpendAnyModal.value = true
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
  
  const getModalState = computed(() => isOpendAnyModal);
  const getGoogleFontsList = computed(() =>  googleFontsList);

  return { 
    isOpendAnyModal,
    changeState,
    getGoogle,
    getModalState,
    getGoogleFontsList,
  };
});