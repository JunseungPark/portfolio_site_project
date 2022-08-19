<template>
	<div class="bg">
		<div class="row g-0 hover06">
			<div @click="showImageEditModal" class="col hover06_1">
				<img src="../../../assets/img/nasa1.jpg" class="img-fluid d-block" alt="...">
			</div>
			<div class="col hover06_1">
				<img src="../../../assets/img/nasa2.jpg" class="img-fluid d-block" alt="...">
			</div>
			<div class="col hover06_1">
				<img src="../../../assets/img/nasa3.jpg" class="img-fluid d-block" alt="...">
			</div>
			<div class="col hover06_1">
				<img src="../../../assets/img/nasa4.jpg" class="img-fluid d-block" alt="...">
			</div>
		</div>

    <ImageEditModal
      :isShowMoadal="isShowImageEditMoadal"
      @hideModal='hideImageEditModal'
    />
	</div>
</template>
<script>
import ImageEditModal from "../../Modal/ImageEditModal.vue";

export default {
  name: "TestContent",
  components: {
    ImageEditModal,
  },
  data() {
    return {
      isShowImageEditMoadal: false,
    }
  },
  methods: {
    showImageEditModal() {
      this.isShowImageEditMoadal = true;
    },
    hideImageEditModal() {
      this.isShowImageEditMoadal = false;
    },
  }
}
</script>