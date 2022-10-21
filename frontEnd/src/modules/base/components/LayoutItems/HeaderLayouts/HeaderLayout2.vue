<template>
  <div>
    <!-- 수정 방법
    1. 전체 스타일
    2. 엘리멘트 스타일
    3. 텍스트 or 이미지 or 레이아웃 모달 오프너 추가
    4. 데이터 맵핑 ex) 텍스트 , 이미지 -->
    <!-- Html -->
    <!-- ======= Header ======= -->
    <header id="header" :style="[contentData.layoutAttribute]">
      <div class="container d-flex align-items-center">

        <h1 class="logo me-auto clickable effect-shine" @click="showTextEditModal(contentData.textList[0])" :style="[contentData.textList[0]]">{{contentData.textList[0].textValue}}</h1>
        <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active clickable effect-shine" @click="showTextEditModal(contentData.textList[1])" :style="[contentData.textList[1]]">{{contentData.textList[1].textValue}}</a></li>
          <li><a class="nav-link scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[2])" :style="[contentData.textList[2]]">{{contentData.textList[2].textValue}}</a></li>
          <li><a class="nav-link scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[3])" :style="[contentData.textList[3]]">{{contentData.textList[3].textValue}}</a></li>
          <li><a class="nav-link scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[4])" :style="[contentData.textList[4]]">{{contentData.textList[4].textValue}}</a></li>
          <li><a class="nav-link scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[5])" :style="[contentData.textList[5]]">{{contentData.textList[5].textValue}}</a></li>
          <li class="dropdown"><a @click="showTextEditModal(contentData.textList[6])" :style="[contentData.textList[6]]"><span>{{contentData.textList[6].textValue}}</span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#" @click="showTextEditModal(contentData.textList[7])" :style="[contentData.textList[7]]">{{contentData.textList[7].textValue}}</a></li>
            <li><a href="#" @click="showTextEditModal(contentData.textList[8])" :style="[contentData.textList[8]]">{{contentData.textList[8].textValue}}</a></li>
            <li><a href="#" @click="showTextEditModal(contentData.textList[9])" :style="[contentData.textList[9]]">{{contentData.textList[9].textValue}}</a></li>
            <li><a href="#" @click="showTextEditModal(contentData.textList[10])" :style="[contentData.textList[10]]">{{contentData.textList[10].textValue}}</a></li>
          </ul>
          </li>
          <li><a class="nav-link scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[11])" :style="[contentData.textList[11]]">{{contentData.textList[11].textValue}}</a></li>
          <li><a class="getstarted scrollto clickable effect-shine" @click="showTextEditModal(contentData.textList[12])" :style="[contentData.textList[12]]">{{contentData.textList[12].textValue}}</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

      </div>
    </header>

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
    <LayoutEditModal
      :isShowMoadal="isShowLayoutEditMoadal"
      :selectedLayoutAttribute="selectedLayoutAttribute"
      @hideModal='hideLayoutEditModal'
      @editLayoutData="editLayoutData"
    />
  </div>
</template>
<script>
import { ref } from "vue";
import { useMainStore } from '@/modules/base/store/Main/';
import { useHeaderStore } from '../../../store/modules/Header';
import TextEditModal from '../../Modal/TextEditModal.vue';
import LayoutEditModal from '../../Modal/LayoutEditModal.vue'
import { isBlackColor } from '@/util/util';

export default {
  name: "HeaderLayout2",
  components: {
    TextEditModal,
    LayoutEditModal
  },
  emits: ["isOpendAnyModal", "isClosedModal"],
  setup() {
    const mainStore = useMainStore();
    const header = useHeaderStore();
    const contentData = header.getHeaderLayout2;
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
      setTextEditModalState(true);
    };

    const hideTextEditModal = () => {
      setTextEditModalState(false);
    };
    
    const editTextData = (editedText) =>{
      header.editTextList(contentData, editedText)
      setTextEditModalState(false);
    };

    const setTextEditModalState = (value) => {
      isShowTextEditMoadal.value = value;
      mainStore.changeState()
    }
    
    // ----------------------------- 텍스트 에딧 ------------------------------- //

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
      contentData,
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
 /* effect-setting */
  .layoutSetting:hover {
    transform: rotate( 720deg );
  }

  /*--------------------------------------------------------------
  # 해당 css
  --------------------------------------------------------------*/

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
	#header {
    background: #37517e;
    transition: all 0.5s;
    z-index: 997;
    padding: 15px 0;
  }

  #header.header-scrolled,
  #header.header-inner-pages {
    background: rgba(40, 58, 90, 0.9);
  }

  #header .logo {
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* #header .logo a {
    color: #fff;
  } */

  #header .logo img {
    max-height: 40px;
  }

  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {

  }

  .navbar .getstarted,
  .navbar .getstarted:focus {
    padding: 8px 20px;
    margin-left: 30px;
    border-radius: 50px;
    font-size: 14px;
    border: 2px solid;
    font-weight: 600;
  }

  .navbar .getstarted:hover,
  .navbar .getstarted:focus:hover {
    color: #fff;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 14px;
    text-transform: none;
    font-weight: 500;
    color: #0c3c53;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover>a {
    color: #47b2e4;
  }

  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
</style>