<template>
  <b-card>
    <b-button class="mx-1 mb-2" variant="outline-secondary" @click="backTo()">Back</b-button>
    <b-card no-body class="overflow-hidden">
      <b-row class="g-0">
        <b-col class="h-auto">
          <b-list-group  class="h-100">
              <draggable 
                :list="itemLayouts" 
                group="people" 
                itemKey="name"
                :component-data="{
                  tag: 'ul',
                  type: 'transition-group',
                  name: !drag ? 'flip-list' : null
                }"
                v-bind="dragOptions">
                <template #item="{element}">
                  <b-list-group-item >{{element.name}} </b-list-group-item>
                </template>
              </draggable>
          </b-list-group>
        </b-col>
      </b-row>
    </b-card>
  </b-card>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: "ContentsList",
  components: {
    draggable
  },
  props: {
    itemLayouts: {
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
    }
  },
  data() {
    return {
      drag: false,
    }
  },

  methods: {
    backTo() {
      this.$emit('backTo')
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