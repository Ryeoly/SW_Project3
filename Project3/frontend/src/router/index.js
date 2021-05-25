import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Mypage from "../views/Mypage.vue";
import my_info from "../components/mypage/List/my_info";
import buy_history from "../components/mypage/List/buy_history";
import Q_A from "../components/mypage/List/Q_A";
import my_board from "../components/mypage/List/my_board";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path:'/mypage',
    component: Mypage,
    children:[
        {path:'my_info', component:my_info},
      {path:'buy_history', component:buy_history},
      {path:'Q_A', component:Q_A},
      {path:'my_board', component: my_board},
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
