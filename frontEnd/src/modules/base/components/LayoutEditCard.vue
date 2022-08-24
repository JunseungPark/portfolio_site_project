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

  },
  /// ------------------------- LIFE -------------------------///
  created() {
    this.emitter.on('publishPage', this.publishPage);
  },
  unmounted() {
    this.emitter.off('publishPage');
  },
  /// ------------------------- LIFE -------------------------///
  data() {
    return {
      isShowMoadal: false,
      isOpenModal: false,
      isItemState: false,
      allLayouts:{
        HeaderLayouts: [
          { name: "HeaderLayout1", id: 1, price: 10000, subject:'HeaderLayouts'},
          { name: "TestHeader1", id: 2, price: 22000, subject:'HeaderLayouts'},
          { name: "TestHeader2", id: 3, price: 22000, subject:'HeaderLayouts'},
          { name: "TestHeader3", id: 4, price: 22000, subject:'HeaderLayouts'},
          { name: "TestHeader4", id: 5, price: 22000, subject:'HeaderLayouts'},
        ],
        PictureLayouts: [
          { name: "PictureLayout1", id: 17, price: 10000, subject:'PictureLayouts'},
        ],
        ContentLayouts: [
          { name: "TestContent", id: 7, price: 45000, subject:'Contents'},
          { name: "TestContent1", id: 8, price: 909900, subject:'Contents'},
          { name: "TestContent2", id: 9, price: 900, subject:'Contents'},
          { name: "TestContent3", id: 10, price: 300, subject:'Contents'},
          { name: "TestContent4", id: 11, price: 200, subject:'Contents'},
          { name: "TestContent5", id: 11, price: 200, subject:'Contents'},
        ],
        FeatureLayouts: [
          { name: "TestFeature", id: 13, price: 45000, subject:'Features'},
          { name: "TestFeature1", id: 14, price: 909900, subject:'Features'},
          { name: "TestFeature2", id: 15, price: 900, subject:'Features'},
        ],
        FooterLayouts: [
          { name: "TestFooter", id: 16, price: 30000, subject:'Footers'},
        ],
      },
      newLayouts: [
      ],
    }
  },
  methods: {
    addLayoutTo(layout) {
      console.log(layout)
      this.newLayouts.push(layout);
    },
    deleteLayout(element) {
      this.newLayouts.splice(this.newLayouts.indexOf(element), 1);
    },
    itemSort(array){
      array.sort(function(a,b){
        return a.id - b.id
      });
    },
    publishPage() {
      this.isShowMoadal = true;
    },
    hideModal() {
      this.isShowMoadal = false;
    }
  }
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