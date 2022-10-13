<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" style="z-index: 1050 !important;" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mb-3">
            <!-- <input type="type" class="form-control" style="height:300px" placeholder="Selected Text" aria-label="text" v-model="text.value" > -->
            <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="10" v-model="button.textValue"></textarea>
          </div>
          <div class="d-flex gap-2">
            <div class="d-flex flex-column flex-sm-row gap-2 col-4">
              <div>글씨체 변경: </div>
              <input type="color" v-model="button.color">
            </div>
            <div class="d-flex flex-column flex-sm-row gap-2 col-4">
              <div>배경 변경: </div>
              <input type="color" v-model="button.backgroundColor">
            </div>
            <div class="d-flex flex-column flex-sm-row gap-2 col-4" v-if="!button.borderColor == ''">
              <div>보더 변경: </div>
              <input type="color" v-model="button.borderColor">
            </div>
          </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-auto p-2" @click="hideModal">닫기</button>
            <div>글씨체 변경</div>
            <SelectVue
              :selectedFont="button.fontFamily"
              @changeFont="changeFont"
            />
            <button type="button" class="btn btn-primary" @click="editButtonData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import SelectVue from '../Select/Select.vue';
import { useMainStore } from '@/modules/base/store/Main/';

export default {
  name: "ButtonEditModal",
  components: {
    SelectVue,
  },
  props: {
    selectedButton: {
      type: Object,
    },
    isShowMoadal: {
      type: Boolean,
    },
  },

  emits: ["hideModal", "editTextData"],

  setup(props, context) {
    // pinia
    const mainStore = useMainStore();
    // 구글 apikey
    const googleKey = process.env.VUE_APP_GOOGLE_API_KEY ;
    // 모달창 컨트롤러
    const modal = ref(null);
    let modalController = null

    //텍스트 복사
    const button = ref({
        key:"",
        textValue:"",
        fontFamily:"",
        color:"",
        backgroundColor: "",
        borderColor : ""
    });

    let originalButton = {
      key:"",
      textValue:"",
      fontFamily:"",
      color:"",
      backgroundColor: "",
      borderColor : ""
    };

    const hideModal = () => {
      button.value.textValue = originalButton.textValue
      button.value.fontFamily = originalButton.fontFamily
      button.value.color = originalButton.color
      button.value.backgroundColor = originalButton.backgroundColor
      button.value.borderColor = originalButton.borderColor
      context.emit('hideModal');
    }
    const editButtonData = () => {
      if (button.value.textValue === '') {
        button.value.textValue = originalButton.textValue
        button.value.fontFamily = originalButton.fontFamily
        button.value.color = originalButton.color
        button.value.backgroundColor = originalButton.backgroundColor
        button.value.borderColor = originalButton.borderColor
      }
      mainStore.savaTemp();
      context.emit('editButtonData', button.value);
    }

    const changeFont = (newFont) => {
      button.value.fontFamily =newFont
    }

    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        // 텍스트 복사 및 저장
        originalButton = JSON.parse(JSON.stringify(props.selectedButton));
        button.value = props.selectedButton;
        
        modalController.show()
      } else {
        modalController.hide()
      }
    })

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      modalController = new Modal(modal.value);
    });
    /// ------------------------- LIFE -------------------------///
    return {
      googleKey,
      hideModal,
      editButtonData,
      changeFont,
      modal,
      button,
    }
  },
}
</script>
<style>
/* 모달 백그라운드 노터치 */
.modal {
  pointer-events: none;
}
.modal-backdrop.show {
  z-index: 999;
}
</style>