import Icon from './icon';
import Label from './label';
import Lang from './lang';
import Btn from './buttons/btn';
import BtnGrp from './buttons/btn-grp';
import Img from './medias/img';
import Video from './medias/video';
import { Input, Select, Radio, Checkbox } from './inputs';
import { FormGrp, FormLabel, FormHint, Form } from './forms';

export const SBtn = Btn;
export const SBtnGrp = BtnGrp;
export const SIcon = Icon;
export const SLabel = Label;
export const SImg = Img;
export const SVideo = Video;
export const SLang = Lang;
export const SInput = Input;
export const SSelect = Select;
export const SRadio = Radio;
export const SCheckbox = Checkbox;
export const SFormGrp = FormGrp;
export const SFormLabel = FormLabel;
export const SFormHint = FormHint;
export const SForm = Form;

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
    Vue.component('s-radio', SRadio);
    Vue.component('s-checkbox', SCheckbox);
    Vue.component('s-form-grp', SFormGrp);
    Vue.component('s-form-label', SFormLabel);
    Vue.component('s-form-hint', SFormHint);
    Vue.component('s-form', SForm);
  }
};
