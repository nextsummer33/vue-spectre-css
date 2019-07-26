import Navbar from './navbar';
import Hero from './hero';
import Tile from './tile';
import Avatar from './avatar';
import Chip from './chip';
import Toast from './toast';
import Tab from './tab';
import Card from './card';

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
  }
};
