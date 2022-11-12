import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    meta: {
      title: 'cos-template'
    },
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 路由拦截
router.beforeEach((to: any, from: any, next: any) => {
  document.title = to.meta.title
  next()
})

export default router
