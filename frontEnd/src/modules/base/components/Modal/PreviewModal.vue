<template>
  <div class="modal" ref="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body">
          <vue3-simple-html2pdf
            ref="vue3SimpleHtml2pdf"
            :options="pdfOptions"
            :filename="exportFilename"
          >
            <b-list-group v-if="newLayouts !=null">
              <b-list-group-item class="border-0" v-for="layout in newLayouts" :key="layout.id">
                <component :is="findCompoent(layout.subject, layout.name)"/>
              </b-list-group-item>
            </b-list-group>
          </vue3-simple-html2pdf>
        </div>
        <div class="modal-footer">
          <b-button class="mx-1" variant="secondary" @click="hideModal">Close</b-button>
          <b-button class="mx-1 " variant="warning" @click="testKakao">kakao</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { Modal } from 'bootstrap';

export default {
  name: "PreviewModal",
  props: {
    isShowMoadal: {
      type: Boolean,
    },
    newLayouts: {
      type: Array
    }
  },

  /// ------------------------- LIFE -------------------------///
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      modal: null,
      modalVisible:true,
      pdfOptions: {
        margin: 5,
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: 'mm',
          format: 'a3',
          orientation: 'p',
        },
      },
      exportFilename: 'my-custom-file.pdf',
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
  },
  methods: {
    generateReport () {
      this.$refs.vue3SimpleHtml2pdf.download()
    },
    findCompoent(subject, name){
      return defineAsyncComponent(() =>import(`@/modules/base/components/${subject}/${name}.vue`));
    },
    hideModal() {
      this.$emit('hideModal');
    },
    testKakao() {
      // 파일 다운로드
      this.$refs.vue3SimpleHtml2pdf.download()
      window.Kakao.init(process.env.VUE_APP_KAKAO_JS_KEY); // 사용할 앱의 JavaScript키를 입력해 주세요.
      window.Kakao.Channel.chat({
          channelPublicId: '_xlrQIxj' // 카카오톡 채널 홈 URL에 명시된 ID를 입력합니다.
      })
    },
  },
}
</script>

<style>
/* PC 카카오톡 채널 버튼 위치 */
.kakaoChatPc {
    position: fixed;
    z-index: 999;
    right: 20px; /* 화면 오른쪽으로부터의 거리, 숫자만 입력 */
    bottom: 20px; /* 화면 아래쪽으로부터의 거리, 숫자만 입력 */
}
/* 모바일 카카오톡 채널 버튼 위치 */
.kakaoChatMob {
    position: fixed;
    z-index: 999;
    right: 20px; /* 화면 오른쪽으로부터의 거리, 숫자만 입력 */
    bottom: 20px; /* 화면 아래쪽으로부터의 거리, 숫자만 입력 */
}
</style>