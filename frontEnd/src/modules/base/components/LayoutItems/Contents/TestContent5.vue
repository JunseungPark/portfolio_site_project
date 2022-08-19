<template>
  <div class="bg" style="background-color: #000000;">
    <div class="container text-white p-3">
      <div class="col-12 mt-5">
        <h1 @click="showTextEditModal(contentData.textList[0])" class="display-2 fw-bold py-2 clickable effect-shine">{{contentData.textList[0].value}}</h1>
      </div>}
      <div class="col-12 mb-5">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[0].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[0].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[1])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[1].value}}</div>
            <div @click="showTextEditModal(contentData.textList[2])" class="clickable effect-shine">{{contentData.textList[2].value}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[1].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[1].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[3])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[3].value}}</div>
            <div @click="showTextEditModal(contentData.textList[4])" class="clickable effect-shine">{{contentData.textList[4].value}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[2].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[2].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[5])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[5].value}}</div>
            <div @click="showTextEditModal(contentData.textList[6])" class="clickable effect-shine">{{contentData.textList[6].value}}</div>
          </div>
          <div class="col">
            <div @click="showImageEditModal(contentData.imageList[3].key)" class="ratio ratio-1x1">
              <img :src="contentData.imageList[3].imgName" class="d-block img-fluid hoverImageWrap" alt="">
            </div>
            <div @click="showTextEditModal(contentData.textList[7])" class="display-6 py-2 clickable effect-shine">{{contentData.textList[7].value}}</div>
            <div @click="showTextEditModal(contentData.textList[8])" class="clickable effect-shine">{{contentData.textList[8].value}}</div>
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
import TextEditModal from '../../Modal/TextEditModal.vue';
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "TestContent5",
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
            value: "Meet The Team"
          },
          {
            key: 2,
            value: "NAME"
          },
          {
            key: 3,
            value: "Subject"
          },
          {
            key: 4,
            value: "NAME"
          },
          {
            key: 5,
            value: "Subject"
          },
          {
            key: 6,
            value: "NAME"
          },
          {
            key: 7,
            value: "Subject"
          },
          {
            key: 8,
            value: "NAME"
          },
          {
            key: 9,
            value: "Subject"
          },
        ],
        imageList: [
          {
            key: 1,
            imgName: require(`../../../assets/img/person1.jpg`),
          },
          {
            key: 2,
            imgName: require(`../../../assets/img/person2.jpg`),
          },
          {
            key: 3,
            imgName: require(`../../../assets/img/person3.jpg`),
          },
          {
            key: 4,
            imgName: require(`../../../assets/img/person4.jpg`),
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

  /* TestContent5 전용 */ 
  img.d-block{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>