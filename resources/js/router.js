import { createRouter, createWebHistory } from 'vue-router';
import home from './pages/home.vue';
import index from './pages/index.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
