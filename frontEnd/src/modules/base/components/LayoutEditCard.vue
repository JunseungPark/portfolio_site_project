<template>
  <b-row class="g-0">
    <PreviewModal 
      :isShowMoadal="isShowMoadal"
      :newLayouts="newLayouts"
      @hideModal='hideModal'>
    </PreviewModal>
    <b-col xs="9" sm="9" md="9">
      <NewLayout :newLayouts="newLayouts" @deleteLayout='deleteLayout'/>
    </b-col>
    <b-col xs="3" sm="3" md="3">
      <ItemTap :allLayouts="allLayouts"  @addLayoutTo='addLayoutTo'></ItemTap>
    </b-col>
  </b-row>
</template>

<script>
import { ref } from 'vue'
import NewLayout from '@/modules/base/components/NewLayout.vue'
// import ContentsList from '@/modules/base/components/ContentsList.vue'
import ItemTap from '@/modules/base/components/ItemTap.vue'
import PreviewModal from '@/modules/base/components/Modal/PreviewModal.vue'

export default {
  name: "LayoutEditCard",
  components: {
      NewLayout,
      // ContentsList,
      ItemTap,
      PreviewModal
  },
  
  setup() { 
    const isShowModal = ref(false);
    const isOpenModal = ref(false);
    const isItemState = ref(false);
    let allLayouts = {
      HeaderLayouts: [
        { name: "HeaderLayout1", id: "h1", price: 10000, subject:'HeaderLayouts'},
        { name: "HeaderLayout2", id: "h2", price: 22000, subject:'HeaderLayouts'},
        { name: "HeaderLayout3", id: "h3", price: 22000, subject:'HeaderLayouts'},
        { name: "HeaderLayout4", id: "h4", price: 22000, subject:'HeaderLayouts'},
        { name: "HeaderLayout5", id: "h5", price: 22000, subject:'HeaderLayouts'},
      ],
      PictureLayouts: [
        { name: "PictureLayout1", id: "p1", price: 10000, subject:'PictureLayouts'},
      ],
      PictureTextLayouts: [
        { name: "PictureTextLayout1", id: "pt1", price: 45000, subject:'PictureTextLayouts'},
        { name: "PictureTextLayout2", id: "pt2", price: 909900, subject:'PictureTextLayouts'},
        { name: "PictureTextLayout3", id: "pt3", price: 900, subject:'PictureTextLayouts'},
      ],
      TextLayouts: [
        { name: "TextLayout1", id: "t1", price: 45000, subject:'TextLayouts'},
        { name: "TextLayout2", id: "t2", price: 909900, subject:'TextLayouts'},
      ],
      SliderLayouts: [
        { name: "SliderLayout1", id: "s1", price: 30000, subject:'SliderLayouts'},
      ],
      EmailLayouts: [
        { name: "EmailLayout1", id: "e1", price: 30000, subject:'EmailLayouts'},
      ],
      FooterLayouts: [
        { name: "FooterLayout1", id: "f1", price: 10000, subject:'FooterLayouts'},
      ],
    }

    const newLayouts = ref([]);

    const addLayoutTo = (layout) => {
      console.log(layout);
      newLayouts.value.push(layout)
    }

    const deleteLayout = (element) => {
      newLayouts.value.splice(newLayouts.value.indexOf(element), 1);
    }
    // array sort
    const itemSort = (array) => {
      array.sort(function(a,b){
        return a.id - b.id
      });
    }

    const publishPage = () => {
      this.isShowMoadal = true;
    }

    const hideModal = () => {
      this.isShowMoadal = false;
    }

    return {
      isShowModal,
      isOpenModal,
      isItemState,
      allLayouts,
      newLayouts,
      addLayoutTo,
      deleteLayout,
      itemSort,
      publishPage,
      hideModal
    }
  },

  // eventbus 어떻게 할꺼니?
  /// ------------------------- LIFE -------------------------///
  created() {
    this.emitter.on('publishPage', this.publishPage);
  },
  unmounted() {
    this.emitter.off('publishPage');
  },
  /// ------------------------- LIFE -------------------------///
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>