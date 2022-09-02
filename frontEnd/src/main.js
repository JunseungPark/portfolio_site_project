import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import BootstrapVue3 from 'bootstrap-vue-3'
import miit from "../src/util/eventBus"
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";
import VueColor from '@ckpack/vue-color';
// importing AOS css style globally
import 'aos/dist/aos.css'
// css 적용
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// pinia
const pinia = createPinia()


const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(miit)
app.use(VueColor);
app.use(Vue3SimpleHtml2pdf)
app.use(BootstrapVue3)
app.mount('#app')
