import { createRouter, createWebHistory } from 'vue-router';

const StartView = () => import('../views/StartView.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: StartView },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;
