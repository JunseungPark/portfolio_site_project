<template>
  <div class="modal" ref="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-body">
          <!-- <vue3-simple-html2pdf
            ref="imgaeRef"
            :options="pdfOptions"
            :filename="exportFilename"
          > -->
          <div ref="imgaeRef">
            <b-list-group v-if="newLayouts">
              <b-list-group-item class="border-0 position-relative p-0" v-for="layout in newLayouts" :key="layout.id">
                <component :is="findCompoent(layout.subject, layout.name)"/>
              </b-list-group-item>
            </b-list-group>
          </div>
          <!-- </vue3-simple-html2pdf> -->
        </div>
        <div class="modal-footer">
          <b-button class="mx-1" variant="secondary" @click="hideModal">Close</b-button>
          <b-button class="mx-1 " variant="warning" @click="generateReport">Save</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { ref, watch, onMounted } from 'vue';
import html2canvas from "html2canvas"
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

  setup(props, context) {
    // 구글 apikey
    const googleKey = process.env.VUE_APP_GOOGLE_API_KEY ;
    // 모달창 컨트롤러
    const modal = ref(null);
    const imgaeRef = ref(null);
    let modalController = null;
    let vue3SimpleHtml2pdf = null;

    let pdfOptions = {
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
    };

    let exportFilename = 'my-custom-file.pdf';
    const generateReport = () => {
      // vue3SimpleHtml2pdf.download()
      // 이미지 다운로드
      html2canvas(vue3SimpleHtml2pdf).then(canvas => {
        var link = document.createElement("a");
        link.download = "download.png";
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click()
      })
    };

    const findCompoent = (subject, name) => {
      return defineAsyncComponent(() =>import(`@/modules/base/components/LayoutItems/${subject}/${name}.vue`));
    }
    
    const hideModal = () => {
      context.emit('hideModal');
    };
    const testKakao = () => {
      // 파일 다운로드
      this.$refs.vue3SimpleHtml2pdf.download()
    };
    watch(() => props.isShowMoadal, (newVal) => {
      if (!modalController) return
      if (newVal) {
        modalController.show()
      } else {
        modalController.hide()
      }
    })

    /// ------------------------- LIFE -------------------------///
    onMounted(()=> {
      modalController = new Modal(modal.value);
      vue3SimpleHtml2pdf = imgaeRef.value;
    });
    /// ------------------------- LIFE -------------------------///
    return {
      googleKey,
      hideModal,
      exportFilename,
      pdfOptions,
      modal,
      generateReport,
      findCompoent,
      testKakao,
      imgaeRef
    }
  }

}
</script>

<style>

</style>