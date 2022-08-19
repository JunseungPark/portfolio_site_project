<template>
  <div>
    <header class="p-3 text-white" style="background-color:#333333">
      <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between">
            <div @click="showTextEditModal(contentData.textList.text1)" class="col clickable effect-shine">{{contentData.textList.text1.value}}</div>

            <ul class="nav col-8 col-lg-8 me-lg-auto mb-2 justify-content-end mb-md-0">
              <li @click="showTextEditModal(contentData.textList.text2)"><a href="#" class="nav-link px-2 text-secondary clickable effect-shine">{{contentData.textList.text2.value}}</a></li>
              <li @click="showTextEditModal(contentData.textList.text3)"><a href="#" class="nav-link px-2 text-white clickable effect-shine">{{contentData.textList.text3.value}}</a></li>
              <li @click="showTextEditModal(contentData.textList.text4)"><a href="#" class="nav-link px-2 text-white clickable effect-shine">{{contentData.textList.text4.value}}</a></li>
              <li @click="showTextEditModal(contentData.textList.text5)"><a href="#" class="nav-link px-2 text-white clickable effect-shine">{{contentData.textList.text5.value}}</a></li>
              <li @click="showTextEditModal(contentData.textList.text6)"><a href="#" class="nav-link px-2 text-white clickable effect-shine">{{contentData.textList.text6.value}}</a></li>
            </ul>

            <ul class="nav col-1 col-lg-1 mb-4 justify-content-end mb-md-0">
              <li class="me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </li>
            </ul> 
        </div>
      </div>
    </header>

    <TextEditModal
      :isShowMoadal="isShowTextEditMoadal"
      :selectedText="selectedText"
      @hideModal='hideTextEditModal'
    />
  </div>
</template>
<script>
import TextEditModal from '../../Modal/TextEditModal.vue';

export default {
  name: "TestHeader",
  components: {
    TextEditModal,
  },
  data() {
    return {
      isShowTextEditMoadal: false,
      selectedText:"",
      contentData: {
        textList: {
          text1: {
            key: 1,
            value: "HomePage"
          },
          text2: {
            key: 2,
            value: "Home"
          },
          text3: {
            key: 3,
            value: "About"
          },
          text4: {
            key: 4,
            value: "Work"
          },
          text5: {
            key: 5,
            value: "Team"
          },
          text6: {
            key: 6,
            value: "Contact"
          },
        }
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
    // editTextData(text){
    //   console.log(text)
    //   this.isShowTextEditMoadal = false;
    // }
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