<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" style="z-index: 1050 !important;" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex flex-column flex-wrap justify-content-start align-items-center">
            <div class="row align-items-center w-100 mb-3">
              <div class="col-3">글씨체: </div>
              <SelectVue
                class="col-6"
                :selectedFont="layoutAttribute.font"
                @changeFont="changeFont"
              />
            </div>
            <div class="row  w-100 mb-3">
              <div class="col-3">폰트 컬러 :</div>
              <input type="color" class="col-1" v-model="layoutAttribute.textColor">
            </div>
            <div class="row  w-100">
              <div class="col-3">백그라운드 컬러 :</div>
              <input type="color" class="col-1" v-model="layoutAttribute.backgroundColor">
            </div>
          </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-auto p-2" @click="hideModal">닫기</button>
            <button type="button" class="btn btn-primary" @click="editLayoutData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import SelectVue from '../Select/Select.vue';
// import ColorPicker from '../Select/ColorPicker.vue'

export default {
  name: "LayoutEditModal",
  components: {
    SelectVue,
    // ColorPicker
  },
  props: {
    selectedLayoutAttribute: {
      type: Object,
    },
    isShowMoadal: {
      type: Boolean,
    },
  },

  emits: ["hideModal", "editTextData"],

  setup(props, context) {
    // 구글 apikey
    const googleKey = process.env.VUE_APP_GOOGLE_API_KEY ;
    // 모달창 컨트롤러
    const modal = ref(null);
    let modalController = null

    //텍스트 복사
    const layoutAttribute = ref({
        font:"",
        textColor:"",
        backgroundColor:""
    });

    let originalLayoutAttribute = null;

    const hideModal = () => {
      layoutAttribute.value = originalLayoutAttribute
      context.emit('hideModal');
    }
    const editLayoutData = () => {
      context.emit('editLayoutData');
    }

    const changeFont = (newFont) => {
      layoutAttribute.value.font =newFont
    }

    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        modalController.show()
      } else {
        modalController.hide()
      }
    })

    watch(() => props.selectedLayoutAttribute, (newVal) => {
      console.log(newVal)
      if (!originalLayoutAttribute) originalLayoutAttribute = JSON.parse(JSON.stringify(newVal));
      layoutAttribute.value = newVal;
      console.log(layoutAttribute.value.font)
    })

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      modalController = new Modal(modal.value);
    });
    /// ------------------------- LIFE -------------------------///
    return {
      googleKey,
      hideModal,
      editLayoutData,
      changeFont,
      modal,
      layoutAttribute,
    }
  },
}
</script>
<style>
/* 모달 백그라운드 노터치 */
.modal .modal-dialog{
  pointer-events: none;
}
.modal-backdrop.show {
  z-index: 999;
}

</style>