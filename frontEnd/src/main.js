import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import miit from "../src/util/eventBus"
import Vue3SimpleHtml2pdf from "vue3-simple-html2pdf";

// css 적용
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(router)
app.use(miit)
app.use(Vue3SimpleHtml2pdf)
app.use(BootstrapVue3)
app.mount('#app')
