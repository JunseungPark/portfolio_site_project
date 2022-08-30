<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" style="z-index: 1050 !important;" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div>
            <!-- <input type="type" class="form-control" style="height:300px" placeholder="Selected Text" aria-label="text" v-model="text.value" > -->
            <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="10" v-model="text.textValue"></textarea>
          </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary me-auto p-2" @click="hideModal">닫기</button>
            <div>글씨체 변경</div>
            <SelectVue
              :selectedFont="text.font"
              @changeFont="changeFont"
            />
            <button type="button" class="btn btn-primary" @click="editTextData">데이터 변경</button>
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
  name: "TextEditModal",
  components: {
    SelectVue
  },
  props: {
    selectedText: {
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
    const text = ref({
        key:"",
        textValue:"",
        font:""
    });

    let originalText = null;

    const hideModal = () => {
      text.value.textValue = originalText.textValue
      text.value.font = originalText.font
      context.emit('hideModal');
    }
    const editTextData = () => {
      if (text.value.textValue === '') {
        text.value.textValue = originalText.textValue
        text.value.font = originalText.font
      }
      context.emit('editTextData', text.value);
    }

    const changeFont = (newFont) => {
      text.value.font =newFont
    }

    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        modalController.show()
      } else {
        modalController.hide()
      }
    })

    watch(() => props.selectedText, (newVal) => {
      if (!originalText) originalText = JSON.parse(JSON.stringify(newVal));
      text.value = newVal;
      console.log(text)
    })

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      modalController = new Modal(modal.value);
    });
    /// ------------------------- LIFE -------------------------///
    return {
      googleKey,
      hideModal,
      editTextData,
      changeFont,
      modal,
      text,
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