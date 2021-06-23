import VueRouter from 'vue-router'

import Home from '../views/Home'
import MemoCode from '../components/MemoCode'
import MemoCodeIng from '../components/MemoCodeIng'

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
    path:'/memocode',
    name:'MemoCode',
    component:MemoCode
  },
  {
    path:'/memocode-ing',
    name:'MemoCodeIng',
    component:MemoCodeIng
  },
  {path:'*',redirect:'/data-empower'}
]

const router = new VueRouter({
  mode:'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
export default router
