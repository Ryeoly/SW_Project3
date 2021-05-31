import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Mypage from "../views/Mypage.vue";
import my_info from "../components/mypage/List/my_info";
import buy_history from "../components/mypage/List/buy_history";
import Q_A from "../components/mypage/List/Q_A";
import login from "../views/login";
import sign_up from "../views/sign_up";
import Detail from "../views/Detail";
import admin from "../views/admin";
import trend from "../components/admin/trend";
import QnA_ans from "../components/admin/QnA_ans";
import product_add from "../components/admin/product_add";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
<<<<<<< HEAD
=======
    path: '/AppBar_search',
    component: AppBar_search
  },
  {
    path:'/Community',
    component: communityy
  },
  {
>>>>>>> 13e1d5a4ee290a781dcc1bb63ae418e0d68d1fed
    path: '/shop',
    component: Shop
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path:'/mypage',
    component: Mypage,
    children:[
        {path:'my_info', component:my_info},
      {path:'buy_history', component:buy_history},
      {path:'Q_A', component:Q_A},
    ]
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/sign_up',
    component: sign_up
  },
  {
    path:'/admin',
    component: admin,
    children: [
      {path:'trend', component:trend},
      {path:'QnA_ans', component:QnA_ans},
      {path:'product_add', component:product_add}
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
