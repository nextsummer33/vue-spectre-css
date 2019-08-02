import Navbar from './navbar';
import Hero from './hero';
import Tile from './tile';
import Avatar from './avatar';
import Chip from './chip';
import Toast from './toast';
import Tab from './tab';
import Card from './card';
import Panel from './panel';
import Breadcrumb from './breadcrumb';
import Popover from './popover';
import Step from './step';
import Nav from './nav';
import Modal from './modal';
import Emptystate from './emptystate';
import Menu from './menu';
import Dropdown from './dropdown';

export default {
  install: Vue => {
    Vue.use(Navbar);
    Vue.use(Hero);
    Vue.use(Tile);
    Vue.use(Avatar);
    Vue.use(Chip);
    Vue.use(Toast);
    Vue.use(Tab);
    Vue.use(Card);
    Vue.use(Panel);
    Vue.use(Breadcrumb);
    Vue.use(Popover);
    Vue.use(Step);
    Vue.use(Nav);
    Vue.use(Modal);
    Vue.use(Emptystate);
    Vue.use(Menu);
    Vue.use(Dropdown);
  }
};
