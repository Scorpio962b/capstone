import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: () => {
      if(!cookies.get("patient")){
        router.push({name:"login"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:prodID',
    name: 'product',
    props: true,
    component: () => import('../views/singleView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cartView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/registerView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profileView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
