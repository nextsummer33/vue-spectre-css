import navbar from './navbar';
import hero from './hero';

export default {
  install: Vue => {
    Vue.use(navbar);
    Vue.use(hero);
  }
};
