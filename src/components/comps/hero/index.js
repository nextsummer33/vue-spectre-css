import Hero from './hero';
import Body from './hero-body';

export const SHero = Hero;
export const SHeroBody = Body;

export default {
  install(Vue) {
    Vue.component('s-hero', Hero);
    Vue.component('s-hero-body', Body);
  }
};
