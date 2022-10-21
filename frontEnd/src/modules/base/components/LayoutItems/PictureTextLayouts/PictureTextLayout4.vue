<template>
  <!-- 수정 방법
    1. 전체 스타일
    2. 엘리멘트 스타일
    3. 텍스트 or 이미지 or 레이아웃 모달 오프너 추가
    4. 데이터 맵핑 ex) 텍스트 , 이미지 -->
  <!-- Html -->
<section
    id="hero"
    class="d-flex align-items-center"
    :style="[contentData.layoutAttribute]">

    <div class="container">
        <div class="row">
            <div
                class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up">
                <h1
                    class="clickable effect-shine"
                    @click="showTextEditModal(contentData.textList[0])"
                    :style="[contentData.textList[0]]">{{contentData.textList[0].textValue}}</h1>
                <h2
                    class="clickable effect-shine"
                    @click="showTextEditModal(contentData.textList[1])"
                    :style="[contentData.textList[1]]">{{contentData.textList[1].textValue}}</h2>
                <div class="d-flex justify-content-center justify-content-lg-start">
                    <a
                        href="#about"
                        class="btn-get-started scrollto clickable effect-shine"
                        @click="showButtonEditModal(contentData.buttonList[0])"
                        :style="[contentData.buttonList[0]]">{{contentData.buttonList[0].textValue}}</a>
                    <a class="glightbox btn-watch-video">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            class="bi bi-play-circle"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        <span
                            class="mx-2 clickable effect-shine"
                            @click="showTextEditModal(contentData.textList[2])"
                            :style="[contentData.textList[2]]">{{contentData.textList[2].textValue}}</span>
                    </a>
                </div>
            </div>
            <div
                class="col-lg-6 order-1 order-lg-2 hero-img"
                @click="showImageEditModal(contentData.imageList[0].key)"
                data-aos="zoom-in"
                data-aos-delay="200">
                <img :src="contentData.imageList[0].imgName" class="img-fluid animated hoverImageWrap" alt=""></div>
            </div>
        </div>

    </section>
  <!-- Html -->
  <!-- <div class="position-absolute top-0 start-0 p-2" @click="showLayoutEditModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" :fill="(isBlackBG) ? 'White' : 'Black'" class="bi bi-sliders layoutSetting" viewBox="0 0 16 16">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>
  </div> -->

  <TextEditModal
    :isShowMoadal="isShowTextEditMoadal"
    :selectedText="selectedText"
    @hideModal='hideTextEditModal'
    @editTextData="editTextData"
  />
  <ButtonEditModal
    :isShowMoadal="isShowButtonEditMoadal"
    :selectedButton="selectedButton"
    @hideModal='hideButtonEditModal'
    @editButtonData="editButtonData"
  />
  <ImageEditModal
    :isShowMoadal="isShowImageEditMoadal"
    :selectedImage="selectedImage"
    @hideModal='hideImageEditModal'
    @editImageData="editImageData"
  />
  <LayoutEditModal
    :isShowMoadal="isShowLayoutEditMoadal"
    :selectedLayoutAttribute="selectedLayoutAttribute"
    @hideModal='hideLayoutEditModal'
    @editLayoutData="editLayoutData"
  />
</template>
<script>
import { ref, onMounted } from "vue";
import { useMainStore } from '@/modules/base/store/Main/';
import { usePictureTextStore } from '../../../store/modules/PictureTextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';
import ImageEditModal from "../../Modal/ImageEditModal.vue";
import LayoutEditModal from '../../Modal/LayoutEditModal.vue'
import ButtonEditModal from '../../Modal/ButtonEditModal.vue'
import { isBlackColor } from '@/util/util';
import AOS from "aos";

