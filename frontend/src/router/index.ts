import { createRouter, createWebHistory } from 'vue-router';

import StartView from '@/views/StartView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import BratislavaView from '@/views/regions/BratislavaView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: StartView },
    { path: '/signup', name: 'signup', component: RegisterView },
    { path: '/login', name: 'login', component: LoginView },
    {path: '/bratislava', name: 'bratislava', component: import('@/views/regions/BratislavaView.vue')},

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;
