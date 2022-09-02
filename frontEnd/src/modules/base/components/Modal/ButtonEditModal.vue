<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" style="z-index: 1050 !important;" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div>
            <!-- <input type="type" class="form-control" style="height:300px" placeholder="Selected Text" aria-label="text" v-model="text.value" > -->
            <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="10" v-model="button.textValue"></textarea>
          </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-auto p-2" @click="hideModal">닫기</button>
            <div>글씨체 변경</div>
            <SelectVue
              :selectedFont="button.fontFamily"
              @changeFont="changeFont"
            />
            글
            <input type="color" class="col-1" v-model="button.color">
            배
            <input type="color" class="col-1" v-model="button.backgroundColor">
            보
            <input v-if="!button.borderColor == ''" type="color" class="col-1" v-model="button.borderColor">
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