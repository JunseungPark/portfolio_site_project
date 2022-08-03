<template>
  <b-row class="g-0">
    <PreviewModal 
      :isShowMoadal="isShowMoadal"
      :newLayouts="newLayouts"
      @hideModal='hideModal'>
    </PreviewModal>
    <b-col xs="10" sm="10" md="10">
      <NewLayout :newLayouts="newLayouts" @deleteLayout='deleteLayout'/>
    </b-col>
    <b-col xs="2" sm="2" md="2">
      <Transition name="fade">
        <ItemTap v-if='!isItemState' @selectThema='selectThema'></ItemTap>
      </Transition>
      <Transition name="fade">
        <ContentsList v-if='isItemState' :itemLayouts="selectedThemaLayouts" @backTo='resetState'/>
      </Transition>
    </b-col>
  </b-row>
</template>

<script>
import NewLayout from '@/modules/base/components/NewLayout.vue'
import ContentsList from '@/modules/base/components/ContentsList.vue'
import ItemTap from '@/modules/base/components/ItemTap.vue'
import PreviewModal from '@/modules/base/components/Modal/PreviewModal.vue'

export default {
  name: "LayoutEditCard",
  components: {
      NewLayout,
      ContentsList,
      ItemTap,
      PreviewModal
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
      selectedThemaLayouts:[],
      newLayouts: [
        { name: "TestHeader", id: 1, price: 10000, subject:'Headers'},
      ],
      HeaderLayouts: [
        { name: "TestHeader1", id: 2, price: 22000, subject:'Headers' },
        { name: "TestHeader2", id: 3, price: 22000, subject:'Headers' },
        { name: "TestHeader3", id: 4, price: 22000, subject:'Headers' },
        { name: "TestHeader4", id: 5, price: 22000, subject:'Headers' },
        { name: "TestHeader5", id: 6, price: 22000, subject:'Headers' },
      ],
      ContentLayouts: [
        { name: "TestContent", id: 7, price: 45000, subject:'Contents'  },
        { name: "TestContent1", id: 8, price: 909900, subject:'Contents'  },
        { name: "TestContent2", id: 9, price: 900, subject:'Contents'  },
        { name: "TestContent3", id: 10, price: 300, subject:'Contents'  },
        { name: "TestContent4", id: 11, price: 200, subject:'Contents'  },
        { name: "TestContent5", id: 12, price: 1000, subject:'Contents'  },
      ],
      FeatureLayouts: [
        { name: "TestFeature", id: 13, price: 45000, subject:'Features' },
        { name: "TestFeature1", id: 14, price: 909900, subject:'Features' },
        { name: "TestFeature2", id: 15, price: 900, subject:'Features' },
      ],
      FooterLayouts: [
        { name: "TestFooter", id: 16, price: 30000, subject:'Footers'},
      ],
    }
  },
  methods: {
    // 테마 변경
    selectThema(thema) {
      this.isItemState = true;
      this.layoutsMapping(thema);
    },
    
    layoutsMapping(thema) {            
      switch(thema) {
        case 'Headers':
          this.selectedThemaLayouts = this.HeaderLayouts;
          break;
        case 'Contents':
          this.selectedThemaLayouts = this.ContentLayouts;
          break;
        case 'Features':
          this.selectedThemaLayouts = this.FeatureLayouts;
          break;
        case 'Footers':
          this.selectedThemaLayouts = this.FooterLayouts;
          break;
        default:
          this.selectedThemaLayouts = this.ContentLayouts;
      }

    },
    resetState() {
      this.isItemState = false;
    },
    deleteLayout(element) {
      this.newLayouts.splice(this.newLayouts.indexOf(element), 1);
      switch(element.subject) {
        case 'Headers':
          this.HeaderLayouts.push(element);
          this.itemSort(this.HeaderLayouts)
          break;
        case 'Contents':
          this.ContentLayouts.push(element);
          this.itemSort(this.ContentLayouts)
          break;
        case 'Features':
          this.FeatureLayouts.push(element);
          this.itemSort(this.FeatureLayouts)
          break;
        case 'Footers':
          this.FooterLayouts.push(element);
          this.itemSort(this.FooterLayouts)
      }
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