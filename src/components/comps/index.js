import Navbar from './navbar';
import Hero from './hero';

export default {
  install: Vue => {
    Vue.use(Navbar);
    Vue.use(Hero);
  }
};
