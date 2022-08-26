<template>
	<div>
		<v-select 
			:options="googleFontsList" 
			label="font" 
			style="width:300px">
					<template v-slot:option="option">
						<span :style="'font:' + option.files"> 
							{{ option.family }}
						</span>
					</template>
	</v-select>
	</div>
</template>

<script>
import { ref} from 'vue';
import { useMainStore } from '../../store/Main';
import 'vue-select/dist/vue-select.css';
export default {
  name: "Select",
  components: {
	
  },
  emits: ["hideModal", "editTextData"],

  setup() {

    const mainStore = useMainStore();
    const googleFontsList = mainStore.getGoogleFontsList

		console.log(googleFontsList)
    const selected = ref("");


    const setSelected = (e) => {
      console.log(e)
    }

    return {
      setSelected,
			selected,
			googleFontsList,
    }
  },
}
</script>