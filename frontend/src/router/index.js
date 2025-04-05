import SignUp from '@/components/SignUp/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const StartView = () => import('../views/StartView.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: StartView },

    {path: '/signup', name: 'signup', component: SignUp},
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;
