import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import AdminCategory from '../views/admin/AdminCategory'
import AdminCategoryIndex from '../views/admin/category/AdminCategoryIndex.vue'
import AdminCategoryCreate from '../views/admin/category/AdminCategoryCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: AdminHome,
      },
      {
        path: 'category',
        name: 'AdminCategory',
        component: AdminCategory,
        children: [
          {
            path: '',
            name: 'AdminCategoryIndex',
            component: AdminCategoryIndex,
            props: true
          },
          {
            path: 'create',
            name: 'AdminCategoryCreate',
            component: AdminCategoryCreate
          }
        ]
      }
      
    ]
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
