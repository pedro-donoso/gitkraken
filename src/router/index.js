import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/proximo',
    name: 'Proximo',
    component: () => import('../views/Proximo')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/Users')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
