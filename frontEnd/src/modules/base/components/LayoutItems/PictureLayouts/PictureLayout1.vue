<template>
	<div class="bg">
		<div class="row g-0 hoverImage">
			<div @click="showImageEditModal(contentData.imageList[0].key)" class="col hoverImageWrap"  style="height:300px">
				<img :src="contentData.imageList[0].imgName" class="img-fluid d-block" alt="...">
			</div>
			<div @click="showImageEditModal(contentData.imageList[1].key)" class="col hoverImageWrap" style="height:300px">
				<img :src="contentData.imageList[1].imgName" class="img-fluid d-block" alt="...">
			</div>
			<div @click="showImageEditModal(contentData.imageList[2].key)" class="col hoverImageWrap" style="height:300px">
				<img :src="contentData.imageList[2].imgName" class="img-fluid d-block" alt="...">
			</div>
			<div @click="showImageEditModal(contentData.imageList[3].key)" class="col hoverImageWrap" style="height:300px">
				<img :src="contentData.imageList[3].imgName" class="img-fluid d-block" alt="...">
			</div>
		</div>

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
import { usePictureStore } from '../../../store/modules/PictureContent';
import { getCurrentInstance } from 'vue'
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "PictureLayout1",
  components: {
    ImageEditModal,
  },
  emits: ["isOpendAnyModal", "isClosedModal"],
  setup() {
    // 이벤트 버스 임시 사용중 pinia로 이전 필요해보임
    // vue3에서는 기본적으로 이벤트버스를 허용하지 않아 mitt라이브러리 이용중
    const internalInstance = getCurrentInstance(); 
    const emitter = internalInstance.appContext.config.globalProperties.emitter;

    const pictureConent = usePictureStore();
    const contentData = pictureConent.getPicture1;

    // ----------------------------- 이미지 에딧 ------------------------------- //
    const isShowImageEditMoadal = ref(false);
    const selectedImage = ref(0);

    const showImageEditModal = (key) => {
      selectedImage.value = key
      isShowImageEditMoadal.value = true;
      emitter.emit('isOpenedAnyModal');
    };

    const hideImageEditModal = () => {
      isShowImageEditMoadal.value = false;
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };

    const editImageData = (uploaedImg) =>{
      pictureConent.editPictureList(uploaedImg)
      isShowImageEditMoadal.value = false;
      // 수정필요
      // setTimeout(() => {
      //   this.emitter.emit('isClosedModal');
      // },100)
    };
    // ----------------------------- 이미지 에딧 ------------------------------- //
    return {
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
  img.d-block{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .hoverImageWrap{
    cursor: pointer;
    overflow: hidden;
  }
  /* Rotate */
  .hoverImage .hoverImageWrap img {
    -webkit-transform: rotate(15deg) scale(1.4);
    transform: rotate(15deg) scale(1.4);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }
  .hoverImage .hoverImageWrap:hover img {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }
</style>