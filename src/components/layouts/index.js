import Col from './col';
import Row from './row';
import Grid from './grid';

export const SCol = Col;
export const SRow = Row;
export const SGrid = Grid;

export default {
  install(Vue) {
    Vue.component('s-col', SCol);
    Vue.component('s-row', SRow);
    Vue.component('s-grid', SGrid);
  }
};
