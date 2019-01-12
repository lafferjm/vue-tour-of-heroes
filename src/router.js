import Vue from 'vue';
import Router from 'vue-router';

import Heroes from './components/Heroes';
import Dashboard from './components/Dashboard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'default',
      redirect: '/dashboard'
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
});
