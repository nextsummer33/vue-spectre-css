import Icon from './icon';
import Label from './label';
import Lang from './lang';
import Btn from './buttons/btn';
import BtnGrp from './buttons/btn-grp';
import Img from './medias/img';
import Video from './medias/video';
import { Input, Select, Radio, Checkbox, InputGrp, Addon } from './inputs';
import { FormGrp, FormLabel, FormHint, Form } from './forms';
import { Table, Tr } from './tables';
import Link from './link';

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
export const SInputGrp = InputGrp;
export const SAddon = Addon;
export const STable = Table;
export const STr = Tr;
export const SLink = Link;

export default {
  install(Vue) {
    Vue.component('s-btn-grp', BtnGrp);
    Vue.component('s-btn', Btn);
    Vue.component('s-checkbox', Checkbox);
    Vue.component('s-form-grp', FormGrp);
    Vue.component('s-form-hint', FormHint);
    Vue.component('s-form-label', FormLabel);
    Vue.component('s-form', Form);
    Vue.component('s-icon', Icon);
    Vue.component('s-img', Img);
    Vue.component('s-input', Input);
    Vue.component('s-label', Label);
    Vue.component('s-lang', Lang);
    Vue.component('s-radio', Radio);
    Vue.component('s-select', Select);
    Vue.component('s-video', Video);
    Vue.component('s-input-grp', InputGrp);
    Vue.component('s-addon', Addon);
    Vue.component('s-table', Table);
    Vue.component('s-tr', Tr);
    Vue.component('s-link', Link);
  }
};
