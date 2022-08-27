<template>
	<div>
		<v-select 
			:options="googleFontsList" 
			label="font" 
			style="width:300px">
					<template v-slot:option="option">
						<div ref="spans"> 
							{{ option.family }}
						</div>
					</template>
    </v-select>
	</div>
</template>

<script>
import { ref, onMounted} from 'vue';
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
    const spans = ref(null);

		console.log(googleFontsList)
    const selected = ref('');

    var junction_font = new FontFace('Junction Regular', 'url(http://fonts.gstatic.com/s/adventpro/v18/V8mCoQfxVT4Dvddr_yOwjVmtLZxcBtItFw.ttf)');
    console.log(junction_font)
    const setSelected = (e) => {
      console.log(e)
    }

    onMounted(() => {
      // Logs: `Headline`
      console.log(spans.value);
    });

    return {
      setSelected,
			selected,
			googleFontsList,
      junction_font,
      spans
    }
  },
}
</script>