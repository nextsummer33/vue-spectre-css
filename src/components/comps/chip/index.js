import Chip from './chip';

export const SChip = Chip;

export default {
  install(Vue) {
    Vue.component('s-chip', SChip);
  }
};
