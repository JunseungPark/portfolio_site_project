<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="IconEditModal" style="z-index: 1050 !important;" data-bs-backdrop="static" aria-labelledby="IconEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex flex-column flex-wrap justify-content-start align-items-center">
            <div class="row  w-100">
              <div class="col-3">컬러 :</div>
              <input type="color" class="col-1" v-model="icon.color">
            </div>
          </div>
        </div>
        <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary me-auto p-2" @click="hideModal">닫기</button> -->
            <button type="button" class="btn btn-primary" @click="editIconData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
  name: "IconEditModal",
  components: {
  },
  props: {
    selectedIcon: {
      type: Object,
    },
    isShowMoadal: {
      type: Boolean,
    },
  },

  emits: ["hideModal", "editTextData"],

  setup(props, context) {
    // 모달창 컨트롤러
    const modal = ref(null);
    let modalController = null

    //텍스트 복사
    const icon = ref({
        color:"",
    });

    let originalIcon = {
        color:""
    };

    const hideModal = () => {
      //수정해야됨
      // icon.value = originalIcon
      context.emit('hideModal');
    }

    const editIconData = () => {
      context.emit('editIconData');
    }

    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        originalIcon = JSON.parse(JSON.stringify(props.selectedIcon));
        icon.value = props.selectedIcon;
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
      hideModal,
      editIconData,
      originalIcon,
      modal,
      icon,
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