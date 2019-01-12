import Vue from 'vue';
import Router from 'vue-router';

import Heroes from './components/Heroes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    }
  ]
});
