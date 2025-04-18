import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/post.vue'),
    },
    {
      path: '/addpost',
      name: 'addpost',
      component: () => import('../views/addpost.vue'),
    },
    {
      path: '/postpage',
      name: 'postpage',
      component: () => import('../views/postpage.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news.vue'),
    },
  ],
})

export default router
