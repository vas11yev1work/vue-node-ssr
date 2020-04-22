import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./client/components/Main.vue') },
      { path: '/about', component: () => import('./client/components/About.vue') },
    ],
  });
}
