<template>
  <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white"><a href="#" class="text-reset text-decoration-none effect-shine" @click="t">Dark mode hero</a></h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">
          <a href="#" class="text-reset text-decoration-none effect-shine" @click="t">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</a>
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "TestContent1",
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    t() {
      alert(1)
    }
  }
}
</script>

<style>

/* linkone */

/* effect-shine */
a.effect-shine:hover {
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