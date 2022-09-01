<template>
	<div class="bg">
		<div class="container text-center">
			<div class="col-12 p-5">
				<h1 @click="showTextEditModal(contentData.textList[0])" class="display-5 fw-bold" :style="'font-family:'+contentData.textList[0].font">{{contentData.textList[0].textValue}}</h1>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-12 mb-4">
          <img @click="showImageEditModal(contentData.imageList[0].key)" :src="contentData.imageList[0].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">
          <img @click="showImageEditModal(contentData.imageList[1].key)" :src="contentData.imageList[1].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">
          <img @click="showImageEditModal(contentData.imageList[2].key)" :src="contentData.imageList[2].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">

				</div>
				<div class="col-lg-6 col-md-6 mb-4">

          <img @click="showImageEditModal(contentData.imageList[3].key)" :src="contentData.imageList[3].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">
          <img @click="showImageEditModal(contentData.imageList[4].key)" :src="contentData.imageList[4].imgName" class="img-fluid mb-4 hoverImageWrap" alt=""> 
          <img @click="showImageEditModal(contentData.imageList[5].key)" :src="contentData.imageList[5].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">
          <img @click="showImageEditModal(contentData.imageList[6].key)" :src="contentData.imageList[6].imgName" class="img-fluid mb-4 hoverImageWrap" alt="">
		
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
  name: "PictureTextLayout2",
  components: {
    TextEditModal,
    ImageEditModal,
  },

  emits: ["isOpendAnyModal", "isClosedModal"],
  setup() {
    const mainStore = useMainStore();
    const PictureTextContent = usePictureTextStore();
    const contentData = PictureTextContent.getPictureTextLayout2;
    
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
      PictureTextContent.editTextList(contentData, editedText)
      setTextEditModalState(false)
    };

    const setTextEditModalState = (value) => {
      isShowTextEditMoadal.value = value;
      mainStore.changeState()
    }
    // ----------------------------- 텍스트 에딧 ------------------------------- //

    // ----------------------------- 이미지 에딧 ------------------------------- //
    const isShowImageEditMoadal = ref(false);
    const selectedImage = ref(0);

    const showImageEditModal = (key) => {
      selectedImage.value = key
      setImageEditModalState(true)
    };

    const hideImageEditModal = () => {
      setImageEditModalState(false)
    };

    const editImageData = (uploaedImg) =>{
      PictureTextContent.editPictureList(contentData, uploaedImg)
      setImageEditModalState(false)
    };

    const setImageEditModalState = (value) => {
      isShowImageEditMoadal.value = value;
      mainStore.changeState()
    }
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