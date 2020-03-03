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
    path: '/renderless',
    name: 'Renderless',
    component: () => import('../views/Renderless.vue')
  },
  {
    path: '/compound',
    name: 'Compound',
    component: () => import('../views/Compound.vue')
  },
  {
    path: '/sortable-list',
    name: 'SortableListPage',
    component: () => import('../views/SortableListPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
