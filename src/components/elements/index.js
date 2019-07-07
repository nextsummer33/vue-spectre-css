import Btn from './btn';

export const SBtn = Btn;

export default {
  install(Vue) {
    Vue.component('s-btn', SBtn);
  }
};
