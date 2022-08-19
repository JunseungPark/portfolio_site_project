<template>
  <!-- Modal -->
  <div class="modal fade" ref="modal" id="TextEditModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="TextEditModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <img :src="image.imgName" class="previewImg" width="400" height="400" alt="">
          <div class="file-upload-wrapper" data-text="Select your file!">
            <input name="file-upload-field" type="file" class="file-upload-field" value="" @change="onFileChange">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">닫기</button>
          <button type="button" class="btn btn-primary" @click="editImageData">데이터 변경</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

  /// ------------------------- LIFE -------------------------///
  created() {
    this.image.imgName = require(`../../assets/img/logo.svg`);
  }, 
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      modal: null,
      image: {
        key: this.selectedImage,
        imgName: "",
      }
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
    selectedImage(newVal) {
      if(newVal == 0) {
        this.image.imgName = require(`../../assets/img/logo.svg`);
      }

      this.image.key = newVal;
    }
  },
  methods: {
    hideModal() {
      this.$emit('hideModal');
    },
    editImageData() {
      this.$emit('editImageData', this.image);
    },

    // 이미지 주입
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.image.imgName = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    // 이미지 삭제
    removeImage: function (item) {
      item.image = false; 
    }
  }
}
</script>
<style>
.previewImg {
  object-fit: cover;
}

.file-upload-wrapper {
  position: relative;
  width: 100%;
  height: 60px;
}
.file-upload-wrapper:after {
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
}
.file-upload-wrapper:before {
  content: "Upload";
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  height: 60px;
  background: #4daf7c;
  color: #fff;
  font-weight: 700;
  z-index: 25;
  font-size: 16px;
  line-height: 60px;
  padding: 0 15px;
  text-transform: uppercase;
  pointer-events: none;
  border-radius: 0 5px 5px 0;
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
