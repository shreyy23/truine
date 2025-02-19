import { createRouter, createWebHistory } from 'vue-router';
import HomeRoutes from '@/router/HomeRoute.js';


const routes = [
  ...HomeRoutes, // Spread the Home routes

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
