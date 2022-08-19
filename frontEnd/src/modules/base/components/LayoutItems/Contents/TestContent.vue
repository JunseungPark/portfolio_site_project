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
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "TestContent",
  components: {
    ImageEditModal,
  },
  data() {
    return {
      isShowImageEditMoadal: false,
      selectedImage: 0,
      contentData: {
        textList: {
        },
        imageList: [
          {
            key: 1,
            imgName: require(`../../../assets/img/nasa1.jpg`),
          },
          {
            key: 2,
            imgName: require(`../../../assets/img/nasa2.jpg`),
          },
          {
            key: 3,
            imgName: require(`../../../assets/img/nasa3.jpg`),
          },
          {
            key: 4,
            imgName: require(`../../../assets/img/nasa4.jpg`),
          },
        ]
      }
    }
  },
  methods: {
    // 이미지 에딧 -------------------------
    showImageEditModal(key) {
      this.selectedImage = key;
      this.isShowImageEditMoadal = true;
      this.emitter.emit('isOpenedAnyModal');
    },
    hideImageEditModal() {
      this.isShowImageEditMoadal = false;
      // 수정필요
      setTimeout(() => {
        this.emitter.emit('isClosedModal');
      },100)
    },
    editImageData(uploaedImg) {
      this.contentData.imageList.filter(image => { 
        if (image.key === uploaedImg.key) { 
         image.imgName = uploaedImg.imgName;
        } 
      });

      this.isShowImageEditMoadal = false;
    }
    // 이미지 에딧 -------------------------
  }
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