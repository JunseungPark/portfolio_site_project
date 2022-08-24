<template>
  <b-card no-body>
    <!-- <b-row class="g-0">
      Price : {{caluPrice()}} 원
    </b-row> -->
    <b-card v-if="newLayouts.length" no-body class="overflow-hidden">
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
                v-bind="dragOptions"
                :draggable= false>
                <template #item="{element}">
                  <b-list-group-item class="border-0 position-relative p-0 not-draggable">
                    <b-button class="mx-3 position-absolute top-0 end-0 mt-3" variant="outline-danger" @click="deleteLayout(element)">제 거</b-button>
                    <component :key="element.id" :is="findCompoent(element.subject, element.name)"/>
                  </b-list-group-item>
                </template>
              </draggable>
          </b-list-group>
        </b-col>
      </b-row>
    </b-card>

    <b-card v-if="!newLayouts.length" text-variant="white" class="text-center m-4" style="background-color:#8A8989; height: 90vh;">
      <div class="d-flex flex-column justify-content-center align-items-center h-100">
        <div class="mb-5">
          <img src="../assets/img/logo.svg" alt="">
        </div>
        <div class="mb-5">
          <h1>오른쪽에서 원하는 디자인을 선택해주세요!</h1>
        </div>
        <div class="mt-3">
          <p class="display-6">
            Select From The Right...
          </p>
        </div>
        <div>
          <img src="../assets/img/progress.svg" alt="">
        </div>
      </div>
    </b-card>
  </b-card>
</template>

<script>
import { defineAsyncComponent, ref, computed } from 'vue'
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

  setup(context, {emit}) {
    const drag = ref(false);
    const isDraggable = ref(false);

    const dragOptions = computed(() => {
      return {
        group: {
          name: 'g1'
        },
        scrollSensitivity: 200,
        forceFallback: true,
        disabled: false,
        animation: 200,
        ghostClass: "ghost"
      }
    });

    const findCompoent = (subject, name) => {
      return defineAsyncComponent(() =>import(`@/modules/base/components/LayoutItems/${subject}/${name}.vue`));
    }

    const caluPrice = () =>{
      var price = 0;
      this.newLayouts.forEach(element => {
        price += element.price;
      });

      return filterComma(price)
    }

    const deleteLayout = (element) => {
      emit('deleteLayout', element)
    }
    const isOpenedAnyModal = () => {
      isDraggable.value = true;
    }
    // isClosedModal() {
    //   this.isDraggable = false;
    // }
    
    return {
      drag,
      isDraggable,
      dragOptions,
      findCompoent,
      caluPrice,
      deleteLayout,
      isOpenedAnyModal
    }
  },

  //eventbus 어쩌려구?
  /// ------------------------- LIFE -------------------------///
  created() {
    this.emitter.on('isOpenedAnyModal', this.isOpenedAnyModal);
    this.emitter.on('isClosedModal', this.isClosedModal);
  },
  unmounted() {
    console.log("부셔짐")
    this.emitter.off('isOpenedAnyModal');
    this.emitter.off('isClosedModal');
  },
  /// ------------------------- LIFE -------------------------///
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
  cursor: pointer;
}
.list-group-item i {
  cursor: pointer;
}
</style>