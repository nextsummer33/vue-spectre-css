import Vue from '@/utils/vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Form from './views/Form.vue';
import Table from './views/Table.vue';
import Navbar from './views/Navbar.vue';
import Tile from './views/Tile.vue';
import Avatar from './views/Avatar.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar
    },
    {
      path: '/tile',
      name: 'Tile',
      component: Tile
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
