<template>
  <div class="bg" style="background-color: #000000;">
    <div class="container text-white p-3">
      <div class="col-12 mt-5">
        <h1 @click="showTextEditModal(contentData.textList[0])" class="display-2 fw-bold py-2 clickable effect-shine">{{contentData.textList[0].textValue}}</h1>
      </div>
      <div class="col-12 mb-5">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[0].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[0].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[1])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[1].textValue}}</div>
            <div @click="showTextEditModal(contentData.textList[2])" class="clickable effect-shine">{{contentData.textList[2].textValue}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[1].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[1].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[3])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[3].textValue}}</div>
            <div @click="showTextEditModal(contentData.textList[4])" class="clickable effect-shine">{{contentData.textList[4].textValue}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[2].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[2].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[5])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[5].textValue}}</div>
            <div @click="showTextEditModal(contentData.textList[6])" class="clickable effect-shine">{{contentData.textList[6].textValue}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[3].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[3].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[7])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[7].textValue}}</div>
            <div @click="showTextEditModal(contentData.textList[8])" class="clickable effect-shine">{{contentData.textList[8].textValue}}</div>
          </div>
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
// import {mapState} from 'pinia' 
import { usePictureTextStore } from '../../../store/modules/PictureTextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "PictureTextLayout3",
  components: {
    TextEditModal,
    ImageEditModal,
  },
  setup() {
    const PictureTextContent = usePictureTextStore();
    const contentData = PictureTextContent.getPictureTextLayout3;
    
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
      PictureTextContent.editTextList(contentData, editedText)
      isShowTextEditMoadal.value = false;
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

  /* TestContent5 전용 */ 
  img.d-block{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>