import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/page/login/index')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/page/register/index')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../components/page/homePage/index')
  },
  // 产线部分
  {
    path: '/productionMain',
    name: 'main',
    component: () => import('../production-line/production-line-main/index')
  },
  {
    path: '/immediate',
    name: 'immediate',
    component: () => import('../production-line/production-line-immediate/index')
  },
  {
    path: '/abstract',
    name: 'abstract',
    component: () => import('../production-line/production-line-abstract/index')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../production-line/production-line-details/index')
  },
  {
    path: '/compare',
    name: 'compare',
    component: () => import('../production-line/production-line-compare/index')
  },
  // 设备管理
  {
    path: '/deviceDetail',
    name: 'deviceDetail',
    component: () => import('../device/deviceDetail/index1')
  },
  {
    path: '/deviceManagement',
    name: 'deviceManagement',
    component: () => import('../device/deviceManagement/index')
  },
  
  //   工单管理部分
  {
    path:'/formManagement',
    name:'formManagement',
    component: ()=>import('../form/')
  }


]

const router = new VueRouter({
  routes
})

export default router
