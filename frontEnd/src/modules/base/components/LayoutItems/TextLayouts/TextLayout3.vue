<template>
  <!-- 수정 방법
    1. 전체 스타일
    2. 엘리멘트 스타일
    3. 텍스트 or 이미지 or 레이아웃 모달 오프너 추가
    4. 데이터 맵핑 ex) 텍스트 , 이미지 -->
  <!-- Html -->
    <section id="about" class="about"  :style="[contentData.layoutAttribute]">
      <div class="container" data-aos="fade-up">

          <div
              class="section-title clickable effect-shine"
              @click="showTextEditModal(contentData.textList[0])">
              <h2 :style="[contentData.textList[0]]">{{contentData.textList[0].textValue}}</h2>
          </div>

          <div class="row content">
              <div class="col-lg-6">
                  <p
                      class="clickable effect-shine"
                      @click="showTextEditModal(contentData.textList[1])"
                      :style="[contentData.textList[1]]">
                      {{contentData.textList[1].textValue}}
                  </p>
                  <ul>
                      <li >
                        <i class="bi bi-check2-all" :style="[contentData.iconList[0]]" @click="showIconEditModal(contentData.iconList[0])"></i>
                          <span
                              class="clickable effect-shine"
                              @click="showTextEditModal(contentData.textList[2])"
                              :style="[contentData.textList[2]]">
                              {{contentData.textList[2].textValue}}</span>
                      </li>
                      <li >
                        <i class="bi bi-check2-all" :style="[contentData.iconList[1]]" @click="showIconEditModal(contentData.iconList[1])"></i>
                          <span
                              class="clickable effect-shine"
                              @click="showTextEditModal(contentData.textList[3])"
                              :style="[contentData.textList[3]]">
                              {{contentData.textList[3].textValue}}</span>
                      </li>
                      <li >
                        <i class="bi bi-check2-all" :style="[contentData.iconList[2]]" @click="showIconEditModal(contentData.iconList[2])"></i>
                          <span
                              class="clickable effect-shine"
                              @click="showTextEditModal(contentData.textList[4])"
                              :style="[contentData.textList[4]]">
                              {{contentData.textList[4].textValue}}</span>
                      </li>
                  </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                  <p
                      class="clickable effect-shine"
                      @click="showTextEditModal(contentData.textList[5])"
                      :style="[contentData.textList[5]]">
                      {{contentData.textList[5].textValue}}
                  </p>
                  <a
                      href="#"
                      class="btn-learn-more clickable effect-shine"
                      @click="showButtonEditModal(contentData.buttonList[0])"
                      :style="[contentData.buttonList[0]]">{{contentData.buttonList[0].textValue}}</a>
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
  <ButtonEditModal
    :isShowMoadal="isShowButtonEditMoadal"
    :selectedButton="selectedButton"
    @hideModal='hideButtonEditModal'
    @editButtonData="editButtonData"
  />
  <LayoutEditModal
    :isShowMoadal="isShowLayoutEditMoadal"
    :selectedLayoutAttribute="selectedLayoutAttribute"
    @hideModal='hideLayoutEditModal'
    @editLayoutData="editLayoutData"
  />
  <IconEditModal
    :isShowMoadal="isShowIconEditMoadal"
    :selectedIcon="selectedIcon"
    @hideModal='hideIconEditModal'
    @editIconData="editIconData"
  />
</template>
<script>
import { ref, onMounted } from "vue";
import { useMainStore } from '@/modules/base/store/Main/';
import { useTextStore } from '../../../store/modules/TextContent';
import TextEditModal from '../../Modal/TextEditModal.vue';
import LayoutEditModal from '../../Modal/LayoutEditModal.vue'
import ButtonEditModal from '../../Modal/ButtonEditModal.vue'
import IconEditModal from '../../Modal/IconEditModal.vue'
import { isBlackColor } from '@/util/util';
import AOS from "aos";

export default {
  name: "TextLayout3",
  components: {
    TextEditModal,
    LayoutEditModal,
    ButtonEditModal,
    IconEditModal
  },
  setup() {
    const mainStore = useMainStore();
    const textContent = useTextStore();
    const contentData = textContent.getTextLayout3;

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
      textContent.editTextList(contentData, editedText)
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

    // ----------------------------- 아이콘 에딧 ------------------------------- //
    const isShowIconEditMoadal = ref(false);
    const selectedIcon = ref({});

    const showIconEditModal = (icon) => {
      selectedIcon.value = icon
      setIconEditModalState(true)
    };

    const hideIconEditModal = () => {
      setIconEditModalState(false)
    };
    
    const editIconData = (editedText) =>{
      console.log(editedText)
      setIconEditModalState(false)
    };

    const setIconEditModalState = (value) => {
      isShowIconEditMoadal.value = value;
      mainStore.changeState()
    }
    // ----------------------------- 아이콘 에딧 ------------------------------- //
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
      // ----------------------------- 아이콘 에딧 ------------------------------- //
      isShowIconEditMoadal,
      selectedIcon,
      showIconEditModal,
      hideIconEditModal,
      editIconData,
      // ----------------------------- 아이콘 에딧 ------------------------------- //
      contentData
    }
  },
}
</script>

<style>
  /* effect-shine */
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

  /*--------------------------------------------------------------
  # 해당 css
  --------------------------------------------------------------*/
  section {
    padding: 60px 0;
    overflow: hidden;
  }

  .section-bg {
    background-color: #f3f5fa;
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #37517e;
  }

  .section-title p {
    margin-bottom: 0;
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


  .about .content h3 {
    font-weight: 600;
    font-size: 26px;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    padding-left: 28px;
    position: relative;
  }

  .about .content ul li+li {
    margin-top: 10px;
  }

  .about .content ul i {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 20px;
    color: #47b2e4;
    line-height: 1;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }

  .about .content .btn-learn-more {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 32px;
    border-radius: 4px;
    transition: 0.3s;
    line-height: 1;
    color: #47b2e4;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    margin-top: 6px;
    border: 2px solid #47b2e4;
  }

  .about .content .btn-learn-more:hover {
    background: #47b2e4;
    color: #fff;
    text-decoration: none;
  }
</style>