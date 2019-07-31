import Nav from './nav';
import NavItem from './nav-item';

export const SNav = Nav;
export const SNavItem = NavItem;

export default {
  install(Vue) {
    Vue.component('s-nav', Nav);
    Vue.component('s-nav-item', NavItem);
  }
};
