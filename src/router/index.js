import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../views/Counter.vue'
import twoWay from '../views/twoWay.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  },
  {
    path: '/twoWay',
    name: 'twoWay',
    component: twoWay
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
