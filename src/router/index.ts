import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
