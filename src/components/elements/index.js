import Btn from './btn';
import BtnGrp from './btn-grp';
import Icon from './icon';
import Label from './label';
import Img from './img';
import Video from './video';
import Lang from './lang';
import Input from './input';
import Select from './select';

export const SBtn = Btn;
export const SBtnGrp = BtnGrp;
export const SIcon = Icon;
export const SLabel = Label;
export const SImg = Img;
export const SVideo = Video;
export const SLang = Lang;
export const SInput = Input;
export const SSelect = Select;

export default {
  install(Vue) {
    Vue.component('s-btn', SBtn);
    Vue.component('s-btn-grp', SBtnGrp);
    Vue.component('s-icon', SIcon);
    Vue.component('s-label', SLabel);
    Vue.component('s-img', SImg);
    Vue.component('s-video', SVideo);
    Vue.component('s-lang', SLang);
    Vue.component('s-input', SInput);
    Vue.component('s-select', SSelect);
  }
};
