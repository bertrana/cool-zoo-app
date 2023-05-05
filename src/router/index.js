import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import ZooPage from '../views/ZooPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/zoo', component: ZooPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})