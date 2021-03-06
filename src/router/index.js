import Vue from 'vue'
import VueRouter from 'vue-router'
import Shops from '../views/Shops.vue'
import Register from '../views/Register.vue'
import Thanks from '../views/Thanks.vue'
import Login from '../views/Login.vue'
import Mypage from '../views/Mypage.vue'
import Detail from '../views/Detail.vue'
import Done from '../views/Done.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shops',
    component: Shops
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/detail/:shop_id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/done',
    name: 'Done',
    component: Done
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record)=>record.meta.requiresAuth)&&!store.state.login
  ) {
    next({
      path: "/",
      query: {
        redirect:to.fullPath,
      },
    })
  } else {
    next();
  }
})

export default router
