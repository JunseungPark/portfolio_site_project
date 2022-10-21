<template>
  <!-- 수정 방법
    1. 전체 스타일
    2. 엘리멘트 스타일
    3. 텍스트 or 이미지 or 레이아웃 모달 오프너 추가
    4. 데이터 맵핑 ex) 텍스트 , 이미지 -->
  <!-- Html -->
  <section id="skills" class="skills" :style="[contentData.layoutAttribute]">
    <div class="container aos-init aos-animate" data-aos="fade-up">

      <div class="row">
          <div
              class="col-lg-6 d-flex align-items-center aos-init aos-animate"
              @click="showImageEditModal(contentData.imageList[0].key)"
              data-aos="fade-right"
              data-aos-delay="100">
              <img :src="contentData.imageList[0].imgName" class="img-fluid hoverImageWrap" alt=""></div>
              <div
                  class="col-lg-6 pt-4 pt-lg-0 content aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="100">
                  <h3 class=" clickable effect-shine" @click="showTextEditModal(contentData.textList[0])"
                    :style="[contentData.textList[0]]">{{contentData.textList[0].textValue}}</h3>
                  <p class="fst-italic clickable effect-shine" @click="showTextEditModal(contentData.textList[1])"
                    :style="[contentData.textList[1]]">{{contentData.textList[1].textValue}}
                  </p>

                  <div class="skills-content">
                      <div class="progress">
                          <span class="skill text-start clickable effect-shine" @click="showTextEditModal(contentData.textList[2])"
                    :style="[contentData.textList[2]]">{{contentData.textList[2].textValue}}
                              <i class="val">100%</i>
                          </span>
                          <div class="progress-bar-wrap">
                              <div
                                  class="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  :style="'width: 100%; background-color:'+contentData.textList[2].color+';'"></div>
                          </div>
                      </div>

                      <div class="progress">
                          <span class="skill text-start clickable effect-shine" @click="showTextEditModal(contentData.textList[3])"
                    :style="[contentData.textList[3]]">{{contentData.textList[3].textValue}}
                              <i class="val">90%</i>
                          </span>
                          <div class="progress-bar-wrap">
                              <div
                                  class="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  :style="'width: 90%; background-color:'+contentData.textList[3].color+';'"></div>
                          </div>
                      </div>

                      <div class="progress">
                          <span class="skill text-start clickable effect-shine" @click="showTextEditModal(contentData.textList[4])"
                    :style="[contentData.textList[4]]">{{contentData.textList[4].textValue}}
                              <i class="val">75%</i>
                          </span>
                          <div class="progress-bar-wrap">
                              <div
                                  class="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  :style="'width: 75%; background-color:'+contentData.textList[4].color+';'"></div>
                          </div>
                      </div>

                      <div class="progress">
                          <span class="skill text-start clickable effect-shine" @click="showTextEditModal(contentData.textList[5])"
                    :style="[contentData.textList[5]]">{{contentData.textList[5].textValue}}
                              <i class="val">55%</i>
                          </span>
                          <div class="progress-bar-wrap">
                              <div
                                  class="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="55"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  :style="'width: 55%; background-color:'+contentData.textList[5].color+';'"></div>
                          </div>
                      </div>
                  </div>
              </div>
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

  body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
  }

  a {
    color: #47b2e4;
    text-decoration: none;
  }

  a:hover {
    color: #73c5eb;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Jost", sans-serif;
  }

  section {
    padding: 60px 0;
    overflow: hidden;
  }

  .section-bg {
    background-color: #f3f5fa;
  }
  .skills .content h3 {
    font-weight: 700;
    font-size: 32px;
    color: #37517e;
    font-family: "Poppins", sans-serif;
  }

  .skills .content ul {
    list-style: none;
    padding: 0;
  }

  .skills .content ul li {
    padding-bottom: 10px;
  }

  .skills .content ul i {
    font-size: 20px;
    padding-right: 4px;
    color: #47b2e4;
  }

  .skills .content p:last-child {
    margin-bottom: 0;
  }

  .skills .progress {
    height: 60px;
    display: block;
    background: none;
    border-radius: 0;
    font-size: 15px;
  }

  .skills .progress .skill {
    padding: 0;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #37517e;
  }

  .skills .progress .skill .val {
    float: right;
    font-style: normal;
  }

  .skills .progress-bar-wrap {
    background: #e8edf5;
    height: 10px;
  }

  .skills .progress-bar {
    width: 1px;
    height: 10px;
    transition: 0.9s;
    background-color: #4668a2;
  }
</style>