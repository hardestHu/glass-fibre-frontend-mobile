import VueRouter from 'vue-router'

import Home from '../views/Home'
import Success from '../views/Success'

const routes = [
  {
    path:'/',
    redirect: '/index'
  },
  {
    path:'/index',
    name:'Home',
    component:Home
  },
  {
    path:'/success',
    name:'Success',
    component:Success
  },
  
  {path:'*',redirect:'/data-empower'}
]

const router = new VueRouter({
  mode:'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
export default router
