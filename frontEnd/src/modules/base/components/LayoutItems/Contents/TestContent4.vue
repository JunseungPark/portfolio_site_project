<template>
	<div class="bg">
		<div class="container text-center">
			<div class="col-12 p-5">
				<h1 @click="showTextEditModal(contentData.textList[0])" class="display-5 fw-bold">{{contentData.textList[0].value}}</h1>
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
import TextEditModal from '../../Modal/TextEditModal.vue';
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "TestContent4",
  components: {
    TextEditModal,
    ImageEditModal,
  },
  data() {
    return {
      //이미지 선택
      isShowImageEditMoadal: false,
      selectedImage: 0,
      // 텍스트선택
      isShowTextEditMoadal: false,
      selectedText:"",
      contentData: {
        textList: [
          {
            key: 1,
            value: "Who we are"
          },
        ],
        imageList: [
          {
            key: 1,
            imgName: require(`../../../assets/img/star1.jpg`),
          },
          {
            key: 2,
            imgName: require(`../../../assets/img/star2.jpg`),
          },
          {
            key: 3,
            imgName: require(`../../../assets/img/star7.jpg`),
          },
          {
            key: 4,
            imgName: require(`../../../assets/img/star5.jpg`),
          },
          {
            key: 5,
            imgName: require(`../../../assets/img/star4.jpg`),
          },
          {
            key: 6,
            imgName: require(`../../../assets/img/star6.jpg`),
          },
          {
            key: 7,
            imgName: require(`../../../assets/img/star3.jpg`),
          },
        ]
      }
    }
  },
  methods: {
    // 텍스트 에딧 -------------------------------
    showTextEditModal(text) {
      this.selectedText = text
      this.isShowTextEditMoadal = true;
      this.emitter.emit('isOpenedAnyModal');
    },
    hideTextEditModal() {
      this.isShowTextEditMoadal = false;
      // 수정필요
      setTimeout(() => {
        this.emitter.emit('isClosedModal');
      },100)
    },
    editTextData(editedText){
      this.contentData.textList.filter(text => { 
        if (text.key === editedText.key) { 
          text.key = editedText.key
          text.value = editedText.value;
        } 
      });
      this.hideTextEditModal()
    },
    // 텍스트 에딧 -------------------------------

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
    // 이미지 에딧 ----------------------------------
  }
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