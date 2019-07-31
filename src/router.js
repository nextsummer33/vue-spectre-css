import Vue from '@/utils/vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Form from './views/Form.vue';
import Table from './views/Table.vue';
import Navbar from './views/Navbar.vue';
import Tile from './views/Tile.vue';
import Avatar from './views/Avatar.vue';
import Chip from './views/Chip.vue';
import Toast from './views/Toast.vue';
import Tab from './views/Tab.vue';
import Card from './views/Card.vue';
import Panel from './views/Panel.vue';
import Tooltip from './views/Tooltip.vue';
import Breadcrumb from './views/Breadcrumb.vue';
import Popover from './views/Popover.vue';
import Step from './views/Step.vue';
import Nav from './views/Nav.vue';
import Modal from './views/Modal.vue';

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
    },
    {
      path: '/chip',
      name: 'Chip',
      component: Chip
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/popover',
      name: 'Popover',
      component: Popover
    },
    {
      path: '/step',
      name: 'Step',
      component: Step
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
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
