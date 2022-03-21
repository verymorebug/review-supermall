import {
  createRouter, createWebHistory
} from 'vue-router'



const Home     = () => import('views/home/Home.vue')
const ShopCart = () => import('views/shopcart/ShopCart.vue')
const Classify = () => import('views/classify/Classify.vue')
const Profile  = () => import('views/profile/Profile.vue')
const Detail   = () =>import('views/detail/Detail.vue');

const routes = [
  {
    path: '/',
    name: 'default',
    redirect:'/home'
  },
  {

    path: '/home',
    name:'home',
    meta:{show:true},
    component: Home,

  },
  {
    path: '/detail/:iid',
    name:'detail',
    meta:{show:false},
    component:Detail,

  },


  {
    path:'/classify',
    name:'classify',
    meta:{show:true},
    component: Classify

  },
  {
    path:'/shopcart',
    name:'shopcart',
    meta:{show:true},
    component: ShopCart

  },
  {
    path: '/profile',
    name:'profile',
    meta:{show:true},
    component: Profile

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
