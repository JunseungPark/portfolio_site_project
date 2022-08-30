<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="image.imgName" class="previewImg" width="400" height="400" alt="">
        </div>
        <div class="modal-footer flex-row">
          <button type="button" class="btn btn-secondary  me-auto p-2" @click="hideModal">닫기</button>
          <div class="file-upload-wrapper">
            <input name="file-upload-field" type="file" class="file-upload-field" value="" @change="onFileChange">
          </div>
          <button type="button" class="btn btn-primary" @click="editImageData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
  name: "ImageEditModal",
  props: {
    selectedImage: {
      type: Number,
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

    //이미지 복사
    const image = ref({
        key: props.selectedImage,
        imgName: require(`../../assets/img/defalutImg.svg`)
    });

    const hideModal = () => {
      context.emit('hideModal');
    }
    const editImageData = () => {
      context.emit('editImageData', image.value);
    }

    // 이미지 주입
    const onFileChange = (e) => {
      var files = e.target.files;
      if (!files.length)
        return;
      createImage(files[0]);
    }

    // 이미지 적용
    const createImage = (file) => {
      // var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        image.value.imgName = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    // 이미지 삭제
    const removeImage = (item) => {
      item.image = false; 
    }

    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        modalController.show()
      } else {
        modalController.hide()
      }
    })

    watch(() => props.selectedImage, (newVal) => {
      if(newVal == 0) {
        image.value.imgName = require(`../../assets/img/logo.svg`);
      }
      image.value.key = newVal;
    })

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      modalController = new Modal(modal.value);
    });
    /// ------------------------- LIFE -------------------------///

    return {
      hideModal,
      editImageData,
      onFileChange,
      createImage,
      removeImage,
      modal,
      image
    }
  },
}
</script>
<style>
/* 모달 백그라운드 노터치 */
.modal {
  pointer-events: none;
}
.previewImg {
  object-fit: cover;
}

.file-upload-wrapper {
  position: relative;
  width: 30%;
}
/* .file-upload-wrapper:after {
  content: attr(data-text);
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  padding: 10px 15px;
  display: block;
  width: calc(100% - 40px);
  pointer-events: none;
  z-index: 20;
  height: 40px;
  line-height: 40px;
  color: #999;
  border-radius: 5px 10px 10px 5px;
  font-weight: 300;
} */
.file-upload-wrapper:before {
  content: "사진 변경 하기";
  position: absolute;
  top: -20px;
  right: 0;
  display: inline-block;
  background: #4daf7c;
  color: #fff;
  font-weight: 500;
  z-index: 25;
  font-size: 15px;
  line-height: inherit;
  padding: 8px 15px;
  text-transform: uppercase;
  pointer-events: none;
  border-radius: 5px;
}
.file-upload-wrapper:hover:before {
  background: #3d8c63;
}
.file-upload-wrapper input {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 40px;
  margin: 0;
  padding: 0;
  display: block;
  cursor: pointer;
  width: 100%;
}
</style>
