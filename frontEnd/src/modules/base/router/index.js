const Base = () => import('@/modules/base/Index.vue')
const BaseView = () => import('@/modules/base/views/BaseView.vue')

const routes = [
  {
    path: '/base',
    component: Base,
    
    children: [
      {
        path: '/',
        component: BaseView,
      },
    ],
  },
]
export default routes
