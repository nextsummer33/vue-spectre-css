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
import Bar from './bar';
import Accordion from './accordion';

export default {
  install: vue => {
    vue.use(Navbar);
    vue.use(Hero);
    vue.use(Tile);
    vue.use(Avatar);
    vue.use(Chip);
    vue.use(Toast);
    vue.use(Tab);
    vue.use(Card);
    vue.use(Panel);
    vue.use(Breadcrumb);
    vue.use(Popover);
    vue.use(Step);
    vue.use(Nav);
    vue.use(Modal);
    vue.use(Emptystate);
    vue.use(Menu);
    vue.use(Dropdown);
    vue.use(Bar);
    vue.use(Accordion);
  }
};
