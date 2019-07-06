import Navbar from './navbar';
import NavbarItem from './navbar-item';

export const SNavbar = Navbar;
export const SNavbarItem = NavbarItem;

export default {
  install(Vue) {
    Vue.component('s-navbar', Navbar);
    Vue.component('s-navbar-item', NavbarItem);
  }
};
