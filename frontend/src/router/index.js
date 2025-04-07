import { createRouter, createWebHistory } from 'vue-router';
import StartView from '@/views/StartView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import LoginView from '@/views/auth/LoginView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: StartView },
    { path: '/signup', name: 'signup', component: RegisterView },
    { path: '/login', name: 'login', component:  LoginView},

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;
