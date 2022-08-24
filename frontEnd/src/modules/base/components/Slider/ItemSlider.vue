<template>
  <div :id="'carouselExampleControls'+subject" class="carousel slide rounded-0" data-bs-ride="carousel">
    <div class="carousel-inner" style="overflow: hidden;">
      <div v-for="(layout, index) in layoutList" :key="layout" :class="(index == 0) ? 'carousel-item active' : 'carousel-item'" @click="addLayoutTo(layout)">
        <img :src="getImage(index)" class="d-block w-100 imgHover" alt="...">
        <div class="cover-img">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-plus" viewBox="0 0 16 16">
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
          </svg>
        </div>
        <div class="carousel-caption d-none d-md-block text-white">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleControls'+subject" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleControls'+subject" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "ItemSlieder",
  props: {
    layoutList: {
      type: Array,
    }
  },

  emits: ["addLayoutTo"],

  setup(props, context) {
    const subject = ref(props.layoutList[0].subject)

    const getImage = (index) => {
      return require("../../assets/img/nasa"+ (index+1) +".jpg");
    }

    const addLayoutTo = (layout) => {
      context.emit('addLayoutTo', layout)
    }
    return {
      subject,
      getImage,
      addLayoutTo,
    }
  },
}
</script>


<style>
.carousel-item:hover .imgHover {
  cursor: grabbing;
  animation: animate-dash 20s linear infinite;
  stroke: #0e0e0e;
  fill: #f5f5f5;
  transform: scale(1.01);
  transform-origin: center;
  transition: all 0.25s ease-in-out;
}
.carousel-item:hover .imgHover {
  opacity: 0.2;
  transition: all 0.1s ease-in-out;
}
.carousel-item:hover .cover-img {
  opacity: 1;
  transition: all 0.25s ease-in-out;
}

@keyframes animate-dash {
  to {
    stroke-dashoffset: 25%;
  }
}

.cover-img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>