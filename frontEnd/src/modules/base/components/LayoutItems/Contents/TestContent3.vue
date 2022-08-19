<template>
	<div class="bg" style="background-color: #FFEFEF;">
		<div class="container h-50 col-xxl-9 px-4 py-5">
			<div class="row h-100 align-items-center">
				<div class="row-lg-6">
					<h1 @click="showTextEditModal(contentData.textList[0])" class="display-5 fw-thin clickable effect-shine">{{contentData.textList[0].value}}</h1>
					<p @click="showTextEditModal(contentData.textList[1])" class="lead mb-4 clickable effect-shine">{{contentData.textList[1].value}}</p>
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
  name: "TestContent3",
  components: {
    TextEditModal,
  },
  data() {
    return {
      isShowTextEditMoadal: false,
      selectedText:"",
      contentData: {
        textList: [
          {
            key: 1,
            value: "Who we are"
          },
          {
            key: 2,
            value: "Paragraph text comes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
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
      this.contentData.textList.filter(text => { 
        if (text.key === editedText.key) { 
          text.key = editedText.key
          text.value = editedText.value;
        } 
      });
      this.hideTextEditModal()
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