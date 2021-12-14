import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue'
import Flog from '../pages/Flog.vue'
import Tlog from '../pages/Tlog.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Flog',
    name: 'Flog',
    component: Flog,
  },
  {
    path: '/Tlog',
    name: 'Tlog',
    component: Tlog,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;