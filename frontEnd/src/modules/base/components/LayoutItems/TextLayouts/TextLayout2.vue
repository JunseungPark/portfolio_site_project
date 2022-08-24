<template>
	<div class="bg" style="background-color: #FFEFEF;">
		<div class="container h-50 col-xxl-9 px-4 py-5">
			<div class="row h-100 align-items-center">
				<div class="row-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display-5 fw-thin clickable effect-shine">{{contentData.textList[0].textValue}}</h1>
					<p @click="showTextEditModal(contentData.textList[1])" class="lead mb-4 clickable effect-shine">{{contentData.textList[1].textValue}}</p>
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
import { useTextStore } from '../../../store/modules/TextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';

export default {
  name: "TextLayout2",
  components: {
    TextEditModal,
  },
  setup() {
    const textContent = useTextStore();
    const contentData = textContent.getTextLayout2;
    
    // ----------------------------- 텍스트 에딧 ------------------------------- //
    const isShowTextEditMoadal = ref(false);
    const selectedText = ref({});

    const showTextEditModal = (text) => {
      selectedText.value = text
      isShowTextEditMoadal.value = true;
    };

    const hideTextEditModal = () => {
      isShowTextEditMoadal.value = false;
    };
    
    const editTextData = (editedText) =>{
      textContent.editTextList(contentData, editedText)
      isShowTextEditMoadal.value = false;
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