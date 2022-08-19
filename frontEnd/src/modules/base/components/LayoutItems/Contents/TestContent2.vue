<template>
	<div class="bg">
		<div class="container col-xxl-9 px-4 py-5">
			<div class="row flex-lg-row-reverse g-5 py-5">
				<div @click="showImageEditModal(contentData.imageList[0].key)" class="col-10 col-sm-8 col-lg-6 hoverImageWrap">
					<img :src="contentData.imageList[0].imgName" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
				</div>
				<div class="col-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display4 fw-thin lh-1 mb-3 clickable effect-shine">{{contentData.textList[0].value}}</h1>
					<p @click="showTextEditModal(contentData.textList[1])" class="lead"><small class="clickable effect-shine">{{contentData.textList[1].value}}</small></p>
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
  name: "TestContent2",
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
            value: "We create objects that blur the line between real & virtual"
          },
          {
            key: 2,
            value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          },
        ],
        imageList: [
          {
            key: 1,
            imgName: require(`../../../assets/img/nasa5.jpg`),
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