export default {
  name: "PictureTextLayout4",
  components: {
    TextEditModal,
    ImageEditModal,
    LayoutEditModal,
    ButtonEditModal
  },
  setup() {
    const mainStore = useMainStore();
    const PictureTextContent = usePictureTextStore();
    const contentData = PictureTextContent.getPictureTextLayout4;
    // ----------------------------- 레이아웃 에딧 ------------------------------//
    const isShowLayoutEditMoadal = ref(false);
    const selectedLayoutAttribute = ref({});

    const isBlackBG = ref(isBlackColor(contentData.layoutAttribute.backgroundColor));

    const showLayoutEditModal = () => {
      selectedLayoutAttribute.value = contentData.layoutAttribute;
      setLayoutEditModalState(true);
    };

    const hideLayoutEditModal = () => {
      setLayoutEditModalState(false);
    };
    
    const editLayoutData = (result) =>{
      isBlackBG.value = result
      setAllAttribute();
      setLayoutEditModalState(false);
    };

    const setLayoutEditModalState = (value) => {
      isShowLayoutEditMoadal.value = value;
      mainStore.changeState()
    }

    const setAllAttribute = () => {
      contentData.textList.map((attr) => {
        attr.color = contentData.layoutAttribute.color;
        attr.fontFamily = contentData.layoutAttribute.fontFamily;
      })
    }
    
    // ----------------------------- 레이아웃 에딧 ------------------------------//
    
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

    // ----------------------------- 버튼 에딧 ------------------------------- //
    const isShowButtonEditMoadal = ref(false);
    const selectedButton = ref({});

    const showButtonEditModal = (button) => {
      selectedButton.value = button
      setButtonEditModalState(true)
    };

    const hideButtonEditModal = () => {
      setButtonEditModalState(false)
    };
    
    const editButtonData = (editedText) =>{
      console.log(editedText)
      // PictureTextContent.editTextList(contentData, editedText)
      setButtonEditModalState(false)
    };

    const setButtonEditModalState = (value) => {
      isShowButtonEditMoadal.value = value;
      mainStore.changeState()
    }
    // ----------------------------- 버튼 에딧 ------------------------------- //

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

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      AOS.init();
    });
    /// ------------------------- LIFE -------------------------///
    return {
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      isShowLayoutEditMoadal,
      selectedLayoutAttribute,
      showLayoutEditModal,
      hideLayoutEditModal,
      editLayoutData,
      isBlackBG,
      // ----------------------------- 레이아웃 에딧 ------------------------------//
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      isShowTextEditMoadal,
      selectedText,
      showTextEditModal,
      hideTextEditModal,
      editTextData,
      // ----------------------------- 텍스트 에딧 ------------------------------- //
      // ----------------------------- 버튼 에딧 ------------------------------- //
      isShowButtonEditMoadal,
      selectedButton,
      showButtonEditModal,
      hideButtonEditModal,
      editButtonData,
      // ----------------------------- 버튼 에딧 ------------------------------- //
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

  /*--------------------------------------------------------------
  # 해당 css
  --------------------------------------------------------------*/


  #hero {
    width: 100%;
    height: 80vh;
  }

  #hero .container {
    padding-top: 72px;
  }

  #hero h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }

  #hero h2 {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 50px;
    font-size: 24px;
  }

  #hero .btn-get-started {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px 11px 28px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px 0 0 0;
    color: #fff;
    background: #47b2e4;
  }

  #hero .btn-watch-video {
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    margin: 10px 0 0 25px;
    color: #fff;
    line-height: 1;
  }

  #hero .btn-watch-video i {
    line-height: 0;
    color: #fff;
    font-size: 32px;
    transition: 0.3s;
    margin-right: 8px;
  }

  #hero .btn-watch-video:hover i {
    color: #47b2e4;
  }

  #hero .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }

  @media (max-width: 991px) {
    #hero {
      height: 100vh;
      text-align: center;
    }

    #hero .animated {
      -webkit-animation: none;
      animation: none;
    }

    #hero .hero-img {
      text-align: center;
    }

    #hero .hero-img img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }

    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }

    #hero .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    #hero .hero-img img {
      width: 80%;
    }

    #hero .btn-get-started {
      font-size: 16px;
      padding: 10px 24px 11px 24px;
    }
  }

  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
</style>