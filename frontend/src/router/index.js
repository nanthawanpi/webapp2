import { createRouter, createWebHistory } from 'vue-router'
import AdminAnnView from '../views/AdminAnnView.vue'
import AdminAnnDetail from '../views/AdminAnnDetail.vue'
import CreateAnnouncement from '../views/CreateAnnouncement.vue'
import DeleteAnnouncement from '../views/DeleteAnnouncement.vue'
import UpdateAnnouncement from '../views/UpdateAnnouncement.vue'
import UserAnnView from '../views/UserAnnView.vue'
import UserAnnDetail from '../views/UserAnnDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/announcement',
      name: 'home',
      component: AdminAnnView
    },
    {
      path: '/admin/announcement/:id',
      name: 'desc',
      component: AdminAnnDetail
    },
    {
      path: '/admin/announcement/add',
      name: 'addAnnounce',
      component: CreateAnnouncement
    },
    {
      path: '/admin/announcement/:id/delete',
      name: 'deleteAnnounce',
      component: DeleteAnnouncement
    },
    {
      path: '/admin/announcement/:id/edit',
      name: 'updateAnnounce',
      component: UpdateAnnouncement
    },
    {
      path: '/announcement',
      name: 'UserAnnView',
      component: UserAnnView
    },
    {
      path: '/announcement/:id',
      name: 'UserAnnDetail',
      component: UserAnnDetail
    }
  ]
})

export default router
