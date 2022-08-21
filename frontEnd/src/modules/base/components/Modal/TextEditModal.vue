<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <div>
            <!-- <input type="type" class="form-control" style="height:300px" placeholder="Selected Text" aria-label="text" v-model="text.value" > -->
            <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="10" v-model="text.value"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">닫기</button>
          <button type="button" class="btn btn-primary" @click="editTextData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import EditInput from '../Input/EditInput.vue'
import { Modal } from 'bootstrap';

export default {
  name: "TextEditModal",
  components: {
    // EditInput,
  },
  props: {
    selectedText: {
      type: Object,
    },
    isShowMoadal: {
      type: Boolean,
    },
  },

  /// ------------------------- LIFE -------------------------///
  created() {
  }, 

  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      modal: null,
      text:{
        key:"",
        value:""
      },
    }
  },
  watch: {
    isShowMoadal(val) {
      if (!this.modal) return
      if (val) {
        this.modal.show()
      } else {
        this.modal.hide()
      }
    },
    selectedText(newVal) {
      this.text = newVal;
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal');
    },
    editTextData() {
      this.$emit('editTextData', this.text);
    }
  }
}
</script>
