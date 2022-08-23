<template>
	<div class="bg h-75 py-5" style="background-color:#333333">
		<div class="container text-white py-5">
			<div class="row flex-lg-row align-items-center g-5 py-5">
				<div class="col-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display-7 fw-bold lh-1 mb-5 clickable effect-shine">{{contentData.textList[0].value}}</h1>
					<span @click="showTextEditModal(contentData.textList[1])" class="mb-5"><u class="clickable effect-shine">{{contentData.textList[1].value}}</u></span>
				</div>
			</div>
		</div>
    <TextEditModal
      :isShowMoadal="isShowTextEditMoadal"
      :selectedText="selectedText"
      @hideModal='hideTextEditModal'
      @editTextData="editTextData"
    />
	</div>
</template>
<script>
import TextEditModal from '../../Modal/TextEditModal.vue';

export default {
  name: "TextLayout1",
  components: {
    TextEditModal,
  },
  /// ------------------------- LIFE -------------------------///
  created() {
    console.log("생성");
  }, 
  unmounted() {
    console.log(2);
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      isShowTextEditMoadal: false,
      selectedText:{},
      contentData: {
        textList: [
          {
            key: 1,
            value: "Calypso Studio Designs 3d product experiences that transcend reality"
          },
          {
            key: 2,
            value: "Work With us"
          },
        ]
      }
    }
  },
  methods: {
    // 텍스트 에딧 -------------------------------
    showTextEditModal(text) {
      this.selectedText = text
      this.isShowTextEditMoadal = true;
      this.emitter.emit('isOpenedAnyModal');
    },
    hideTextEditModal() {
      this.isShowTextEditMoadal = false;
      // 수정필요
      setTimeout(() => {
        this.emitter.emit('isClosedModal');
      },100)
    },
    editTextData(editedText){
      console.log(editedText)
      this.contentData.textList.filter(text => { 
        if (text.key === editedText.key) { 
          text.key = editedText.key
          text.value = editedText.value;
        } 
      });
      this.isShowTextEditMoadal = false;
      // 수정필요
      setTimeout(() => {
        this.emitter.emit('isClosedModal');
      },100)
    },
    // 텍스트 에딧 -------------------------------
  }
}
</script>

<style>
  /* effect-shine */
  .clickable.effect-shine:hover {
    cursor: pointer;
    -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }

  @-webkit-keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }
    
    to {
      -webkit-mask-position: -50%;
    }
  }
</style>