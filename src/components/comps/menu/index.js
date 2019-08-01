import Item from './menu-item';
import Badge from './menu-badge';
import Menu from './menu';

export const SMenuItem = Item;
export const SMenuBadge = Badge;
export const SMenu = Menu;

export default {
  install(vue) {
    vue.component('s-menu-badge', Badge);
    vue.component('s-menu-item', Item);
    vue.component('s-menu', Menu);
  }
};
