import Btn from './btn';
import BtnGrp from './btn-grp';

export const SBtn = Btn;
export const SBtnGrp = BtnGrp;

export default {
  install(Vue) {
    Vue.component('s-btn', SBtn);
    Vue.component('s-btn-grp', SBtnGrp);
  }
};
