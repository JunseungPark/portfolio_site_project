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
      <ItemTap :allLayouts="allLayouts" :newLayouts="newLayouts" @addLayoutTo='addLayoutTo'></ItemTap>
    </b-col>
  </b-row>
</template>

<script>
import { ref } from 'vue'
import { useMainStore } from '../store/Main';
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
    // pinia
    const mainStore = useMainStore();

    const newLayouts = ref(mainStore.getNewLayout);
    const isShowModal = ref(false);
    const isOpenModal = ref(false);
    const isItemState = ref(false);
    let allLayouts = {
      HeaderLayouts: [
        { 
          name: "HeaderLayout1", 
          id: "h1", 
          price: 10000, 
          subject:'HeaderLayouts', 
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "HeaderLayout2", 
          id: "h2", 
          price: 22000, 
          subject:'HeaderLayouts',
          layoutName: "사이트 헤드라인 디자인 #2", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "HeaderLayout3", 
          id: "h3", 
          price: 22000, 
          subject:'HeaderLayouts',
          layoutName: "사이트 헤드라인 디자인 #3", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "HeaderLayout4", 
          id: "h4", 
          price: 22000, 
          subject:'HeaderLayouts',
          layoutName: "사이트 헤드라인 디자인 #4", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "HeaderLayout5", 
          id: "h5", 
          price: 22000, 
          subject:'HeaderLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      PictureLayouts: [
        { 
          name: "PictureLayout1", 
          id: "p1", 
          price: 10000, 
          subject:'PictureLayouts',
          layoutName: "사이트 헤드라인 디자인 #5", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      PictureTextLayouts: [
        { 
          name: "PictureTextLayout1", 
          id: "pt1", 
          price: 45000, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "PictureTextLayout2", 
          id: "pt2", 
          price: 909900, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "PictureTextLayout3", 
          id: "pt3", 
          price: 900, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "PictureTextLayout4", 
          id: "pt4", 
          price: 900, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #4", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "PictureTextLayout5", 
          id: "pt5", 
          price: 900, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #5", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "PictureTextLayout6", 
          id: "pt6", 
          price: 900, 
          subject:'PictureTextLayouts',
          layoutName: "사이트 헤드라인 디자인 #6", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      TextLayouts: [
        { 
          name: "TextLayout1", 
          id: "t1", 
          price: 45000, 
          subject:'TextLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "TextLayout2", 
          id: "t2", 
          price: 909900, 
          subject:'TextLayouts',
          layoutName: "사이트 헤드라인 디자인 #2", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
        { 
          name: "TextLayout3", 
          id: "t3", 
          price: 909900, 
          subject:'TextLayouts',
          layoutName: "사이트 헤드라인 디자인 #3", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      SliderLayouts: [
        { 
          name: "SliderLayout1", 
          id: "s1", 
          price: 30000, 
          subject:'SliderLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      EmailLayouts: [
        { 
          name: "EmailLayout1", 
          id: "e1", 
          price: 30000, 
          subject:'EmailLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
      FooterLayouts: [
        { 
          name: "FooterLayout1", 
          id: "f1", 
          price: 10000, 
          subject:'FooterLayouts',
          layoutName: "사이트 헤드라인 디자인 #1", 
          layoutDetail: "이 디자인은 심플한 디자인으로서 조금은 더 깔금한 느낌에 홈페이지를 제작할 수 있도록 방향을 제시합니다. 심플한 화이트 페이지를 구상하고 있다면 이게 가장 좋은 선택일 수도~?"
        },
      ],
    }

    const addLayoutTo = (layout) => {
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