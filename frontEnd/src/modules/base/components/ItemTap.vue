<template>
  <b-card style="height: 100%;">
    <!-- <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="openClose('Headers')"><p class="w-100">HEADER</p></div>
    <Transition name="collapse">
      <div class="collapsableDiv" v-if="isShow">
        <div class="card-body">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/img/planet1.jpg" class="d-block w-100 h-25" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/planet6.jpg" class="d-block w-100 h-25" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/planet3.jpg" class="d-block w-100 h-25" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Transition> -->
    <b-accordion>
      <b-accordion-item title="Header" class="mb-3">
        <ItemSlider :layoutList='allLayouts.HeaderLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Slider Main" class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.SliderLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Picture Text Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.PictureTextLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Picture Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.PictureLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Text Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.TextLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Send Mail"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.EmailLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Footer"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FooterLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
    </b-accordion>

    <div class="position-absolute bottom-0 end-0">
      <div class=" btn" @click="saveTemp">임시 저장</div>
      <div class=" btn" @click="initializationData">초기화</div>
      <div class=" btn" @click="showPreviewModal">이미지로 저장</div>
      <div class=" btn" @click="sendToKaKao">카톡 내보내기</div>
    </div>

    <PreviewModal
      :isShowMoadal="isShowPreviewMoadal"
      :newLayouts="newLayouts"
      @hideModal='hidePreviewModal'
    />
  </b-card>
</template>

<script>
import { ref }  from 'vue'
import ItemSlider from '@/modules/base/components/Slider/ItemSlider.vue'
import PreviewModal from '@/modules/base/components/Modal/PreviewModal.vue';
//pinia
import { useMainStore } from '@/modules/base/store/Main/';

export default {
  name: "ItemTap",
  components: {
    ItemSlider,
    PreviewModal,
  },
  props: {
    allLayouts: {
      type: Object,
    },
    //현재 보여지고 있는 레이아웃
    newLayouts: {
      type: Array,
    }
  },

  setup(props, {emit}) {
    // pinia
    const mainStore = useMainStore();
    const isShow = ref(false)

    const openClose = (thema) => {
      console.log(thema);
      isShow.value = !isShow.value;
    }

    const addLayoutTo = (layout) => {
      emit('addLayoutTo', layout)
    }

    // ----------------------------- 프리뷰 모달 ------------------------------//
    const isShowPreviewMoadal = ref(false);
    const showPreviewModal = () => {
      isShowPreviewMoadal.value = true
    };

    const hidePreviewModal = () => {
      isShowPreviewMoadal.value = false
    };
    // ----------------------------- 프리뷰 모달 ------------------------------//
    const saveTemp = () => {
      mainStore.saveTemp()
    }

    const initializationData = () => {
      mainStore.initializationData()
    }
    
    const sendToKaKao = () => {
      window.Kakao.init(process.env.VUE_APP_KAKAO_JS_KEY); // 사용할 앱의 JavaScript키를 입력해 주세요.
      window.Kakao.Channel.chat({
        channelPublicId: '_xlrQIxj' // 카카오톡 채널 홈 URL에 명시된 ID를 입력합니다.
      })
    }

    return {
      isShow,
      openClose,
      addLayoutTo,
      saveTemp,
      initializationData,
      isShowPreviewMoadal,
      showPreviewModal,
      hidePreviewModal,
      sendToKaKao
    }
  },
}
</script>


<style>
.accordion-button::after {
  content: ' ';
  height: 0;
  width: 0;
  right: 20px;
  position: absolute;
  border: 10px solid transparent;
  border-top-width: 0;
  border-bottom-color: black;
}
.accordion-button.collapsed {
  background: #fff;
}
.accordion-button:not(.collapsed) {
  background: #fff;
  color: #000;
  box-shadow: none;
}

/* PC 카카오톡 채널 버튼 위치 */
.kakaoChatPc {
    position: fixed;
    z-index: 999;
    right: 20px; /* 화면 오른쪽으로부터의 거리, 숫자만 입력 */
    bottom: 20px; /* 화면 아래쪽으로부터의 거리, 숫자만 입력 */
}
/* 모바일 카카오톡 채널 버튼 위치 */
.kakaoChatMob {
    position: fixed;
    z-index: 999;
    right: 20px; /* 화면 오른쪽으로부터의 거리, 숫자만 입력 */
    bottom: 20px; /* 화면 아래쪽으로부터의 거리, 숫자만 입력 */
}
</style>