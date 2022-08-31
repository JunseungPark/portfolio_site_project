<template>
  <div>
    <header class="p-3 text-white selector" style="background-color:#333333;">
      <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
            <div @click="showTextEditModal(contentData.textList[0])" class="col clickable effect-shine" :style="'font-family:'+contentData.textList[0].font">{{contentData.textList[0].textValue}}</div>

            <ul class="nav col-8 col-lg-8 me-lg-auto mb-2 justify-content-end mb-md-0">
              <li @click="showTextEditModal(contentData.textList[1])">
                <a 
                  href="#" class="nav-link px-2 text-secondary clickable effect-shine"
                  :style="'font-family:'+contentData.textList[1].font"
                >
                {{contentData.textList[1].textValue}}
                </a>
              </li>
              <li @click="showTextEditModal(contentData.textList[2])">
                <a 
                  href="#" class="nav-link px-2 text-white clickable effect-shine"
                  :style="'font-family:'+contentData.textList[2].font"
                >
                {{contentData.textList[2].textValue}}
                </a>
              </li>
              <li @click="showTextEditModal(contentData.textList[3])">
                <a 
                  href="#" class="nav-link px-2 text-white clickable effect-shine"
                  :style="'font-family:'+contentData.textList[3].font"
                >
                {{contentData.textList[3].textValue}}
                </a>
              </li>
              <li @click="showTextEditModal(contentData.textList[4])">
                <a 
                  href="#" class="nav-link px-2 text-white clickable effect-shine"
                  :style="'font-family:'+contentData.textList[4].font"
                >
                {{contentData.textList[4].textValue}}
                </a>
              </li>
               <li @click="showTextEditModal(contentData.textList[4])">
                <a 
                  href="#" class="nav-link px-2 text-white clickable effect-shine"
                  :style="'font-family:'+contentData.textList[4].font"
                >
                {{contentData.textList[4].textValue}}
                </a>
              </li>
            </ul>
            <ul class="nav col-1 col-lg-1 mb-4 justify-content-end mb-md-0">
              <li class="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </li>
            </ul> 
        </div>
      </div>
    </header>
    <div class="position-absolute top-0 start-0 p-1" @click="showLayoutEditModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" class="bi bi-sliders layoutSetting" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
      </svg>
    </div>
    <TextEditModal
      :isShowMoadal="isShowTextEditMoadal"
      :selectedText="selectedText"
      @hideModal='hideTextEditModal'
      @editTextData="editTextData"
    />
    <LayoutEditModal
      :isShowMoadal="isShowLayoutEditMoadal"
    />
  </div>
</template>
<script>
import { ref } from "vue";
// 선택된 폰트 가져오기

import { useMainStore } from '../../../store/Main';
import { useHeaderStore } from '../../../store/modules/Header';
import { getCurrentInstance } from 'vue';
import TextEditModal from '../../Modal/TextEditModal.vue';
import LayoutEditModal from '../../Modal/LayoutEditModal.vue'
export default {
  name: "HeaderLayout1",
  components: {
    TextEditModal,
    LayoutEditModal
  },
  emits: ["isOpendAnyModal", "isClosedModal"],
  setup() {
    // 이벤트 버스 임시 사용중 pinia로 이전 필요해보임
    // vue3에서는 기본적으로 이벤트버스를 허용하지 않아 mitt라이브러리 이용중
    const internalInstance = getCurrentInstance(); 
    const emitter = internalInstance.appContext.config.globalProperties.emitter;

    const mainStore = useMainStore();
    const header = useHeaderStore();
    const contentData = header.getHeaderLayout1;
    // ----------------------------- 레이아웃 에딧 ------------------------------//
    const isShowLayoutEditMoadal = ref(false);

    const showLayoutEditModal = () => {
      isShowLayoutEditMoadal.value = true;
      // emitter.emit('isOpenedAnyModal');
      console.log(1)
      mainStore.changeState()
    };

    const hideLayoutEditModal = () => {
      isShowLayoutEditMoadal.value = false;
      mainStore.changeState();
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };
    
    const editLayoutData = (editedText) =>{
      console.log(editedText)
      // header.editTextList(contentData, editedText)
      isShowLayoutEditMoadal.value = false;
      mainStore.changeState()
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };
    // ----------------------------- 레이아웃 에딧 ------------------------------//
    
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    const isShowTextEditMoadal = ref(false);
    const selectedText = ref({});

    const showTextEditModal = (text) => {
      selectedText.value = text
      isShowTextEditMoadal.value = true;
      emitter.emit('isOpenedAnyModal');
      mainStore.changeState()
    };

    const hideTextEditModal = () => {
      isShowTextEditMoadal.value = false;
      mainStore.changeState();
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };
    
    const editTextData = (editedText) =>{
      header.editTextList(contentData, editedText)
      isShowTextEditMoadal.value = false;
      mainStore.changeState()
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    return {
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      showLayoutEditModal,
      hideLayoutEditModal,
      editLayoutData,
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      isShowTextEditMoadal,
      isShowLayoutEditMoadal,
      selectedText,
      showTextEditModal,
      hideTextEditModal,
      editTextData,
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      contentData,
    }
  },
}
</script>

<style>
  /* effect-shine */
  .clickable.effect-shine:hover {
    cursor: pointer;
    -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }

  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }
    
    to {
      -webkit-mask-position: -50%;
    }
  }
 /* effect-setting */
  .layoutSetting:hover {
    transform: rotate( 720deg );
  }

  .selector {
    user-drag: none;
user-select: none;
-webkit-user-drag: none;
-webkit-user-select: none;
-ms-user-select: none;
}
</style>