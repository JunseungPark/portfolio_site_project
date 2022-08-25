<template>
	<div class="bg h-75 py-5" style="background-color:#333333">
		<div class="container text-white py-5">
			<div class="row flex-lg-row align-items-center g-5 py-5">
				<div class="col-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display-7 fw-bold lh-1 mb-5 clickable effect-shine">{{contentData.textList[0].textValue}}</h1>
					<span @click="showTextEditModal(contentData.textList[1])" class="mb-5"><u class="clickable effect-shine">{{contentData.textList[1].textValue}}</u></span>
				</div>
			</div>
		</div>
    <TextEditModal
      :isShowMoadal="isShowTextEditMoadal"
      :selectedText="selectedText"
      @hideModal='hideTextEditModal'
      @editTextData="editTextData"
    />
	</div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from '../../../store/Main';
import { useTextStore } from '../../../store/modules/TextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';

export default {
  name: "TextLayout1",
  components: {
    TextEditModal,
  },
  setup() {
    const mainStore = useMainStore();
    const textContent = useTextStore();
    const contentData = textContent.getTextLayout1;
    
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    const isShowTextEditMoadal = ref(false);
    const selectedText = ref({});

    const showTextEditModal = (text) => {
      selectedText.value = text
      isShowTextEditMoadal.value = true;
      mainStore.changeState();
    };

    const hideTextEditModal = () => {
      isShowTextEditMoadal.value = false;
      mainStore.changeState();
    };
    
    const editTextData = (editedText) =>{
      textContent.editTextList(contentData, editedText)
      isShowTextEditMoadal.value = false;
      mainStore.changeState();
    };
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    return {
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