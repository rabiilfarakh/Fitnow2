import { createRouter, createWebHistory } from 'vue-router';
import dashboard from './pages/dashboard.vue';
import index from './pages/index.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';

const routes = [
  {
    path: '/dashboard',
    component: dashboard
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
