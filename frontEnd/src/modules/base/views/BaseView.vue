<template>
  <div>
    <b-row class="g-0">
      <b-col>
        <b-button class="mx-1 mb-2" variant="outline-primary" @click="publishPage">Preview PAGE</b-button>
        <b-button class="mx-1 mb-2" variant="outline-primary" @click="publishPage">Publish PAGE</b-button>
      </b-col>
    </b-row>
    <LayoutEditCard/>
  </div>
</template>

<script>
import LayoutEditCard from '@/modules/base/components/LayoutEditCard.vue'

export default {
  name: "Index",
  components: {
    LayoutEditCard
  },
  data() {
    return {
    }
  },
  methods: {
    publishPage() {
      this.emitter.emit('publishPage');
    },
  }
}
</script>