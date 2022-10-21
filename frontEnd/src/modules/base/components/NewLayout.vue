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
                style="min-height: 100vh"
                v-bind="dragOptions"
                :force-fallback="false">
                <template #item="{element}">
                  <b-list-group-item class="border-0 position-relative p-0 settings">
                    <div class="temp">
                      <!-- <b-button class="mx-3 position-absolute top-0 end-0 mt-3" variant="outline-danger" @click="deleteLayout(element)">제 거</b-button> -->
                      <component :key="element.id" :is="findCompoent(element.subject, element.name)" :ref="setItemRef"/>      

                      <ul class="d-flex align-items-center justify-content-end px-3 list-unstyled icons">
                        <li class="icon mx-3" @click="show(element.name)">
                          <i class="bi bi-gear"></i>
                        </li>
                        <!-- <li class="icon mx-3"><span class="far fa-heart"></span></li> -->
                        <li class="icon" @click="deleteLayout(element)">
                          <i class="bi bi-trash"></i>
                        </li>
                      </ul>
                    </div>

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
import { useMainStore } from '../store/Main';
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
    const mainStore = useMainStore();

    const drag = ref(false);
    const isDraggable = ref(mainStore.getModalState);
    // 컴포넌트 모음

    const components = ref([])
    mainStore.getGoogle();

    const dragOptions = computed(() => {
      return {
        group: {
          name: 'g1',
          pull: false 
        },
        scrollSensitivity: 200,
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
    // for convenience
    const show = (nameRef) => {
      components.value.forEach(e => {
        if(e.$.type.name === nameRef) e.showLayoutEditModal()
      })
    }
    const setItemRef = (nameRef) => {
      if (nameRef) {
        components.value.push(nameRef)
        const set = new Set(components.value);
        components.value = [...set];
      }
    }
    // const isOpenedAnyModal = () => {
    //   isDraggable.value = true;
    // }
    // isClosedModal() {
    //   this.isDraggable = false;
    // }
    
    return {
      drag,
      isDraggable,
      dragOptions,
      components,
      setItemRef,
      findCompoent,
      caluPrice,
      deleteLayout,
      show,
      // setItemRef
      // isOpenedAnyModal
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
.list-group-item{
  cursor: pointer;
}
.list-group-item .no-pointer{
  pointer-events:none !important;
}
.list-group-item i {
  cursor: pointer;
}
.temp {
  overflow: hidden;
  position: relative;
}
.icons {
  position: absolute;
  top: -50px;
  right: 10px;
}
.settings .icons .icon {
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s ease;
    transform: rotate(180deg);
    cursor: pointer
}

.settings .icons .icon:hover {
    background-color: yellowgreen;
    color: #fff
}

.settings .icons .icon:nth-last-of-type(3) {
    transition-delay: 0.2s
}

.settings .icons .icon:nth-last-of-type(2) {
    transition-delay: 0.15s
}

.settings .icons .icon:nth-last-of-type(1) {
    transition-delay: 0.1s
}

.temp:hover .icons .icon{
    transform: translateY(60px)
}

</style>