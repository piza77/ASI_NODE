import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import VistaUsuarios from '../views/VistaUsuarios.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginView },
  { path: "/register", name: "register", component: () => import("../views/RegisterView.vue")},
  { path: '/home', name: 'Home', component: HomeView, meta: { requiresAuth: true }},
  { path: '/about', name: 'About', component: AboutView, meta: { requiresAuth: true }},
  { path: '/usuarios', name: 'Usuarios', component: VistaUsuarios, meta: { requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 🚨 Protege las rutas
router.beforeEach((to, from, next) => {
  const usuario = localStorage.getItem("usuario");

  if (to.meta.requiresAuth && !usuario) {
    next('/login');
  } else {
    next();
  }
});

export default router;