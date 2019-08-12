import BarItem from './bar-item';
import Bar from './bar';

export const SBtn = Bar;
export const SBtnItem = BarItem;

export default {
  install(vue) {
    vue.component('s-bar-item', BarItem);
    vue.component('s-bar', Bar);
  }
};
