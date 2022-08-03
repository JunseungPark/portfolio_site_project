<template>
<b-card>
  <b-row class="g-0">
    Price : {{caluPrice()}} 원
  </b-row>
  <b-card no-body class="overflow-hidden">
    <b-row class="g-0">
      <b-col>
        <b-list-group>
            <draggable 
              :list="newLayouts" 
              group="people"
              item-key="id"
              :component-data="{
                tag: 'ul',
                type: 'transition-group',
                name: !drag ? 'flip-list' : null
              }"
              @change="onChange"
              style="min-height: 100vh"
              v-bind="dragOptions">
              <template #item="{element}">
                <b-list-group-item class="border-0 position-relative" :key="element.id">
                  <b-button class="mx-1 position-absolute top-0 end-0" variant="outline-danger" @click="deleteLayout(element)">delete</b-button>
                  <component :key="element.id" :is="findCompoent(element.subject, element.name)"/>
                </b-list-group-item>
              </template>
            </draggable>
        </b-list-group>
      </b-col>
    </b-row>
  </b-card>
</b-card>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import draggable from 'vuedraggable'
import { filterComma } from '../../../util/util';

export default {
  name: "NewLayout",
  components: {
        draggable,
  },
  props: {
    newLayouts: {
      type: Array,
    }
  },
  computed: {
    dragOptions() {
      return {
        group: {
          name: 'g1'
        },
        scrollSensitivity: 200,
        forceFallback: true,
        disabled: false,
        animation: 200,
        ghostClass: "ghost"
      };
    },
  },
  data() {
    return {
      drag: false,
    }
  },
  /// ------------------------- LIFE -------------------------///
  /// ------------------------- LIFE -------------------------///
  methods: {
    findCompoent(subject, name){
      return defineAsyncComponent(() =>import(`@/modules/base/components/${subject}/${name}.vue`));
    },

    caluPrice() {
      var price = 0;
      this.newLayouts.forEach(element => {
        price += element.price;
      });

      return filterComma(price)
    },

    deleteLayout(element) {
      this.$emit('deleteLayout', element)
    }
  }
}
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>