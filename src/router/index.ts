import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AdminLayout from '../layouts/admin.vue';
import PublicLayout from '../layouts/public.vue';

// Определение маршрутов
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PublicLayout, // Layout для публичных страниц
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import("../views/admin/Admin.vue"),
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout, // Layout для страниц администратора
    children: [
      // {
      //   path: 'dashboard',
      //   name: 'AdminDashboard',
      //   component: () => import('@/views/admin/AdminDashboard.vue'),
      // },
      // {
      //   path: 'users',
      //   name: 'UserManagement',
      //   component: () => import('@/views/admin/UserManagement.vue'),
      // },
    ],
  },
];

// Создание роутера
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
