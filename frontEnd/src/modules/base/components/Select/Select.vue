<template>
	<div class="selectBox">
    <div v-if="(selected === 'DungGeunMo')" class="customSelect">{{selected}}</div>
    <select
      class="select"
      v-model="selected"
      @change="changeFont($event)"
      >
      <option
        v-for="(font, index) in googleFontsList"
        :style="'font-family:'+font.family"
        :key="index"
        :selected="(index === 0)"
        :value="font.family">
        {{font.family}}
      </option>
    </select>
	</div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useMainStore } from '../../store/Main';  
import 'vue-select/dist/vue-select.css';

export default {
  name: "Select",
  components: {
  },
  props: {
    selectedFont: {
      type: String,
    },
  },
  emits: ["hideModal", "editTextData"],

  setup(props, {emit}) {

    const mainStore = useMainStore();
    const selected = ref(props.selectedFont);
    const googleFontsList = mainStore.getGoogleFontsList

    const changeFont = (event) => {
      console.log(JSON.stringify(event.target.value))
      emit('changeFont', selected)
    }

    watch(() => props.selectedFont, (newVal) => {
      selected.value = newVal;
    })

    onMounted(() => {
      // Logs: `Headline`
    });

    return {
			selected,
			googleFontsList,
      changeFont,
    }
  },
}
</script>
<style>
.customSelect{
  position: absolute;
  top: 4px;
  left: 10px;
}
select {
  display:block;
}
.selectBox {
  position: relative;
  width: 400px;
  height: 35px;
  border-radius: 4px;
  border: 2px solid black;
}
.selectBox .select {
  width: inherit;
  height: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 10px;
  position: relative;
  z-index: 3; 
  -webkit-appearance: none;
}
.selectBox .select option {
  padding: 3px 0;
  font-size: 16px;
}
.selectBox .icoArrow {
  position: absolute; 
  top: 0; 
  right: 0; 
  z-index: 1; 
  width: 0; 
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selectBox .icoArrow img {
  width: 50%;
  transition: .3s;
}

.selectBox .select:focus + .icoArrow img {
  transform: rotate(180deg);
}
</style>