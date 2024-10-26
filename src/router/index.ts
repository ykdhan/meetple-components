import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProfileEditView from '@/views/ProfileEditView.vue'
import FormView from '@/views/FormView.vue'
import PointView from '@/views/PointView.vue'
import NotificationView from '@/views/NotificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: ProfileEditView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/point',
      name: 'point',
      component: PointView
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView
    }
  ]
})

export default router
