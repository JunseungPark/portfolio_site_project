<template>
	<div class="bg">
		<div class="container col-xxl-9 px-4 py-5">
			<div class="row flex-lg-row-reverse g-5 py-5">
				<div @click="showImageEditModal(contentData.imageList[0].key)" class="col-10 col-sm-8 col-lg-6 hoverImageWrap">
					<img :src="contentData.imageList[0].imgName" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
				</div>
				<div class="col-lg-6">
					<h1 
            @click="showTextEditModal(contentData.textList[0])" 
            class="display4 fw-thin lh-1 mb-3 clickable effect-shine"
            :style="'font-family:'+contentData.textList[0].font">
            {{contentData.textList[0].textValue}}
          </h1>
					<p @click="showTextEditModal(contentData.textList[1])" class="lead"><small class="clickable effect-shine" :style="'font-family:'+contentData.textList[1].font">{{contentData.textList[1].textValue}}</small></p>
				</div>
			</div>
		</div>
    <TextEditModal
      :isShowMoadal="isShowTextEditMoadal"
      :selectedText="selectedText"
      @hideModal='hideTextEditModal'
      @editTextData="editTextData"
    />
    <ImageEditModal
      :isShowMoadal="isShowImageEditMoadal"
      :selectedImage="selectedImage"
      @hideModal='hideImageEditModal'
      @editImageData="editImageData"
    />
	</div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from '../../../store/Main';
import { usePictureTextStore } from '../../../store/modules/PictureTextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "PictureTextLayout1",
  components: {
    TextEditModal,
    ImageEditModal,
  },

  setup() {
    const mainStore = useMainStore();
    const PictureTextContent = usePictureTextStore();
    const contentData = PictureTextContent.getPictureTextLayout1;
    
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
      PictureTextContent.editTextList(contentData, editedText)
      isShowTextEditMoadal.value = false;
      mainStore.changeState();
    };
    // ----------------------------- 텍스트 에딧 ------------------------------- //

    // ----------------------------- 이미지 에딧 ------------------------------- //
    const isShowImageEditMoadal = ref(false);
    const selectedImage = ref(0);

    const showImageEditModal = (key) => {
      selectedImage.value = key
      isShowImageEditMoadal.value = true;
    };

    const hideImageEditModal = () => {
      isShowImageEditMoadal.value = false;
    };

    const editImageData = (uploaedImg) =>{
      PictureTextContent.editPictureList(contentData, uploaedImg)
      isShowImageEditMoadal.value = false;
    };
    // ----------------------------- 이미지 에딧 ------------------------------- //
    return {
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      isShowTextEditMoadal,
      selectedText,
      showTextEditModal,
      hideTextEditModal,
      editTextData,
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      // ----------------------------- 이미지 에딧 ------------------------------- //
      isShowImageEditMoadal,
      selectedImage,
      showImageEditModal,
      hideImageEditModal,
      editImageData,
      // ----------------------------- 이미지 에딧 ------------------------------- //
      contentData
    }
  },
}
</script>

<style>
  /* 텍스트 effect-shine */
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

  /* 이미지 */ 
  .hoverImageWrap{
    cursor: pointer;
    overflow: hidden;
  }
</style>