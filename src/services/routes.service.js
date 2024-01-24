// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Viewport.vue';
import { isAuthenticated } from './auth.service';

const routes = [
  {
    path: '/',
    redirect: '/dashboard', 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true }, 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guest: true }, 
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/dashboard',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuth = await isAuthenticated();

  if (to.meta.requiresAuth && !isAuth) {
    next('/login');
  } else if ((to.meta.guest || !to.meta.requiresAuth) && isAuth) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
