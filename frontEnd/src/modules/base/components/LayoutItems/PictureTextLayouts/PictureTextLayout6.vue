<template>
  <!-- 수정 방법
    1. 전체 스타일
    2. 엘리멘트 스타일
    3. 텍스트 or 이미지 or 레이아웃 모달 오프너 추가
    4. 데이터 맵핑 ex) 텍스트 , 이미지 -->
  <!-- Html -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center" >
    <img src="../../../assets/img/planet1.jpg" class="img-fluid hoverImageWrap bg-img" alt="">
    <div class="container text-center text-md-left" data-aos="fade-up">
      <h1>Welcome to Maxim</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="#about" class="btn-get-started scrollto">Get Started</a>
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
import { isBlackColor } from '@/util/util';
import AOS from "aos";

export default {
  name: "PictureTextLayout5",
  components: {
    TextEditModal,
    ImageEditModal,
    LayoutEditModal,
  },
  setup() {
    const mainStore = useMainStore();
    const PictureTextContent = usePictureTextStore();
    const contentData = PictureTextContent.getPictureTextLayout5;
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

  /*--------------------------------------------------------------
  # General
  --------------------------------------------------------------*/
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }

  a {
    color: #1bac91;
    text-decoration: none;
  }

  a:hover {
    color: #22d8b6;
    text-decoration: none;
  }
  /*--------------------------------------------------------------
  # Disable aos animation delay on mobile devices
  --------------------------------------------------------------*/
  @media screen and (max-width: 768px) {
    [data-aos-delay] {
      transition-delay: 0 !important;
    }
  }

  /*--------------------------------------------------------------
  # Hero Section
  --------------------------------------------------------------*/
  #hero {
    width: 100%;
    height: calc(100vh - 70px);
    position: relative;
    padding: 0;
  }
  #hero .bg-img{
    width: 100%;
    height: 100%;
    position:absolute;
    bottom: 0px;
    left:0;
    right:0;
    margin:0 auto;
    object-fit: cover;
  }

  #hero:before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  #hero .container {
    z-index: 2;
  }

  #hero h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }

  #hero h2 {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 35px;
    font-size: 24px;
  }

  #hero .btn-get-started {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 28px;
    border-radius: 4px;
    transition: 0.5s;
    border: 2px solid #fff;
    color: #fff;
  }

  #hero .btn-get-started:hover {
    border-color: #1bac91;
    background: #1bac91;
  }

  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }

  @media (max-width: 992px) {
    #hero {
      margin-top: 60px;
      height: calc(100vh - 60px);
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
  }

</style>