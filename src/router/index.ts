import { createRouter, createWebHistory } from 'vue-router'

// COMPONENTS
import ListView from '../views/ListView.vue'
import AboutView from '../views/AboutView.vue'
import PostView from '../views/PostView.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
