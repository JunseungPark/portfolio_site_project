<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/modules/base/components/Header/Header.vue'

export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {
    }
  }
}
</script>