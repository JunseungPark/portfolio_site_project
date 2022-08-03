<template>
<b-card style="height: 100%;">
  <b-card no-body class="border-0 overflow-hidden">
    <div class="container" style="height: 100%;">
      <div class="row row-cols-md-1 justify-content-center" style="height: 90%;">
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="selectThema('Headers')"><p class="w-100">HEADER</p></div>
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="selectThema('Contents')"><p class="w-100">CONTENTS</p></div>
        <!-- <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" ><p class="w-100">CONTENTS1</p></div>
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" ><p class="w-100">CONTENTS2</p></div>
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" ><p class="w-100">CONTENTS3</p></div>
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="selectThema('CONTENTS')"><p class="w-100">CONTENTS4</p></div> -->
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="selectThema('Features')"><p class="w-100">FEATURES</p></div>
        <div class="col border border-2 rounded d-flex align-items-center" style="height: 90px;" @click="selectThema('Footers')"><p class="w-100">FOOTER</p></div>
      </div>
    </div>
  </b-card>
</b-card>
</template>

<script>

export default {
  name: "ItemTap",
  data() {
    return {
    }
  },
  methods: {
    selectThema(thema){
      this.$emit('selectThema', thema);
    }
  }
}
</script>


<style>
</style>