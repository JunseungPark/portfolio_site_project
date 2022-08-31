<template>
  <Chrome v-model="colors"/>
</template>
<script>
import { Chrome } from '@ckpack/vue-color';

export default {
  components: {
    Chrome,
  },
  setup() {
    return {
      colors: '#194D33A8' // etc: { h: 150, s: 0.66, v: 0.30 }, { r: 255, g: 0, b: 0 }, '#194d33'
    }
  }
}
</script>