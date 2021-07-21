import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import UserPage from '../components/UserPage.vue';

Vue.use(VueRouter);

//corrent to make 2 links with same component? explain id problem..
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
