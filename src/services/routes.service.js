// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Viewport.vue';
import { isAuthenticated } from './auth.service';

const routes = [
  {
    path: '/',
    redirect: '/dashboard', // Redireccionar a dashboard si el usuario está autenticado
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true }, // Marcar la ruta como disponible solo para usuarios no autenticados
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guest: true }, // Marcar la ruta como disponible solo para usuarios no autenticados
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Marcar la ruta como protegida
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuth = await isAuthenticated();

  if (to.meta.requiresAuth && !isAuth) {
    // Usuario no autenticado intentando acceder a una ruta protegida
    next('/login');
  } else if ((to.meta.guest || !to.meta.requiresAuth) && isAuth) {
    // Usuario autenticado intentando acceder a una ruta disponible solo para no autenticados
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
