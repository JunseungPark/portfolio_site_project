<template>
  <b-card style="height: 100%;">
    <!-- <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="openClose('Headers')"><p class="w-100">HEADER</p></div>
    <Transition name="collapse">
      <div class="collapsableDiv" v-if="isShow">
        <div class="card-body">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/img/planet1.jpg" class="d-block w-100 h-25" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/planet6.jpg" class="d-block w-100 h-25" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/planet3.jpg" class="d-block w-100 h-25" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Transition> -->
    <b-accordion>
      <b-accordion-item title="Header" class="mb-3">
        <ItemSlider :layoutList='allLayouts.HeaderLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Slider Main" class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.ContentLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Picture Text Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FeatureLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Picture Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FeatureLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Text Main"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FeatureLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Send Mail"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FeatureLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
      <b-accordion-item title="Footer"  class="mb-3 border-top">
        <ItemSlider :layoutList='allLayouts.FooterLayouts' @addLayoutTo="addLayoutTo" />
      </b-accordion-item>
    </b-accordion>

    <div class="position-absolute bottom-0 end-0">
      <div>이미지로 저장</div>
      <div>카톡 내보내기</div>
    </div>
  </b-card>
</template>

<script>
import ItemSlider from '@/modules/base/components/Slider/ItemSlider.vue'

export default {
  name: "ItemTap",
  components: {
    ItemSlider,
  },
  props: {
    allLayouts: {
      type: Object,
    }
  },
  data() {
    return {
      isShow : false
    }
  },
  methods: {
    openClose(thema){
      this.isShow = !this.isShow;
      console.log(thema);
      // this.$emit('selectThema', thema);
    },
    addLayoutTo(layout) {
      this.$emit('addLayoutTo', layout)
    }
  }
}
</script>


<style>
.accordion-button::after {
  content: ' ';
  height: 0;
  width: 0;
  right: 20px;
  position: absolute;
  border: 10px solid transparent;
  border-top-width: 0;
  border-bottom-color: black;
}
.accordion-button.collapsed {
  background: #fff;
}
.accordion-button:not(.collapsed) {
  background: #fff;
  color: #000;
  box-shadow: none;
}
</style>