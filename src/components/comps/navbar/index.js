import Nvb from './navbar';
import NvbItem from './navbar-item';
import NvbBrand from './navbar-brand';

export const SNvb = Nvb;
export const SNvbItem = NvbItem;

export default {
  install(Vue) {
    Vue.component('s-nvb', Nvb);
    Vue.component('s-nvb-item', NvbItem);
    Vue.component('s-nvb-brand', NvbBrand);
  }
};
