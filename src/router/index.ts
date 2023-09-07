import { createRouter, createWebHistory } from 'vue-router'

// COMPONENTS
import ListView from '../views/ListView.vue'
import PostView from '../views/PostView.vue'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/posts',
      component: ListView
    },
    {
      path: '/posts/:id',
      component: PostView
    },
    {
      path: '/post/form',
      component: FormView
    },
    {
      path: '/post/form/:id',
      component: FormView
    }
  ]
})

export default router
