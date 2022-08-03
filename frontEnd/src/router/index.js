import { createRouter, createWebHistory } from "vue-router";
// modules

import moduleBase from '@/modules/base/router'
import MasterLayout from '@/template/MasterLayout.vue'
 
const routes = [
  {
    path: '/',
    redirect: 'base',
    component: MasterLayout,

    children: [
      ...moduleBase,
    ],
  },
  
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

 
export default router
