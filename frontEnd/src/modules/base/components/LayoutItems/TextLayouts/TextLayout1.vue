<template>
  <!-- Html -->
	<div class="bg h-75 py-5" :style="[contentData.layoutAttribute]">
		<div class="container text-white py-5">
			<div class="row flex-lg-row align-items-center g-5 py-5">
				<div class="col-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display-7 fw-bold lh-1 mb-5 clickable effect-shine" :style="[contentData.textList[0]]">{{contentData.textList[0].textValue}}</h1>
					<span @click="showTextEditModal(contentData.textList[1])" class="mb-5"><u class="clickable effect-shine" :style="[contentData.textList[1]]">{{contentData.textList[1].textValue}}</u></span>
				</div>
			</div>
		</div>
	</div>
  <!-- Html -->
  <!-- <div class="position-absolute top-0 start-0 p-2" @click="showLayoutEditModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" :fill="(isBlackBG) ? 'White' : 'Black'" class="bi bi-sliders layoutSetting" viewBox="0 0 16 16">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>
  </div> -->

  <TextEditModal
    :isShowMoadal="isShowTextEditMoadal"
    :selectedText="selectedText"
    @hideModal='hideTextEditModal'
    @editTextData="editTextData"
  />
  <LayoutEditModal
    :isShowMoadal="isShowLayoutEditMoadal"
    :selectedLayoutAttribute="selectedLayoutAttribute"
    @hideModal='hideLayoutEditModal'
    @editLayoutData="editLayoutData"
  />
</template>
<script>
import { ref } from "vue";
import { useMainStore } from '@/modules/base/store/Main/';
import { useTextStore } from '../../../store/modules/TextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';
import LayoutEditModal from '../../Modal/LayoutEditModal.vue'
import { isBlackColor } from '@/util/util';

export default {
  name: "TextLayout1",
  components: {
    TextEditModal,
    LayoutEditModal
  },
  setup() {
    const mainStore = useMainStore();
    const textContent = useTextStore();
    const contentData = textContent.getTextLayout1;

    // ----------------------------- 레이아웃 에딧 ------------------------------//
    const isShowLayoutEditMoadal = ref(false);
    const selectedLayoutAttribute = ref({});

    const isBlackBG = ref(isBlackColor(contentData.layoutAttribute.backgroundColor));

    const showLayoutEditModal = () => {
      selectedLayoutAttribute.value = contentData.layoutAttribute;
      setLayoutEditModalState(true);
    };

    const hideLayoutEditModal = () => {
      setLayoutEditModalState(false);
    };
    
    const editLayoutData = (result) =>{
      isBlackBG.value = result
      setAllAttribute();
      setLayoutEditModalState(false);
    };

    const setLayoutEditModalState = (value) => {
      isShowLayoutEditMoadal.value = value;
      mainStore.changeState()
    }

    const setAllAttribute = () => {
      contentData.textList.map((attr) => {
        attr.color = contentData.layoutAttribute.color;
        attr.fontFamily = contentData.layoutAttribute.fontFamily;
      })
    }
    
    // ----------------------------- 레이아웃 에딧 ------------------------------//
    
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    const isShowTextEditMoadal = ref(false);
    const selectedText = ref({});

    const showTextEditModal = (text) => {
      selectedText.value = text
      setTextEditModalState(true)
    };

    const hideTextEditModal = () => {
      setTextEditModalState(false)
    };
    
    const editTextData = (editedText) =>{
      textContent.editTextList(contentData, editedText)
      setTextEditModalState(false)
    };

    const setTextEditModalState = (value) => {
      isShowTextEditMoadal.value = value;
      mainStore.changeState()
    }
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    return {
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      isShowLayoutEditMoadal,
      selectedLayoutAttribute,
      showLayoutEditModal,
      hideLayoutEditModal,
      editLayoutData,
      isBlackBG,
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      isShowTextEditMoadal,
      selectedText,
      showTextEditModal,
      hideTextEditModal,
      editTextData,
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      contentData
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
</style>